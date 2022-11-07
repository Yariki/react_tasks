import React, { useState } from "react";
import { Filter } from "./Filter";
import { movies, Movie } from "../Utils/data";
import { MoviesCount } from "./MoviesCount";
import { MoviesList } from "./MovieList";

export const Movies: React.FunctionComponent = () => {
  const [data, setData] = useState(movies);

  const changeData = (value: string) => {
    if (value === "0") {
      const newMovies = [...data].sort((a, b) => a.year - b.year);
      setData(newMovies);
    } else {
      setData([...movies]);
    }
  };

  return (
    <div>
      <Filter onChanges={changeData} />
      <MoviesCount />
      <MoviesList movies={data} />
    </div>
  );
};
