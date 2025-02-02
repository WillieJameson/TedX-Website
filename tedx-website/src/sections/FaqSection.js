import React from 'react'
import FaqCard from '../Components/FaqCard'
import { Element } from "react-scroll";
import {FaFacebookSquare,FaInstagramSquare ,FaTwitterSquare ,FaEnvelopeSquare} from "react-icons/fa"

function FaqSection() {
    return (
    <Element name="faq" className="section lg:mx-10">
<div className="xl:mx-2 is-widescreen">
  <div className="columns  is-centered-mobile is-vcentered">
    <div className="column is-12 is-10-mobile is-offset-1-mobile has-text-centered"
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                  data-aos-mirror="true"
                  data-aos-once="true"
                  data-aos-anchor-placement="top-center">
      <h1 className="section-title is-size-1-mobile">
        <b>FAQ</b>
      </h1>
      <h1 className="is-size-3 has-text-centered mt-5 mb-2">
        <b>When and Where</b>
      </h1>
      <p>
      The event will be held on November 16th, 09.00 - 12.00, at SMAK 1’s Aula (8th Floor).
      </p>
      <h1 className="is-size-3 has-text-centered mt-5 mb-2">
        <b>Do I have to buy tickets?</b>
      </h1>
      <p>
      Yes, you need the tickets as your identification to enter the venue.
      </p>
      <h1 className="is-size-3 has-text-centered mt-5 mb-2">
        <b>How do I keep myself updated?</b>
      </h1>
      <p >Follow us on these platforms :
      <br/> 
      <div className='flex justify-center gap-3 mt-2'>
        <span className="fas fa-2x">
          <a target="blank" href="https://www.facebook.com/TEDxYouth-SmakOne-106981974406656/">
            <FaFacebookSquare size="1em" value={{className:"has-text-white px-2"}}/>
            {/* <i className="fab fa-facebook-square "></i> */}
          </a>
        </span>
        <span className="fas fa-2x">
          <a target="blank" href="http://www.instagram.com/tedxyouthsmakone/">
            {/* <i className="fab fa-instagram-square "></i> */}
            <FaInstagramSquare size="1em" value={{className:"has-text-white px-2"}}/>
          </a>
        </span>
        <span className="fas fa-2x">
          <a target="blank" href="https://twitter.com/TEDxYouthSmak1">
            {/* <i className="fab fa-twitter-square "></i> */}
            <FaTwitterSquare size="1em" value={{className:"has-text-white px-2"}}/>
          </a>
        </span>
        <span className="fas fa-2x">
            <a target="blank" href="mailto:tedxyouthsmakone@gmail.com">
              {/* <i class="fas fa-envelope-square "></i> */}
              <FaEnvelopeSquare size="1em" value={{className:"has-text-white px-2"}}/>
            </a>
        </span>
      </div>
      </p>
    </div>
  </div>
</div>
    </Element>
    )
}

export default FaqSection

/*
<div className="container ">
<div
data-aos="fade-in"
data-aos-offset="0"
data-aos-delay="0"
data-aos-duration="1500"
data-aos-mirror="true"
data-aos-once="true"
data-aos-anchor-placement="top-center"
>
<h1 className="section-title has-text-centered is-size-1-mobile">
<b>FAQ</b>
</h1>
</div>
<div className="column has-text-centered">
<FaqCard
title={
<h2 class="is-size-3 has-text-weight-bold has-text-white "> 
When and Where
</h2>
}
content={
<p className=" has-text-white">
The event will be held on November 14th 2020, 10.00 - 14.25 WIB, using the platform Airmeet. The link will be sent to your email address and you will be directed to Airmeet’s website automatically.
</p>
}
/>
</div>
<div className="column has-text-centered">
<FaqCard
title={
<h2 class="is-size-3 has-text-weight-bold has-text-white">
What device should I use?
</h2>
}
content={
<p className=" has-text-white">
We recommend using a laptop or PC with a webcam and mic to get the full and better experience in general. But, you can use your mobile phone as well.
</p>
}
/>
</div>
<div className="column has-text-centered">
<FaqCard
title={
<h2 class="is-size-3 has-text-weight-bold has-text-white">
How do I use Airmeet?
</h2>
}
content={
<p className=" has-text-white">If you’re not familiar with the platform, no need to worry! You will be sent an email attached with a step-by-step guide. If you want to see a video guide of using Airmeet, you can watch it  
<a href="https://www.youtube.com/watch?v=Z7IiXgiVLXg" className="link link-on-black"> HERE!</a>
</p>

}
/>
</div>
<div className="column has-text-centered">
<FaqCard
title={
<h2 class="is-size-3 has-text-weight-bold has-text-white">
How do I keep myself updated?
</h2>
}
content={
<p className=" has-text-white">
Follow us on these platforms :
<br/>
<span className="fas fa-2x">
    <a href="https://www.facebook.com/TEDxYouth-SmakOne-106981974406656/">
        <i className="fab fa-facebook-square has-text-white px-2"></i>
    </a>
</span>
<span className="fas fa-2x">
    <a href="http://www.instagram.com/tedxyouthsmakone/">
        <i className="fab fa-instagram-square has-text-white px-2"></i>
    </a>
</span>
<span className="fas fa-2x">
    <a href="https://twitter.com/TEDxYouthSmak1">
        <i className="fab fa-twitter-square has-text-white px-2"></i>
    </a>
</span>
<span className="fas fa-2x">
    <a href="mailto:tedxyouthsmakone@gmail.com">
        <i class="fas fa-envelope-square has-text-white px-2"></i>
    </a>
</span>
</p>
}
/>
</div>

</div>*/