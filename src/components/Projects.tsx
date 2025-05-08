
import React from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "PenCraft Wiki",
      description:
        "A full-featured blogging platform with markdown support, user authentication, comments, and rich content management.",
      date: "April 15, 2024",
      imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2070",
      liveLink: "https://pencraft.wiki",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      featured: true,
      detailLink: "/pencraft-project"
    },
    {
      title: "Pizza Shop",
      description:
        "A responsive website for a pizza shop with online ordering functionality and menu displays.",
      date: "May 31, 2024",
      imageUrl: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=2070",
      liveLink: "https://pizza-shop-webpage.vercel.app/",
      technologies: ["HTML", "CSS", "Tailwind", "Bootstrap"],
      featured: false,
    },
    {
      title: "Sorry Project",
      description:
        "Interactive web application with animations and user engagement features.",
      date: "March 23, 2025",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
      liveLink: "https://sorry-tau-tawny.vercel.app/",
      technologies: ["Laravel", "PHP", "jQuery", "CSS"],
      featured: false,
    },
    {
      title: "Proposal Project",
      description:
        "Custom proposal creation platform with dynamic content management.",
      date: "March 23, 2025",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070",
      liveLink: "https://porposal-rho.vercel.app/",
      technologies: ["PHP", "MySQL", "HTML", "Bootstrap"],
      featured: false,
    },
    {
      title: "University Landing Page",
      description:
        "Modern responsive landing page for a university with information sections and call-to-actions.",
      date: "March 23, 2025",
      imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2070",
      liveLink: "https://my-university-landing-webpage.vercel.app/",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "Bootstrap"],
      featured: false,
    },
  ];

  // Separate featured projects from regular projects
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <div id="projects" className="section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-700">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        {/* Featured Project Section */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-accent-300 to-navy-600 text-transparent bg-clip-text">
                Featured Project
              </span>
            </h3>
            <div className="bg-gradient-to-r from-navy-50 to-accent-300/20 p-1 rounded-xl animate-pulse">
              <div className="bg-white rounded-lg overflow-hidden">
                {featuredProjects.map((project, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="h-full overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-all duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{project.date}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 font-playfair">{project.title}</h3>
                        <p className="text-gray-600 mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-navy-100 text-navy-800 rounded-full text-sm font-medium transition-all duration-300 hover:bg-navy-200 hover:-translate-y-1"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center justify-center gap-2 group"
                        >
                          Visit Live Site
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                        
                        {project.detailLink && (
                          <Link to={project.detailLink} className="btn-outline inline-flex items-center justify-center gap-2">
                            View Details
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Regular Projects */}
        <h3 className="text-2xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-navy-600 to-navy-800 text-transparent bg-clip-text">
            Other Projects
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              date={project.date}
              imageUrl={project.imageUrl}
              liveLink={project.liveLink}
              technologies={project.technologies}
              index={index}
              detailLink={project.detailLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
