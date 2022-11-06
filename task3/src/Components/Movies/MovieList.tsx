import React, { useState } from "react";
import { MovieCard } from "./MovieCard";
import { movies, Movie } from "../Utils/data";
import { MovieForm } from "../Utils/Forms/MovieForm";
import { DeleteMessage } from "../Utils/Forms/DeleteMessage";

export const MoviesList: React.FunctionComponent = () => {
  const [isShown, setIsShown] = useState(false);

  const [isDeleteShown, setIsDeleteShown] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
    undefined
  );
  const [selectedId, setSelectedId] = useState(-1);

  const editMovie = (id: number) => {
    setIsShown(true);
    setSelectedId(id);
  };

  const closeMovie = () => {
    setIsShown(false);
  };

  const onDelete = (id: number) => {
    setIsDeleteShown(true);
    setSelectedId(id);
  };

  const deleteMovie = () => {
    setIsDeleteShown(false);
    alert(selectedId);
  };

  const cancel = () => {
    setIsDeleteShown(false);
  };

  const message = "Delete movie with id " + selectedId + " ?";

  return (
    <>
      <div className="movie-list">
        <div className="speaker-row">
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              {...movie}
              edit={editMovie}
              delete={onDelete}
            />
          ))}
        </div>
      </div>
      <MovieForm
        onClose={closeMovie}
        isShown={isShown}
        isEdit={true}
        data={selectedMovie}
      />
      <DeleteMessage
        isShown={isDeleteShown}
        message={message}
        ok={deleteMovie}
        cancel={cancel}
      />
    </>
  );
};
