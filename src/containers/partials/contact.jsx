import React from "react";

const Contact = () => {
  return (
    <section id="" className="mt-6 pt-6 position-relative">
      <div className="container position-relative">
        <div className="row text-center">
          <div class="col-lg-5 mt-5 mt-lg-0">
            <img data-aos="fade-left"
              data-aos-delay="500"
              src="/img/contact.svg"
              alt="FAQs"
              class="px-5"
            />
          </div>

          <div class="col-lg-7">
            <div className="contact-container mt-6 ps-5 w-100" data-aos="fade-right"
              data-aos-delay="500">
                 <div className="d-flex align-items-center fw-bolder h1 my-5 blue-gradient-text">
                Contact Me
              </div>
              <div className="d-flex align-items-center">
                <i className="fa fa-map-marker-alt text-white me-3"></i>
                345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
              </div>
              <div className="d-flex gap-4 align-items-center mt-3">
                <div className="d-flex align-items-center">
                  <i className="fa fa-phone me-3"></i> (123)456-789
                </div>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="fa fa-envelope me-3"></i> pleasesendme@gmail.com
                  </div>
                </div>
              </div>

              <div className="d-flex gap-4 align-items-center mt-3">
                <div className="d-flex align-items-center">
                  <i className="fa fa-search me-3"></i> You will be able to find me on
                  <i className="fa-brands fa-github ms-6"></i>
                  <i className="fa-brands fa-youtube ms-3"></i>
                  <i className="fa-brands fa-stack-overflow ms-3"></i>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
