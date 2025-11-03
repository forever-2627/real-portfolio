import React, { useEffect } from "react";
import AOS from "aos";

const AboutPage = () => {
  useEffect(() => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  const experience = [
    {
      year: "2023 - Present",
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      description: "Leading development of scalable web applications and geospatial solutions. Working with cross-functional teams to deliver innovative products."
    },
    {
      year: "2021 - 2023",
      title: "Senior Web Developer",
      company: "Digital Innovations",
      description: "Developed and maintained multiple web applications using React, Node.js, and modern frameworks. Implemented real-time features and optimized application performance."
    },
    {
      year: "2019 - 2021",
      title: "Web Developer",
      company: "StartupXYZ",
      description: "Built responsive web applications from scratch. Collaborated with designers and product managers to create user-friendly interfaces."
    }
  ];

  return (
    <section className="about-page-section py-5 position-relative">
      <div className="container position-relative" style={{ zIndex: 2, overflow: 'hidden' }}>
        {/* Header Section */}
        <div className="row text-center mb-5" data-aos="fade-down">
          <div className="col-12">
            <h1 className="mb-3 blue-gradient-text fw-bold portfolio-section-title">
              ABOUT ME
            </h1>
            <p className="text-white-50 mb-0 portfolio-section-subtitle">
              Get to know more about my journey, skills, and passion for technology
            </p>
          </div>
        </div>

        {/* About Content */}
        <div className="row mb-5">
          <div className="col-lg-12" data-aos="fade-up">
            <div className="about-content-card">
              <h3 className="about-section-title mb-4">Who I Am</h3>
              <p className="about-text">
                I'm a passionate Full Stack Developer specializing in modern web technologies and geospatial solutions. 
                With a strong foundation in both frontend and backend development, I bring creative ideas to life through 
                elegant code and innovative solutions.
              </p>
              <p className="about-text">
                My expertise spans across React, Node.js, Python, and GIS technologies, allowing me to build comprehensive 
                applications that solve real-world problems. I'm particularly interested in the intersection of web development 
                and geospatial technology, creating mapping applications that provide valuable insights.
              </p>
              <p className="about-text">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing 
                knowledge through technical writing. I believe in continuous learning and staying updated with the latest 
                industry trends and best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <div className="about-content-card">
              <h3 className="about-section-title mb-4 text-center">Experience</h3>
              <div className="experience-timeline">
                {experience.map((exp, index) => (
                  <div key={index} className="experience-item" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="experience-year">{exp.year}</div>
                    <div className="experience-content">
                      <h4 className="experience-title">{exp.title}</h4>
                      <p className="experience-company">{exp.company}</p>
                      <p className="experience-description">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

