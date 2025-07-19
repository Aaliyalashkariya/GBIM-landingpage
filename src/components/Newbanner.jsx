import React from 'react';
import './Banner.css';

export const NewBanner = () => {
  return (
    <section className="banner-section text-center py-5 position-relative">
      <div className="container">
        <h1 className="fw-bold display-5">
          Strategic <span className="text-danger">Design Thinking</span> for <br />
          Smarter Digital Solutions
        </h1>
        <div className="mt-4 d-flex justify-content-center gap-3">
          <button className="btn btn-dark px-4 py-2 rounded-pill">Get service</button>
          <button className="btn btn-outline-dark px-4 py-2 rounded-pill">Learn more</button>
        </div>
      </div>

      <div className="floating-icons">
        <img src="public\Icons-20250711T140116Z-1-001\Icons\Group 1000001794 (1).png" className="icon icon1" alt="icon1" />
        <img src="public\Icons-20250711T140116Z-1-001\Icons\Group 1000001794.png" className="icon icon2" alt="icon2" />
        <img src="public\Icons-20250711T140116Z-1-001\Icons\Group 1000001797.png" className="icon icon3" alt="icon3" />
        <img src="public\Icons-20250711T140116Z-1-001\Icons\Group 1000001798.png" className="icon icon4" alt="icon4" />
        <img src="public\Icons-20250711T140116Z-1-001\Icons\Group 1000001799.png" className="icon icon5" alt="icon5" />
      </div>

<br /> <br /> <br /> <br /> <br /> <br /> <br />
    
    </section>
  );
};
