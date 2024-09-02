import React from 'react';
import { useParams, Link } from 'react-router-dom';
import jobPostings from './jobPostings';
import { ArrowLeft, DollarSign, MapPin, Building, Calendar, Users, Clock, Tag, FileText } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  const job = jobPostings[id];

  if (!job) {
    return (
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <Link to="/" className="text-blue-500 hover:underline flex items-center mb-4">
          <ArrowLeft size={20} className="mr-2" /> Back to Jobs
        </Link>
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p className="font-bold">Error</p>
          <p>Project not found. Please try another project or return to the job listings.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-24 max-w-4xl">
      <Link to="/" className="text-blue-500 hover:underline flex items-center mb-4">
        <ArrowLeft size={20} className="mr-2" /> Back to Jobs
      </Link>
      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{job.jobTitle}</h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
            <div className="flex items-center mr-4 mb-2">
              <Building size={18} className="mr-2" />
              <span>{job.jobCompany || "Company Name"}</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <MapPin size={18} className="mr-2" />
              <span>{job.jobLocation || "Location"}</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <DollarSign size={18} className="mr-2" />
              <span>₹{job.jobPay || "500"}/hr</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <Clock size={18} className="mr-2" />
              <span>{job.jobDuration || "Duration"}</span>
            </div>
            <div className="flex items-center mb-2">
              <Calendar size={18} className="mr-2" />
              <span>{job.jobDate || "Posted on 20 May, 2023"}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Job Description</h2>
            <p className="text-gray-600 leading-relaxed">{job.jobDescription}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Required Skills</h2>
            <div className="flex flex-wrap gap-2">
              {job.jobSkillsRequired?.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Job Status</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              job.jobStatus === 'Open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {job.jobStatus}
            </span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Proposals</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center">
                <Users size={18} className="mr-2 text-gray-500" />
                <span className="font-semibold text-gray-700">{job.proposals.length} Proposals Received</span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Attachments</h2>
            <div className="flex flex-wrap gap-2">
              {job.attachments?.map((attachment, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <FileText size={18} className="mr-2 text-gray-500" />
                  <span className="font-semibold text-gray-700">{attachment.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {job.tags?.map((tag, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
            Apply for This Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
            