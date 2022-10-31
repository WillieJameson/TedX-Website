import React from "react";
import EventLogo from "../images/event2.png";
import { Element } from "react-scroll";
import NavbarMenu from "../Components/NavbarMenu";
import Infinite from "../images/2022/Infinite.png";



function ThemeSection() {
  return (
    <Element
      name="theme"
      className="section is-medium"
    >
      <div className="container is-widescreen lg:pt-44 pt-36">
        <div className="absolute opacity-30 mx-auto right-0 left-0 text-center transform lg:scale-150 scale-100 ">
          <img src={Infinite} className="-z-10 mx-auto" alt="infinite"></img>
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
          L∞K UP
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
            L∞K UP! Can be interpreted as the microsoft excel formula of the same name, LOOKUP, which function is to search for and retrieve data from one place to another. Combined with the infinity symbol replacing both letter Os, L∞K UP! Serves as an analogy that you have the ability and capability to search for and ‘retrieve’ your own life answers among an infinite number of options. L∞K UP! can also be interpreted as a command to keep your head up towards the vast sky, where possibilities and answers are infinite.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default ThemeSection;
