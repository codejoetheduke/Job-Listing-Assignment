import Link from "next/link";

interface JobCardProps {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  type2: string;
  salary: number;
  tags: string[];
  date: string;
  seniority: string;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  company,
  seniority,
  location,
  type,
  type2,
  salary,
  tags,
  date,
}) => {
  return (
    <Link
      href={`/jobs/${id}`}
      className="bg-white p-5 rounded-2xl shadow-lg flex flex-col gap-2 w-full"
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-xl text-amber-600">{company}</p>
      <p className="text-gray-600 text-xl">{location}</p>
      <p className="text-gray-600 text-xl">{seniority}</p>
      <p className="text-gray-500 text-xl">
        {type} | {type2} |{" "}
        <span className="font-semibold text-xl text-red-600">
          ${salary.toLocaleString()} PA
        </span>
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 px-3 py-1 text-lg rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-400 text-lg mt-2">{date}</p>
    </Link>
  );
};

export default JobCard;
