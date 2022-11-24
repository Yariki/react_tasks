import { useState } from "react";
import { Movie } from "../../Api";

export const useSelectedMovie = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  return {
    movie,
    setMovie,
  };
};
