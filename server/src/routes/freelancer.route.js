import { Router } from "express";
import { loginUser, logOutUser, refreshAccessToken, registerUser, addCertification, removeCertification, getCertifications, addProject, getProjects } from "../controllers/freelancer.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "profile_image",
            maxCount: 1
        },
        {
            name: "resume"
        }
    ]),

    registerUser
);

router.route("/login").post(loginUser);

// Secured Routes
router.route("/logout").post(verifyJWT, logOutUser);
router.route("/refresh-token").post(refreshAccessToken);

router.route("/certifications").post(
    verifyJWT, 
    upload.fields([
        { 
            name: "certificate_url", 
            maxCount: 1 
        }
    ]), 
    addCertification
)
.get(verifyJWT, getCertifications);

router.route("/certifications/:certificationId").delete(verifyJWT, removeCertification);

router.route("/projects").post(
    verifyJWT, 
    upload.fields([
        { name: "images", maxCount: 1 }  // Allow up to 10 images for each project
    ]), 
    addProject
)
.get(verifyJWT, getProjects);


export default router;