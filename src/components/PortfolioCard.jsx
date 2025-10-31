import React, { useEffect } from "react";
import AOS from "aos";
import { getAosType } from "../utils";

const PortfolioCard = ({ source, title, description, toLink, direction }) => {
  useEffect(() => {
    // AOS should be initialized once globally, but refresh if needed
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  const aosType = getAosType(direction);

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4">
      <div
        className="card border-radius-4 portfolio-card h-100"
        data-aos={aosType}
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="portfolio-img-wrapper position-relative overflow-hidden">
          <img
            src={source}
            alt={title}
            className="border-radius-4 portfolio-img w-100"
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
        <div className="p-4 portfolio-content">
          <h4 className="fw-bold text-white mb-2 portfolio-title">{title}</h4>
          <p className="text-white-50 mb-3 portfolio-description">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
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
  );
};

export default PortfolioCard;
