import React from 'react';
import './JobListings.css';

const jobData = [
  { title: "Junior Graphic Designer", type: "INTERNSHIP", salary: "4 LPA", company: "Google Inc.", location: "Bangalore, India" },
  { title: "Interaction Designer", type: "PART-TIME", salary: "8 LPA", company: "Google Inc.", location: "Bangalore, India" },
  { title: "Junior Graphic Designer", type: "INTERNSHIP", salary: "4 LPA", company: "Google Inc.", location: "Bangalore, India" },
  { title: "Junior Graphic Designer", type: "INTERNSHIP", salary: "4 LPA", company: "Google Inc.", location: "Bangalore, India" },
  { title: "Interaction Designer", type: "PART-TIME", salary: "8 LPA", company: "Google Inc.", location: "Bangalore, India" },
  { title: "Junior Graphic Designer", type: "INTERNSHIP", salary: "4 LPA", company: "Google Inc.", location: "Bangalore, India" },
  { title: "Junior Graphic Designer", type: "INTERNSHIP", salary: "4 LPA", company: "Google Inc.", location: "Bangalore, India" },
  { title: "Interaction Designer", type: "PART-TIME", salary: "8 LPA", company: "Google Inc.", location: "Bangalore, India" },
  { title: "Junior Graphic Designer", type: "INTERNSHIP", salary: "4 LPA", company: "Google Inc.", location: "Bangalore, India" },
  { title: "Software Engineer", type: "FULL-TIME", salary: "16 LPA", company: "Google Inc.", location: "Mumbai, India" },
  { title: "Software Engineer", type: "FULL-TIME", salary: "16 LPA", company: "Google Inc.", location: "Mumbai, India" },
  { title: "Junior Graphic Designer", type: "INTERNSHIP", salary: "4 LPA", company: "Google Inc.", location: "Bangalore, India" },
];

const JobCard = ({ job }) => {
  const handleCardClick = () => {
    window.open('https://in.linkedin.com/company/linkedin/jobs', '_blank');
  };

  return (
    <div className="job-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <h3>{job.title}</h3>
      <div className="job-details">
        <span className={`job-type ${job.type.toLowerCase()}`}>{job.type}</span>
        <span className="job-salary">Salary: {job.salary}</span>
      </div>
      <div className="company-info">
        <img src="https://www.google.com/favicon.ico" alt="Google logo" className="company-logo" />
        <div>
          <p className="company-name">{job.company}</p>
          <p className="company-location">{job.location}</p>
        </div>
      </div>
    </div>
  );
};

const JobListings = () => {
  return (
    <div className="job-listings">
      <h1>JOB LISTINGS</h1>
      <div className="job-grid">
        {jobData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobListings;
