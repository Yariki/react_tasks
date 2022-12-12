import React, { useState } from "react";
import { MovieCard } from "./MovieCard";
import {
  Movie,
  MoviesDeleteByIdRequest,
  MoviesUpdateByIdRequest,
} from "../../Api";
import { MovieForm } from "../Utils/Forms/MovieForm";
import { DeleteMessage } from "../Utils/Forms/DeleteMessage";
import {
  editMovie as editMoviewRequest,
  deleteMovie as deleteMovieRequest,
  AppAction,
} from "../../redux/movies/MovieActions";

import {
  SelectedContext,
  SelectedContextType,
} from "../Context/SelectedContext";
import { MovieFormValues } from "../Utils/types";
import { ThunkDispatch } from "redux-thunk";
import { MoviesState } from "../../redux/movies/MoviesReducer";
import { useDispatch } from "react-redux";

export type ListProps = {
  movies?: Movie[] | undefined;
};

type ModalFormPorperties = {
  isShown: boolean;

  isDeleteShown: boolean;
  selectedMovie: Movie | null | undefined;
};

export const MoviesList: React.FunctionComponent<ListProps> = (
  props: ListProps
) => {
  const dispatch: ThunkDispatch<MoviesState, {}, AppAction> = useDispatch();

  const [modalProps, setModalProps] = useState<ModalFormPorperties>({
    isShown: false,
    isDeleteShown: false,
    selectedMovie: null,
  });

  const { setMovie } = React.useContext(SelectedContext) as SelectedContextType;

  const editMovie = (id: number) => {
    const { movies } = props;
    const selected = movies?.find((m) => m.id === id);
    setModalProps({
      isShown: true,
      isDeleteShown: false,
      selectedMovie: selected,
    });
  };

  const closeMovie = () => {
    setModalProps({
      isShown: false,
      isDeleteShown: false,
      selectedMovie: null,
    });
  };

  const onDelete = (id: number) => {
    setModalProps({
      isShown: false,
      isDeleteShown: true,
      selectedMovie: props.movies?.find((m) => m.id === id),
    });
  };

  const deleteMovie = () => {
    const deleteRequest: MoviesDeleteByIdRequest = {
      id: modalProps.selectedMovie?.id.toString() || "",
    };
    // @ts-ignore
    dispatch(
      deleteMovieRequest(modalProps.selectedMovie, deleteRequest, onCloseModal)
    );
  };

  const onCloseModal = () => {
    setModalProps({
      isShown: false,
      isDeleteShown: false,
      selectedMovie: undefined,
    });
    setMovie(null);
  };

  const cancel = () => {
    setModalProps({
      isShown: false,
      isDeleteShown: false,
      selectedMovie: modalProps.selectedMovie,
    });
  };

  const saveMovie = (movie: MovieFormValues) => {
    const movieUpdateRequest: MoviesUpdateByIdRequest = {
      movie: {
        id: modalProps.selectedMovie?.id || 0,
        title: movie.title,
        releaseDate: movie.releaseDate,
        posterPath: movie.posterPath,
        genres: [movie.genres],
        overview: movie.overview,
        runtime: movie.runtime,
        revenue: movie.revenue,
        voteAverage: movie.voteAverage,
        voteCount: movie.voteCount,
      },
    };
    dispatch(editMoviewRequest(movieUpdateRequest, onCloseModal));
  };

  const message =
    "Delete movie with id " + modalProps?.selectedMovie?.title + " ?";

  return (
    <>
      <div className="movie-list">
        <div className="speaker-row">
          {props.movies?.map((movie, index) => (
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

      {modalProps.selectedMovie && modalProps.isShown && (
        <MovieForm
          onClose={closeMovie}
          onSave={saveMovie}
          isShown={modalProps.isShown}
          isEdit={true}
          data={modalProps.selectedMovie}
        />
      )}
      {modalProps.selectedMovie && modalProps.isDeleteShown && (
        <DeleteMessage
          isShown={modalProps.isDeleteShown}
          message={message}
          ok={deleteMovie}
          cancel={cancel}
        />
      )}
    </>
  );
};
