import React, { useEffect } from "react";
import AOS from "aos";
import { getAosType } from "../utils";

const PortfolioCard = ({ source, title, description, toLink, direction }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const aosType = getAosType(direction);

  return (
    <div className="col-md-6">
      <div
        className="card border-radius-4 portfolio-card"
        data-aos={aosType}
        data-aos-duration="20000"
        data-aos-once="true"
      >
        <img src={source} alt="" className="border-radius-4 portfolio-img" />
        <div className="p-3 portfolio-content">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column p-1">
              <h4 className="fw-bold text-white mb-0">{title}</h4>
              <span className="d-block">{description}</span>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <a href={toLink} className="text-light">
              <i>Learn More</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
