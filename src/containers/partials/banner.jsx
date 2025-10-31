import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import BackLogo from "../../components/BackLogo";

export default function Banner() {

  const BANNER = {
    photo: '',
    skills: ["Full Stack Web Developer", "AI Engineer", "GIS Specialist"],
    skillLogos: [
      {source: 'img/tech/react.png', top:'60%', left: '10%', width: '360px'},
      {source: 'img/tech/openai.png', top:'5%', left: '60%'},
      {source: 'img/tech/qgis.png', top:'25%', left: '70%', width: '320px'},
      {source: 'img/tech/mapbox.png', top:'70%', left: '85%', width: '120px'}],
    description: `Welcome to my portfolio!
    I'm a passionate Full Stack Developer specializing in modern web technologies and geospatial solutions. With expertise in building scalable applications and creating innovative mapping experiences, I transform complex ideas into elegant digital solutions.`
  }
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: BANNER.skills,
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      showCursor: true,
      cursorChar: "_",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  // Initializing AOS with useEffect to enable the animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-out-cubic", // smoother easing function
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
      offset: 100, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      anchorPlacement: "top-bottom", // defines which position of the element should be used to trigger animation
    });
    
    // Refresh AOS on window resize for better performance
    const handleResize = () => {
      AOS.refresh();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const text = `${BANNER.description}`;

  const sentences = text.split("\n").map((sentence) => sentence.trim());

  const waveText = sentences.map((sentence, sentenceIndex) => (
    <React.Fragment key={sentenceIndex}>
      {sentence.split("").map((char, charIndex) => (
        <span
          key={charIndex}
          className="wave-char"
          style={{ animationDelay: `${(sentenceIndex + charIndex) * 0.04}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <br />
    </React.Fragment>
  ));

  return (
    <header className="position-relative py-3 py-md-5 banner-section" style={{ minHeight: '100vh', height: 'auto', zIndex: 1, overflow: 'visible' }}>
      {/* Blurred edge at bottom */}
      <div className="banner-bottom-blur"></div>
      <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-md-block" style={{ zIndex: 0, pointerEvents: 'none' }}>
        {BANNER.skillLogos.map((item, index) => {
          return <BackLogo
          key={index}
          source={item.source}
          top={item.top}
          left={item.left}
          width={item.width ? item.width : ''}
          className={"rotate"}
        />
        })}
      </div>
      <div className="container container-md px-3 px-md-4" style={{ position: 'relative', zIndex: 1 }}>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2 gap-md-4 py-4 py-md-6">
          <img
            src="img/photo.png"
            width="192"
            alt="Profile"
            className="rounded-circle banner-photo"
            style={{ maxWidth: '196px', width: '100%', height: 'auto' }}
            data-aos="zoom-in-up"
            data-aos-mirror="true"
            data-aos-once="false"
          />

          <h1 className="xl-text mt-3 mt-md-5 text-center banner-title">
            <span data-aos="fade-left">I am an Experienced</span>
            <br className="d-none d-md-block" />
            <span className="d-block d-md-inline"> </span>
            <span
              className="primary-gradient-text fw-bold typed-text"
              data-aos="fade-right"
              ref={el}
            ></span>
          </h1>
          <p className="lead px-2 px-md-6 text-center wave-text banner-description">{waveText}</p>
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2 gap-md-3 w-100 px-3" style={{ position: 'relative', zIndex: 2 }}>
            <a 
              href="#contact" 
              className="btn btn-primary text-white w-100 w-sm-auto px-4 px-md-5"
              tabIndex={0}
              style={{ position: 'relative', zIndex: 2 }}
            >
              GET IN TOUCH
            </a>
            <a 
              href="#" 
              className="btn btn-outline-primary text-white w-100 w-sm-auto px-4 px-md-5"
              tabIndex={0}
              style={{ position: 'relative', zIndex: 2 }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
