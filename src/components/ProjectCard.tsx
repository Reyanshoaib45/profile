
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  liveLink: string;
  technologies: string[];
  index: number;
  detailLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  date,
  imageUrl,
  liveLink,
  technologies,
  index,
  detailLink,
}) => {
  return (
    <div 
      className={`project-card group ${
        index % 2 === 0 ? "animate-fade-in-right" : "animate-fade-in-left"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 font-playfair">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <Badge key={i} variant="outline" className="bg-navy-50 transition-all duration-300 hover:-translate-y-1">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="btn-primary flex items-center gap-2 group">
              Visit Live Site
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </a>
          
          {detailLink && (
            <Link to={detailLink}>
              <Button variant="outline" className="flex items-center gap-2">
                View Details
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
