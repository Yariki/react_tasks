import React, { useState } from "react";
import { MovieCard } from "./MovieCard";
import { Movie } from "../Utils/data";
import { MovieForm } from "../Utils/Forms/MovieForm";
import { DeleteMessage } from "../Utils/Forms/DeleteMessage";

import {
  SelectedContext,
  SelectedContextType,
} from "../Context/SelectedContext";

export type ListProps = {
  movies: Movie[];
};

export const MoviesList: React.FunctionComponent<ListProps> = (
  props: ListProps
) => {
  const [isShown, setIsShown] = useState(false);

  const [isDeleteShown, setIsDeleteShown] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
    undefined
  );
  const [selectedId, setSelectedId] = useState(-1);

  const { setMovie } = React.useContext(SelectedContext) as SelectedContextType;

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
          {props.movies.map((movie, index) => (
            <MovieCard
              key={index}
              {...movie}
              edit={editMovie}
              delete={onDelete}
              onSelected={() => setMovie(movie)}
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
