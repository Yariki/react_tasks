import React from "react";
import { Header } from "./Components/Header/Header";
import { Movies } from "./Components/Movies/Movies";
import { ErrorBoundary } from "./Components/Utils/ErrorBoundary";
import { SelectedProvider } from "./Components/Context/SelectedContext";

export function App() {
  return (
    <>
      <ErrorBoundary>
        <SelectedProvider>
          <Header></Header>
          <Movies></Movies>
        </SelectedProvider>
      </ErrorBoundary>
    </>
  );
}
