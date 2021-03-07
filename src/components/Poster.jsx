import { createFactory } from "react";

import React from "react";
const base_url = "https://image.tmdb.org/t/p/original/";

function Poster({ data }) {
  const name = data.name;
  const poster_path = data.poster_path;

  return (
    <div>
      <img
        className="row__poster"
        src={`${base_url}${poster_path}`}
        alt={name}
      />
    </div>
  );
}

export default Poster;
