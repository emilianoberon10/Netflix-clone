import React from "react";
import request from "../request";
import Row from "./Row";

function Home() {
  const moviesRows = [
    {
      id: 0,
      title: "NETFLIX ORIGINALS",
      fetchUrl: `${request.fetchNetflixOriginals}`,
    },
    { id: 1, title: "Trending Now", fetchUrl: `${request.fetchTrending}` },
  ];
  return (
    <div>
      {moviesRows.map((data) => (
        <Row key={data.id} data={data} />
      ))}
    </div>
  );
}

export default Home;
