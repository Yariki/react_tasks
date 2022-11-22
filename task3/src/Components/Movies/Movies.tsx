import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { Filter } from "./Filter";

import { MoviesCount } from "./MoviesCount";
import { MoviesList } from "./MovieList";

import {
  Movie,
  MoviesGetRequest,
  MovieApi,
  MoviesGetSearchByEnum,
} from "../../Api";

import { MoviesState } from "../../redux/movies/MoviesReducer";
import { AppAction, getMovies } from "../../redux/movies/MovieActions";
import { AppState } from "../../redux/rootStore";

export const Movies: React.FunctionComponent = () => {
  const dispatch: ThunkDispatch<MoviesState, {}, AppAction> = useDispatch();
  const { movies } = useSelector<AppState, any>(
    (state: AppState) => state.moviesReducer
  );

  useEffect(() => {
    const request: MoviesGetRequest = {
      limit: "20",
    };
    dispatch(getMovies(request));
  }, [dispatch]);

  return (
    <div>
      <Filter onChanges={() => {}} />
      <MoviesCount />
      <MoviesList movies={movies} />
    </div>
  );
};
