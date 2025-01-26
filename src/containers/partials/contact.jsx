import React from "react";

const Contact = () => {
  return (
    <section id="testimonials" className="mt-6 position-relative">
      <div className="container position-relative">
        <div className="row text-center">
          <div class="col-lg-5 mt-5 mt-lg-0">
            <div class="card border-0 p-4">
              <div class="card-body py-4">
                <div class="form-widget">
                  <div class="form-result"></div>

                  <form
                    class="mb-0"
                    id="template-contactform"
                    name="template-contactform"
                    action="include/form.php"
                    method="post"
                  >
                    <div class="form-process">
                      <div class="css3-spinner">
                        <div class="css3-spinner-scaler"></div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12 form-group mb-4">
                        <label class="color" for="template-contactform-name">
                          Name <small>*</small>
                        </label>
                        <input
                          type="text"
                          id="template-contactform-name"
                          name="template-contactform-name"
                          value=""
                          class="form-control required"
                        />
                      </div>

                      <div class="col-12 form-group mb-4">
                        <label class="color" for="template-contactform-email">
                          Email<small>*</small>
                        </label>
                        <input
                          type="email"
                          id="template-contactform-email"
                          name="template-contactform-email"
                          value=""
                          class="required email form-control"
                        />
                      </div>

                      <div class="col-12 form-group mb-4">
                        <label class="color" for="template-contactform-message">
                          Message <small>*</small>
                        </label>
                        <textarea
                          class="required form-control"
                          id="template-contactform-message"
                          name="template-contactform-message"
                          rows="4"
                          cols="30"
                        ></textarea>
                      </div>

                      <div class="col-12 form-group mb-4 d-none">
                        <input
                          type="text"
                          id="template-contactform-botcheck"
                          name="template-contactform-botcheck"
                          value=""
                          class="form-control"
                        />
                      </div>

                      <div class="col-12 form-group mb-0">
                        <button
                          class="btn text-white py-3 w-100 bg-color"
                          type="submit"
                          id="template-contactform-submit"
                          name="template-contactform-submit"
                          value="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>

                    <input
                      type="hidden"
                      name="prefix"
                      value="template-contactform-"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <h5 class="ls3 fw-normal text-black op-04 mb-2 text-uppercase">
              Get In Touch
            </h5>
            <h3 class="mb-4 display-4 nott ls0 fw-semibold">Contact Us:</h3>
            <p class="mw-xs lead op-07 mb-5">
              Energistically syndicate team building synergy after efficient
              human capital. Assertively underwhelm sticky solutions.
            </p>
            <div class="row">
              <div class="col-sm-6">
                <div class="feature-box fbox-sm mb-4">
                  <div class="fbox-icon">
                    <i class="icon-line-map-pin"></i>
                  </div>
                  <div class="fbox-content">
                    <h4 class="nott font-body fw-normal mb-2">
                      795 Folsom Ave, Suite 600
                      <br />
                      San Francisco, CA 94107
                      <br />
                    </h4>
                  </div>
                </div>
                <div class="feature-box fbox-sm mb-4">
                  <div class="fbox-icon">
                    <i class="icon-line-phone-call"></i>
                  </div>
                  <div class="fbox-content">
                    <h4 class="nott font-body fw-normal mb-2">
                      <a href="tel:+122-55412474">(1) 22 55412474</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="feature-box fbox-sm mb-4">
                  <div class="fbox-icon">
                    <i class="icon-line-mail"></i>
                  </div>
                  <div class="fbox-content">
                    <h4 class="nott font-body fw-normal mb-2">
                      <a href="mailto:noreply@canvas.com">noreply@canvas.com</a>
                    </h4>
                  </div>
                </div>
                <div class="feature-box fbox-sm">
                  <div class="fbox-icon">
                    <i class="icon-line-clock"></i>
                  </div>
                  <div class="fbox-content">
                    <h4 class="nott font-body fw-normal mb-2">
                      <a href="mailto:noreply@canvas.com">
                        Mon-Fri: 10:00-18:00 <br /> Sat-Sun: 10:00-14:00
                      </a>
                    </h4>
                  </div>
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
