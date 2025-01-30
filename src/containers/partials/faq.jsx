import React, {useEffect} from "react";
import { Accordion, Card, Button } from 'react-bootstrap';
import AOS from "aos";

const FAQS = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies."
  },
  {
    id: 2,
    question: "How does React differ from Angular?",
    answer: "React is a library focused on building the UI, while Angular is a full-fledged framework that provides more built-in functionalities like routing and form handling."
  },
  {
    id: 3,
    question: "What is state in React?",
    answer: "State is an object that determines how a component renders and behaves. State can change over time, usually as a result of user actions."
  },
  {
    id: 4,
    question: "What are props in React?",
    answer: "Props (short for properties) are read-only attributes used to pass data from a parent component to a child component."
  },
  {
    id: 5,
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used in React to describe the UI."
  }
];


const FAQ = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, [])
  return (
    <div class="section m-0 faq-back blurred-border p-0">
      <div
        class="shape-divider"
        data-shape="wave-4"
        data-height="150"
        id="shape-divider-6017"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280 140"
          preserveAspectRatio="none"
        >
          <path
            class="shape-divider-fill"
            fill="#201353"
            d="M0 51.76c36.21-2.25 77.57-3.58 126.42-3.58 320 0 320 57 640 57 271.15 0 312.58-40.91 513.58-53.4V0H0z"
            opacity="0.3"
          ></path>
          <path
            class="shape-divider-fill"
            fill="#201353"
            d="M0 24.31c43.46-5.69 94.56-9.25 158.42-9.25 320 0 320 89.24 640 89.24 256.13 0 307.28-57.16 481.58-80V0H0z"
            opacity="0.5"
          ></path>
          <path
            class="shape-divider-fill"
            fill="#201353"
            d="M0 0v3.4C28.2 1.6 59.4.59 94.42.59c320 0 320 84.3 640 84.3 285 0 316.17-66.85 545.58-81.49V0z"
          ></path>
        </svg>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <h3 class="fw-bolder h1 my-5 blue-gradient-text" data-aos="fade-up"
            data-aos-delay="200">
              A few things clients
              <br />
              normally ask me
            </h3>
            <Accordion defaultActiveKey="0" data-aos="fade-right"
            data-aos-delay="500">
              {FAQS.map((faq, index) => (
                <Accordion.Item eventKey={String(index)} key={faq.id}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          <div class="col-lg-7">
            <img data-aos="fade-left"
            data-aos-delay="500"
              src="/img/ask.svg"
              alt="FAQs"
              class="px-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
