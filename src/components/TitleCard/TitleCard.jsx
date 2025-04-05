import React, { useEffect, useRef, useState } from "react";
import "./TitleCard.css";
import axios from "axios";
import { Link } from "react-router-dom";

function TitleCard({ title, category }) {
  const cardRef = useRef();
  const [apiData, setApiData] = useState([]);

  const fetchMovies = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${
        category ? category : now_playing
      }?language=en-US&page=1`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_IMDB_ACCESS_TOKEN}`,
      },
    };
    try {
      const response = await axios.request(options);
      setApiData(response.data?.results);
    } catch (error) {
      console.error("===>error fetching movie", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="title_card">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card_list">
        {apiData &&
          apiData.map((item, index) => (
            <Link to={`/player/${item.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt=""
                srcset=""
              />
              <p>{item?.original_title}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default TitleCard;
