import React, { useState, useEffect } from "react";
import AOS from "aos";
import PortfolioCard from "../components/PortfolioCard";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  const PORTFOLIOS = [
    {
      source: "img/superfreevpn.png",
      title: "Super Free VPN",
      description:
        "100% free, fast, no-log VPN offering global servers, unlimited bandwidth, and strong privacy protection.",
      toLink: "#",
      direction: "left",
      category: "Web Application",
      technologies: ["React", "Node.js", "Express"],
      year: "2024",
    },
    {
      source: "img/mapanalysis.png",
      title: "Mapping Software",
      description:
        "Visual mapping software for teams to analyze, visualize, and optimize location data for better business decisions.",
      toLink: "#",
      direction: "right",
      category: "GIS & Mapping",
      technologies: ["Mapbox", "React", "Python"],
      year: "2024",
    },
    {
      source: "img/wetlanddetection.png",
      title: "Wetland Detection",
      description:
        "Wetland detection with satellite imagery uses remote sensing to identify and monitor wetland areas based on surface characteristics.",
      toLink: "#",
      direction: "right",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "GIS"],
      year: "2023",
    },
    {
      source: "img/superfreevpn.png",
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce platform with real-time inventory management, payment processing, and customer analytics.",
      toLink: "#",
      direction: "left",
      category: "Web Application",
      technologies: ["React", "MongoDB", "Stripe"],
      year: "2024",
    },
    {
      source: "img/mapanalysis.png",
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard providing real-time forecasts, historical data visualization, and location-based alerts.",
      toLink: "#",
      direction: "right",
      category: "Data Visualization",
      technologies: ["D3.js", "React", "API Integration"],
      year: "2023",
    },
    {
      source: "img/wetlanddetection.png",
      title: "Task Management System",
      description:
        "Collaborative task management system with team workflows, progress tracking, and automated notifications.",
      toLink: "#",
      direction: "left",
      category: "Web Application",
      technologies: ["Vue.js", "Firebase", "WebSocket"],
      year: "2024",
    },
  ];

  const categories = ["All", ...new Set(PORTFOLIOS.map((p) => p.category))];

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(PORTFOLIOS);
    } else {
      setFilteredProjects(
        PORTFOLIOS.filter((p) => p.category === selectedCategory)
      );
    }
    // Refresh AOS after filtering
    if (typeof AOS !== 'undefined') {
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }
  }, [selectedCategory]);

  return (
    <section className="projects-page-section py-5 position-relative">
      <div className="container position-relative" style={{ zIndex: 2, overflow: 'hidden' }}>
        {/* Header Section */}
        <div className="row text-center mb-5" data-aos="fade-down">
          <div className="col-12">
            <h1 className="mb-3 blue-gradient-text fw-bold portfolio-section-title">
              MY PROJECTS
            </h1>
            <p className="text-white-50 mb-0 portfolio-section-subtitle">
              Explore my portfolio of innovative projects and creative solutions
            </p>
          </div>
        </div>

        <div className="row">
          {/* Category Filters - Left Side */}
          <div className="col-md-3 col-12 mb-4 mb-md-0">
            <div className="projects-filter-wrapper projects-filter-sidebar d-flex flex-column gap-3">
              <h5 className="filter-sidebar-title mb-3">Filter by Category</h5>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`project-filter-btn ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects List - Right Side */}
          <div className="col-md-9 col-12">
            <div className="projects-list-wrapper">
              {filteredProjects.map((portfolio, index) => (
                <PortfolioCard
                  key={index}
                  source={portfolio.source}
                  title={portfolio.title}
                  description={portfolio.description}
                  toLink={portfolio.toLink}
                  direction={portfolio.direction}
                  index={index}
                  horizontal={true}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        {filteredProjects.length === 0 && (
          <div className="text-center mt-5" data-aos="fade-up">
            <p className="text-white-50 fs-5">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
