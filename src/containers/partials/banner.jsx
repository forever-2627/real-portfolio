import React from "react";

const Banner = () => {
    return(
<header className="header position-relative">
      <div className="container-md">
        <div
          className="d-flex flex-column jusitify-content-between align-items-center gap-3 mt-6"
        >
          <img src="img/photo.png" width="192" alt="" className="rounded-circle" data-aos="fade-down"/>
          <h1 className="xl-text mt-5 text-center">
            <span data-aos="fade-left">I Am An Experienced</span><br />
            <span className="primary-gradient-text fw-bold replace-me" data-aos="fade-right"
              >Full Stack Web Developer, AI Engineer, GIS Specialist
            </span>
            
          </h1>
          <p className="lead px-6 text-center wave-text">
            I am a seasoned full-stack software engineer with over 8 years of
            professional experience, specializing in backend development. My
            expertise lies in crafting robust and scalable SaaS-based
            architectures on the Amazon AWS platform.
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <a href="#" className="btn btn-primary text-dark">GET IN TOUCH</a>
            <a href="#" className="btn btn-outline-primary text-white">Download CV</a>
          </div>
        </div>
      </div>
    </header>
    )
}

export default Banner