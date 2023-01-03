import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { Navigation } from "./Navigation";
import { store } from "../../redux/rootStore";
import { SelectedProvider } from "../Context/SelectedContext";
import { Provider } from "react-redux";

test("Navigation Add Movie Test", () => {
  render(
    <Provider store={store}>
      <SelectedProvider>
        <Navigation />
      </SelectedProvider>
    </Provider>
  );

  // eslint-disable-next-line testing-library/no-debugging-utils
  //screen.debug();

  fireEvent.click(screen.getByTestId("btnAddMovie"));

  expect(screen.getByText("Save")).toBeInTheDocument();
});
