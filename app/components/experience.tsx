import React from 'react';

const experienceData = [
  {
    role: "Senior Frontend Engineer",
    company: "Phoenix Platform",
    period: "2025",
    description:
      "Led frontend development for a multi-module web platform including dashboards, authentication flows, and real-time UI updates. Focused on performance optimization, reusable components, and responsive layouts using Next.js and Tailwind.",
  },
  {
    role: "Full Stack Developer",
    company: "XT Exchange",
    period: "2022 - 2023",
    description:
      "Built and maintained a simulated crypto trading platform with live price updates, charting interfaces, and order flow logic. Worked across frontend and backend, integrating APIs, WebSocket streams, and Web3-based data sources.",
  },
  {
    role: "Frontend Developer",
    company: "Paragon",
    period: "2025",
    description:
      "Developed clean, responsive landing pages and application interfaces with a focus on UI consistency, accessibility, and mobile performance. Collaborated closely with design to translate mockups into production-ready components.",
  },
  {
    role: "Full Stack Developer",
    company: "XcelTrip",
    period: "2025 - Present",
    description:
      "Worked on a travel booking platform featuring dynamic search, filtering, user accounts, and payment-ready flows. Implemented frontend screens and backend APIs using Next.js, Node.js, and database integrations.",
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-mono font-bold text-white mb-16 tracking-wide">
          Experience
        </h2>

        <div className="relative border-l border-gray-800 ml-3 space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-8">
              <div className="absolute top-2 -left-[5px] w-2.5 h-2.5 bg-white rounded-full ring-4 ring-black" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white font-mono tracking-wide">
                    {item.role}
                  </h3>
                  <p className="text-gray-400 font-medium mt-1">
                    {item.company}
                  </p>
                </div>

                <span className="text-sm text-gray-500 mt-2 md:mt-0 font-mono">
                  {item.period}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed mt-4 text-sm max-w-2xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
