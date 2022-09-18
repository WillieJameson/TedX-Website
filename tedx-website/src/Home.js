import React, { useEffect,useState } from "react";
import NavbarDesktop from "./Components/NavbarDesktop";
import NavbarMobile from "./Components/NavbarMobile";
import HeroSection from "./sections/HeroSection";
import TrailerSection from "./sections/TrailerSection";
import ThemeSection from "./sections/ThemeSection";
import BannerSection from "./sections/BannerSection";
import SpeakerSection from "./sections/SpeakerSection";
import FaqSection from "./sections/FaqSection"
import AboutSection from "./sections/AboutSection";
import ScheduleSection from "./sections/ScheduleSection";
import Footer from "./Components/Footer";
import NavbarMenu from "./Components/NavbarMenu";
import "./styles/global.scss";
import RegisterSection from "./sections/RegisterSection";
import AOS from 'aos';
import 'aos/dist/aos.css';



AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
});

function Home() {
  const [hideMenu,showMenu] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll',listenToScroll)
  }, [])
  function listenToScroll(){
    if(window.pageYOffset >= 700){
      showMenu(true)
    }else{
      showMenu(false)
    }
  }
  return (
    <div>
      <NavbarDesktop />
      <NavbarMobile />
      <HeroSection />
      {hideMenu&&       <NavbarMenu/>}
      <ThemeSection />
      <TrailerSection />
      <BannerSection />
      <AboutSection />
      <SpeakerSection />
      <FaqSection/>
      <ScheduleSection />
      <RegisterSection />
      <Footer />
    </div>
  );
}

export default Home;