import React from "react";
import AboutImage from "../images/about.png";
import {Element} from "react-scroll";

export default function FifthSection() {
  return (
    <Element name="about" className=" is-medium mx-16 xl:my-40">
      <div className=" is-widescreen">
        <div className="columns  is-centered-mobile is-vcentered">
          <div className="column is-7 is-10-mobile is-offset-1-mobile"
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-delay="100"
                        data-aos-duration="1500"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center">
            <h1 className="section-title is-size-1-mobile">
              <b>ABOUT</b>
            </h1>
            <h1 className="is-size-4 has-text-left mt-5 mb-2">
              <strong className="TED">TEDx</strong>Youth@SmakOne
            </h1>
            <p>
              TEDxYouth@SmakOne is an independently designed event which serves 
              as a collaboration platform aiming to inspire the youth of our
              community to take action in challenging the spectrum and make a change.
              It is organized by students of SMAK 1 Penabur Jakarta, with the vision of 
              giving back to our community through sharing relevent and useful ideas
              with insights from the community itself.
            </p>
            <h1 className="is-size-4 has-text-left mt-5 mb-2">
              <strong className="TED">TED</strong>
            </h1>
            <p>
              TED is a nonprofit organization devoted to Ideas Worth Spreading.
              Started as a four-day conference in California 30 years ago, TED
              has grown to support its mission with multiple initiatives. The
              two annual TED Conferences invite the world's leading thinkers and
              doers to speak for 18 minutes or less. Many of these talks are
              then made available, free, at TED.com. TED speakers have included
              Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson,
              Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan
              and Daniel Kahneman.<br/><br/>
              The annual TED Conference takes place each spring in Vancouver,
              British Columbia. TED's media initiatives include TED.com, where
              new TED Talks are posted daily; TED Translators, which provides
              subtitles and interactive transcripts as well as translations from
              volunteers worldwide; the educational initiative TED-Ed. TED has
              established The Audacious Project that takes a collaborative
              approach to funding ideas with the potential to create change at
              thrilling scale; TEDx, which supports individuals or groups in
              hosting local, self- organized TED-style events around the world,
              and the TED Fellows program, helping world-changing innovators
              from around the globe to amplify the impact of their remarkable
              projects and activities.
            </p>
            <h1 className="is-size-4 has-text-left mt-5 mb-2">
              <strong className="TED">TEDx</strong>,{" "}
              <strong className="TED">x</strong> = independently organized event
            </h1>
            <p>
              In the spirit of ideas worth spreading, TEDx is a program of
              local, self-organized events that bring people together to share a
              TED-like experience. At a TEDx event, TED Talks video and live
              speakers combine to spark deep discussion and connection. These
              local, self-organized events are branded TEDx, where x =
              independently organized TED event. The TED Conference provides
              general guidance for the TEDx program, but individual TEDx events
              are self-organized.
            </p>
          </div>
          <div className="column">
            <div className="image"
                        data-aos="fade-in"
                        data-aos-offset="0"
                        data-aos-delay="0"
                        data-aos-duration="2000"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center">
              <img src={AboutImage} />
            </div>
          </div>
        </div>
    </div>
    </Element>
  );
}
