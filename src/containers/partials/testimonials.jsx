import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonialData = [
  {
    id: 1,
    image: "img/clients/ian.jpg",
    name: "Ian Simon",
    role: "Engineer",
    quote: "An excellent experience from beginning to the end. Top notch freelancer and I would highly recommend their work. We started this project with limited scope and it grew because of the expertise of the freelancer - thanks so much."
  },
  {
    id: 2,
    image: "img/clients/Aaron.png",
    name: "Aaron Busary",
    role: "Manager",
    quote: "It was great working with him, he was proactive, understood requirements well, and delivered the work on time and within budget. I am looking forward to working with him again on the next project.nthusiastically synergize premier solutions rather than superior skills..."
  },
  {
    id: 3,
    image: "img/clients/bryan.jpg",
    name: "Bryan M",
    role: "Student",
    quote: "Working with him has been very effective, everything has gone well, he is a person who knows how to do and say things confidently to create great feedback and achieve great results"
  },
  // Add more testimonials
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  // Refresh AOS when testimonial changes
  useEffect(() => {
    AOS.refresh();
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex(current => 
      current === 0 ? testimonialData.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(current => 
      current === testimonialData.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section id="testimonials" className="mt-6 pt-6 position-relative">
      <div className="position-absolute">
      <div className="container position-relative">
        <div className="row text-center">
          <h1 
            className="mb-2 blue-gradient-text fw-bold"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            TESTIMONIALS
          </h1>
        </div>

        <div className="row justify-content-center mt-6 block-testimonials-2">
          <div 
            className="col-lg-2 d-flex justify-content-center align-items-center"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <FontAwesomeIcon 
              icon={faArrowLeft} 
              className="testimonial-arrow"
              onClick={handlePrevious}
              style={{ cursor: 'pointer' }}
            />
          </div>

          <div className="col-lg-8">
          <div className={`testimonial-wrapper ${direction}`}>
            <div 
              className="feature-box testimonial fbox-center fbox-bg testimonial-card p-4"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div 
                className="fbox-icon bg-transparent"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <a href="#">
                  <img
                    src={testimonialData[currentIndex].image}
                    alt="Featured Box Image"
                    className="border border-white border-width-5"
                  />
                </a>
              </div>
              <div 
                className="fbox-content p-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h4 className="mb-0">
                  <a className="text-white" href="#">
                    {testimonialData[currentIndex].name}
                  </a>
                </h4>
                <h5 className="text-white-50 fw-normal">
                  {testimonialData[currentIndex].role}
                </h5>
                <p className="text-larger font-secondary fst-italic mb-0">
                  "{testimonialData[currentIndex].quote}"
                </p>
              </div>
            </div>
            </div>
          </div>

          <div 
            className="col-lg-2 d-flex justify-content-center align-items-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className="testimonial-arrow"
              onClick={handleNext}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
      <img 
        src="img/right.png" 
        className="photo-right" 
        alt="right"
        data-aos="fade-left"
        data-aos-delay="600"
      />
      </div>
    </section>
  );
};

export default Testimonials;
