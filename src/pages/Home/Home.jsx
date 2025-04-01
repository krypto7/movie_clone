import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCard/TitleCard";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero-section">
        <img src={hero_banner} alt="" srcset="" className="banner_img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" srcset="" className="caption_img" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            obcaecati blanditiis eveniet dignissimos, reprehenderit nam. Error
            ab, saepe eius magni corporis voluptatum ratione explicabo nesciunt
            quam a at id nobis.
          </p>
          <div className="hero_btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More info
            </button>
          </div>
          <TitleCard title={"Now Playing"} category={"now_playing"} />
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={"Top Rated"} category={"top_rated"} />
        <TitleCard title={"Popular"} category={"popular"} />
        <TitleCard title={"Upcoming"} category={"upcoming"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
