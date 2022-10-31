import React from "react";
import YouTube from "react-youtube";
import { Element } from "react-scroll";
import Trailer from '../images/TrailerTEDX.mp4'

function TrailerSection() {
  const opts = {
    height: "480",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      fs: 0,
      modestbranding: 1,
      rel: 0,
    },
  };
  return (
    <Element name="trailer" className="section is-medium">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8 is-12-mobile has-text-centered pt-32">
            <div
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <h1 className="section-title is-size-3-mobile">TRAILER</h1>
            </div>
            <div
              data-aos="flip-down"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="100"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              {/* <YouTube videoId="RFJUBAfI2xc" opts={opts} className="mt-3" /> */}
              {/* <Video width="320" height="240" controls>
                  <source src={Trailer}>
                </Video> */}
                <div className="bg-white">
                <video src={Trailer}>
                  {/* adadasdsa
                    <source  src={Trailer} type="video/mp4" />
                    Sorry, your browser doesn't support videos. */}
                </video>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default TrailerSection;
