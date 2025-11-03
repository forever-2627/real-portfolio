import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AOS from "aos";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, [id]);

  // Project data - In a real app, this would come from an API or context
  const PROJECTS_DATA = {
    "super-free-vpn": {
      id: "super-free-vpn",
      source: "/img/superfreevpn.png",
      title: "Super Free VPN",
      description: "100% free, fast, no-log VPN offering global servers, unlimited bandwidth, and strong privacy protection.",
      category: "Web Application",
      technologies: ["React", "Node.js", "Express", "WebRTC", "OpenVPN"],
      year: "2024",
      longDescription: "Super Free VPN is a comprehensive virtual private network solution designed to provide users with secure, private, and unrestricted internet access. Built with modern web technologies, this application offers seamless connectivity across multiple global servers while maintaining a strict no-logging policy. The platform features an intuitive user interface, real-time connection status monitoring, and advanced encryption protocols to ensure maximum security and privacy for all users.",
      features: [
        "Global server network with 50+ locations",
        "Unlimited bandwidth and data transfer",
        "Zero-logging privacy policy",
        "Advanced encryption protocols",
        "Cross-platform compatibility",
        "Real-time connection monitoring"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    "mapping-software": {
      id: "mapping-software",
      source: "/img/mapanalysis.png",
      title: "Mapping Software",
      description: "Visual mapping software for teams to analyze, visualize, and optimize location data for better business decisions.",
      category: "GIS & Mapping",
      technologies: ["Mapbox", "React", "Python", "PostGIS", "Leaflet"],
      year: "2024",
      longDescription: "A powerful geospatial analysis platform that enables teams to visualize, analyze, and optimize location-based data. This comprehensive mapping solution integrates advanced GIS capabilities with modern web technologies, providing businesses with actionable insights from geographic data. The platform supports multiple data formats, real-time updates, and collaborative features that make it an essential tool for urban planning, logistics, and market analysis.",
      features: [
        "Interactive map visualization",
        "Real-time geospatial data analysis",
        "Multi-layer data integration",
        "Custom map styling and theming",
        "Export and sharing capabilities",
        "Team collaboration tools"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    "wetland-detection": {
      id: "wetland-detection",
      source: "/img/wetlanddetection.png",
      title: "Wetland Detection",
      description: "Wetland detection with satellite imagery uses remote sensing to identify and monitor wetland areas based on surface characteristics.",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "GIS", "Satellite Imagery", "Deep Learning"],
      year: "2023",
      longDescription: "An advanced machine learning system that leverages satellite imagery and deep learning algorithms to identify and monitor wetland ecosystems. This project addresses critical environmental monitoring needs by automating the detection and classification of wetland areas using computer vision techniques. The system processes multi-spectral satellite data to provide accurate, timely information for conservation efforts and environmental research.",
      features: [
        "Automated wetland identification",
        "Multi-spectral image processing",
        "Deep learning classification models",
        "Temporal change detection",
        "High accuracy rates (95%+)",
        "Batch processing capabilities"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    "ecommerce-platform": {
      id: "ecommerce-platform",
      source: "/img/superfreevpn.png",
      title: "E-Commerce Platform",
      description: "Modern e-commerce platform with real-time inventory management, payment processing, and customer analytics.",
      category: "Web Application",
      technologies: ["React", "MongoDB", "Stripe", "Node.js", "Express"],
      year: "2024",
      longDescription: "A full-featured e-commerce solution designed for modern online retail businesses. This platform provides comprehensive store management capabilities, including real-time inventory tracking, secure payment processing, and detailed customer analytics. Built with scalability in mind, the system can handle high transaction volumes while providing an excellent user experience.",
      features: [
        "Real-time inventory management",
        "Secure payment processing",
        "Customer analytics dashboard",
        "Order management system",
        "Product catalog management",
        "Multi-vendor support"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    "weather-dashboard": {
      id: "weather-dashboard",
      source: "/img/mapanalysis.png",
      title: "Weather Dashboard",
      description: "Interactive weather dashboard providing real-time forecasts, historical data visualization, and location-based alerts.",
      category: "Data Visualization",
      technologies: ["D3.js", "React", "API Integration", "WebSocket"],
      year: "2023",
      longDescription: "An interactive weather visualization platform that combines real-time meteorological data with intuitive visualizations. The dashboard provides comprehensive weather information, including forecasts, historical trends, and location-based alerts. The system integrates multiple weather data sources to ensure accuracy and reliability.",
      features: [
        "Real-time weather updates",
        "Interactive data visualizations",
        "Historical weather trends",
        "Location-based alerts",
        "Multi-location monitoring",
        "Mobile-responsive design"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    "task-management": {
      id: "task-management",
      source: "/img/wetlanddetection.png",
      title: "Task Management System",
      description: "Collaborative task management system with team workflows, progress tracking, and automated notifications.",
      category: "Web Application",
      technologies: ["Vue.js", "Firebase", "WebSocket", "Node.js"],
      year: "2024",
      longDescription: "A comprehensive project and task management solution designed for teams of all sizes. This collaborative platform streamlines workflow management with intuitive interfaces, real-time updates, and powerful automation features. The system supports multiple project methodologies and provides detailed analytics to help teams optimize their productivity.",
      features: [
        "Team collaboration tools",
        "Real-time updates via WebSocket",
        "Automated notifications",
        "Progress tracking and analytics",
        "Custom workflow creation",
        "Integration with third-party tools"
      ],
      liveUrl: "#",
      githubUrl: "#"
    }
  };

  const project = PROJECTS_DATA[id];

  if (!project) {
    return (
      <section className="project-detail-section py-5 position-relative">
        <div className="container">
          <div className="text-center py-5">
            <h1 className="text-white mb-3">Project Not Found</h1>
            <p className="text-white-50 mb-4">The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="btn btn-primary">
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail-section py-5 position-relative">
      <div className="container position-relative" style={{ zIndex: 2, overflow: 'hidden' }}>
        {/* Back Button */}
        <div className="mb-4" data-aos="fade-right">
          <button
            onClick={() => navigate(-1)}
            className="project-detail-back-btn"
          >
            <i className="fa fa-arrow-left me-2"></i>
            Back to Projects
          </button>
        </div>

        {/* Hero Section */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-12">
            <div className="project-detail-hero">
              <img
                src={project.source}
                alt={project.title}
                className="project-detail-image"
              />
              <div className="project-detail-overlay">
                <div className="project-detail-hero-content">
                  <span className="project-detail-category">{project.category}</span>
                  <h1 className="project-detail-title">{project.title}</h1>
                  <p className="project-detail-subtitle">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row">
          <div className="col-lg-8">
            {/* Description */}
            <div className="project-detail-card mb-4" data-aos="fade-up" data-aos-delay="100">
              <h3 className="project-detail-section-title">About This Project</h3>
              <p className="project-detail-text">{project.longDescription}</p>
            </div>

            {/* Features */}
            <div className="project-detail-card mb-4" data-aos="fade-up" data-aos-delay="200">
              <h3 className="project-detail-section-title">Key Features</h3>
              <ul className="project-detail-features">
                {project.features.map((feature, index) => (
                  <li key={index} data-aos="fade-left" data-aos-delay={300 + index * 50}>
                    <i className="fa fa-check-circle me-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="project-detail-sidebar" data-aos="fade-left" data-aos-delay="100">
              {/* Project Info */}
              <div className="project-info-card mb-4">
                <h5 className="project-info-title">Project Information</h5>
                <div className="project-info-item">
                  <span className="project-info-label">Category</span>
                  <span className="project-info-value">{project.category}</span>
                </div>
                <div className="project-info-item">
                  <span className="project-info-label">Year</span>
                  <span className="project-info-value">{project.year}</span>
                </div>
                <div className="project-info-item">
                  <span className="project-info-label">Technologies</span>
                  <div className="project-tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-action-buttons">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn project-action-btn-primary"
                >
                  <i className="fa fa-external-link-alt me-2"></i>
                  View Live Site
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn project-action-btn-secondary"
                >
                  <i className="fa-brands fa-github me-2"></i>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;

