import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  AppAction,
} from "./MovieActions";

import { Movie } from "../../Api/models/Movie";
import { MoviesGetSearchByEnum } from "../../Api";

export interface MoviesState {
  isLoading: boolean;
  movies?: Movie[];
  error: string;
  sortBy?: string;
  sortOrder?: string;
  search?: string;
  searchBy?: MoviesGetSearchByEnum;
  filter?: Array<string>;
  offset?: string;
  limit?: string;
}

const defaultState: MoviesState = {
  isLoading: false,
  movies: [],
  error: "",
  sortBy: undefined,
  sortOrder: undefined,
  search: undefined,
  searchBy: undefined,
  filter: undefined,
  offset: undefined,
  limit: "100",
};

export const moviesReducer = (
  state = defaultState,
  action: AppAction
): MoviesState => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return { isLoading: action.isLoading, movies: action.movies, error: "" };
    case GET_MOVIES_SUCCESS:
      return { ...action, isLoading: false, movies: action.movies, error: "" };
    case GET_MOVIES_FAILURE:
      return { isLoading: false, movies: [], error: action.error };
    default:
      return state;
  }
};
