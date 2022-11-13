import React, { createContext, FC, PropsWithChildren } from "react";
import { useSelectedMovie } from "../Hooks/useSelectedMovie";
import { Movie } from "../Utils/data";

export type SelectedContextType = {
  movie: Movie | null;
  setMovie: (movie: Movie | null) => void;
};

export const SelectedContext = createContext<SelectedContextType | null>(null);

export const SelectedProvider: FC<PropsWithChildren> = ({ children }) => {
  const { movie, setMovie } = useSelectedMovie();

  return (
    <SelectedContext.Provider
      value={{
        movie,
        setMovie,
      }}
    >
      {children}
    </SelectedContext.Provider>
  );
};
