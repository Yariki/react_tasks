import React, { useState } from "react";
import { MovieForm } from "../Utils/Forms/MovieForm";
import {
  SelectedContext,
  SelectedContextType,
} from "../Context/SelectedContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
      <MovieForm onClose={closeMovie} isShown={isShown} isEdit={false} />
    </>
  );
};
