import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Phoenix Platform",
    category: "Web3 Dashboard",
    description:
      "A modern Web3 dashboard featuring authentication, analytics views, and clean UI components. Focused on performance, layout consistency, and responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/phoenix.png",
    demoLink: "https://0xblaize.github.io/phoenixwebsite.github.io/",
    repoLink: "https://github.com/0xblaize/phoenixwebsite.github.io",
  },
  {
    title: "Paragon",
    category: "DeFi / NFT",
    description:
      "A DeFi-oriented web platform with NFT features, wallet integration, and interactive user flows built for speed and usability.",
    tech: ["React", "TypeScript", "Tailwind", "Web3"],
    image: "/paragon.png",
    demoLink: "https://paragonpreview.vercel.app/",
    repoLink: "https://github.com/0xblaize/paragonpreview",
  },
  {
    title: "XcelTrip",
    category: "Travel Platform",
    description:
      "A full-stack travel booking platform with dynamic filtering, user accounts, and responsive UI for web and mobile devices.",
    tech: ["Next.js", "Node.js", "Prisma"],
    image: "/xceltrip.png",
    demoLink: "#",
    repoLink: "#",
  },
  {
    title: "KuVerse",
    category: "Marketplace",
    description:
      "A crypto marketplace for digital assets with API integrations, blockchain interaction, and a clean, scalable frontend architecture.",
    tech: ["Next.js", "Express", "Ethers.js"],
    image: "/kuverse.png",
    demoLink: "https://github.com/0xblaize/Kuverse-Marketplace-v1.0",
    repoLink: "https://github.com/0xblaize/Kuverse-Marketplace-v1.0",
  },
];


const Projects = () => {
  return (
    <section className=" py-20 px-4 md:px-8" >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-mono font-bold text-white mb-16 tracking-wide">
          Selected Projects
        </h2>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2">
                {/* FIXED: Changed aspect-16/10 to aspect-[16/10] */}
                <div className="relative aspect-16/10 bg-[#111116] rounded-xl overflow-hidden border border-gray-800 group">
                   {/* Overlay for hover effect */}
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300 z-10" />
                   
                   <Image 
                     src={project.image} 
                     alt={project.title}
                     fill
                     className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                   />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-[#1c1c24] text-xs font-medium text-gray-300 rounded-full border border-gray-800">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-sm font-medium text-gray-400 bg-[#111116] px-3 py-1 rounded-md border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                    <ExternalLink size={18} />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-lg border border-gray-700 hover:border-gray-500 transition-colors">
                    <Github size={18} />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;