import React from "react";
import Row from "./Row";
import request from "../requests";
import "./home.css";

function Home() {
  return (
    <div>
      <Row title="Netflix orginals" fetchurl={request.fetchNetflixOriginals} />
      <Row title="Trending" fetchurl={request.fetchTrending} />
      <Row title="Top Rated" fetchurl={request.fetchTopRated} />
      <Row title="Action" fetchurl={request.fetchAction} />
      <Row title="Comedy" fetchurl={request.fetchComedy} />
      <Row title="Horror" fetchurl={request.fetchHorror} />
      <Row title="Romance" fetchurl={request.fetchRomance} />
      <Row title="Documentary" fetchurl={request.fetchDocumentaries} />
    </div>
  );
}

export default Home;
