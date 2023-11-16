import React from "react";
import EventLogo from "../images/event2.png";
import { Element } from "react-scroll";
import NavbarMenu from "../Components/NavbarMenu";
import SpaceTime from "../images/2023/LogoSpaceTime.png";

function ThemeSection() {
  return (
    <Element name="theme" className="section is-medium">
      <div className="container is-widescreen lg:pt-44 pt-36">
        <div className="absolute opacity-30 mx-auto right-0 left-0 text-center transform lg:scale-150 scale-100 ">
          <img src={SpaceTime} className="-z-10 mx-auto" alt="infinite"></img>
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
            Space and Time Color
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
              “Space and Time Color”, a phrase inspired by the work of art
              created by Enkel Dika or also known as Buko2. The combination of
              these words led to the meaning of an unstoppable evolving era.
              These past months in 2023 have been a roller coaster of situations
              in every aspect of our life. Transforming back to its original
              state before the pandemic will never be the solution. What we
              should do is increase our knowledge from our history and utilize
              this to plan ahead our future for the better. This is the core of
              progressive evolving era.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default ThemeSection;
