import React, { useEffect } from "react";
import axios from "axios";

function Row({ title, fetchurl }) {
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

  console.log("movies data for ", movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_movies">
        {movies.map((movie) => (
          <>
            <div className="mask">
              <img
                className="movieImage"
                src={`${imageUrl}${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Row;
