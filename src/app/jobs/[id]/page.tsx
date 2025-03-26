"use client";
import { useParams } from "next/navigation";
import { jobs } from "@/utils/constant"; // Import job listings
import Link from "next/link";

const JobDetail = () => {
  const { id } = useParams(); // Get job ID from URL

  // Ensure id is available before filtering
  if (!id) return <div>Loading...</div>;

  const job = jobs.find((job) => job.id.toString() === id);

  if (!job) {
    return (
      <div className="h-full flex flex-col justify-center items-center bg-amber-600 overflow-hidden">
        <h1 className="text-2xl font-bold text-white">Job Not Found</h1>
        <Link href="/" className="text-blue-500 mt-4">
          Go Back to Job Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-amber-600">
      <div className="bg-white p-10 rounded-lg w-2/3 max-w-2xl h-auto flex flex-col justify-center">
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <div className="mt-5 flex justify-between items-center">
          <h1>{job.type}</h1>
          <h1>{job.seniority}</h1>
          <h1>{job.type2}</h1>
        </div>
        <p className="mt-6 text-gray-700">{job.location}</p>
        <p className="mt-6 text-red-700 text-4xl font-bold">${job.salary}</p>
        <p className="mt-6 text-gray-700">{job.description}</p>
        <div className="w-full flex justify-around mt-6">
          <Link href="/" className="bg-black text-white px-4 py-2 rounded-lg">
            Back to Jobs
          </Link>
          <Link
            href="/"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Apply Now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
