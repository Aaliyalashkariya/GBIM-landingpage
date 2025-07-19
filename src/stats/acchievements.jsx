import React from "react";
import "./StatsSection.css";

// Inner Achievement component
const Achievement = ({ icon, value, label }) => {
  return (
    <div className="achievement text-center">
      <div className="stat-icon">
        <i className={`bi ${icon}`}></i>
      </div>
      <h5 className="fw-bold mb-0">{value}</h5>
      <small className="text-muted">{label}</small>
    </div>
  );
};

// Stats Section
const StatsSection = () => {
  return (
    <div className="stats-container">
      <div className="stats-box d-flex justify-content-between align-items-center">
        <Achievement icon="bi-award" value="20+" label="Years of Design Innovation" />
        <div className="stat-divider d-none d-md-block"></div>
        <Achievement icon="bi-megaphone" value="50+" label="Brands Launched from Scratch" />
        <div className="stat-divider d-none d-md-block"></div>
        <Achievement icon="bi-lightbulb" value="30+" label="Industries Designed For" />
        <div className="stat-divider d-none d-md-block"></div>
        <Achievement icon="bi-window" value="100+" label="Digital Interfaces Crafted" />
        <div className="stat-divider d-none d-md-block"></div>
        <Achievement icon="bi-people" value="200+" label="Clients Collaborated With" />
      </div>
    </div>
  );
};

export default StatsSection;
