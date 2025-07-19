import React from 'react';
import './showcase.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowcaseSection = () => {
  const cards = [
    { image: 'public/Images/Rectangle 23866.png', alt: 'Design 1' },
    { image: 'public/Images/Rectangle 23871.png', alt: 'Design 2' },
    { image: 'public/Images/Rectangle 23872.png', alt: 'Design 3' },
    { image: 'public/Images/Rectangle 23873.png', alt: 'Design 4' },
    { image: 'public/Images/Rectangle 23874.png', alt: 'Design 5' },
    { image: 'public/Images/Rectangle 23875.png', alt: 'Design 6' },
    { image: 'public/Images/Rectangle 23876.png', alt: 'Design 7' },
  ];

  return (
    
   <div className="showcase-section text-white py-5">
      <div className="overlay" />
      <div className="container text-center content">
        <h2 className="title">
          Discover the <span className="highlight">AI-Powered</span> Designs<br />
          We've Brought to Life
        </h2>
        <p className="subtitle">
          Showcasing real, creative designs crafted through cutting-edge AI tools.
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-3 my-4">
          <button className="btn btn-outline-light rounded-pill px-4">Graphic design</button>
          <button className="btn btn-outline-light rounded-pill px-4">Motion graphics</button>
          <button className="btn btn-outline-light rounded-pill px-4">Brand video</button>
        </div>

        <div className="d-flex flex-nowrap justify-content-center gap-3 image-row mt-4">
          {cards.map((card, index) => (
            <div key={index} className="image-card shadow">
              <img src={card.image} alt={card.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
