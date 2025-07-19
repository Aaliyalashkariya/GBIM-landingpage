import React from 'react';

export const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
  <div className="container d-flex justify-content-between align-items-center">
    {/* Logo */}
    <a className="navbar-brand" href="#">
      <img
        src="https://www.gbim.com/images/logo-new.png"
        alt="GBIM Logo"
        height="30"
      />
    </a>

    {/* Toggler for mobile view */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Center nav items */}
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-danger fw-medium"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            Digital marketing
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">SEO</a></li>
            <li><a className="dropdown-item" href="#">PPC</a></li>
            <li><a className="dropdown-item" href="#">Social Media</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle fw-medium"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            Marketing technologies
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Analytics</a></li>
            <li><a className="dropdown-item" href="#">Automation</a></li>
          </ul>
        </li>
        <li className="nav-item"><a className="nav-link fw-medium" href="#">About us</a></li>
        <li className="nav-item"><a className="nav-link fw-medium" href="#">Blog</a></li>
        <li className="nav-item"><a className="nav-link fw-medium" href="#">Career</a></li>
        <li className="nav-item"><a className="nav-link fw-medium" href="#">Contact us</a></li>
      </ul>
    </div>

    {/* Right side CTA Button */}
    <div className="d-none d-lg-block">
      <a href="#" className="btn btn-danger rounded-pill px-4">
        <i className="bi bi-telephone-fill me-2"></i> Schedule a call
      </a>
    </div>
  </div>
</nav>

    </>
  );
};
