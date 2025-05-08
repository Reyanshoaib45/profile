
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const roles = [
    "Full Stack Developer", 
    "PHP Developer", 
    "Laravel Expert", 
    "Web Designer",
    "UI/UX Developer",
    "Database Specialist"
  ];
  
  useEffect(() => {
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let pauseBetweenWords = 1500;
    
    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = currentRole.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }
        
        typingSpeed = 50;
        
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentRoleIndex = (currentRoleIndex + 1) % roles.length;
          typingSpeed = pauseBetweenWords;
        }
      } else {
        if (textRef.current) {
          textRef.current.textContent = currentRole.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }
        
        typingSpeed = 100;
        
        if (currentCharIndex === currentRole.length) {
          isDeleting = true;
          typingSpeed = pauseBetweenWords;
        }
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const timeout = setTimeout(type, 1000);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center opacity-5"></div>
      
      {/* Animated background shapes */}
      <div className="absolute w-72 h-72 bg-accent-300 rounded-full filter blur-3xl opacity-10 animate-pulse -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-navy-500 rounded-full filter blur-3xl opacity-10 animate-pulse -bottom-40 -right-40"></div>
      
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-6 flex justify-center animate-fade-in">
            <Avatar className="h-32 w-32 border-4 border-navy-600 shadow-lg transition-transform hover:scale-105 duration-300">
              <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" alt="M Reyan SHoaib" />
              <AvatarFallback className="bg-gradient-to-br from-navy-500 to-accent-500 text-white text-2xl">MRS</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-navy-600 font-medium mb-4 animate-fade-in tracking-wider">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-navy-800 via-navy-600 to-accent-500 bg-clip-text text-transparent animate-fade-in font-playfair">
            M Reyan SHoaib
          </h1>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-navy-700 min-h-[40px] font-playfair" ref={textRef}>
              Full Stack Developer
            </h2>
            <div className="absolute h-8 w-0.5 bg-navy-600 top-1 -right-2 animate-pulse"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in leading-relaxed">
            I build exceptional web applications with modern technologies.
            Specializing in PHP, Laravel, MySQL, and front-end development with
            HTML, CSS, Tailwind, and Bootstrap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/#projects">
              <Button className="bg-gradient-to-r from-navy-600 to-navy-800 hover:from-navy-700 hover:to-navy-900 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105">
                View My Work <ArrowRight className="h-4 w-4 animate-bounce-light" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-2 border-navy-600 text-navy-600 hover:bg-navy-50 px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
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
              className="text-navy-600"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
