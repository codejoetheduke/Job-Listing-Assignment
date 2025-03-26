"use client";
import Image from "next/image";
import React, { useState } from "react";
import { jobs } from "@/utils/constant"; // Import unique countries list

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
  setSelectedCountry: (country: string) => void;
  setSelectedJobType: (jobType: string) => void;
  setSalaryRange: (range: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  setSearchQuery,
  setSelectedCountry,
  setSelectedJobType,
  setSalaryRange,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState("All Countries");
  const [jobType, setJobType] = useState("All Job Types");
  const [salary, setSalary] = useState("All Salaries");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <div className="pt-7 pb-5 px-10 flex flex-col md:flex-row md:justify-between gap-4">
      {/* Search Input */}
      <div className="bg-white border border-gray-300 flex items-center gap-2 p-2 rounded-md w-full md:w-3/7">
        <Image src="/iconoir_search.svg" alt="" width={20} height={20} />
        <input
          type="text"
          placeholder="Search Here.."
          className="outline-none w-full"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        {/* Country Dropdown */}
        <select
          className="bg-white border border-gray-300 p-2 rounded-md cursor-pointer outline-none w-full md:w-auto"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setSelectedCountry(e.target.value);
          }}
        >
          <option value="All Countries">All Countries</option>
          {jobs.map((c, index) => (
            <option key={index} value={c.location}>
              {c.location}
            </option>
          ))}
        </select>

        {/* Job Type Dropdown */}
        <select
          className="bg-white border border-gray-300 p-2 rounded-md cursor-pointer outline-none w-full md:w-auto"
          value={jobType}
          onChange={(e) => {
            setJobType(e.target.value);
            setSelectedJobType(e.target.value);
          }}
        >
          <option value="All Job Types">All Job Types</option>
          <option value="Remote">Remote</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
          <option value="On-site">On-site</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        {/* Salary Range Dropdown */}
        <select
          className="bg-white border border-gray-300 p-2 rounded-md cursor-pointer outline-none w-full md:w-auto"
          value={salary}
          onChange={(e) => {
            setSalary(e.target.value);
            setSalaryRange(e.target.value);
          }}
        >
          <option value="All Salaries">All Salaries</option>
          <option value="Below 50k">Below 50k</option>
          <option value="50k-100k">50k-100k</option>
          <option value="Above 100k">Above 100k</option>
        </select>

        {/* Search Button */}
        <button className="bg-black rounded-lg text-white px-4 py-2 uppercase w-full md:w-auto hover:bg-orange-500 cursor-pointer">
          Start Searching
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
