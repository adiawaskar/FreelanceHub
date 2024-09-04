import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Freelancer } from "../models/freelancer.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { JobPosting } from "../models/jobposting.model.js";

export const postJob = asyncHandler(async (req, res, next) => {
    try {
        const {
            company_name,
            job_title,
            job_description,
            job_status,
            job_visibility,
            job_skills_required,
            pay_rate,
            location,
            requirements,
            last_date_to_apply
        } = req.body;

        // Log the received data for debugging
        console.log('Received data:', req.body);

        // Validate input
        if (!company_name || !job_title || !job_description || !job_status || !job_visibility || !job_skills_required || !pay_rate || !location || !requirements || !last_date_to_apply) {
            return next(new ApiError(400, "All fields are required."));
        }

        // Create a new job posting
        const jobPosting = await JobPosting.create({
            company_name,
            job_title,
            job_description,
            job_status,
            job_visibility,
            job_skills_required,
            pay_rate,
            location,
            requirements,
            last_date_to_apply
        });

        // Send success response
        return res.status(201).json(new ApiResponse(201, jobPosting, "Job posted successfully."));
    } catch (error) {
        // Log detailed error message and stack trace
        console.error('Error posting job:', error.message);
        console.error('Error stack trace:', error.stack);

        // Handle unexpected errors
        next(new ApiError(500, "An error occurred while posting the job.", [error.message]));
    }
});





// Controller to get all jobs
export const getJobs = asyncHandler(async (req, res, next) => {
    try {
        // Fetch all job postings from the database
        const jobs = await JobPosting.find();

        // Check if jobs exist
        if (!jobs || jobs.length === 0) {
            return next(new ApiError(404, "No jobs found."));
        }

        // Send success response with the list of jobs
        return res.status(200).json(new ApiResponse(200, jobs, "Jobs retrieved successfully."));
    } catch (error) {
        // Handle unexpected errors
        next(new ApiError(500, "An error occurred while retrieving jobs.", [error.message]));
    }
});