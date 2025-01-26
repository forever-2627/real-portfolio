import React from "react";

const FAQ = () => {
  return (
    <div class="section m-0 faq-back">
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
            <h3 class="fw-bolder h1 my-5">
              A few things clients
              <br />
              normally ask me
            </h3>
            <div class="accordion" data-collapsible="true">
              <div class="accordion-header">
                <div class="accordion-icon">
                  <i class="accordion-closed icon-line-plus color gradient-text gradient-red-yellow"></i>
                  <i class="accordion-open icon-line-minus color gradient-text gradient-red-yellow"></i>
                </div>
                <div class="accordion-title">
                  Design &amp; Development Process
                </div>
              </div>
              <div class="accordion-content">
                Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Integer
                posuere erat a ante venenatis dapibus posuere velit aliquet.
              </div>

              <div class="accordion-header">
                <div class="accordion-icon">
                  <i class="accordion-closed icon-line-plus color gradient-text gradient-red-yellow"></i>
                  <i class="accordion-open icon-line-minus color gradient-text gradient-red-yellow"></i>
                </div>
                <div class="accordion-title">What is Our Refund Policy</div>
              </div>
              <div class="accordion-content">
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Duis mollis, est non commodo luctus. Aenean lacinia
                bibendum nulla sed consectetur. Cras mattis consectetur purus
                sit amet fermentum.
              </div>

              <div class="accordion-header" id="id-accordion-3">
                <div class="accordion-icon">
                  <i class="accordion-closed icon-line-plus color gradient-text gradient-red-yellow"></i>
                  <i class="accordion-open icon-line-minus color gradient-text gradient-red-yellow"></i>
                </div>
                <div class="accordion-title">Our Processing Time</div>
              </div>
              <div class="accordion-content">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Integer
                posuere erat a ante venenatis dapibus posuere velit aliquet.
                Duis mollis, est non commodo luctus. Aenean lacinia bibendum
                nulla sed consectetur.
              </div>

              <div class="accordion-header" id="id-accordion-4">
                <div class="accordion-icon">
                  <i class="accordion-closed icon-line-plus color gradient-text gradient-red-yellow"></i>
                  <i class="accordion-open icon-line-minus color gradient-text gradient-red-yellow"></i>
                </div>
                <div class="accordion-title">
                  How do I Pay and Payment Method
                </div>
              </div>
              <div class="accordion-content">
                Nullam id dolor id nibh ultricies vehicula ut id elit. Integer
                posuere erat a ante venenatis dapibus posuere velit aliquet.
                Duis mollis, est non commodo luctus. Aenean lacinia bibendum
                nulla sed consectetur.
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <img
              src="demos/freelancer/images/ask.svg"
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
