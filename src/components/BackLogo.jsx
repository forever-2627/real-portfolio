import React from 'react'

// Without TypeScript
const BackLogo = ({ top, left, right, bottom, width, source, className, alt }) => {
    return (
      <img
        src={source}
        alt={alt || "background logo"} // Add alt for accessibility
        className={className} // Allow custom classes
        style={{
          position: 'absolute',
          top: top,
          left: left,
          right: right,
          bottom: bottom,
          width: width,
          zIndex: -999
        }}
      />
    );
  };
  

export default BackLogo