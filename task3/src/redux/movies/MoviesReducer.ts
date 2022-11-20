import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  AppAction,
} from "./MovieActions";

import { Movie } from "../../Api/models/Movie";

interface MoviesState {
  isLoading: boolean;
  movies?: Movie[];
  error: string;
}

const defaultState: MoviesState = {
  isLoading: false,
  movies: [],
  error: "",
};

export const moviesReducer = (
  state = defaultState,
  action: AppAction
): MoviesState => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return { isLoading: action.isLoading, movies: action.movies, error: "" };
    case GET_MOVIES_SUCCESS:
      return { isLoading: false, movies: action.movies, error: "" };
    case GET_MOVIES_FAILURE:
      return { isLoading: false, movies: [], error: action.error };
  }
};
