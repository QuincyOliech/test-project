import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

import { faFreebsd } from '@fortawesome/free-brands-svg-icons'


function Footer(){
    return (
        <div className="footer">
               <div className="footer">
        <div className="footerContainer">
            <div className="footerLinks">
                <div className="footerLinkWrapper">
                    <div className="footerLinkItems">
                        <h4>About Us</h4>
                        <a href="/">How it works</a>
                        <a href="/">Testimonials</a>
                    </div>
                    <div className="footerLinkItems">
                        <h4>Social Media</h4>
                        <a href="/">Instagram</a>
                        <a href="/">Facebook</a>
                        <a href="/">LinkedIn</a>
                        <a href="/">Twitter</a>
                        <a href="/">YouTube</a>
                    </div>
                </div>
            </div>
            <div className="socialMedia">
                <div className="socialMediaWrap">
                    <div className="footerLogo">
                       <a href="/" id="footerLogo">
                        <i className="fa-solid fa-spray-can-sparkles"></i>SKINOPATRA
                       </a>
                    </div>
                    <p className="websiteRights">&copy; SKINOPATRA 2023. All rights reserved</p>
                    <div className="socialIcons">
                        <a href="/" className="socialIconLink" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="/" className="socialIconLink" target="_blank">
                        <FontAwesomeIcon icon="fa-facebook-f" />
                        </a>
                        <a href="/" className="socialIconLink" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="/" className="socialIconLink" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/" className="socialIconLink" target="_blank">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div> 
        </div>
    )
}

export default Footer;