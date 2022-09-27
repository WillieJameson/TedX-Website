import React from "react";
import HomeParticle from "../Components/HomeParticle"
import logo from "../images/logo.png";
import Logo2 from "../images/logo.png";

export default function HeroSection() {
  return (
    <div className="one">
      <div className="logo-container">
        <div
          className="columns is-mobile is-centered"
          style={{ width: "100%" }}
        >
          <div 
            className="column is-8 is-10-mobile"
            data-aos="fade-in"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="3000"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center">
            <img src={Logo2} class="image one-logo" alt="logo" />
          </div>
        </div>
        
      </div>
      <HomeParticle/>
    </div>
  );
}

/*
  <video className="video">
        <source src={Video} />
      </video>
*/
