import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { Filter } from "./Filter";

import { MoviesCount } from "./MoviesCount";
import { MoviesList } from "./MovieList";

import { MoviesGetRequest } from "../../Api";

import { MoviesState } from "../../redux/movies/MoviesReducer";
import { AppAction, getMovies } from "../../redux/movies/MovieActions";
import { AppState } from "../../redux/rootStore";
import { SortOption } from "../Utils/Components/types";
import { useParams, useSearchParams } from "react-router-dom";

export const Movies: React.FunctionComponent = () => {
  const dispatch: ThunkDispatch<MoviesState, {}, AppAction> = useDispatch();
  const { movies, sortBy, sortOrder, filter } = useSelector<AppState, any>(
    (state: AppState) => state.moviesReducer
  );

  const limitCount = "100";

  const { searchQuery } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const genre = searchParams.get("genre");
    const sortBy = searchParams.get("sortBy") ?? "";

    let filters: string[] = [];
    if (genre) {
      filters = [genre];
    }

    const searchBy =
      searchQuery !== undefined
        ? "title"
        : genre !== undefined
        ? "genres"
        : undefined;

    const request: MoviesGetRequest = {
      limit: limitCount,
      search: searchQuery,
      searchBy: searchBy,
      filter: filters,
    };

    if (sortBy !== undefined && sortBy.indexOf(",") > -1) {
      const sort = sortBy.split(",");
      request.sortBy = sort[0];
      request.sortOrder = sort[1];
    }

    dispatch(getMovies(request));
  }, [dispatch, searchQuery, searchParams]);

  const handleFilters = (genres: Array<string>) => {
    const request: MoviesGetRequest = {
      limit: limitCount,
      sortBy: sortBy,
      sortOrder: sortOrder,
      filter: genres,
    };
    dispatch(getMovies(request));
  };

  const handleSorting = (opt: SortOption) => {
    const request: MoviesGetRequest = {
      limit: limitCount,
      sortBy: opt.sortBy,
      sortOrder: opt.order,
      filter: filter,
    };
    dispatch(getMovies(request));
  };

  return (
    <div>
      <Filter filterChanged={handleFilters} sortChanged={handleSorting} />
      <MoviesCount count={movies.length} />
      <MoviesList movies={movies} />
    </div>
  );
};
