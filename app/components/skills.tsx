import React from 'react';
import { Code2, Database, Wrench } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    description: "Building modern, responsive user interfaces",
    icon: <Code2 className="w-6 h-6 text-gray-300" />,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend & Web3",
    description: "APIs, blockchain integration, and data flow",
    icon: <Database className="w-6 h-6 text-gray-300" />,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Ethers.js",
      "Web3.js",
      "Wagmi",
      "Rust",
      "Solidity Basics",
      "WalletConnect",
      "IPFS",
    ],
  },
  {
    category: "Tools & Workflow",
    description: "Development, deployment, and collaboration",
    icon: <Wrench className="w-6 h-6 text-gray-300" />,
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Hardhat",
      "Vercel",
      "Docker",
      "CI/CD",
      "GraphQL",
    ],
  },
];


const Skills = () => {
  return (
    <section className=" py-20 px-4 md:px-8 " style={{paddingTop:'0px' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-mono font-bold text-white mb-12 tracking-wide">
          Skills & Tech Stack
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#111116] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors duration-300"
            >
              {/* Icon Container */}
              <div className="bg-[#1a1a20] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {item.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.category}
              </h3>
              <p className="text-gray-400 mb-8 text-sm">
                {item.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-[#1c1c24] text-gray-300 text-sm font-medium px-4 py-2 rounded-full border border-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;