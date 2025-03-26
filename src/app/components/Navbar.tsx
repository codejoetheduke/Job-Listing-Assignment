"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { jobs } from "@/utils/constant"; // Import job listings

const Navbar = () => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  // Extract company name dynamically if not on the main page
  const companyName = !isMainPage
    ? jobs.find((job) => pathname.includes(String(job.id)))?.company ||
      "Company"
    : "Find Jobs";

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white py-3 px-4 sm:px-10 flex flex-wrap justify-between items-center z-50 shadow-lg">
      <p className="font-bold text-2xl sm:text-3xl lg:text-4xl">CodeJoB!</p>
      <ul className="sm:flex justify-between items-center gap-6">
        <li className="cursor-pointer hover:text-gray-400">{companyName}</li>
      </ul>
      <div className="flex items-center gap-3 mt-2 sm:mt-0">
        <Image
          src="/JohnDoe.jpg"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-sm sm:text-lg font-medium">John Doe</span>
      </div>
    </div>
  );
};

export default Navbar;
