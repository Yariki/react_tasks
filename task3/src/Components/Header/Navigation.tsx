import React, { useState } from "react";
import { MovieForm } from "../Utils/Forms/MovieForm";
import {
  SelectedContext,
  SelectedContextType,
} from "../Context/SelectedContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MovieFormValues } from "../Utils/types";
import { MoviesCreateRequest } from "../../Api";
import { addMovie as addMovieRequest } from "../../redux/movies/MovieActions";

export const Navigation: React.FunctionComponent = () => {
  const [isShown, setIsShown] = useState(false);

  const { movie, setMovie } = React.useContext(
    SelectedContext
  ) as SelectedContextType;

  const addMovie = () => {
    setIsShown(true);
  };

  const closeMovie = () => {
    setIsShown(false);
  };

  const saveMovie = (movie: MovieFormValues) => {
    const moviewCreateRequest: MoviesCreateRequest = {
      movieBase: {
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
    addMovieRequest(moviewCreateRequest);
  };

  return (
    <>
      <div className="columns is-10">
        <div className="column">
          <label>NetflixRoulette</label>
        </div>
        <div className="column is-2">
          {movie === null ? (
            <button className="button is-danger" onClick={addMovie}>
              + Add Movie
            </button>
          ) : (
            <a onClick={() => setMovie(null)}>
              <FontAwesomeIcon icon={faSearch} />{" "}
            </a>
          )}
        </div>
      </div>
      {isShown && (
        <MovieForm
          onClose={closeMovie}
          onSave={saveMovie}
          isShown={isShown}
          isEdit={false}
        />
      )}
    </>
  );
};
