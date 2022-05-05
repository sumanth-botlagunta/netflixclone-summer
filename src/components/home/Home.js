import React from "react";
import Row from "./Row";
import request from "../requests";
import "./home.css";

function Home() {
  return (
    <div>
      <Row
        title="Netflix orginals"
        fetchurl={request.fetchNetflixOriginals}
        number="1"
        IsLargeRow={true}
      />
      <Row title="Trending" fetchurl={request.fetchTrending} number="2" />
      <Row title="Top Rated" fetchurl={request.fetchTopRated} number="3" />
      <Row title="Action" fetchurl={request.fetchAction} number="4" />
      <Row title="Comedy" fetchurl={request.fetchComedy} number="5" />
      <Row title="Horror" fetchurl={request.fetchHorror} number="6" />
      <Row title="Romance" fetchurl={request.fetchRomance} number="7" />
      <Row
        title="Documentary"
        fetchurl={request.fetchDocumentaries}
        number="8"
      />
    </div>
  );
}

export default Home;
