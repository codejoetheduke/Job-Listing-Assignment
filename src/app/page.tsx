"use client";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";
import JobCard from "./components/JobCard";
import { jobs } from "../utils/constant"; // Import job listings

interface Filters {
  employmentTypes: Set<string>;
  seniorityLevels: Set<string>;
  salary: number;
}

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedJobType, setSelectedJobType] = useState("All Job Types");
  const [salaryRange, setSalaryRange] = useState("All Salaries");
  const [currentPage, setCurrentPage] = useState(1);

  // Move filters state to Home.tsx
  const [filters, setFilters] = useState<Filters>({
    employmentTypes: new Set<string>(),
    seniorityLevels: new Set<string>(),
    salary: 5000,
  });

  const jobsPerPage = 9;

  // Filter jobs based on search input, country, job type, salary range, and Sidebar filters
  const filteredJobs = jobs
    .filter((job) =>
      `${job.title} ${job.company} ${job.location}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
    .filter((job) =>
      selectedCountry === "All Countries"
        ? true
        : job.location.includes(selectedCountry)
    )
    .filter((job) =>
      selectedJobType === "All Job Types"
        ? true
        : job.type === selectedJobType || job.type2 === selectedJobType
    )
    .filter((job) => {
      if (salaryRange === "All Salaries") return true;
      const salary = job.salary;
      if (salaryRange === "Below 50k") return salary < 50000;
      if (salaryRange === "50k-100k")
        return salary >= 50000 && salary <= 100000;
      if (salaryRange === "Above 100k") return salary > 100000;
      return true;
    })
    .filter((job) =>
      filters.employmentTypes.size > 0
        ? filters.employmentTypes.has(job.type) ||
          (job.type2 && filters.employmentTypes.has(job.type2))
        : true
    )
    .filter((job) =>
      filters.seniorityLevels.size > 0
        ? filters.seniorityLevels.has(job.seniority)
        : true
    )
    .filter((job) => job.salary >= filters.salary); // Filter by salary

  // Pagination Logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const jobsToShow = filteredJobs.slice(startIndex, endIndex);

  return (
    <div>
      <SearchBar
        setSearchQuery={setSearchQuery}
        setSelectedCountry={setSelectedCountry}
        setSelectedJobType={setSelectedJobType}
        setSalaryRange={setSalaryRange}
      />
      <div className="flex">
        {/* Pass filters state to Sidebar */}
        <Sidebar filters={filters} setFilters={setFilters} />
        <div className="pl-10 pr-10 w-full pb-10">
          <div className="flex justify-between items-end">
            <h1 className="text-[2rem]">
              <span className="font-bold">{filteredJobs.length} </span>
              Jobs Found
            </h1>
            <p className="text-[1.4rem]">Sort By: Newest Post</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
            {jobsToShow.length > 0 ? (
              jobsToShow.map((job, index) => <JobCard key={index} {...job} />)
            ) : (
              <p className="col-span-3 text-center text-gray-500">
                No jobs found. Try a different search!
              </p>
            )}
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-wrap justify-center mt-6 space-x-2 text-sm">
            <button
              className={`mr-4 px-4 py-2 border rounded-lg ${
                currentPage === 1
                  ? "cursor-not-allowed"
                  : "bg-black text-white cursor-pointer"
              } text-2xl`}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="px-4 py-2 border bg-gray-200  rounded-lg text-2xl">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className={`ml-4 px-4 py-2 border rounded-lg text-2xl ${
                currentPage === totalPages
                  ? "cursor-not-allowed"
                  : "bg-black text-white cursor-pointer"
              }`}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
