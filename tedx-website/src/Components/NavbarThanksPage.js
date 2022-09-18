import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-black.png";

function NavbarThanks() {
  return (
    <div
      data-aos="fade-in"
      data-aos-offset="0"
      data-aos-delay="0"
      data-aos-duration="600"
      data-aos-mirror="true"
      data-aos-anchor-placement="top-center"
      className="navbar is-fixed-top is-hidden-touch"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to="/"><img src={Logo} style={{ height: "1.5rem" }} /></Link>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-menu">
          <div className="navbar-item is-size-5 has-text-weight-bold">
            <Link style={{marginRight: '50px'}}
              to="/"
              activeClass="active"
              smooth={true}
              spy={true}
              duration={750}
              className="link-on-white"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarThanks;
