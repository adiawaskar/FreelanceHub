import React, { useState } from "react";
import { Link } from 'react-router-dom';
import JobPosting from "./JobEntry";
import test from "../logo.png";
import jobPostings from "./jobPostings";
// import JobPostingForm from "./job-posting/JobPostingForm";
function Jobs() {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  // Filter and Search states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  // Calculate the filtered jobs
  const filteredJobs = jobPostings.filter((job) => {
    const matchesSearchTerm = job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "All" || job.jobStatus === selectedStatus;
    const matchesLocation = selectedLocation === "All" || job.jobLocation === selectedLocation;
    return matchesSearchTerm && matchesStatus && matchesLocation;
  });

  // Pagination calculations
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Calculate total pages
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Handler for navigating pages
  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  const cardColors = ['bg-orange-100', 'bg-green-100', 'bg-yellow-100', 'bg-fuchsia-100'];

  return (
    <div className="p-12 mt-12 bg-blue-200 bg-opacity-60">
      <div className="flex">
        <div className="w-1/5 flex flex-col items-start">
          <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-md p-2 px-4 text-white font-semibold h-16 text-3xl shadow-lg transition-transform transform hover:scale-105">
          <Link to="/form" className="text-white">
              Add New Job
            </Link>
          </button>
          <div className="mt-6 space-y-4 w-full">
            <select
              className="border p-2 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
            </select>
            <select
              className="border p-2 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="All">All Locations</option>
              <option value="Mumbai, Maharashtra">Mumbai, Maharashtra</option>
              <option value="Delhi, India">Delhi, India</option>
              {/* Add more locations as needed */}
            </select>
          </div>
        </div>
        <div className="w-4/5 flex flex-col">
          <div className="flex mb-4">
            <input
              className="border w-4/5 p-2 m-2 ml-5 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-md m-2 p-2 px-4 text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
              onClick={() => {
                setSearchTerm("");
                setSelectedStatus("All");
                setSelectedLocation("All");
              }}
            >
              Clear Filters
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentJobs.map((job, index) => (
                // <Link to={`/project/${index}`} key={index}>
                    <JobPosting
                    jobDate={"20 May, 2023"}
                    jobTitle={job.jobTitle}
                    jobDescription={job.jobDescription}
                    jobStatus={job.jobStatus}
                    jobVisibility={job.jobVisibility}
                    jobSkillsRequired={job.jobSkillsRequired}
                    proposals={job.proposals}
                    jobPay={500}
                    jobLocation={"Mumbai, Maharashtra"}
                    jobCompany={"Hex"}
                    jobLogo={test}
                    color={cardColors[index % cardColors.length]}
                    />
                // </Link>
                ))}
            </div>

          {/* Simplified Pagination Controls */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handleClick(index + 1)}
                className={`mx-2 px-4 py-2 rounded-md transition-colors ${
                  currentPage === index + 1
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
