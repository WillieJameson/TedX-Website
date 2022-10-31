import React from "react";

import SpeakerCard from "../Components/SpeakerCard";
import { Element } from "react-scroll";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Angelo from "../images/2022/Angelo.webp";
import Eunike from "../images/2022/Eunike.webp";
import Gabriella  from "../images/2022/Gabriella.webp";
import Gabriella_Tan from "../images/2022/Gabriella_Tan.webp";
import Gerald  from "../images/2022/Gerald.webp";
import Grace from "../images/2022/Grace.webp";
import Ibrahim from "../images/2022/ibrahim.webp";
import Karlina from "../images/2022/Karlina.webp";





export default function SpeakerSection() {
  return (
    <Element name="speaker" 
          className=" lg:mx-10 xl:mx-20"
          data-aos="fade-in"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center">
      <div className="">
        <div>
          <h1 className="section-title has-text-centered is-size-1-mobile">
            <b>SPEAKERS</b>
          </h1>
        </div>
          <Splide className="hidden lg:block" options={ { 
            type: 'loop',
            perPage : 3,
            focus : "center",
            autoHeight : true,
          } }>
          <SplideSlide >
            <SpeakerCard
              name={
                <h2 class="is-size-3 has-text-weight-bold">
                  Gabriella Clara <br /> Subakti
                  <br />
                </h2>
              }
              genne={<img src={Gabriella} />}
              gennetext={
                <p className="word-format text-sm">
                  An intellectual enthusiast with a passion for building her social network, Gabriella Clara Subakti is an 11th grader at SMAK 1 Penabur Jakarta. As a youth navigating life in 2022, she is intrigued by the setback caused by the pandemic towards her friendships. Every relationship starts with a conversation and she aspires to connect with people on a deeper level. Thus, sharing her perspective on assumptions, conversation, blindspots and many more through her talk at TEDXYOUTH@SMAKONE. 
                </p>
              }
            />
          </SplideSlide>
          <SplideSlide>
            <SpeakerCard
              name={
                <h2 class="is-size-3 has-text-weight-bold">
                  Eunike Stellia  <br />Lee
                  <br />
                </h2>
              }
              genne={<img src={Eunike} />}
              gennetext={
                <p className="word-format text-sm">
                Eunike Stella Lee, describing her as charming and clever, doesn’t do her enough justice. She is currently an 11th grader in SMAK1's science track and is here to give some interesting thoughts on human nature. Eunike is a firm believer in natural-born curiosity. She believes that humans are all born curious, and not just in one branch, but multiple. A problem arises when hyper-specialization threatens that same curiosity, specialization amplified throughout modern generations. Don’t fret, though, in this talk Eunike will be here to spread awareness of the deterioration of curiosity and how to build a mindset countering this dilemma. 
                </p>
              }
            />
          </SplideSlide>
          <SplideSlide>         
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Grace Ananda  <br />Josephine
                <br />
              </h2>
            }
            genne={<img src={Grace} />}
            gennetext={
              <p className="word-format text-sm">
                Grace is an 11th grader studying at Smak One, she is most accurately described by the word cheerful and expressive. Inspired by her own personality traits, she dived deep into re-defining what a social butterfly really is. The term itself contains the word 'butterfly' whose characteristics introduced us to this term in the first place. Aware of the fact that not everyone is built to be a social butterfly and the society's tendency to label those categorized as one, she urges to show the society her perspectives towards social butterflies.
              </p>
            }
            />
          </SplideSlide>
          <SplideSlide>
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Gabriella Tan  <br />Atmaja
                <br />
              </h2>
              
            }
            genne={<img src={Gabriella_Tan} />}
            gennetext={
              <p className="word-format text-sm pb-20">
                Gabriella Tan Atmaja, an undergraduate student at University of Indonesia’s architecture program. Back when she was still studying in SMAK1, she was part of OSIS, was the captain of First, and all around known for her artistic skills. So, why did she major in architecture? Here, she will take on the thought that you CAN make a living off the arts. Helping and assuring future generations to pursue their dreams.
              </p>
            }
          />
          </SplideSlide>
          
          <SplideSlide>
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Gerald  <br />Sebastian
                <br />
              </h2>
            }
            genne={<img src={Gerald} />}
            gennetext={
              <p className="word-format text-sm">
               Gerald Sebastian is a SMAK 1 alumni who is known best as the co-Founder of Kok Bisa?, a digital education platform. Just as through Kok Bisa?'s contents and his other activities, Gerald Sebastian's TEDxYouth@SmakOne talk shows his determination in shaping a better and more modern education system for the youth of Indonesia. 
              </p>
            }
          />
          </SplideSlide>

          <SplideSlide>
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Ibrahim Kholilul  <br />Rohman
                <br />
              </h2>
            }
            genne={<img src={Ibrahim} />}
            gennetext={
              <p className="word-format text-sm">
                Ibrahim Kholilul Rohman is a Senior Senior Research Associate at Indonesia Financial Group Progress. His role is to conduct research and study to anticipate macroeconomic and industry adversities. On the digital economics discourses, he was involved at various occasions of consultations, training and seminars with government institutions. His passion in educating the young generation of Indonesia has brought him to be one of the lecturers at University of Indonesia. Through his TEDxYouth@SmakOne Talk, he aims to share the challenges of Indonesia's economic growth through different lenses.
              </p>
            }
          />
          </SplideSlide>

          <SplideSlide>
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Angelo  <br />Wijaya
                <br />
              </h2>
              
            }
            genne={<img src={Angelo} />}
            gennetext={
              <p className="word-format text-sm">
                "Angelo Wijaya is one of Indonesia’s delegation for Y20, which is an official consultation forum for youth from all G20 member countries. Angelo’s dedication toward the nation growth shows us deeply that he is now ready to bring Indonesia towards a better place."
              </p>
            }
          />
          </SplideSlide>

          <SplideSlide>
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Karlina 
                <br />
                Octaviany
              </h2>
            }
            genne={<img src={Karlina} />}
            gennetext={
              <p className="word-format text-sm">
                "Karlina Octaviany,  A digital anthropologist, digital communication consultant, and graphic recorder. Throughout her career, she has helped many people in navigating the labyrinth that is the internet and talked in countless seminars on varying topics. This time she is here to tackle another concern. Information overload, the inability to effectively process information. With all of this information coming at us at unprecedented speed, a catch was bound to happen. In her talk, she will give us ways to find our wanted information without much back and forth, while properly processing the information relayed to us.  "
              </p>
            }
          />
          </SplideSlide>
         </Splide>
         <Splide className="block lg:hidden" options={ {
            type: 'loop',
            perPage : 1,
            focus : "center",
            autoHeight : true,
          } }>
            <SplideSlide >
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
               Gabriella Clara <br /> Subakti
                <br />
              </h2>
            }
            genne={<img src={Gabriella} />}
            gennetext={
              <p className="word-format text-sm">
                An intellectual enthusiast with a passion for building her social network, Gabriella Clara Subakti is an 11th grader at SMAK 1 Penabur Jakarta. As a youth navigating life in 2022, she is intrigued by the setback caused by the pandemic towards her friendships. Every relationship starts with a conversation and she aspires to connect with people on a deeper level. Thus, sharing her perspective on assumptions, conversation, blindspots and many more through her talk at TEDXYOUTH@SMAKONE. 
                </p>
            }
          />
          </SplideSlide>
          <SplideSlide>
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                 Eunike Stellia  <br />Lee
                <br />
              </h2>
            }
            genne={<img src={Eunike} />}
            gennetext={
              <p className="word-format text-sm">
               Eunike Stella Lee, describing her as charming and clever, doesn’t do her enough justice. She is currently an 11th grader in SMAK1's science track and is here to give some interesting thoughts on human nature. Eunike is a firm believer in natural-born curiosity. She believes that humans are all born curious, and not just in one branch, but multiple. A problem arises when hyper-specialization threatens that same curiosity, specialization amplified throughout modern generations. Don’t fret, though, in this talk Eunike will be here to spread awareness of the deterioration of curiosity and how to build a mindset countering this dilemma.
              </p>
            }
          /></SplideSlide>
           <SplideSlide>         
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Grace Ananda  <br />Josephine
                <br />
              </h2>
            }
            genne={<img src={Grace} />}
            gennetext={
              <p className="word-format text-sm">
                Grace is an 11th grader studying at Smak One, she is most accurately described by the word cheerful and expressive. Inspired by her own personality traits, she dived deep into re-defining what a social butterfly really is. The term itself contains the word 'butterfly' whose characteristics introduced us to this term in the first place. Aware of the fact that not everyone is built to be a social butterfly and the society's tendency to label those categorized as one, she urges to show the society her perspectives towards social butterflies.
              </p>
            }
          /></SplideSlide>
        
            <SplideSlide>
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Gabriella Tan  <br />Atmaja
                <br />
              </h2>
            }
            genne={<img src={Gabriella_Tan} />}
            gennetext={
              <p className="word-format text-sm">
               Gabriella Tan Atmaja, an undergraduate student at University of Indonesia’s architecture program. Back when she was still studying in SMAK1, she was part of OSIS, was the captain of First, and all around known for her artistic skills. So, why did she major in architecture? Here, she will take on the thought that you CAN make a living off the arts. Helping and assuring future generations to pursue their dreams.
              </p>
            }
          /></SplideSlide>
            <SplideSlide>
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Gerald  <br />Sebastian
                <br />
              </h2>
              
            }
            genne={<img src={Gerald} />}
            gennetext={
              <p className="word-format text-sm pb-20">
                Gerald Sebastian is a SMAK 1 alumni who is known best as the co-Founder of Kok Bisa?, a digital education platform. Just as through Kok Bisa?'s contents and his other activities, Gerald Sebastian's TEDxYouth@SmakOne talk shows his determination in shaping a better and more modern education system for the youth of Indonesia. 
              </p>
            }
          /></SplideSlide>
          <SplideSlide>
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Ibrahim Kholilul  <br />Rohman
                <br />
              </h2>
              
            }
            genne={<img src={Ibrahim} />}
            gennetext={
              <p className="word-format text-sm">
                 Ibrahim Kholilul Rohman is a Senior Senior Research Associate at Indonesia Financial Group Progress. His role is to conduct research and study to anticipate macroeconomic and industry adversities. On the digital economics discourses, he was involved at various occasions of consultations, training and seminars with government institutions. His passion in educating the young generation of Indonesia has brought him to be one of the lecturers at University of Indonesia. Through his TEDxYouth@SmakOne Talk, he aims to share the challenges of Indonesia's economic growth through different lenses.
              </p>
            }
          /></SplideSlide>
          <SplideSlide>
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Angelo  <br />Wijaya
                <br />
              </h2>
            }
            genne={<img src={Angelo} />}
            gennetext={
              <p className="word-format text-sm">
                "Angelo Wijaya is one of Indonesia’s delegation for Y20, which is an official consultation forum for youth from all G20 member countries. Angelo’s dedication toward the nation growth shows us deeply that he is now ready to bring Indonesia towards a better place."
              </p>
            }
          /></SplideSlide>
          <SplideSlide>
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Karlina 
                <br />
                Octaviany
              </h2>
            }
            genne={<img src={Karlina} />}
            gennetext={
              <p className="word-format text-sm">
               "Karlina Octaviany,  A digital anthropologist, digital communication consultant, and graphic recorder. Throughout her career, she has helped many people in navigating the labyrinth that is the internet and talked in countless seminars on varying topics. This time she is here to tackle another concern. Information overload, the inability to effectively process information. With all of this information coming at us at unprecedented speed, a catch was bound to happen. In her talk, she will give us ways to find our wanted information without much back and forth, while properly processing the information relayed to us.  "
              </p>
            }
          /></SplideSlide>
         </Splide> 
      </div>
    </Element>
  );
}