import React from "react";
import { ErrorBoundary } from "./Components/Utils/ErrorBoundary";
import { SelectedProvider } from "./Components/Context/SelectedContext";
import { MainEntry } from "./MainEntry";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "./Components/Infrastructure/NotFound";

export function App() {
  return (
    <>
      <ErrorBoundary>
        <SelectedProvider>
          <BrowserRouter>
            <Routes>
              <Route path="search">
                <Route index element={<MainEntry />} />
                <Route path=":searchQuery" element={<MainEntry />} />
              </Route>

              <Route path="/" element={<Navigate to="/search" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SelectedProvider>
      </ErrorBoundary>
    </>
  );
}
