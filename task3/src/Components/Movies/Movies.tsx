import React from "react";
import { Filter } from "./Filter";
import { MoviesCount } from "./MoviesCount";
import { MoviesList } from "./MovieList";

export const Movies: React.FunctionComponent = () => {
  return (
    <div>
      <Filter />
      <MoviesCount />
      <MoviesList />
    </div>
  );
};
