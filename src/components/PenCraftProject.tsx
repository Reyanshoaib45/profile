import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  ExternalLink,
  Eye,
  Heart,
  MessageSquare,
  Share2,
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const PenCraftProject = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const blogPost = {
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React Hooks to simplify your components and make your code more reusable.",
    author: "M Reyan SHoaib",
    date: "May 15, 2024",
    readTime: "5 min read",
    likes: 124,
    comments: 23,
    views: 1583,
    content: `
      React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component.
      
      The most commonly used hooks are:
      
      1. useState - For managing state in functional components
      2. useEffect - For handling side effects like data fetching
      3. useContext - For consuming context in a component
      4. useReducer - For complex state management
      5. useRef - For accessing DOM elements directly
      
      Here's a simple example of using the useState hook:
      
      \`\`\`jsx
      import React, { useState } from 'react';
      
      function Counter() {
        const [count, setCount] = useState(0);
        
        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </div>
        );
      }
      \`\`\`
    `,
    tags: ["React", "JavaScript", "Web Development", "Frontend", "Programming"],
  };

  const features = [
    {
      title: "Markdown Support",
      description:
        "Write content using Markdown syntax with live preview and formatting tools.",
      icon: "📝",
    },
    {
      title: "User Authentication",
      description:
        "Secure login/signup system with social login options and profile management.",
      icon: "🔐",
    },
    {
      title: "Comments System",
      description:
        "Nested comments with upvoting, downvoting and moderation capabilities.",
      icon: "💬",
    },
    {
      title: "Content Management",
      description:
        "Dashboard for managing posts, drafts, categories, and tags.",
      icon: "📊",
    },
    {
      title: "SEO Optimization",
      description: "Built-in SEO tools for better search engine visibility.",
      icon: "🔍",
    },
    {
      title: "Analytics",
      description:
        "Detailed analytics on post performance, user engagement and traffic sources.",
      icon: "📈",
    },
  ];

  const technologies = [
    { name: "React", color: "bg-blue-100 text-blue-800" },
    { name: "Node.js", color: "bg-green-100 text-green-800" },
    { name: "MongoDB", color: "bg-emerald-100 text-emerald-800" },
    { name: "Express", color: "bg-gray-100 text-gray-800" },
    { name: "Redux", color: "bg-purple-100 text-purple-800" },
    { name: "Tailwind CSS", color: "bg-sky-100 text-sky-800" },
    { name: "Firebase Auth", color: "bg-amber-100 text-amber-800" },
    { name: "AWS S3", color: "bg-orange-100 text-orange-800" },
  ];

  const handleVisitSite = () => {
    toast({
      title: "Opening PenCraft Wiki",
      description: "Redirecting to the live site...",
    });
    window.open("https://pencraft.wiki", "_blank");
  };

  const handleShareProject = () => {
    navigator.clipboard.writeText("https://pencraft.wiki");
    toast({
      title: "Link Copied!",
      description: "Project link has been copied to your clipboard.",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-72 overflow-hidden">
        <img
          src="/src/components/pic/image.jpg"
          alt="PenCraft Wiki"
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
          <h2 className="text-3xl font-bold text-white mb-2 font-playfair">
            PenCraft Wiki
          </h2>
          <p className="text-white/90 max-w-2xl">
            A full-featured blogging platform with markdown support, user
            authentication, comments, and rich content management.
          </p>
          <div className="flex gap-3 mt-4">
            <Button
              className="bg-white text-navy-800 hover:bg-white/90 flex gap-2"
              onClick={handleVisitSite}
            >
              <ExternalLink size={18} /> Visit Live Site
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/20 flex gap-2"
              onClick={handleShareProject}
            >
              <Share2 size={18} /> Share
            </Button>
          </div>
        </div>
      </div>

      <div className="border-b">
        <div className="flex overflow-x-auto">
          <button
            className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
              activeTab === "overview"
                ? "border-b-2 border-navy-600 text-navy-800"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
              activeTab === "features"
                ? "border-b-2 border-navy-600 text-navy-800"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
              activeTab === "preview"
                ? "border-b-2 border-navy-600 text-navy-800"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("preview")}
          >
            Blog Preview
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
              activeTab === "technical"
                ? "border-b-2 border-navy-600 text-navy-800"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("technical")}
          >
            Technical Stack
          </button>
        </div>
      </div>

      <div className="p-8">
        {activeTab === "overview" && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              Project Overview
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              PenCraft Wiki is a comprehensive blogging platform designed for
              writers, developers, and content creators. It offers a seamless
              writing experience with markdown support, real-time previews, and
              powerful content management tools.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Built with scalability in mind, PenCraft supports thousands of
              users and delivers content quickly using modern web technologies.
              The platform includes features like user authentication,
              commenting systems, analytics, and SEO tools.
            </p>

            <h4 className="text-xl font-bold mb-3 font-playfair">
              Key Challenges
            </h4>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>
                Implementing real-time markdown preview with syntax highlighting
              </li>
              <li>Building a scalable commenting system with nested replies</li>
              <li>Optimizing database queries for faster content delivery</li>
              <li>
                Creating a responsive design that works across all devices
              </li>
              <li>Setting up secure authentication with multiple providers</li>
            </ul>

            <h4 className="text-xl font-bold mb-3 font-playfair">My Role</h4>
            <p className="text-gray-700 mb-4 leading-relaxed">
              As the lead developer on this project, I was responsible for the
              full-stack implementation, including frontend design, backend
              architecture, database modeling, and deployment configuration. I
              worked closely with content creators to ensure the platform met
              their specific needs.
            </p>
          </div>
        )}

        {activeTab === "features" && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 font-playfair">Features</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-5 hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="text-xl font-bold mb-2 font-playfair">
                    {feature.title}
                  </h4>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "preview" && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 font-playfair">
              Blog Post Preview
            </h3>

            <div className="border rounded-lg p-6 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-2 font-playfair">
                {blogPost.title}
              </h2>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {blogPost.date}
                </span>
                <span>·</span>
                <span>{blogPost.readTime}</span>
              </div>

              <div className="flex gap-2 mb-6">
                {blogPost.tags.slice(0, 3).map((tag, i) => (
                  <Badge key={i} variant="outline" className="bg-navy-50">
                    {tag}
                  </Badge>
                ))}
                {blogPost.tags.length > 3 && (
                  <Badge variant="outline" className="bg-gray-50">
                    +{blogPost.tags.length - 3}
                  </Badge>
                )}
              </div>

              <div className="prose max-w-none mb-6">
                <p className="text-gray-700 mb-4">{blogPost.excerpt}</p>

                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap my-4 overflow-x-auto">
                  {blogPost.content}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <div className="flex items-center gap-6">
                  <span className="flex items-center text-gray-600 text-sm">
                    <Heart className="h-4 w-4 mr-1 text-red-500" />{" "}
                    {blogPost.likes}
                  </span>
                  <span className="flex items-center text-gray-600 text-sm">
                    <MessageSquare className="h-4 w-4 mr-1 text-navy-500" />{" "}
                    {blogPost.comments}
                  </span>
                  <span className="flex items-center text-gray-600 text-sm">
                    <Eye className="h-4 w-4 mr-1 text-gray-500" />{" "}
                    {blogPost.views}
                  </span>
                </div>

                <div>
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:text-navy-600"
                    onClick={handleShareProject}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "technical" && (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 font-playfair">
              Technical Stack
            </h3>

            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3 font-playfair">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3 font-playfair">
                Architecture
              </h4>
              <p className="text-gray-700 mb-4">
                PenCraft Wiki uses a modern MERN stack architecture with a React
                frontend, Node.js/Express backend, and MongoDB database. The
                application is structured with a RESTful API design and follows
                a modular component architecture.
              </p>

              <div className="border-l-4 border-navy-500 pl-4 py-2 bg-navy-50/50 italic text-gray-700 mb-4">
                The project implements server-side rendering for improved SEO
                and initial load performance, with client-side hydration for
                dynamic interactions after initial load.
              </div>

              <p className="text-gray-700">
                For authentication, Firebase Auth is used with multiple
                providers (email/password, Google, GitHub) and JWT tokens for
                API authorization. AWS S3 handles media storage, while Redis is
                used for caching frequently accessed content.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-3 font-playfair">
                Deployment
              </h4>
              <p className="text-gray-700">
                The application is deployed using Docker containers on AWS ECS
                with auto-scaling configured for handling traffic spikes. CI/CD
                pipelines are set up with GitHub Actions for automated testing
                and deployment.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PenCraftProject;
