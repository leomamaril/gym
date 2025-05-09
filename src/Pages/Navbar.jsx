import { Link } from "react-router-dom";
import NavbarLink from "../Components/ui/Navlink";
import logo from "../assets/img/logo.png";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark gym-nav-bg g-0 shadow-light">
      <div className="container-fluid gym-sub-nav">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Gym Fit"
            height="30"
            className="d-inline-block align-text-bottom"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavbarLink target="home" href="/home" text="Home" />
            <NavbarLink target="about" href="/About" text="About Us" />
            <NavbarLink target="services" href="/Classes" text="Classes" />
            <NavbarLink target="contact" href="/Pricing" text="Pricing Plan" />
          </ul>
          <div className="ms-auto">
            <Link to="/consultation" className="btn-gymfit mx-3 font-nav">
              Book a Consultation
            </Link>
            <Link to="/contact" className="btn-gymfit-primary font-nav">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
