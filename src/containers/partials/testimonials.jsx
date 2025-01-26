import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  return (
    <section id="testimonials" className="mt-6 position-relative">
      <div className="container position-relative">
        <div className="row text-center">
          <h1 className="mb-2 blue-gradient-text fw-bold">TESTIMONIALS</h1>
        </div>
        <div class="row justify-content-center mt-6 block-testimonials-2">
          <div className="col-lg-2 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="testimonial-arrow"/>
          </div>
          <div class="col-lg-8">
            <div
              id="oc-testi"
              class="owl-carousel testimonials-carousel carousel-widget dark"
              data-margin="0"
              data-items="1"
              data-animate-in="fadeIn"
              data-animate-out="fadeOut"
            >
              <div class="oc-item">
                <div class="feature-box testimonial fbox-center fbox-bg testimonial-card p-4">
                  <div class="fbox-icon bg-transparent">
                    <a href="#">
                      <img
                        src="img/client.jpg"
                        alt="Featured Box Image"
                        class="border border-white border-width-5"
                      />
                    </a>
                  </div>
                  <div class="fbox-content p-3">
                    <h4 class="mb-0">
                      <a class="text-white" href="#">
                        Jim Séchen
                      </a>
                    </h4>
                    <h5 class="text-white-50 fw-normal">Developer</h5>
                    <p class="text-larger font-secondary fst-italic mb-0">
                      "Enthusiastically synergize premier solutions rather than
                      superior leadership skills. Competently negotiate adaptive
                      vortals and enterprise partnerships. Intrinsicly
                      recaptiualize one-to-one results without optimal
                      bandwidth. Conveniently enhance."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faArrowRight} className="testimonial-arrow"/>
          </div>
        </div>
      </div>
      <img src="img/right.png" className="photo-right" />
    </section>
  );
};

export default Testimonials;
