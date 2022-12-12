import { Dispatch } from "redux";

import { ThunkAction } from "redux-thunk";

import {
  Movie,
  MoviesGetRequest,
  MovieApi,
  MoviesGetSearchByEnum,
  MoviesCreateRequest,
  MoviesUpdateByIdRequest,
  MoviesDeleteByIdRequest,
} from "../../Api";
import { MoviesState } from "./MoviesReducer";

export const GET_MOVIES_REQUEST = "GET_MOVIES_REQUEST";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";

export const ADD_MOVIE_REQUEST = "ADD_MOVIE_REQUEST";
export const ADD_MOVIE_SUCCESS = "ADD_MOVIE_SUCCESS";
export const ADD_MOVIE_FAILURE = "ADD_MOVIE_FAILURE";

export const EDIT_MOVIE_REQUEST = "EDIT_MOVIE_REQUEST";
export const EDIT_MOVIE_SUCCESS = "EDIT_MOVIE_SUCCESS";
export const EDIT_MOVIE_FAILURE = "EDIT_MOVIE_FAILURE";

export const DELETE_MOVIE_REQUEST = "DELETE_MOVIE_REQUEST";
export const DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS";
export const DELETE_MOVIE_FAILURE = "DELETE_MOVIE_FAILURE";

export interface MovieAsync {
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
  movie?: Movie;
  deletedMovieId?: number;
}

interface GetMoviesRequest extends MovieAsync {
  type: typeof GET_MOVIES_REQUEST;
}

interface GetMoviesSuccess extends MovieAsync {
  type: typeof GET_MOVIES_SUCCESS;
}

interface GetMoviesFailure extends MovieAsync {
  type: typeof GET_MOVIES_FAILURE;
}

interface AddMovieRequest extends MovieAsync {
  type: typeof ADD_MOVIE_REQUEST;
}
interface AddMovieSuccess extends MovieAsync {
  type: typeof ADD_MOVIE_SUCCESS;
}
interface AddMovieFailure extends MovieAsync {
  type: typeof ADD_MOVIE_FAILURE;
}

interface EditMovieRequest extends MovieAsync {
  type: typeof EDIT_MOVIE_REQUEST;
}
interface EditMovieSuccess extends MovieAsync {
  type: typeof EDIT_MOVIE_SUCCESS;
}
interface EditMovieFailure extends MovieAsync {
  type: typeof EDIT_MOVIE_FAILURE;
}

interface DeleteMovieRequest extends MovieAsync {
  type: typeof DELETE_MOVIE_REQUEST;
}
interface DeleteMovieSuccess extends MovieAsync {
  type: typeof DELETE_MOVIE_SUCCESS;
}
interface DeleteMovieFailure extends MovieAsync {
  type: typeof DELETE_MOVIE_FAILURE;
}

export type MovieActionTypes =
  | GetMoviesRequest
  | GetMoviesSuccess
  | GetMoviesFailure
  | AddMovieRequest
  | AddMovieSuccess
  | AddMovieFailure
  | EditMovieRequest
  | EditMovieSuccess
  | EditMovieFailure
  | DeleteMovieRequest
  | DeleteMovieSuccess
  | DeleteMovieFailure;
export type AppAction = MovieActionTypes;

// get movies
const requestMovies = (): AppAction => ({
  type: GET_MOVIES_REQUEST,
  isLoading: true,
  movies: [],
  error: "",
});

const receiveMovies = (
  movies: Movie[] | undefined,
  request: MoviesGetRequest
): AppAction => ({
  type: GET_MOVIES_SUCCESS,
  isLoading: false,
  movies,
  error: "",
  ...request,
});

const moviesError = (error: string): AppAction => ({
  type: GET_MOVIES_FAILURE,
  isLoading: false,
  movies: [],
  error,
});

// add movie

const addMovieRequest = (): AppAction => ({
  type: ADD_MOVIE_REQUEST,
  isLoading: true,
  error: "",
});

