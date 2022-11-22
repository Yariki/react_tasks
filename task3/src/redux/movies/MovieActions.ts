import { Dispatch } from "redux";

import { ThunkAction } from "redux-thunk";

import {
  Movie,
  MoviesGetRequest,
  MovieApi,
  MoviesGetSearchByEnum,
} from "../../Api";
import { MoviesState } from "./MoviesReducer";

export const GET_MOVIES_REQUEST = "GET_MOVIES_REQUEST";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";

interface MovieAsync {
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

interface GetMoviesRequest extends MovieAsync {
  type: typeof GET_MOVIES_REQUEST;
}

interface GetMoviesSuccess extends MovieAsync {
  type: typeof GET_MOVIES_SUCCESS;
}

interface GetMoviesFailure extends MovieAsync {
  type: typeof GET_MOVIES_FAILURE;
}

export type MovieActionTypes =
  | GetMoviesRequest
  | GetMoviesSuccess
  | GetMoviesFailure;
export type AppAction = MovieActionTypes;

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
      return dispatch(moviesError("An error occured"));
    }
  };
};
