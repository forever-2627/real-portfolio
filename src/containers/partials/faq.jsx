import React, {useEffect} from "react";
import { Accordion } from 'react-bootstrap';
import AOS from "aos";

const FAQS = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "I specialize in Full Stack Web Development, AI/ML solutions for geospatial applications, and Web GIS development. I build responsive web applications, develop mapping solutions with Mapbox and Leaflet, create REST APIs with Node.js, and implement machine learning models for remote sensing and spatial analysis."
  },
  {
    id: 2,
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A simple web application might take 2-4 weeks, while a full-stack application with GIS features could take 2-3 months. I provide detailed project timelines after understanding your requirements and always aim to deliver on time."
  },
  {
    id: 3,
    question: "Do you work with international clients?",
    answer: "Yes, I work with clients worldwide. With over 5 years of experience as a freelancer, I'm comfortable collaborating across different time zones and can adapt to various communication preferences and project management tools."
  },
  {
    id: 4,
    question: "What technologies do you use for mapping projects?",
    answer: "For mapping and GIS projects, I primarily use Mapbox GL JS, Leaflet, and OpenLayers for web mapping. For GIS analysis, I work with QGIS, PostGIS, and Python libraries like GeoPandas and Rasterio. I also integrate geocoding services, routing APIs, and real-time data visualization."
  },
  {
    id: 5,
    question: "Can you help with AI/ML for geospatial data?",
    answer: "Absolutely! I have experience in remote sensing ML, including feature extraction, semantic segmentation, land-cover classification, and change detection using satellite imagery. I can help you build and deploy ML models for geospatial applications."
  },
  {
    id: 6,
    question: "What is your communication process during projects?",
    answer: "I believe in transparent and regular communication. I provide project updates, respond promptly to messages, and ensure you're involved in key decisions. I'm available through your preferred communication channels and schedule regular check-ins to keep you informed about progress."
  }
];

const FAQ = () => {
  useEffect(() => {
    if (typeof AOS !== 'undefined' && AOS && typeof AOS.refresh === 'function') {
      setTimeout(() => {
        AOS.refresh();
      }, 300);
    }
  }, []);

  return (
    <section id="faq" className="section py-5 position-relative faq-section">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row text-center mb-5">
          <div className="col-12">
            <h1 className="mb-3 blue-gradient-text fw-bold portfolio-section-title" data-aos="fade-down">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-white-50 mb-0 portfolio-section-subtitle" data-aos="fade-up" data-aos-delay="100">
              Common questions about my services and expertise
            </p>
          </div>
        </div>

        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10" data-aos="fade-right" data-aos-delay="200">
            <Accordion defaultActiveKey="0" className="faq-accordion">
              {FAQS.map((faq, index) => (
                <Accordion.Item eventKey={String(index)} key={faq.id} className="faq-item">
                  <Accordion.Header className="faq-header">
                    <span className="faq-question">{faq.question}</span>
                  </Accordion.Header>
                  <Accordion.Body className="faq-body">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          <div className="col-lg-6 d-none d-lg-block" data-aos="fade-left" data-aos-delay="300">
            <div className="faq-image-wrapper">
              <img
                src="/img/ask.svg"
                alt="FAQs"
                className="faq-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
