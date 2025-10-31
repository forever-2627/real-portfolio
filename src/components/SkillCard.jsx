import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { getAosType } from '../utils';

const SkillCard = ({ backColor, shadowColor, source, title, description, direction }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // AOS should be initialized once globally, but refresh if needed
    if (typeof AOS !== 'undefined') {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        if (AOS && typeof AOS.refresh === 'function') {
          AOS.refresh();
        }
      }, 100);
    }
  }, []);
  
  const aosType = getAosType(direction);

  const cardStyle = {
    backgroundColor: backColor,
    borderRadius: "12px",
    boxShadow: isHovered 
      ? `0px 10px 30px ${shadowColor}80, 0px 0px 20px ${shadowColor}40, inset 0px 0px 20px ${shadowColor}20`
      : `0px 0px 10px ${shadowColor}50, 0px 4px 15px ${shadowColor}20`,
    border: `1px solid ${shadowColor}40`,
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle = {
    maxWidth: '296px',
    height: '120px',
    transition: 'all 0.4s ease',
    transform: isHovered ? 'scale(1.1) rotate(2deg)' : 'scale(1) rotate(0deg)',
    filter: isHovered ? 'drop-shadow(0px 5px 15px rgba(0,0,0,0.3))' : 'drop-shadow(0px 2px 5px rgba(0,0,0,0.2))',
  };

  const titleStyle = {
    color: '#ffffff',
    transition: 'all 0.3s ease',
    textShadow: isHovered ? `0px 0px 10px ${shadowColor}` : 'none',
  };

  const descriptionStyle = {
    color: 'rgba(255, 255, 255, 0.85)',
    transition: 'all 0.3s ease',
    opacity: isHovered ? 1 : 0.9,
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 p-2 mb-4 d-flex">
      <div
        className="d-flex flex-column p-4 border-0 skill-card w-100"
        style={cardStyle}
        data-aos={aosType}
        data-aos-duration="2000"
        data-aos-once="false"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background glow */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: isHovered 
              ? `radial-gradient(circle at center, ${shadowColor}30 0%, transparent 70%)`
              : 'transparent',
            transition: 'all 0.4s ease',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        
        <div className="d-flex flex-column h-100 position-relative" style={{ zIndex: 1 }}>
          <div className="card-body d-flex flex-column flex-grow-1">
            <div className="d-flex align-items-center justify-content-start mb-4 skill-image-wrapper">
              <img 
                src={source} 
                style={imageStyle} 
                alt={title}
                className="skill-image"
              />
            </div>
            <h3 className="card-title fw-bolder skill-title" style={titleStyle}>
              {title}
            </h3>
            <p className="card-text mb-0 mt-2 fw-light skill-description flex-grow-1" style={descriptionStyle}>
              {description}
            </p>
          </div>
        </div>

        {/* Animated border glow */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            borderRadius: '12px',
            border: isHovered ? `2px solid ${shadowColor}` : `1px solid ${shadowColor}40`,
            transition: 'all 0.4s ease',
            pointerEvents: 'none',
            zIndex: 0,
            boxShadow: isHovered 
              ? `inset 0px 0px 20px ${shadowColor}30, 0px 0px 30px ${shadowColor}50`
              : 'none',
          }}
        />
      </div>
    </div>
  );
};

export default SkillCard;
