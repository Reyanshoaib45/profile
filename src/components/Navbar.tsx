import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Github } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ["skills", "projects"];
      if (location.pathname === "/") {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              setActiveSection(section);
              return;
            }
          }
        }
        // If no section is active or at the top, set to home
        setActiveSection(window.scrollY < 100 ? "home" : "");
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Set active section based on current route
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("home");
    } else if (location.pathname === "/pricing") {
      setActiveSection("pricing");
    } else if (location.pathname === "/contact") {
      setActiveSection("contact");
    } else if (location.pathname.includes("pencraft")) {
      setActiveSection("projects");
    }

    // Check for hash in URL for direct navigation
    if (location.hash) {
      setActiveSection(location.hash.replace("#", ""));
    }
  }, [location.pathname, location.hash]);

  const handleSkillsClick = (e) => {
    e.preventDefault();
    // Always navigate to homepage with skills hash
    window.location.href = "/#skills";
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    // Always navigate to homepage with projects hash
    window.location.href = "/#projects";
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const isActive = (path) => {
    if (path === "/") {
      return activeSection === "home" ? "text-accent-500 font-semibold" : "";
    } else if (path === "/#skills") {
      return activeSection === "skills" ? "text-accent-500 font-semibold" : "";
    } else if (path === "/#projects") {
      return activeSection === "projects"
        ? "text-accent-500 font-semibold"
        : "";
    } else if (path === "/pricing") {
      return activeSection === "pricing" ? "text-accent-500 font-semibold" : "";
    } else if (path === "/contact") {
      return activeSection === "contact" ? "text-accent-500 font-semibold" : "";
    }
    return "";
  };

  return (
    <nav
      className={`fixed w-full z-50 py-4 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-playfair font-bold text-navy-800">
          M Reyan<span className="text-accent-500"> Shoaib</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`nav-link font-lato hover:text-accent-500 transition-colors ${isActive(
              "/"
            )}`}
          >
            Home
          </Link>
          <a
            href="/#skills"
            onClick={handleSkillsClick}
            className={`nav-link font-lato hover:text-accent-500 transition-colors ${isActive(
              "/#skills"
            )}`}
          >
            Skills
          </a>
          <a
            href="/#projects"
            onClick={handleProjectsClick}
            className={`nav-link font-lato hover:text-accent-500 transition-colors ${isActive(
              "/#projects"
            )}`}
          >
            Projects
          </a>
          <Link
            to="/pricing"
            className={`nav-link font-lato hover:text-accent-500 transition-colors ${isActive(
              "/pricing"
            )}`}
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className={`nav-link font-lato hover:text-accent-500 transition-colors ${isActive(
              "/contact"
            )}`}
          >
            Contact
          </Link>
          <a
            href="https://github.com/Reyanshoaib45"
            target="_blank"
            rel="noreferrer"
            className="text-navy-800 hover:text-accent-500 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 md:hidden">
          <div className="flex flex-col items-center pt-8 gap-6">
            <Link
              to="/"
              className={`text-lg font-medium font-lato ${isActive("/")}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a
              href="/#skills"
              className={`text-lg font-medium font-lato ${isActive(
                "/#skills"
              )}`}
              onClick={handleSkillsClick}
            >
              Skills
            </a>
            <a
              href="/#projects"
              className={`text-lg font-medium font-lato ${isActive(
                "/#projects"
              )}`}
              onClick={handleProjectsClick}
            >
              Projects
            </a>
            <Link
              to="/pricing"
              className={`text-lg font-medium font-lato ${isActive(
                "/pricing"
              )}`}
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className={`text-lg font-medium font-lato ${isActive(
                "/contact"
              )}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
