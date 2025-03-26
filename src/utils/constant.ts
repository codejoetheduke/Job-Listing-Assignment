export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: "Remote" | "On-site" | "Hybrid";
  salary: number;
  tags: string[];
  date: string;
  type2: "Full-Time" | "Part-Time" | "Internship" | "Contract";
  description: string;
  seniority: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "Magic Unicorn",
    location: "Estonia, Tallinn",
    type: "Remote",
    salary: 105020,
    tags: ["Design", "UI"],
    date: "24 March 2024",
    type2: "Full-Time",
    description: "We are looking for a creative UI/UX Designer to craft beautiful and user-friendly interfaces for our web and mobile apps.",
    seniority: "Senior Level"
  },
  {
    id: 2,
    title: "UI Artist",
    company: "Business Corporate Group",
    location: "Denmark, Copenhagen",
    type: "Remote",
    salary: 92100,
    tags: ["Design", "Senior", "Remote"],
    date: "24 March 2024",
    type2: "Full-Time",
    description: "Seeking an experienced UI Artist to design visually stunning user interfaces for our digital products.",
    seniority: "Senior Level"
  },
  
  {
    id: 3,
    title: "Senior Product Designer",
    company: "Dily",
    location: "Czech Republic, Prague",
    type: "On-site",
    salary: 100000,
    tags: ["Design", "Product"],
    date: "23 March 2024",
    type2: "Full-Time",
    description: "Join our team as a Senior Product Designer to create elegant, user-friendly product designs that enhance user experience.",
  seniority: "Executive"
  },
  {
    id: 4,
    title: "Lead Product Designer",
    company: "Generalist",
    location: "Belgium, Brussels",
    type: "On-site",
    salary: 101000,
    tags: ["Design", "Lead"],
    date: "26 March 2024",
    type2: "Full-Time",
    description: "We need a Lead Product Designer to guide our design team and drive innovative solutions for our products.",
  seniority: "Senior Level"
  },
  {
    id: 5,
    title: "Senior Concept Artist",
    company: "Behance",
    location: "Germany, Berlin",
    type: "Remote",
    salary: 92120,
    tags: ["Art", "Concept", "Remote"],
    date: "25 March 2024",
    type2: "Part-Time",
    description: "Looking for a talented Concept Artist to create breathtaking visuals and concept art for games and digital experiences.",
    seniority: "Junior Level"
  },
  {
    id: 6,
    title: "Product Designer",
    company: "InnoTech",
    location: "France, Lyon",
    type: "On-site",
    salary: 95000,
    tags: ["Product", "Design"],
    date: "22 March 2024",
    type2: "Full-Time",
    description: "As a Product Designer, you will work closely with developers and stakeholders to design intuitive and beautiful interfaces.",
    seniority: "Senior Level"
  },
  {
    id: 7,
    title: "UX Researcher",
    company: "Human Insights",
    location: "Sweden, Stockholm",
    type: "Hybrid",
    salary: 98000,
    tags: ["UX", "Research"],
    date: "21 March 2024",
    type2: "Contract",
    description: "We need a Senior UX Researcher to conduct user research, analyze behavior, and provide data-driven design insights.",
    seniority: "Junior Level"
  },
  {
    id: 8,
    title: "Visual Designer",
    company: "BrandWave",
    location: "Netherlands, Amsterdam",
    type: "Remote",
    salary: 87000,
    tags: ["Visual", "Branding"],
    date: "20 March 2024",
    type2: "Contract",
    description: "Join our branding team as a Visual Designer to create compelling visual identities and brand materials.",
    seniority: "Junior Level"
  },
  {
    id: 9,
    title: "Design Manager",
    company: "PixelWorks",
    location: "Spain, Madrid",
    type: "On-site",
    salary: 11000,
    tags: ["Management", "Design"],
    date: "19 March 2024",
    type2: "Internship",
    description: "Looking for a Design Manager Intern to assist in coordinating and managing design projects across teams.",
    seniority: "Entry Level"
  },
  {
    id: 10,
    title: "Junior Graphic Designer",
    company: "Creative Studio",
    location: "Italy, Rome",
    type: "Remote",
    salary: 65000,
    tags: ["Graphic", "Design", "Junior"],
    date: "18 March 2024",
    type2: "Internship",
    description: "Exciting opportunity for a Junior Graphic Designer to work on branding and digital design projects.",
    seniority: "Entry Level"
  },
  {
    id: 11,
    title: "Game UI Designer",
    company: "GameTech",
    location: "Canada, Vancouver",
    type: "On-site",
    salary: 59000,
    tags: ["Game", "UI"],
    date: "17 March 2024",
    type2: "Internship",
    description: "Design immersive UI elements for our latest games as a Game UI Designer intern.",
    seniority: "Entry Level"
  },
  {
    id: 12,
    title: "Creative Director",
    company: "Visionary Inc.",
    location: "UK, London",
    type: "On-site",
    salary: 130000,
    tags: ["Director", "Creative"],
    date: "15 March 2024",
    type2: "Full-Time",
    description: "Seeking a visionary Creative Director to lead our creative teams and drive innovative projects.",
    seniority: "Executive"
  },
  {
    id: 13,
    title: "Frontend Developer",
    company: "Blvck Sapphire",
    location: "Ghana, Accra",
    type: "Remote",
    salary: 1000,
    tags: ["Frontend", "UI/UX"],
    date: "4 March 2024",
    type2: "Internship",
    description: "Join our team as a Frontend Developer intern and gain hands-on experience working on exciting UI/UX projects.",
    seniority: "Junior Level"
  },
  {
    id: 14,
    title: "Senior Mobile Designer",
    company: "AppGenius",
    location: "China, Beijing",
    type: "Hybrid",
    salary: 99000,
    tags: ["Mobile", "Design"],
    date: "5 March 2024",
    type2: "Full-Time",
    description: "Seeking a Senior Mobile Designer to create stunning interfaces for our mobile applications.",
    seniority: "Senior Level"
  },
  {
    id: 15,
    title: "UI/UX Lead",
    company: "NextGen Software",
    location: "Singapore",
    type: "On-site",
    salary: 115000,
    tags: ["UI", "UX", "Lead"],
    date: "6 March 2024",
    type2: "Full-Time",
    description: "Lead our UI/UX team and shape the future of our digital products with cutting-edge design solutions.",
    seniority: "Senior Level"
  },
  {
    id: 16,
    title: "Motion Graphics Designer",
    company: "Creative Motion",
    location: "Poland, Warsaw",
    type: "Remote",
    salary: 85000,
    tags: ["Motion", "Graphics"],
    date: "12 March 2024",
    type2: "Contract",
    description: "Join our team as a Motion Graphics Designer to bring animations and dynamic content to life.",
    seniority: "Senior Level"
  },
  {
    id: 17,
    title: "Graphic Design Intern",
    company: "Pixel Perfect",
    location: "Norway, Oslo",
    type: "Hybrid",
    salary: 40000,
    tags: ["Graphic", "Internship"],
    date: "10 March 2024",
    type2: "Internship",
    description: "Exciting opportunity for an intern to develop skills in branding, typography, and digital design.",
    seniority: "Entry Level"
  },
  {
    id: 18,
    title: "Brand Designer",
    company: "IdentityX",
    location: "Finland, Helsinki",
    type: "Remote",
    salary: 91000,
    tags: ["Branding", "Design"],
    date: "8 March 2024",
    type2: "Full-Time",
    description: "Join our brand team and help shape powerful visual identities for top companies.",
    seniority: "Senior Level"
  },
  {
    id: 19,
    title: "Senior Illustrator",
    company: "ArtLab",
    location: "Switzerland, Zurich",
    type: "Hybrid",
    salary: 96000,
    tags: ["Illustration", "Art"],
    date: "7 March 2024",
    type2: "Full-Time",
    description: "Seeking an experienced Illustrator to create stunning visuals for digital and print media.",
    seniority: "Senior Level"
  },
  {
    id: 20,
    title: "Junior Web Designer",
    company: "WebSpark",
    location: "Portugal, Lisbon",
    type: "On-site",
    salary: 60000,
    tags: ["Web", "Design"],
    date: "6 March 2024",
    type2: "Full-Time",
    description: "We are looking for a Junior Web Designer to assist in creating beautiful and responsive web designs.",
    seniority: "Junior Level"
  },
  {
    id: 21,
    title: "Packaging Designer",
    company: "EcoPack",
    location: "Australia, Sydney",
    type: "Hybrid",
    salary: 93000,
    tags: ["Packaging", "Design"],
    date: "5 March 2024",
    type2: "Full-Time",
    description: "Join us in designing sustainable packaging solutions for global brands.",
    seniority: "Senior Level"
  },
  {
    id: 22,
    title: "Creative Writer & Designer",
    company: "StoryCraft",
    location: "Ireland, Dublin",
    type: "Remote",
    salary: 87000,
    tags: ["Writing", "Design"],
    date: "4 March 2024",
    type2: "Contract",
    description: "Looking for a designer with strong storytelling skills to craft compelling visuals and narratives.",
    seniority: "Senior Level"
  },
  {
    id: 23,
    title: "3D Character Designer",
    company: "GameWorld",
    location: "Japan, Tokyo",
    type: "On-site",
    salary: 120000,
    tags: ["3D", "Character"],
    date: "3 March 2024",
    type2: "Full-Time",
    description: "Seeking a talented 3D Character Designer to create high-quality models for games and movies.",
    seniority: "Executive"
  },
  {
    id: 24,
    title: "Industrial Designer",
    company: "InnovateX",
    location: "South Korea, Seoul",
    type: "On-site",
    salary: 108000,
    tags: ["Industrial", "Design"],
    date: "2 March 2024",
    type2: "Full-Time",
    description: "Join our team as an Industrial Designer to shape the future of consumer products.",
    seniority: "Senior Level"
  },
  {
    id: 25,
    title: "UX Copywriter",
    company: "TechFlow",
    location: "UAE, Dubai",
    type: "Hybrid",
    salary: 95000,
    tags: ["UX", "Copywriting"],
    date: "1 March 2024",
    type2: "Full-Time",
    description: "Looking for a UX Copywriter to craft engaging and user-friendly microcopy for our digital products.",
    seniority: "Senior Level"
  }
];

