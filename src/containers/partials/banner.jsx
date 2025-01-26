import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import BackLogo from "../../components/BackLogo";

export default function Banner() {

  const BANNER = {
    photo: '',
    skills: ["Full Stack Web Developer", "AI Engineer", "GIS Specialist"],
    skillLogos: [
      {source: 'img/tech/reactjs.png', top:'60%', left: '10%', width: '360px'},
      {source: 'img/tech/openai.png', top:'5%', left: '60%'},
      {source: 'img/tech/qgis.png', top:'25%', left: '70%', width: '320px'},
      {source: 'img/tech/mapbox.png', top:'70%', left: '85%', width: '120px'}],
    description: `Thank you for reading my profile!
    I am a Full Stack Web Developer, and I am here to turn your idea into a product. With over 5 years of experience in this field, I 've started my journey as a freelancer. I look forward to your support and will give my best effort to your project.`
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
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
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
    <header className="header position-relative">
      {BANNER.skillLogos.map(item => {
        return <BackLogo
        source={item.source}
        top={item.top}
        left={item.left}
        width={item.width ? item.width : ''}
        className={"rotate"}
      />
      })}
      <div className="container-md">
        <div className="d-flex flex-column justify-content-between align-items-center gap-3 mt-6">
          <img
            src="img/photo.png"
            width="192"
            alt="Profile"
            className="rounded-circle"
            data-aos="zoom-in-up"
            data-aos-mirror="true"
            data-aos-once="false"
          />

          <h1 className="xl-text mt-5 text-center">
            <span data-aos="fade-left">I Am An Experienced</span>
            <br />
            <span
              className="primary-gradient-text fw-bold"
              data-aos="fade-right"
              ref={el}
            ></span>
          </h1>
          <p className="lead px-6 text-center wave-text">{waveText}</p>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <a href="#" className="btn btn-primary text-white">
              GET IN TOUCH
            </a>
            <a href="#" className="btn btn-outline-primary text-white">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
