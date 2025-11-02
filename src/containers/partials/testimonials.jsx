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
    quote: "It was great working with him, he was proactive, understood requirements well, and delivered the work on time and within budget. I am looking forward to working with him again on the next project."
  },
  {
    id: 3,
    image: "img/clients/bryan.jpg",
    name: "Bryan M",
    role: "Student",
    quote: "Working with him has been very effective, everything has gone well, he is a person who knows how to do and say things confidently to create great feedback and achieve great results"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  // Refresh AOS when testimonial changes
  useEffect(() => {
    if (typeof AOS !== 'undefined' && AOS && typeof AOS.refresh === 'function') {
      AOS.refresh();
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    setDirection('prev');
    setCurrentIndex(current => 
      current === 0 ? testimonialData.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex(current => 
      current === testimonialData.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section id="testimonials" className="section py-5 position-relative testimonials-section">
      <div className="container position-relative" style={{ zIndex: 2, position: 'relative' }}>
        <div className="row text-center mb-5">
          <div className="col-12">
            <h1 className="mb-3 blue-gradient-text fw-bold portfolio-section-title" data-aos="fade-down">
              TESTIMONIALS
            </h1>
            <p className="text-white-50 mb-0 portfolio-section-subtitle" data-aos="fade-up" data-aos-delay="100">
              What clients say about working with me
            </p>
          </div>
        </div>

        <div className="row justify-content-center align-items-center mt-4">
          <div 
            className="col-auto d-flex justify-content-center align-items-center testimonial-nav-btn"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <button
              onClick={handlePrevious}
              className="testimonial-arrow-btn testimonial-arrow-prev"
              aria-label="Previous testimonial"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>

          <div className="col-lg-8 col-md-10">
            <div className={`testimonial-wrapper ${direction}`} key={currentIndex}>
              <div className="testimonial-card portfolio-card" data-aos="zoom-in" data-aos-delay="300">
                <div className="testimonial-content p-4 p-md-5">
                  <div className="testimonial-header d-flex align-items-center mb-4">
                    <div className="testimonial-image-wrapper me-4">
                      <img
                        src={testimonialData[currentIndex].image}
                        alt={testimonialData[currentIndex].name}
                        className="testimonial-image"
                      />
                    </div>
                    <div>
                      <h4 className="testimonial-name mb-1">
                        {testimonialData[currentIndex].name}
                      </h4>
                      <h5 className="testimonial-role text-white-50 fw-normal mb-0">
                        {testimonialData[currentIndex].role}
                      </h5>
                    </div>
                  </div>
                  <div className="testimonial-quote">
                    <p className="text-white fst-italic mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                      "{testimonialData[currentIndex].quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="col-auto d-flex justify-content-center align-items-center testimonial-nav-btn"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <button
              onClick={handleNext}
              className="testimonial-arrow-btn testimonial-arrow-next"
              aria-label="Next testimonial"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
