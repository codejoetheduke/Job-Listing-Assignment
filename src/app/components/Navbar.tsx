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
    <div className="pl-10 pr-10 bg-black text-white py-3 flex justify-between items-center">
      <p className="font-bold text-4xl">CodeJoB!</p>
      <ul className="flex justify-between items-center gap-6">
        <li className="cursor-pointer hover:text-gray-400">{companyName}</li>
      </ul>
      <div className="flex items-center gap-3">
        <Image
          src="/JohnDoe.jpg"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-lg font-medium">John Doe</span>
      </div>
    </div>
  );
};

export default Navbar;
