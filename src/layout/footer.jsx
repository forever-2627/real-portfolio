import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="footer-section py-5 position-relative">
            <div className="container">
                <div className="row g-4 mb-4">
                    {/* Brand Section */}
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-brand mb-4">
                            <h3 className="footer-logo mb-3">
                                <span className="fw-bold" style={{ color: '#cd2eff' }}>Yun</span>
                                <span className="fw-bold text-white">Soft</span>
                            </h3>
                            <p className="text-white-50 mb-4" style={{ lineHeight: '1.8' }}>
                                Full Stack Web Developer & GIS Specialist passionate about creating innovative digital solutions and geospatial applications.
                            </p>
                            <div className="footer-social d-flex gap-3">
                                <a 
                                    href="https://github.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    aria-label="GitHub"
                                >
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a 
                                    href="https://youtube.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    aria-label="YouTube"
                                >
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                                <a 
                                    href="https://stackoverflow.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    aria-label="Stack Overflow"
                                >
                                    <i className="fa-brands fa-stack-overflow"></i>
                                </a>
                                <a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    aria-label="LinkedIn"
                                >
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="footer-heading text-white mb-4">Quick Links</h5>
                        <ul className="footer-links list-unstyled">
                            <li className="mb-2">
                                <Link to="/" className="footer-link">
                                    Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/projects" className="footer-link">
                                    Projects
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/blogs" className="footer-link">
                                    Blogs
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/about" className="footer-link">
                                    About
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/contact" className="footer-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-heading text-white mb-4">Services</h5>
                        <ul className="footer-links list-unstyled">
                            <li className="mb-2">
                                <span className="footer-link">Web Development</span>
                            </li>
                            <li className="mb-2">
                                <span className="footer-link">GIS Solutions</span>
                            </li>
                            <li className="mb-2">
                                <span className="footer-link">AI/ML Projects</span>
                            </li>
                            <li className="mb-2">
                                <span className="footer-link">API Development</span>
                            </li>
                            <li className="mb-2">
                                <span className="footer-link">Mapping Applications</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-heading text-white mb-4">Get In Touch</h5>
                        <ul className="footer-contact list-unstyled">
                            <li className="mb-3 d-flex align-items-start">
                                <i className="fa fa-envelope me-3 mt-1"></i>
                                <span className="text-white-50">pleasesendme@gmail.com</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start">
                                <i className="fa fa-phone me-3 mt-1"></i>
                                <span className="text-white-50">(123) 456-789</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start">
                                <i className="fa fa-map-marker-alt me-3 mt-1"></i>
                                <span className="text-white-50">
                                    345 Faulconer Drive, Suite 4<br />
                                    Charlottesville, CA, 12345
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom pt-4 mt-4 border-top border-secondary">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p className="text-white-50 mb-0">
                                © {currentYear} YunSoft. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p className="text-white-50 mb-0">
                                Made with <span style={{ color: '#ffb6c1' }}>❤</span> for innovation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;