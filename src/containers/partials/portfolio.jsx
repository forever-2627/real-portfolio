import React, { useEffect } from "react";
import AOS from "aos";
import PortfolioCard from "../../components/PortfolioCard";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
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
    <section id="projects" className="mt-6 mb-5 pt-4 position-relative">
      <img
        src="img/left.png"
        className="photo-left"
        data-aos="fade-left"
        data-aos-duration="10000"
        data-aos-once="true"
      />
      <div className="container">
        <div className="row text-center">
          <h1 className="mb-2 blue-gradient-text fw-bold">PORTFOLIOS</h1>
        </div>

        <div className="row mt-4"></div>

        <div className="row mt-4">
          {PORTFOLIOS.map((portfolio) => {
            return (
              <PortfolioCard
                source={portfolio.source}
                title={portfolio.title}
                description={portfolio.description}
                toLink={portfolio.toLink}
                direction={portfolio.direction}
              />
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <button id="loadMoreBtn" className="btn btn-primary mt-5">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
