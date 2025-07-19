import React from "react";
import "./WhatWeOffer.css";

const WhatWeOffer = () => {
  return (
    <section className="offer-section text-center">
      <div className="section-label">
        <span>WHAT WE OFFER</span>
        <span className="section-divider">
          <i className="bi bi-star-fill"></i>
        </span>
      </div>

      <h2 className="offer-heading">
        <span className="gradient-text">
          Transforming Ideas into Visual Masterpieces,
        </span>{" "}
        <span className="gradient-text-strong">
          Elevating Brands to New Heights
        </span>{" "}
        with Innovative and Impactful Designs.
      </h2>
    </section>
  );
};

export default WhatWeOffer;
