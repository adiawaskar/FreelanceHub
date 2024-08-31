import { Router } from "express";
import { loginUser, logOutUser, refreshAccessToken, registerUser, addCertification, removeCertification } from "../controllers/freelancer.controller.js";
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

router.route("/certifications").post(verifyJWT, upload.single("certificate_url"), addCertification);
router.route("/certifications/:certificationId").delete(verifyJWT, removeCertification);


export default router;