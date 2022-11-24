import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { moviesReducer } from "./movies/MoviesReducer";
import { AppAction } from "./movies/MovieActions";

export const rootReducer = combineReducers({ moviesReducer });
export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore<AppState, AppAction, {}, {}>(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>)
);
