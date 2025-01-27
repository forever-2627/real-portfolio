import React, { useEffect } from 'react';
import AOS from 'aos';
import { getAosType } from '../utils';

const SkillCard = ({ backColor, source, title, description, direction }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const aosType = getAosType(direction);

  return (
    <div className="col-md-4 p-2">
      <div
        className="d-flex align-items-end flex-column p-4 border-0 skill-card"
        style={{ backgroundColor: backColor, borderRadius: "10px" , boxShadow: `0px 0px 5px 2px ${backColor}`}}
        data-aos={aosType}
        data-aos-duration="10000"
        data-aos-once="true"
      >
        <div className="mt-auto">
          <div className="card-body">
            <div className="d-flex align-items-center mb-4">
              <img src={source} height="120" alt="Image" />
            </div>
            <h3 className="card-title fw-bolder">{title}</h3>
            <p className="card-text mb-0 mt-2 fw-light">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
