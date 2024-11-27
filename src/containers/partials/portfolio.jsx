import React from "react";

const Portfolio = () => {
  return (
    <section id="projects" className="mt-6 position-relative">
        <img src="img/left.png" className="photo-left"/>
      <div className="container">
        <div className="row text-center">
          <h1 className="mb-2 blue-gradient-text fw-bold">PORTFOLIOS</h1>
        </div>

        <div className="row mt-4"></div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div
              className="card rounded"
              data-toggle="modal"
              data-target="#portfolio1Modal"
            >
              <img src="img/loan1.jpeg" alt="" />
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column px-3">
                    <span className="d-block fw-bold">
                      https://ismblending.com
                    </span>
                    <h4 className="fw-bold text-white mt-1">
                      Money Lending Platform
                    </h4>
                  </div>
                  <img src="img/view-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="card rounded"
              data-toggle="modal"
              data-target="#portfolio2Modal"
            >
              <img src="img/data-miner.png" alt="" />
              <div className="p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-column px-3">
                    <span className="d-block fw-bold">price analysis</span>
                    <h4 className="fw-bold text-white mt-1">
                      Data Mining Project
                    </h4>
                  </div>
                  <img src="img/view-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button id="loadMoreBtn" className="btn btn-primary mt-4">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
