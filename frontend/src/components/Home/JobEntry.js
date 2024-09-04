import React, { useState } from "react";
import JobDetails from "./JobDetails/JobDetails";

function JobEntry({
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
  const [showDetails, setShowDetails] = useState(false);

  return (
  <>
    <div
      className={`relative border border-gray-200 rounded-3xl bg-white shadow-lg p-1 mx-4 transition-all duration-700 hover:shadow-2xl hover:scale-110`}
      style={{ height: '420px', maxHeight: '420px' }}
    >
      <div className={`mx-0 rounded-3xl ${color} p-4 h-5/6 flex flex-col`}>
        {/* Top Section */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h4 className="text-sm rounded-full font-semibold px-2 py-1 mb-2 inline-block bg-slate-50">
              {jobDate}
            </h4>
            <h4 className="text-lg font-semibold text-gray-800">
              {jobCompany}
            </h4>
          </div>
          {jobLogo && (
            <img
              src={jobLogo}
              alt={`${jobCompany} logo`}
              className="h-12 w-12 object-cover rounded-full shadow-sm"
            />
          )}
        </div>

        {/* Title and Description */}
        <h2 className="text-xl font-bold text-gray-900 mb-2">{jobTitle}</h2>
        <p className="text-gray-700 mb-3 text-sm overflow-hidden" style={{ maxHeight: '60px' }}>
          {jobDescription}
        </p>
        <p className="text-gray-800 mb-3 text-sm">
          <strong>Status:</strong> {jobStatus}
        </p>

        {/* Space Filler */}
        <div className="flex-grow"></div>

        {/* Skills Required */}
        <div className="mb-4">
          <strong className="block text-gray-800 mb-1 text-sm">Skills Required:</strong>
          <div className="flex flex-wrap gap-1 text-xs">
            {jobSkillsRequired.map((skill, index) => (
              <span key={index} className="text-sm inline-block border border-black mt-1 text-gray-800 rounded-full px-2 py-1">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end px-4 pb-4 mt-2">
        <section className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900">
            &#8377;{jobPay}/hr
          </h3>
          <p className="text-gray-700 text-sm">{jobLocation}</p>
        </section>

        <section className="text-right">
          <button
            onClick={() => { setShowDetails(!showDetails); }}
            className="bg-black text-white px-4 py-2 rounded-full shadow hover:bg-slate-800 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Details
          </button>
        </section>
      </div>
    </div>
    {showDetails && <JobDetails />}
    </>
  );
}

export default JobEntry;
