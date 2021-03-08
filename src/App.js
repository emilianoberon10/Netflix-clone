import React from "react";
import "./App.css";
import request from "./request";
// Mis componentes
import Row from "./components/Row";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  const moviesRows = [
    {
      id: 0,
      title: "NETFLIX ORIGINALS",
      fetchUrl: `${request.fetchNetflixOriginals}`,
      isLargeRow: true,
    },
    {
      id: 1,
      title: "Trending Now",
      fetchUrl: `${request.fetchTrending}`,
      isLargeRow: false,
    },
    {
      id: 2,
      title: "Top Rated",
      fetchUrl: `${request.fetchTopRated}`,
      isLargeRow: false,
    },
    {
      id: 3,
      title: "Action",
      fetchUrl: `${request.fetchActionMovies}`,
      isLargeRow: false,
    },
    {
      id: 4,
      title: "Comedy",
      fetchUrl: `${request.fetchComedyMovies}`,
      isLargeRow: false,
    },
    {
      id: 5,
      title: "Romance",
      fetchUrl: `${request.fetchRomanceMovies}`,
      isLargeRow: false,
    },
    {
      id: 6,
      title: "Horror",
      fetchUrl: `${request.fecthHorrorMovies}}`,
      isLargeRow: false,
    },
    {
      id: 7,
      title: "Documentaries",
      fetchUrl: `${request.fetchDocumentaries}`,
      isLargeRow: false,
    },
  ];
  return (
    <div className="App">
      <Nav />
      <Banner />

      {moviesRows.map((data) => (
        <Row key={data.id} data={data} />
      ))}
    </div>
  );
}

export default App;
