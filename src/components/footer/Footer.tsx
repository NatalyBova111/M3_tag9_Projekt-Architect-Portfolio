import React from "react";
import "./Footer.css";

/* Бренд  */
import brand from "../../assets/images/Group 11 f.png";

/* Соцсети */
import fbIcon from "../../assets/images/facebook.png";
import inIcon from "../../assets/images/in.png";
import pIcon from "../../assets/images/p.png";
import tIcon from "../../assets/images/t.png";

/* Иконки для блока Contacts */
import icoAddress from "../../assets/images/Vector1.png";
import icoPhone   from "../../assets/images/Vector2.png";
import icoEmail   from "../../assets/images/Vector3.png";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brandcol">
          <img className="footer-brand" src={brand} alt="Digital Project" />
        </div>

        {/* Information */}
        <div className="footer-col">
          <h4>Information</h4>
          <ul>
            <li><a href="/">Main</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/certifications">Certifications</a></li>
            <li><a href="/contact">Contacts</a></li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="footer-col">
          <h4>Contacts</h4>
          <address className="contact-address">
            <ul className="contact-list">
              <li>
                <img className="contact-icon" src={icoAddress} alt="" aria-hidden />
                <span>
                  1234 Sample Street<br />Austin Texas 78704
                </span>
              </li>
              <li>
                <img className="contact-icon" src={icoPhone} alt="" aria-hidden />
                <a href="tel:+15123332222">512.333.2222</a>
              </li>
              <li>
                <img className="contact-icon" src={icoEmail} alt="" aria-hidden />
                <a href="mailto:sampleemail@gmail.com">sampleemail@gmail.com</a>
              </li>
            </ul>
          </address>
        </div>

        {/* Social media */}
        <div className="footer-col footer-social">
          <h4 className="footer-social-title">Social Media</h4>
          <nav className="social-icons" aria-label="Social media">
            <a href="#" aria-label="Facebook"><img src={fbIcon} alt="" /></a>
            <a href="#" aria-label="Twitter"><img src={tIcon} alt="" /></a>
            <a href="#" aria-label="LinkedIn"><img src={inIcon} alt="" /></a>
            <a href="#" aria-label="Pinterest"><img src={pIcon} alt="" /></a>
          </nav>
        </div>
      </div>

      <div className="copy">© 2025 All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
