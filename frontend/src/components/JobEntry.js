import React, { useState } from "react";
import JobDetails from "./JobDetails/JobDetails";

function JobPosting({
  color,
  jobCompany,
  jobLogo,
  jobDate,
  jobTitle,
  jobDescription,
  jobStatus,
  jobSkillsRequired,
  jobPay,
  jobLocation,
}) {
  const [showDetails,setShowDetails]=useState(false);
  
  return (
    <div className={`relative border border-gray-500 rounded-3xl shadow-lg p-6 mx-4 ${color} hover:shadow-2xl hover: transition-shadow`}>
      {/* Top Section: Date, Company, Logo */}
    <div className="flex justify-between items-center mb-4">
    <div>
        <h4 className="text-xs text-gray-500 rounded-lg px-2 py-1 mb-2 inline-block">
        {jobDate}
        </h4>
        <h4 className="text-lg font-semibold text-gray-800 rounded-lg px-2 py-1 mb-2 inline-block">
        {jobCompany}
        </h4>
    </div>
    {jobLogo && (
        <img
        src={jobLogo}
        alt={`${jobCompany} logo`}
        className="h-12 w-12 object-contain rounded-full shadow-md bg-white"
        />
    )}
    </div>

    {/* Job Title and Description */}
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{jobTitle}</h2>
    <p className="text-gray-700 mb-4 leading-relaxed">{jobDescription}</p>
    <p className="text-gray-800 mb-4">
    <strong>Status:</strong> {jobStatus}
    </p>

    {/* Skills Required */}
    <div className="mb-4">
    <strong className="block text-gray-800 mb-2">Skills Required:</strong>
    <div className="flex flex-wrap gap-2">
        {jobSkillsRequired.map((skill, index) => (
        <span
            key={index}
            className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-semibold"
        >
            {skill}
        </span>
        ))}
    </div>
    </div>
          
    {/* Pay and Location */}
    <div className="flex justify-between items-center mb-6">
    <h3 className="text-lg font-semibold text-gray-900">
        &#8377;{jobPay}/hr
    </h3>
    <p className="text-gray-700">{jobLocation}</p>
    </div>

    {/* Details Button */}
    <div className="text-right">
    <button onClick={()=>{setShowDetails(true)}} className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
        Details
    </button>
    {showDetails&&<JobDetails/>}
    </div>
    </div>
  );
}

export default JobPosting;
