import React, { useState } from "react";
import { Link } from 'react-router-dom';
import JobEntry from './JobEntry';
import test from "./logo.png";
import jobPostings from "./jobPostings";
import Navbar from './Navbar';

function Jobs() {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  // Filter and Search states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [selectedPayRange, setSelectedPayRange] = useState("All");
  const [selectedSkills, setSelectedSkills] = useState("All");

  // Calculate the filtered jobs
  const filteredJobs = jobPostings.filter((job) => {
    const matchesSearchTerm = job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "All" || job.jobStatus === selectedStatus;
    const matchesLocation = selectedLocation === "All" || job.jobLocation === selectedLocation;
    const matchesCompany = selectedCompany === "All" || job.jobCompany === selectedCompany;
    const matchesPayRange = selectedPayRange === "All" || (
      selectedPayRange === "Below 500" && job.jobPay < 500
      || selectedPayRange === "500-1000" && job.jobPay >= 500 && job.jobPay <= 1000
      || selectedPayRange === "Above 1000" && job.jobPay > 1000
    );
    const matchesSkills = selectedSkills === "All" || job.jobSkillsRequired.includes(selectedSkills);

    return matchesSearchTerm && matchesStatus && matchesLocation && matchesCompany && matchesPayRange && matchesSkills;
  });

  // Pagination calculations
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Calculate total pages
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Handler for navigating pages
  const handleClick = (pageNumber) => setCurrentPage(pageNumber);

  const cardColors = ['bg-blue-100', 'bg-cyan-200', 'bg-sky-100', 'bg-teal-100'];

  return (
    <>
      <Navbar />
      <div className="p-12 mt-12 bg-slate-100">
        <div className="flex">
          {/* Left Side: Filters and Add New Job Button */}
          <div className="w-1/5 flex flex-col items-start space-y-6">
            <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-blue-500 hover:to-blue-700 rounded-md p-2 px-4 text-white font-semibold h-16 text-3xl shadow-lg transition-transform transform hover:scale-105">
              <Link to="/form" className="text-white">
                Add New Job
              </Link>
            </button>

            {/* Filters */}
            <div className="w-full">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <div className="space-y-4">
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
                <select
                  className="border p-2 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                >
                  <option value="All">All Companies</option>
                  <option value="Hex">Hex</option>
                  <option value="TechCorp">TechCorp</option>
                  {/* Add more companies as needed */}
                </select>
                <select
                  className="border p-2 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={selectedPayRange}
                  onChange={(e) => setSelectedPayRange(e.target.value)}
                >
                  <option value="All">All Pay Ranges</option>
                  <option value="Below 500">Below &#8377;500/hr</option>
                  <option value="500-1000">&#8377;500/hr - &#8377;1000/hr</option>
                  <option value="Above 1000">Above &#8377;1000/hr</option>
                </select>
                <select
                  className="border p-2 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={selectedSkills}
                  onChange={(e) => setSelectedSkills(e.target.value)}
                >
                  <option value="All">All Skills</option>
                  <option value="Python">Python</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="React">React</option>
                  {/* Add more skills as needed */}
                </select>
              </div>
            </div>
          </div>

          {/* Right Side: Job Listings */}
          <div className="w-4/5 flex flex-col">
            <div className="flex mb-4">
              <input
                className="border w-4/5 p-2 m-2 ml-5 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-blue-500 hover:to-blue-700 text-white font-semibold rounded-md m-2 p-2 px-4 shadow-lg transition-transform transform hover:scale-105"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedStatus("All");
                  setSelectedLocation("All");
                  setSelectedCompany("All");
                  setSelectedPayRange("All");
                  setSelectedSkills("All");
                }}
              >
                Clear Filters
              </button>
            </div>

            {/* Job Postings Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
              {currentJobs.map((job, index) => (
                <JobEntry
                  key={index}
                  jobDate={"20 May, 2023"}
                  jobTitle={job.jobTitle}
                  jobDescription={job.jobDescription}
                  jobStatus={job.jobStatus}
                  jobSkillsRequired={job.jobSkillsRequired}
                  jobPay={job.jobPay || '500'}
                  jobLocation={job.jobLocation || 'Mumbai, Maharashtra'}
                  jobCompany={job.jobCompany || 'Hexagon'}
                  jobLogo={test}
                  color={cardColors[index % cardColors.length]}
                />
              ))}
            </div>

            {/* Pagination Controls */}
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
    </>
  );
}

export default Jobs;
