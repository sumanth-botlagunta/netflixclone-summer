import React, { useEffect } from "react";
import axios from "axios";

function Row({ title, fetchurl, number, IsLargeRow }) {
  const [movies, setMovies] = React.useState([]);

  const baseUrl = "https://api.themoviedb.org/3";

  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseUrl}${fetchurl}`);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchurl]);

  // console.log("movies data for ", movies);

  return (
    <div className="row" key={number}>
      <h2>{title}</h2>

      <div className="row_movies">
        {movies.map((movie) => (
          <>
            <img
              key={movie.id}
              className={`movieImage ${IsLargeRow && "large_row"}`}
              src={`${imageUrl}${
                IsLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;
