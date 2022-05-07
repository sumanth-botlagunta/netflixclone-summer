import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

function Row({ title, fetchurl, number, IsLargeRow }) {
  const [movies, setMovies] = React.useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");

  const baseUrl = "https://api.themoviedb.org/3";

  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseUrl}${fetchurl}`);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchurl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log("clicked movie >>>", movie);
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
          console.log("trailer url >>>", urlParams.get('v'));
          // setTrailerUrl(url);
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div className="row" key={number}>
      <h2>{title}</h2>

      <div className="row_movies">
        {movies.map((movie) => (
          <>
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`movieImage ${IsLargeRow && "large_row"}`}
              src={`${imageUrl}${IsLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              alt={movie.title}
            />
          </>
        ))}
      </div>
      {/* {trailerUrl && <ReactPlayer videoId={trailerUrl}/>} */}
      {
        trailerUrl && <iframe src={`https://www.youtube.com/embed/${trailerUrl}`}
          frameborder='0'
          className="trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
          
        />
      }
    </div>
  );
}

export default Row;