const addMovieSuccess = (movie: Movie): AppAction => ({
  type: ADD_MOVIE_SUCCESS,
  isLoading: false,
  error: "",
  movie,
});

const addMivieError = (error: string): AppAction => ({
  type: ADD_MOVIE_FAILURE,
  isLoading: false,
  error,
});

// edit movie

const editMovieRequest = (): AppAction => ({
  type: EDIT_MOVIE_REQUEST,
  isLoading: true,
  error: "",
});

const editMOvieSuccess = (movie: Movie): AppAction => ({
  type: EDIT_MOVIE_SUCCESS,
  isLoading: false,
  error: "",
  movie,
});

const editMovieError = (error: string): AppAction => ({
  type: EDIT_MOVIE_FAILURE,
  isLoading: false,
  error,
});

// delete movie

const deleteMovieRequest = (): AppAction => ({
  type: DELETE_MOVIE_REQUEST,
  isLoading: true,
  error: "",
});

const deleteMovieSuccess = (movieId: number | undefined): AppAction => ({
  type: DELETE_MOVIE_SUCCESS,
  isLoading: false,
  error: "",
  deletedMovieId: movieId,
});

const deleteMovieError = (error: string): AppAction => ({
  type: DELETE_MOVIE_FAILURE,
  isLoading: false,
  error,
});

export const getMovies = (
  request: MoviesGetRequest
): ThunkAction<void, MoviesState, unknown, AppAction> => {
  return async (dispatch: Dispatch<AppAction>) => {
    dispatch(requestMovies());
    const api = new MovieApi();
    try {
      const response = await api.moviesGet(request);
      return dispatch(receiveMovies(response.data, request));
    } catch (error) {
      console.log(error);
      // @ts-ignore
      console.log(error.stack);

      return dispatch(moviesError("An error occured"));
    }
  };
};

export const addMovie = (
  movieCreateRequest: MoviesCreateRequest,
  callback: () => void
): ThunkAction<void, MoviesState, unknown, AppAction> => {
  return async (dispatch: Dispatch<AppAction>) => {
    dispatch(addMovieRequest());
    const api = new MovieApi();
    try {
      const response = await api.moviesCreate(movieCreateRequest);
      if (callback) {
        callback();
      }
      return dispatch(addMovieSuccess(response));
    } catch (error) {
      console.log(error);
      // @ts-ignore
      console.log(error.stack);
      return dispatch(addMivieError("An error occured while adding movie"));
    }
  };
};

export const editMovie = (
  movieUpdateRequest: MoviesUpdateByIdRequest,
  callback: () => void
): ThunkAction<void, MoviesState, unknown, AppAction> => {
  return async (dispatch: Dispatch<AppAction>) => {
    dispatch(editMovieRequest());
    const api = new MovieApi();
    try {
      const response = await api.moviesUpdateById(movieUpdateRequest);
      if (callback) {
        callback();
      }
      return dispatch(editMOvieSuccess(response));
    } catch (e) {
      console.log(e);
      // @ts-ignore
      console.log(error.stack);
      return dispatch(editMovieError("An error occured while editing movie"));
    }
  };
};

export const deleteMovie = (
  movieId: number | undefined,
  movieDeleteRequest: MoviesDeleteByIdRequest,
  callback: () => void
): ThunkAction<void, MoviesState, unknown, AppAction> => {
  return async (dispatch: Dispatch<AppAction>) => {
    dispatch(deleteMovieRequest());
    const api = new MovieApi();
    try {
      const response = await api.moviesDeleteById(movieDeleteRequest);
      console.log(response);
      if (callback) {
        callback();
      }
      return dispatch(deleteMovieSuccess(movieId));
    } catch (e) {
      console.log(e);
      return dispatch(
        deleteMovieError("An error occured while deleting movie")
      );
    }
  };
};
