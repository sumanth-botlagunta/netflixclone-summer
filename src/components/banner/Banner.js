import React, { useEffect } from "react";
import request from "../requests";
import axios from "axios";
import "./banner.css";

function Banner() {
  const [movie, setMovies] = React.useState([]);
  const baseUrl = "https://api.themoviedb.org/3";
  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const moviedata = await axios.get(
        `${baseUrl}${request.fetchNetflixOriginals}`
      );
      setMovies(
        moviedata.data.results[
          Math.floor(Math.random() * (moviedata.data.results.length - 1))
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + ", ..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imageUrl}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
      key={movie?.id}
    >
      <div className="banner_container">
        <h2 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}{" "}
        </h2>
        <div className="banner_buttons">
          <div className="banner_button">add List</div>
          <div className="banner_button">Play</div>
        </div>
        <div className="banner_desc">{truncate(movie?.overview, 150)}</div>
      </div>
      <div className="banner--fadeBottom"></div>
    </div>
  );
}

export default Banner;
