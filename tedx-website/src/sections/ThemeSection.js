import React from "react";
import EventLogo from "../images/event2.png";
import { Element } from "react-scroll";
import NavbarMenu from "../Components/NavbarMenu";
import SpaceTime from "../images/2023/LogoSpaceTime.png";
import BgDecor from "../images/2024/bg-ish.png";
import MainframeSiege from "../images/2024/logo.png"

function ThemeSection() {
  return (
    <Element name="theme" className="section is-medium">
      <div className="container is-widescreen lg:pt-36 pt-36 pb-24">
        <div className="absolute mx-auto right-0 left-0 top-0 text-center transform scale-100 ">
          {/* <img src={Circle} className="absolute right-0 -z-10 scale-24 lg:scale-80" alt="infinite"/> */}
          {/* <img src={Wave} className="absolute left-0 bottom-[-250px] lg:bottom-[200px] lg:scale-24" alt="infinite"/> */}
          <img src={BgDecor} className="absolute -z-10" alt="infinite"/>
          <img src={MainframeSiege} className="opacity-30 -z-10 mx-auto" alt="infinite"/>
          

        </div>
        <div className="columns is-centered is-vcentered pb-7 -mt-20 lg:-mt-0">
          <h1
            className="text-5xl lg:text-8xl mx-auto lg:mx-0 text-red-600 font-bold pt-32 font-archivo text-center"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            Mainframe Under Siege
          </h1>
        </div>
        <div className="columns is-vcentered z-10">
          <div
            className="column is-size-5 mx-10 pt-7"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="0"
            data-aos-duration="1500"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <p className="lg:pt-3 text-lg lg:text-2xl lg:text-center mx-5 text-justify">
            Any mainframe in the world is no longer safe due to the evolution of cybercrime. A firewall is one way to defend the mainframe, but it’s constantly modified to maintain its level of security. It is the same as tackling the real world. Issues in the future will continuously advance, which means our problem-solving method needs to adapt. Future problems shouldn’t be solved using present methods.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default ThemeSection;
