"use client";
import React from "react";

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
  const toggleFilter = (category: keyof Filters, value: string) => {
    setFilters((prevFilters) => {
      const updatedSet = new Set(prevFilters[category] as Set<string>);
      if (updatedSet.has(value)) {
        updatedSet.delete(value);
      } else {
        updatedSet.add(value);
      }
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
    <div className="min-h-screen w-1/4 bg-white flex flex-col justify-between shadow-lg p-6 border-r border-gray-300">
      <h2 className="text-[2rem] font-bold">Filters</h2>

      {/* Employment Type Filters */}
      <div className="flex flex-col gap-3">
        <h3 className="text-[1.7rem] font-semibold">Employment Type</h3>
        <div className="flex flex-col gap-3">
          {["Full-Time", "Part-Time", "Internship", "Contract"].map((type) => (
            <label key={type} className="flex items-center gap-2 text-[1.6rem]">
              <input
                type="checkbox"
                checked={filters.employmentTypes.has(type)}
                onChange={() => toggleFilter("employmentTypes", type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Seniority Level Filters */}
      <div className="mt-6 flex flex-col gap-3">
        <h3 className="text-[1.7rem] font-semibold">Seniority Level</h3>
        <div className="flex flex-col gap-3">
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
      </div>

      {/* Salary Filter */}
      <div className="mt-6 flex flex-col gap-3">
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
        className=" bg-gray-700 text-white px-4 py-2 rounded-lg w-full text-[1.6rem]"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Sidebar;
