import React from "react";
import Footer from "./Components/Footer";
import ThankSection from "./sections/ThankYouSection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarThanks from "./Components/NavbarThanksPage";
import NavbarThanksMobile from "./Components/NavbarThanksMobile";

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

export default function Thanks(){
    return(
        <div>
            <NavbarThanks />
            <NavbarThanksMobile />
            <ThankSection />
            <Footer />
        </div>
    )
}