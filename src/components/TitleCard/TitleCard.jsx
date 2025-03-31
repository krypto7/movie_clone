import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import cards_data from "../../assets/cards/Cards_data";
import axios from "axios";

function TitleCard({ title }) {
  const cardRef = useRef();
  const [movies, setMovies] = useState([]);

  const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_IMDB_ACCESS_TOKEN}`,
    },
  });

  const handleWheel = (e) => {
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    cardRef.current.addEventListener("wheel", handleWheel);
  });

  return (
    <div className="title_card">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card_list">
        {cards_data ? (
          cards_data.map((item, index) => (
            <div key={index} className="card" ref={cardRef}>
              <img src={item.image} />
              <p>{item.name}</p>
            </div>
          ))
        ) : (
          <div>No Data available</div>
        )}
      </div>
    </div>
  );
}

export default TitleCard;
