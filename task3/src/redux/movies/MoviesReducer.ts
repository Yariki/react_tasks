import {
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILURE,
  EDIT_MOVIE_REQUEST,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE_FAILURE,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
  AppAction,
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
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

export const defaultState: MoviesState = {
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
    case ADD_MOVIE_REQUEST:
      return { isLoading: action.isLoading, error: "", movies: state.movies };
    case ADD_MOVIE_SUCCESS: {
      const newArray = getNewMoviesList(state.movies, action.movie);
      return { isLoading: false, movies: newArray, error: "" };
    }
    case ADD_MOVIE_FAILURE:
      return { isLoading: false, error: action.error };
    case EDIT_MOVIE_REQUEST:
      return { isLoading: action.isLoading, error: "", movies: state.movies };
    case EDIT_MOVIE_SUCCESS: {
      const newArray = action.movie
        ? state.movies?.map((movie) => {
            if (movie.id === action.movie?.id) {
              return action.movie;
            }
            return movie;
          })
        : [];
      return { isLoading: false, movies: newArray, error: "" };
    }
    case EDIT_MOVIE_FAILURE:
      return { isLoading: false, error: action.error };
    case DELETE_MOVIE_REQUEST:
      return { isLoading: action.isLoading, error: "", movies: state.movies };
    case DELETE_MOVIE_SUCCESS: {
      var array = action.deletedMovieId
        ? state.movies?.filter((movie) => movie.id !== action.movie?.id)
        : state.movies;
      return { isLoading: false, movies: array, error: "" };
    }
    case DELETE_MOVIE_FAILURE:
      return { isLoading: false, error: action.error };
    default:
      return state;
  }
};

function getNewMoviesList(
  movies: Movie[] | undefined,
  addedMovie: Movie | undefined
): Movie[] {
  let newArray = movies?.map((m) => m) || [];
  if (addedMovie) {
    newArray.push(addedMovie);
  }
  return newArray;
}
