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
import { SortOption } from "../Utils/Components/types";

export const Movies: React.FunctionComponent = () => {
  const dispatch: ThunkDispatch<MoviesState, {}, AppAction> = useDispatch();
  const { movies, sortBy, sortOrder, filter } = useSelector<AppState, any>(
    (state: AppState) => state.moviesReducer
  );

  useEffect(() => {
    const request: MoviesGetRequest = {
      limit: "20",
    };
    dispatch(getMovies(request));
  }, [dispatch]);

  const handleFilters = (genres: Array<string>) => {
    const request: MoviesGetRequest = {
      limit: "20",
      sortBy: sortBy,
      sortOrder: sortOrder,
      filter: genres,
    };
    dispatch(getMovies(request));
  };

  const handleSorting = (opt: SortOption) => {
    const request: MoviesGetRequest = {
      limit: "20",
      sortBy: opt.sortBy,
      sortOrder: opt.order,
      filter: filter,
    };
    dispatch(getMovies(request));
  };

  return (
    <div>
      <Filter filterChanged={handleFilters} sortChanged={handleSorting} />
      <MoviesCount />
      <MoviesList movies={movies} />
    </div>
  );
};
