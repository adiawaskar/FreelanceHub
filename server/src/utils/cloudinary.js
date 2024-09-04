import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (localFilePath) => {
    try {
        const response = await cloudinary.uploader.upload(
            localFilePath,
            {
                resource_type: 'auto'
            }
        )

        fs.unlinkSync(localFilePath);

        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
}

const deleteFromCloudinary = async (publicId) => {
    try {
        const response = await cloudinary.uploader.destroy(publicId);
        console.log("File removed from Cloudinary");
        
        return response;
    } catch (error) {
        console.error("Failed to delete from Cloudinary:", error);
        return null;
    }
};


export { uploadToCloudinary, deleteFromCloudinary };