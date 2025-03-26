"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // For icons

interface Filters {
  employmentTypes: Set<string>;
  seniorityLevels: Set<string>;
  salary: number;
}

interface SidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = (category: keyof Filters, value: string) => {
    setFilters((prevFilters) => {
      const updatedSet = new Set(prevFilters[category] as Set<string>);
      updatedSet.has(value) ? updatedSet.delete(value) : updatedSet.add(value);
      return { ...prevFilters, [category]: updatedSet };
    });
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, salary: Number(e.target.value) }));
  };

  const resetFilters = () => {
    setFilters({
      employmentTypes: new Set(),
      seniorityLevels: new Set(),
      salary: 5000,
    });
  };

  return (
    <>
      {/* Hamburger Button for Mobile */}
      <button
        className="cursor-pointer md:hidden p-2 fixed top-4 left-4 z-50 bg-gray-700 text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 min-h-screen w-3/4 bg-white shadow-lg border-r border-gray-300 transition-transform duration-300 md:static md:w-1/4 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="min-h-screen w-full bg-white flex flex-col justify-between shadow-lg p-6 border-r border-gray-300 lg:min-h-full">
          <h2 className="text-[2rem] font-bold">Filters</h2>

          {/* Employment Type Filters */}
          <div className="flex flex-col gap-3 mt-4">
            <h3 className="text-[1.7rem] font-semibold">Employment Type</h3>
            {["Full-Time", "Part-Time", "Internship", "Contract"].map(
              (type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 text-[1.6rem]"
                >
                  <input
                    type="checkbox"
                    checked={filters.employmentTypes.has(type)}
                    onChange={() => toggleFilter("employmentTypes", type)}
                  />
                  {type}
                </label>
              )
            )}
          </div>

          {/* Seniority Level Filters */}
          <div className="flex flex-col gap-3 mt-6">
            <h3 className="text-[1.7rem] font-semibold">Seniority Level</h3>
            {["Entry Level", "Junior Level", "Senior Level", "Executive"].map(
              (level) => (
                <label
                  key={level}
                  className="flex items-center gap-2 text-[1.6rem]"
                >
                  <input
                    type="checkbox"
                    checked={filters.seniorityLevels.has(level)}
                    onChange={() => toggleFilter("seniorityLevels", level)}
                  />
                  {level}
                </label>
              )
            )}
          </div>

          {/* Salary Filter */}
          <div className="flex flex-col gap-3 mt-6">
            <h3 className="text-[1.7rem] font-semibold">Minimum Salary</h3>
            <input
              type="range"
              min="0"
              max="200000"
              step="5000"
              value={filters.salary}
              onChange={handleSalaryChange}
              className="w-full mt-2"
            />
            <p className="text-[1.6rem] text-gray-700">
              ${filters.salary.toLocaleString()}
            </p>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="cursor-pointer bg-gray-700 text-white px-4 py-2 rounded-lg w-full text-[1.6rem] mt-4"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
