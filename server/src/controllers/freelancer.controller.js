import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Freelancer } from "../models/freelancer.model.js";
import uploadToCloudinary from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await Freelancer.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        
        user.refreshToken = refreshToken;

        await user.save({validateBeforeSave: false});

        return {accessToken, refreshToken};

    } catch (error) {
        throw new ApiError(500, "Trouble creating Refresh and Access Tokens");
    }
}

const registerUser = asyncHandler( async (req, res) => {

    const {name, email, password, phone} = req.body;
    console.log("email: ", email);
    console.log("Name: ", name);
    
    if(
        [name, email, password].some((field) => {
            field?.trim() === ""
        })
    )
    {
        throw new ApiError(400, "All fields are Required!");
    }

    const existingUser = await Freelancer.findOne({email});

    if(existingUser)
    {
        throw new ApiError(409, "User by this email already exists")
    }

    console.log(req.files);
    let profilePicLocalPath;

    if(req.files && Array.isArray(req.files.profile_image) && req.files.profile_image.length > 0)
    {
        profilePicLocalPath = req.files.profile_image[0].path;
    }

    if(!profilePicLocalPath)
    {
        throw new ApiError(400, "Profile Pic is Required");
    }

    const profilePic = await uploadToCloudinary(profilePicLocalPath);

    const user = await Freelancer.create({
        name,
        email,
        password,
        phone,
        profile_image: profilePic.url,
        profile_visibility: "Public",
        skills: []
    });

    const createdUser = await Freelancer.findById(user._id).select(
        "-password -refeshToken"
    )

    if(!createdUser)
    {
        throw new ApiError(500, "Something went wrong while Registering the Freelancer")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )
    
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
   
    if (!email) {
        throw new ApiError(400, "Email is required!");
    }

    const user = await Freelancer.findOne({email});

    if (!user) {
        throw new ApiError(404, "User does not exist");
    }

    const passCorrect = await user.isPasswordCorrect(password);

    if (!passCorrect) {
        throw new ApiError(404, "Incorrect Password");
    }
    
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

    const loggedUser = await Freelancer.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200,
                {
                    user: loggedUser, 
                    accessToken, 
                    refreshToken
                },
                "User logged in successfully"
            )
        );
});

const logOutUser = asyncHandler(async (req, res) => {

    await Freelancer.findByIdAndUpdate(req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        }
    );

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});


const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingToken = req.cookies.refreshToken || req.body.refreshToken;

    if(!incomingToken)
    {
        throw new ApiError(401, "Unauthorized request");
    }

    try {
        const decodedToken = jwt.verify(incomingToken, process.env.REFRESH_TOKEN_SECRET);
    
        const user = await Freelancer.findById(decodedToken?._id);
    
        if(!user)
        {
            throw new ApiError(500, "Invalid User Access");
        }
        
        if(decodedToken !== user.refreshToken)
        {
            throw new ApiError(401, "Refresh Token is expired or used");
        }
    
        const {newAccessToken, newRefreshToken} = await generateAccessAndRefreshToken(user._id);
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        return res.status(201)
        .cookie("accessToken", newAccessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    accessToken: newAccessToken,
                    refreshToken: newRefreshToken
                },
                "Access Token refreshed successfully"
            )
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Refresh Token");
    }
});

export { registerUser, loginUser, logOutUser, refreshAccessToken };