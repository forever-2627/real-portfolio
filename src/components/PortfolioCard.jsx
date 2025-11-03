import React, { useEffect } from "react";
import AOS from "aos";
import { getAosType } from "../utils";

const PortfolioCard = ({ source, title, description, toLink, direction, index, horizontal = false }) => {
  useEffect(() => {
    // AOS should be initialized once globally, but refresh if needed
    if (typeof AOS !== 'undefined') {
      setTimeout(() => {
        AOS.refresh();
      }, 300);
    }
  }, []);

  const aosType = getAosType(direction);

  return (
    <div className={horizontal ? "col-12 mb-4" : "col-12 col-sm-6 col-md-4 mb-4"}>
      <div
        className={`card border-radius-4 portfolio-card ${horizontal ? 'portfolio-card-horizontal' : 'h-100'}`}
        data-aos={aosType}
        data-aos-duration="800"
        data-aos-delay={index * 1000}
        data-aos-once="false"
        data-aos-easing="ease-out"
      >
        <div className={horizontal ? "row g-0" : ""}>
          {/* Image Section */}
          <div className={`portfolio-img-wrapper position-relative overflow-hidden ${horizontal ? 'col-md-5' : ''}`}>
            <img
              src={source}
              alt={title}
              className={`border-radius-4 portfolio-img ${horizontal ? '' : 'w-100'}`}
              style={horizontal ? { 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                display: 'block'
              } : {}}
            />
            <div className="portfolio-overlay d-flex align-items-center justify-content-center">
              <a 
                href={toLink} 
                className="btn btn-primary portfolio-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Content Section */}
          <div className={horizontal ? "col-md-7 d-flex flex-column" : ""}>
            <div className={`p-4 portfolio-content ${horizontal ? 'h-100 d-flex flex-column justify-content-between' : ''}`}>
              <div>
                <h4 className="fw-bold text-white mb-2 portfolio-title">{title}</h4>
                <p className="text-white-50 mb-3 portfolio-description">{description}</p>
              </div>
              <div className={`d-flex ${horizontal ? 'justify-content-start align-items-center' : 'justify-content-between align-items-center'}`}>
                <a 
                  href={toLink} 
                  className="text-primary text-decoration-none portfolio-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More <span className="ms-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
