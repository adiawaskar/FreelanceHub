import { Router } from "express";
import { postJob, getJobs } from '../controllers/jobs.controllers.js';
// import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Route to post a job
router.post('/postJob', postJob);

router.get('/getJobs', getJobs);

export default router;
