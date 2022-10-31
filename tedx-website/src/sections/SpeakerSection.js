import React from "react";

import SpeakerCard from "../Components/SpeakerCard";
import { Element } from "react-scroll";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Angelo from "../images/2022/Angelo.png";
import Eunike from "../images/2022/Eunike.png";
import Gabriella  from "../images/2022/Gabriella.png";
import Gabriella_Tan from "../images/2022/Gabriella_Tan.png";
import Gerald  from "../images/2022/Gerald.png";
import Grace from "../images/2022/Grace.png";
import ibrahim from "../images/2022/ibrahim.png";
import Karlina from "../images/2022/Karlina.png";





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
                Karlina Octaviany
                <br />
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
                Chloe <br />Stephanie
                <br />
              </h2>
            }
            genne={<img src={ChloeStephanie} />}
            gennetext={
              <p className="word-format text-sm">
                Chloe, a passionate 11th grader of SMAK 1 PENABUR Jakarta wanting to share her perspectives in understanding self worth. She has a unique approach on her interest in crypto currency and her concern towards self worth. The correlation in between both of it made her realizes the importance of influence in decision making. Explore and engage in this topic, hence her talk will guide you through! 
              </p>
            }
          />
          </SplideSlide>
          <SplideSlide>
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Kevin Frans <br />Periatna
                <br />
              </h2>
            }
            genne={<img src={KevinFrans} />}
            gennetext={
              <p className="word-format text-sm">
               Kevin is an 11th grader at SMAK 1 Penabur Jakarta. As a youth living in this rising digital and creative era, he has realized that the entertainment industry is one of the most popular industries in our country, but Indonesia has yet to fully develop and utilise it. Being a constant audience has made him concerned about the future of Indonesia's entertainment industry that has not reached it's full potential yet. Interested in uncovering the root problems, through his talk at TEDxYouth@SmakOne, he wants to share his perspectives and solutions to help reform and maximize Indonesia's entertainment industry to its fullest potential. 
              </p>
            }
          /></SplideSlide>
           <SplideSlide>         
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Beatrice <br />Valerina
                <br />
              </h2>
            }
            genne={<img src={BeatriceValerina} />}
            gennetext={
              <p className="word-format text-sm">
                Vibrant, resourceful, and courageous, is what best describes Beatrice, a second year student at SMAK 1 PENABUR Jakarta. She strives for new knowledge, trying to live her best to the utmost. During her study, she often feels intrigued to know why her peers are prone to stagnation. She believes that the endless wonders of the world, with our own mind being at the center of it, is intriguing and worth sharing here, at TEDxYouth@SmakOne.
              </p>
            }
          /></SplideSlide>
        
            <SplideSlide>
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Nicole <br />Charlene
                <br />
              </h2>
            }
            genne={<img src={NicoleCharlene} />}
            gennetext={
              <p className="word-format text-sm">
               Nicole Charlene is a SMAK 1 Alumi who is currently studying International Relation at Leiden University, Netherlands. 
               She is a diligent, strong-willed woman who always aim for the better version ahead. Get ready to unveil the formula to stand up and seize away your own definition of success!
              </p>
            }
          /></SplideSlide>
            <SplideSlide>
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Rachel <br />Emmanuelle
                <br />
              </h2>
              
            }
            genne={<img src={RachelEmanuelle} />}
            gennetext={
              <p className="word-format text-sm pb-20">
                Currently pursuing a degree in Materials Engineering at Nanyang Technological University, Singapore, Rachel Emmanuelle is also a SMAK 1 alumni most known for her musical talents. However, despite being accomplished in various fields in life, she never fails to stop and appreciate the smaller things around her. Watch as she shares about her experiences in encountering the beauty of little things at TedxYouth@SmakOne.  
              </p>
            }
          /></SplideSlide>
          <SplideSlide>
            <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Timothy <br />Ronald
                <br />
              </h2>
              
            }
            genne={<img src={TimothyRonald} />}
            gennetext={
              <p className="word-format text-sm">
                Timothy Ronald, a young investor who co-founded Ternak Uang at the age of 19. He started his journey early, when he was 15, he had shown his persistency through trying different kinds of businesses. Right now, he's on track with a mission to improve Indonesia's financial literacy. With that said, he'd always believed in the importance of investing, both financially and personally. Timothy has been an inspiration for many young Indonesians, through his TEDxYouth@SmakOne Talk, he hopes to raise awareness about investments and help the youths to obtain a better value in life.
              </p>
            }
          /></SplideSlide>
          <SplideSlide>
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Ayesha <br />Felice
                <br />
              </h2>
            }
            genne={<img src={AyeshaFelice} />}
            gennetext={
              <p className="word-format text-sm">
                Ayesha Felice is the founder of the organization Gores Denai, which now has developed into something bigger as Yayasan Generasi Penggerak Global. She is now studying at Erasmus University, Rotterdam. 
                Ayesha's interest in the world of education has been growing gradually, and she is now ready to share her story about thousands of global opportunities.
              </p>
            }
          /></SplideSlide>
          <SplideSlide>
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Dr. Rayhan Maditra Indrayanto
                <br />
              </h2>
            }
            genne={<img src={RayhanMadrita} />}
            gennetext={
              <p className="word-format text-sm">
                Dr. Rayhan Maditra Indrayanto is a psychiatry resident at RSCM and founder of MAKO TALK, an educative platform comprising discussions about human health and other critical, stigma-breaking topics. He is a true enthusiast of mental health and neuroscience, with a clear goal of inspiring the young generation to tackle their psychological struggles. After successfully winning his mental battles, Dr. Rayhan hopes to make an impact and in turn, bring solace to those at their low points.
              </p>
            }
          /></SplideSlide>
          <SplideSlide>
          <SpeakerCard
            name={
              <h2 class="is-size-3 has-text-weight-bold">
                Amanda <br />Khairunnisa
                <br />
              </h2>
            }
            genne={<img src={AmandaKhairunnisa} />}
            gennetext={
              <p className="word-format text-sm">
                Amanda Khairunnisa, Bachelor of Arts in Digital Culture is an alumnus of King’s College London. She realized that her dream was to empower burgeoning startups to create solid foundations for big data processing and data-driven solutions. She never limits her knowledge and always strives for new things. Having recently honed her technical skills in Python, Data Analytics, Data Visualization, and Machine Learning, she is ready to disrupt the industry for the better.
              </p>
            }
          /></SplideSlide>
         </Splide> 
      </div>
    </Element>
  );
}