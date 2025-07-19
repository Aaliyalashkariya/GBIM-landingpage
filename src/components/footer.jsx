import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light pt-4">
      <div className="container">
        {/* Top Links Section */}
        <div className="row border-bottom pb-4">
          <div className="col-6 col-md-2 mb-3">
            <h6 className="text-dark fw-bold">DIGITAL MARKETING</h6>
            <hr className="mt-1 mb-2" />
            <ul className="list-unstyled small">
              <li>SEO</li>
              <li>Social Media Marketing</li>
              <li>Design Thinking</li>
              <li>Video Production</li>
              <li>ORM</li>
              <li>Content Marketing</li>
              <li>Influencer Marketing</li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h6 className="text-dark fw-bold">PAID ADVERTISING</h6>
            <hr className="mt-1 mb-2" />
            <ul className="list-unstyled small">
              <li>Social Media Ads</li>
              <li>Google Ads</li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h6 className="text-dark fw-bold">MARKETING TECHNOLOGIES</h6>
            <hr className="mt-1 mb-2" />
            <ul className="list-unstyled small">
              <li>Web Development</li>
              <li>Mobile App</li>
              <li>Website Maintenance</li>
              <li>Hosting Support</li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h6 className="text-dark fw-bold">CONSULTING</h6>
            <hr className="mt-1 mb-2" />
            <ul className="list-unstyled small">
              <li>Marketing Consulting</li>
              <li>Lead Generation</li>
              <li>SEO Outsourcing</li>
              <li>PPC Outsourcing</li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h6 className="text-dark fw-bold">QUICK LINKS</h6>
            <hr className="mt-1 mb-2" />
            <ul className="list-unstyled small">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Testimonial</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Achievements</li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h6 className="text-dark fw-bold">RESOURCES</h6>
            <hr className="mt-1 mb-2" />
            <ul className="list-unstyled small">
              <li>Case Studies</li>
              <li>Design Portfolio</li>
              <li>Blog</li>
              <li>Resources</li>
              <li>Tools</li>
              <li>Clientele</li>
            </ul>
          </div>
        </div>

        {/* Middle Section */}
        <div className="row py-4 align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <div className="me-2">
                {/* You can replace this with an img or svg icon */}
                <span
                  style={{
                    display: "inline-block",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#c0392b",
                    borderRadius: "5px",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    lineHeight: "30px",
                    fontSize: "20px",
                  }}
                >
                  G
                </span>
              </div>
              <div>
                <strong>GBIM</strong>
                <p className="mb-0">
                  <span role="img" aria-label="location">
                    📍
                  </span>{" "}
                  <strong>HEAD OFFICE</strong>
                </p>
                <address className="small mb-0">
                  1404-1405, Rupa Solitaire, <br />
                  Sector-1, Millenium Business Park, <br />
                  Mahape, Navi Mumbai, <br />
                  Maharashtra (400 710), INDIA.
                </address>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <strong>OTHER BRANCH</strong>
            <ul className="list-unstyled small mb-0">
              <li>Pune</li>
              <li>Bangalore</li>
              <li>Vadodara</li>
              <li>Delhi</li>
            </ul>
          </div>

          <div className="col-md-4 text-md-end">
            <p className="mb-1">
              <a href="mailto:sales@gbim.com" className="text-dark fw-bold text-decoration-none">
                <i className="bi bi-envelope-fill me-1"></i> sales@gbim.com
              </a>
            </p>
            <p className="mb-0">
              <a href="tel:#" className="text-dark fw-bold text-decoration-none">
                <i className="bi bi-telephone-fill me-1"></i> Schedule A Call
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row border-top pt-3 pb-3 align-items-center">
          <div className="col-md-6 small text-muted">
            ©Copyright 2025 GBIM™. All rights reserved
          </div>
          <div className="col-md-6 text-md-end small">
            Important Notice: Beware of Job Offer Scams-{" "}
            <a href="#" className="text-danger text-decoration-none">
              Click Here
            </a>
            <br />
            Follow Us:{" "}
            <a href="#" className="text-decoration-none mx-1">
              <i className="bi bi-instagram" style={{ color: "#E1306C" }}></i>
            </a>
            <a href="#" className="text-decoration-none mx-1">
              <i className="bi bi-facebook" style={{ color: "#1877F2" }}></i>
            </a>
            <a href="#" className="text-decoration-none mx-1">
              <i className="bi bi-twitter" style={{ color: "#1DA1F2" }}></i>
            </a>
            <a href="#" className="text-decoration-none mx-1">
              <i className="bi bi-youtube" style={{ color: "#FF0000" }}></i>
            </a>
            <a href="#" className="text-decoration-none mx-1">
              <i className="bi bi-linkedin" style={{ color: "#0A66C2" }}></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
