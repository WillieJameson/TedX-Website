import React from "react";
import Particles from "react-tsparticles";
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
      <Particles
        className="particle"
        height="700px"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

/*
  <video className="video">
        <source src={Video} />
      </video>
*/
