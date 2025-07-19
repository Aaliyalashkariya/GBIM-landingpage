import React from "react";
import "./DesignSolutions.css";

const tagsRow1 = [
  "#Mobile App UI Design", "#Emailer Design", "#Infographic Design", "#Motion Graphics",
  "#Packaging Design", "#Visual Strategy", "#Visual Audit"
];

const tagsRow2 = [
  "#GenAI", "#VoiceAI", "#SmartVisuals", "#User Experience Design",
  "#Creative Concepts", "#Retail Display Design"
];

const TagRow = ({ tags, direction }) => (
  <div className={`tag-marquee marquee-${direction}`}>
    <div className="marquee-track">
      {[...tags, ...tags].map((tag, index) => (
        <span key={index} className="tag-pill">{tag}</span>
      ))}
    </div>
  </div>
);

const DesignSolutions = () => {
  return (
    <section className="solutions-section text-center">
      {/* Section Label */}
      <div className="section-label">
        <span>DESIGN BEYOND BOUNDARIES</span>
        <span className="section-divider">
          <i className="bi bi-star-fill"></i>
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="solutions-heading">
        <span className="gradient-text">We help you solve complex problems through</span><br />
        <span className="gradient-bold">human-centered, <strong>creative design solutions</strong></span>
      </h2>

      {/* Scrolling Tags */}
      <TagRow tags={tagsRow1} direction="left" />
      <TagRow tags={tagsRow2} direction="right" />
    </section>
  );
};

export default DesignSolutions;
