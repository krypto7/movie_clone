import React from "react";
import "./Footer.css";
import youtubeIcon from "../../assets/youtube_icon.png";
import twitterIcon from "../../assets/twitter_icon.png";
import facebookIcon from "../../assets/facebook_icon.png";
import instragramIcon from "../../assets/instagram_icon.png";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="" srcset="" className="footerLogo" />
      <div className="footer-icons">
        <img src={youtubeIcon} alt="" srcset="" />
        <img src={twitterIcon} alt="" srcset="" />
        <img src={facebookIcon} alt="" srcset="" />
        <img src={instragramIcon} alt="" srcset="" />
      </div>
      <ul>
        <li>Audio Discripton</li>
        <li>Help Centre</li>
        <li>Gift Card</li>
        <li>Media Centre</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Audio Discripton</li>
      </ul>
    </div>
  );
}

export default Footer;
