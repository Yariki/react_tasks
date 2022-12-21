import { moviesReducer, defaultState } from "./MoviesReducer";

test("Movie Request Start", () => {
  const state = moviesReducer(defaultState, {
    type: "GET_MOVIES_REQUEST",
    isLoading: true,
    error: "",
  });

  expect(state.isLoading).toBeTruthy();
});

test("Movie Request Failed", () => {
  const errorMessage = "An error occured during getting movies";
  const state = moviesReducer(defaultState, {
    type: "GET_MOVIES_FAILURE",
    isLoading: false,
    error: errorMessage,
  });

  expect(state.isLoading).toBeFalsy();
  expect(state.error).toBe(errorMessage);
});
