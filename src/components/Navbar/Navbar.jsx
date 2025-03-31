import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImage from "../../assets/profile_img.png";
import dropDownIcon from "../../assets/caret_icon.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="log-container">
        <div className="logo">
          <img src={logo} alt="" srcset="" />
        </div>
      </div>

      <div className="nav-menu">
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={searchIcon} alt="" srcset="" className="icons" />
        <p>Children</p>
        <img src={bellIcon} alt="" srcset="" className="icons" />
        <div className="navbar-profile">
          <img src={profileImage} alt="" srcset="" className="profile" />
          <img src={dropDownIcon} alt="" srcset="" />
          <div className="dropdown">
            <p>logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
