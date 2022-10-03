import React from "react";

import SpeakerCard from "../Components/SpeakerCard";
import { Element } from "react-scroll";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import ChloeStephanie from "../images/ChloeStephanie.jpg";
import KevinFrans from "../images/KevinFrans.jpg";
import BeatriceValerina from "../images/BeatriceValerina.jpg";
import NicoleCharlene from "../images/NicoleCharlene.jpg";
import RachelEmanuelle from "../images/RachelEmanuelle.jpg";
import TimothyRonald from "../images/TimothyRonald.jpg";
import AyeshaFelice from "../images/AyeshaFelice.jpg";
import RayhanMadrita from "../images/RayhanMadrita.jpg";
import AmandaKhairunnisa from "../images/AmandaKhairunnisa.jpg";




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
            />
          </SplideSlide>
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
            />
          </SplideSlide>
        
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
          />
          </SplideSlide>
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
          />
          </SplideSlide>
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
          />
          </SplideSlide>
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
          />
          </SplideSlide>
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
          />
          </SplideSlide>
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