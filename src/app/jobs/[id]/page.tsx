"use client";
import { useParams } from "next/navigation";
import { jobs } from "@/utils/constant"; // Import job listings
import Link from "next/link";

const JobDetail = () => {
  const { id } = useParams(); // Get job ID from URL

  // Ensure `id` is available before filtering
  if (!id) return <div>Loading...</div>;

  const job = jobs.find((job) => job.id.toString() === id);

  if (!job) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Job Not Found</h1>
        <Link href="/" className="text-blue-500 mt-4 inline-block">
          Go Back to Job Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <div className="mt-5 flex justify-between items-center">
        <h1 className="">{job.type}</h1>
        <h1 className="">{job.seniority}</h1>
        <h1 className="">{job.type2}</h1>
      </div>
      <p className="mt-6 text-gray-700 text-justify">{job.location}</p>
      <p className="mt-6 text-red-700 text-4xl font-bold text-justify">
        ${job.salary}
      </p>
      <p className="mt-6 text-gray-700 text-justify">{job.description}</p>

      <Link
        href="/"
        className="mt-6 inline-block bg-black text-white px-4 py-2 rounded-lg"
      >
        Back to Jobs
      </Link>
    </div>
  );
};

export default JobDetail;
