import React, { useEffect } from "react";
import AOS from "aos";
import PortfolioCard from "../../components/PortfolioCard";

const Portfolio = () => {
  useEffect(() => {
    // AOS should be initialized once globally, but refresh if needed
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  }, []);
  const PORTFOLIOS = [
    {
      source: "img/loan1.jpeg",
      title: "Money Lending Platform",
      description:
        "This is money lending website. This site has User Dashboard, Admin Panel and deployed on https://ismblending.com",
      toLink: "#",
      direction: "left",
    },
    {
      source: "img/data-miner.png",
      title: "Data Mining Project",
      description:
        "This is data mining project from excel spreadsheet to see the reactionship between the price and sold amount.",
      toLink: "#",
      direction: "right",
    },
  ];

  return (
    <section id="projects" className="mt-6 mb-5 pt-5 pb-5 position-relative">
      <img
        src="img/left.png"
        className="photo-left"
        data-aos="fade-left"
        data-aos-duration="10000"
        data-aos-once="true"
      />
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h1 className="mb-3 blue-gradient-text fw-bold portfolio-section-title">PORTFOLIOS</h1>
            <p className="text-white-50 mb-0 portfolio-section-subtitle">
              Explore my latest projects and creative work
            </p>
          </div>
        </div>

        <div className="row g-4 mt-2">
          {PORTFOLIOS.map((portfolio, index) => {
            return (
              <PortfolioCard
                key={index}
                source={portfolio.source}
                title={portfolio.title}
                description={portfolio.description}
                toLink={portfolio.toLink}
                direction={portfolio.direction}
              />
            );
          })}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button id="loadMoreBtn" className="btn btn-primary btn-lg px-5 py-3 portfolio-load-btn">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
