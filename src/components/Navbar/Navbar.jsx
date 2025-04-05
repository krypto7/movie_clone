import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImage from "../../assets/profile_img.png";
import dropDownIcon from "../../assets/caret_icon.svg";
import { logout } from "../../../firebase";

function Navbar() {
  const navref = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        navref.current.classList.add("nav-dark");
      } else {
        navref.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div className="navbar" ref={navref}>
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
            <p
              onClick={() => {
                logout();
              }}
            >
              logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
