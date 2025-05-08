
import React from "react";

const Skills = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "JavaScript",
    "jQuery",
    "Responsive Design",
  ];

  const backendSkills = [
    "PHP",
    "Laravel",
    "MySQL",
    "RESTful APIs",
    "Database Design",
    "MVC Architecture",
  ];

  const toolsSkills = [
    "Git",
    "GitHub",
    "VS Code",
    "npm",
    "Composer",
    "Webpack",
  ];

  return (
    <div id="skills" className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            My <span className="gradient-text">Skill Set</span>
          </h2>
          <p className="text-gray-700 font-montserrat">
            I've developed expertise in various technologies to deliver
            high-quality web solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl animate-fade-in hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-navy-100 to-navy-200 text-navy-600 mx-auto animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 3 A 3 3 0 0 1 21 6 V 18 A 3 3 0 0 1 18 21 H 6 A 3 3 0 0 1 3 18 V 6 A 3 3 0 0 1 6 3 H 18 Z"></path>
                <path d="m16 8-2 2-6-6-4 4 6 6-2 2"></path>
                <path d="m16 16-2-2-6 6-4-4 6-6-2-2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center font-playfair">Frontend</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {frontendSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="skill-badge font-montserrat animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl animate-fade-in delay-100 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-navy-100 to-navy-200 text-navy-600 mx-auto animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12z"></path>
                <path d="M14 8H10a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center font-playfair">Backend</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {backendSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="skill-badge font-montserrat animate-fade-in"
                  style={{ animationDelay: `${(index + frontendSkills.length) * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-500 hover:shadow-xl animate-fade-in delay-200 hover:-translate-y-2 border border-gray-100">
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-navy-100 to-navy-200 text-navy-600 mx-auto animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 16l-2-2 2-2"></path>
                <path d="M21 16l2-2-2-2"></path>
                <path d="M12 20v2"></path>
                <path d="M12 2v2"></path>
                <path d="M7 12h10"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center font-playfair">
              Tools & Others
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {toolsSkills.map((skill, index) => (
                <span 
                  key={index} 
                  className="skill-badge font-montserrat animate-fade-in"
                  style={{ animationDelay: `${(index + frontendSkills.length + backendSkills.length) * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
