import React, {useState} from "react";
import { MovieCard } from "./MovieCard";
import { movies, Movie } from "../Utils/data";
import {MovieForm} from "../Utils/Forms/MovieForm";

export const MoviesList: React.FunctionComponent = () => {

    const [isShown, setIsShown] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(undefined);

    const editMovie = (id: number) => {
        setIsShown(true);
    }

    const closeMovie = () => {
        setIsShown(false);
    }

    const onDelete = (id: number) => {
        alert(id);
    }

  return (
      <>
    <div className="movie-list">
      <div className="speaker-row">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} edit={editMovie} delete={onDelete}/>
        ))}
      </div>
    </div>
    <MovieForm onClose={closeMovie} isShown={isShown} isEdit={true} data={selectedMovie}/>
    </>
  );
};
