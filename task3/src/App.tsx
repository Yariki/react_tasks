import React from 'react';
import { Header } from './Components/Header/Header';
import { Movies } from './Components/Movies/Movies';
import { ErrorBoundary }  from "./Components/Utils/ErrorBoundary";

export function App() {
  return (
    <>
        <ErrorBoundary>
            <Header></Header>
            <Movies></Movies>
        </ErrorBoundary>
    </>
  );
}