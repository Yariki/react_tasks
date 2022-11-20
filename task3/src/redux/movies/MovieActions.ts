import { Dispatch } from "redux";
import { Movie, MoviesGetRequest, MovieApi } from "../../Api";

export const GET_MOVIES_REQUEST = "GET_MOVIES_REQUEST";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";

interface MovieAsync {
  isLoading: boolean;
  movies?: Movie[];
  error: string;
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

const receiveMovies = (movies?: Movie[] | undefined): AppAction => ({
  type: GET_MOVIES_SUCCESS,
  isLoading: false,
  movies,
  error: "",
});

const moviesError = (error: string): AppAction => ({
  type: GET_MOVIES_FAILURE,
  isLoading: false,
  movies: [],
  error,
});

export const getMovies = (request: MoviesGetRequest) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch(requestMovies());
    const api = new MovieApi();
    api
      .moviesGet(request)
      .then((response) => {
        dispatch(receiveMovies(response.data));
      })
      .catch((error) => {
        dispatch(moviesError(error));
      });
  };
};
