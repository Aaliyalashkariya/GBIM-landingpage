import React from 'react';
import './categoryShowcase.css';


const categories = [
  { name: 'Digital Creatives', icon: '/Icons-20250711T140116Z-1-001/Icons/Group 1000001844.png', active: true },
  { name: 'Branding', icon: '/Icons-20250711T140116Z-1-001/Icons/Group 1000001841.png' },
  { name: 'Print Design', icon: '/Icons-20250711T140116Z-1-001/Icons/Group 1000001842.png' },
  { name: 'Website Design', icon: '/Icons-20250711T140116Z-1-001/Icons/Group 1000001843.png' },
  { name: 'App Design', icon: '/Icons-20250711T140116Z-1-001/Icons/Group 1000001832.png' },
];

const images = [
  { src: '/Images/Rectangle 17243.png', alt: 'Design 1' },
  { src: '/Images/Rectangle 17244.png', alt: 'Design 2' },
  { src: '/Images/Rectangle 17245.png', alt: 'Design 3' },
  { src: '/Images/Rectangle 17246.png', alt: 'Design 4' },
  { src: '/Images/Rectangle 17247.png', alt: 'Design 5' },
  { src: '/Images/Rectangle 17248.png', alt: 'Design 6' },
  { src: '/Images/Rectangle 17249.png', alt: 'Design 7' },
];

const CategoryShowcase = () => {
  // Duplicate images for infinite scroll
  const scrollImages = [...images, ...images];

  return (
    <div className="category-showcase container-fluid py-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-4">
          <h3 className="fw-bold text-dark">
            Turning ideas into <span className="text-danger">outcomes.</span>
          </h3>
          <p className="text-muted small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="list-unstyled mt-4">
            {categories.map((cat, index) => (
              <li
                key={index}
                className={`category-item d-flex align-items-center gap-2 px-3 py-2 rounded mb-2 ${
                  cat.active ? 'active' : ''
                }`}
              >
                <img src={cat.icon} alt={cat.name} width="20" height="20" />
                <span>{cat.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Double Vertical Continuous Scroll */}
        <div className="col-md-9 d-flex justify-content-center align-items-center">
          <div className="vertical-slider">

            {/* Left column - scroll up */}
            <div className="slider-track scroll-up">
              {scrollImages.map((img, i) => (
                <div className="slider-image" key={`left-${i}`}>
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>

            {/* Right column - scroll down */}
            <div className="slider-track scroll-down">
              {scrollImages.map((img, i) => (
                <div className="slider-image" key={`right-${i}`}>
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;
