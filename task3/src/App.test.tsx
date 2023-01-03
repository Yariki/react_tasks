import React from "react";
import { $, expect } from "@wdio/globals";
import { render, screen } from "@testing-library/react";

import { App } from "./App";

test("App Test", async () => {
  render(<App />);

  const searchText = screen.getByRole("textbox", { name: "search" });
  const btnSearch = screen.getByText("Search");

  $(searchText).setValue("zoo");

  $(btnSearch).click();

  const component = await screen.findAllByText("Zootopia");

  expect(component !== null).toBeTruthy();
});
