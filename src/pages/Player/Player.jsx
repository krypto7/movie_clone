import React, { useEffect, useState } from "react";
import "./Player.css";
import backarrow from "../../assets/back_arrow_icon.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
  const [playerApiData, setPlayerApiData] = useState([
    {
      name: "",
      key: "",
      published_at: "",
      type: "",
    },
  ]);

  const navigation = useNavigate();

  const { id } = useParams();

  const playerApi = async () => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_IMDB_ACCESS_TOKEN}`,
      },
    };
    try {
      const response = await axios.request(options);
      setPlayerApiData(response.data.results[0]);
    } catch (error) {
      console.error("===>error fetching movie", error);
    }
  };

  useEffect(() => {
    playerApi();
  }, []);

  console.log("playerApiData===", playerApiData);

  return (
    <div className="player">
      <img
        src={backarrow}
        alt=""
        srcset=""
        onClick={() => {
          console.log("clicked");
          navigation(-2);
        }}
      />
      {playerApiData ? (
        <>
          <iframe
            title="trailer"
            src={`https:www.youtube.com/embed/${playerApiData.key}`}
            width="90%"
            height="90%"
            frameborder="0"
            allowFullScreen
          ></iframe>
          <div className="player-info">
            <p>{playerApiData.published_at}</p>
            <p>{playerApiData.name}</p>
            <p>{playerApiData.type}</p>
          </div>
        </>
      ) : (
        <>
          <h1>no data available</h1>
        </>
      )}
    </div>
  );
}

export default Player;
