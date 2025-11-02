import React, { useState } from "react";
import AOS from "aos";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section py-5 position-relative contact-section">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row text-center mb-5">
          <div className="col-12">
            <h1 className="mb-3 blue-gradient-text fw-bold portfolio-section-title" data-aos="fade-down">
              GET IN TOUCH
            </h1>
            <p className="text-white-50 mb-0 portfolio-section-subtitle" data-aos="fade-up" data-aos-delay="100">
              Let's discuss your next project or collaboration
            </p>
          </div>
        </div>

        <div className="row align-items-center justify-content-center g-4">
          {/* Contact Form */}
          <div className="col-lg-7 col-md-10">
            <div className="contact-form-card" data-aos="fade-right" data-aos-delay="200">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control contact-input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control contact-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control contact-input"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project Discussion"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control contact-input contact-textarea"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary contact-submit-btn">
                      Send Message <i className="fa fa-paper-plane ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-5 col-md-10">
            <div className="contact-info-wrapper" data-aos="fade-left" data-aos-delay="300">
              {/* Contact Info Card */}
              <div className="contact-info-card mb-4">
                <h5 className="contact-info-title mb-4">Contact Information</h5>
                <div className="contact-info-item mb-4">
                  <div className="contact-icon-wrapper">
                    <i className="fa fa-envelope contact-icon"></i>
                  </div>
                  <div className="contact-details">
                    <h6 className="contact-label">Email</h6>
                    <p className="contact-value mb-0">pleasesendme@gmail.com</p>
                  </div>
                </div>
                <div className="contact-info-item mb-4">
                  <div className="contact-icon-wrapper">
                    <i className="fa fa-phone contact-icon"></i>
                  </div>
                  <div className="contact-details">
                    <h6 className="contact-label">Phone</h6>
                    <p className="contact-value mb-0">(123) 456-789</p>
                  </div>
                </div>
                <div className="contact-info-item mb-4">
                  <div className="contact-icon-wrapper">
                    <i className="fa fa-map-marker-alt contact-icon"></i>
                  </div>
                  <div className="contact-details">
                    <h6 className="contact-label">Address</h6>
                    <p className="contact-value mb-0">
                      345 Faulconer Drive, Suite 4<br />
                      Charlottesville, CA, 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="contact-social-card">
                <h5 className="contact-info-title mb-4">Follow Me</h5>
                <div className="contact-social-icons d-flex gap-3 flex-wrap">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icon"
                    aria-label="GitHub"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icon"
                    aria-label="YouTube"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a
                    href="https://stackoverflow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icon"
                    aria-label="Stack Overflow"
                  >
                    <i className="fa-brands fa-stack-overflow"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icon"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
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
