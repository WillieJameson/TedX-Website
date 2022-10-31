import React from "react";
import {FaFacebookSquare,FaInstagramSquare ,FaTwitterSquare ,FaEnvelopeSquare} from "react-icons/fa"


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container is-fluid">
      <div className="columns is-vcentered">
        <div className="column is-3 is-hidden-tablet has-text-centered-mobile">
          <div className="flex gap-3 justify-center">
            <span className="fas fa-2x">
                <a href="https://twitter.com/TEDxYouthSmak1">
                  {/* <i className="fab fa-twitter-square has-text-white px-2"></i> */}
                  <FaTwitterSquare size="2em" value={{className:"has-text-white px-2"}}/>
                </a>
            </span>
            <span className="fas fa-2x">
              <a href="http://www.instagram.com/tedxyouthsmakone/">
                {/* <i className="fab fa-instagram-square has-text-white px-2"></i> */}
                <FaInstagramSquare size="2em" value={{className:"has-text-white px-2"}}/>
              </a>
            </span>
            <span className="fas fa-2x">
              <a href="https://www.facebook.com/TEDxYouth-SmakOne-106981974406656/">
                {/* <i className="fab fa-facebook-square has-text-white px-2"></i> */}
                <FaFacebookSquare size="2em" value={{className:"has-text-white px-2"}}/>
              </a>
            </span>
            <span className="fas fa-2x">
                <a href="mailto:tedxyouthsmakone@gmail.com">
                  {/* <i class="fas fa-envelope-square has-text-white px-2"></i> */}
                  <FaEnvelopeSquare size="2em" value={{className:"has-text-white px-2"}}/>
                </a>
            </span>
          </div>
        </div>
        <div className="column is-9 has-text-centered-mobile px-0 py-0">
          <p className="is-size-6">
            This independent TEDx event is operated under license from TED
          </p>
          <p className="is-size-7 is-hidden-tablet">
            <br/>Copyright © CODE ONE 2022
          </p>
        </div>
        <div className="column is-3 is-hidden-mobile has-text-right">
          <div className="flex justify-end gap-3">
            <span className="fas fa-2x">
                <a href="https://twitter.com/TEDxYouthSmak1">
                  {/* <i className="fab fa-twitter-square has-text-white px-2"></i> */}
                  <FaTwitterSquare size="2em" value={{className:"has-text-white px-2"}}/>
                </a>
            </span>
            <span className="fas fa-2x">
              <a href="http://www.instagram.com/tedxyouthsmakone/">
                {/* <i className="fab fa-instagram-square has-text-white px-2"></i> */}
                <FaInstagramSquare size="2em" value={{className:"has-text-white px-2"}}/>
              </a>
            </span>
            <span className="fas fa-2x">
              <a href="https://www.facebook.com/TEDxYouth-SmakOne-106981974406656/">
                {/* <i className="fab fa-facebook-square has-text-white px-2"></i> */}
                <FaFacebookSquare size="2em" value={{className:"has-text-white px-2"}}/>
              </a>
            </span>
            <span className="fas fa-2x">
                <a href="mailto:tedxyouthsmakone@gmail.com">
                  {/* <i class="fas fa-envelope-square has-text-white px-2"></i> */}
                  <FaEnvelopeSquare size="2em" value={{className:"has-text-white px-2"}}/>
                </a>
            </span>
          </div>

        </div>
      </div>
        <p className="is-size-6 has-text-centered is-hidden-mobile">Copyright © CODE ONE 2022
      </p>


      </div>
      
    </footer>
  );
}
