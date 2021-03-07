import React, { useState, useEffect } from "react";
import axios from "../axios";
import Poster from "./Poster";

function Row({ data }) {
  const { id, title, fetchUrl } = data;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Funcion asincrona porque estoy haciendo una peticon a un server de terceros.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/** row__posters */}
        {movies.map((movie) => (
          <Poster data={movie} />
        ))}
      </div>
    </div>
  );
}

export default Row;
