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
      source: "img/superfreevpn.png",
      title: "Super Free VPN",
      description:
        "100% free, fast, no-log VPN offering global servers, unlimited bandwidth, and strong privacy protection.",
      toLink: "#",
      direction: "left",
    },
    {
      source: "img/mapanalysis.png",
      title: "Mapping Software",
      description:
        "Visual mapping software for teams to analyze, visualize, and optimize location data for better business decisions.",
      toLink: "#",
      direction: "right",
    },
    {
      source: "img/wetlanddetection.png",
      title: "Wetland Detection",
      description:
        "Wetland detection with satellite imagery uses remote sensing to identify and monitor wetland areas based on surface characteristics.",
      toLink: "#",
      direction: "right",
    }
  ];

  return (
    <section id="projects" className="mt-6 mb-5 pt-5 pb-5 position-relative">
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
                index={index}
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
