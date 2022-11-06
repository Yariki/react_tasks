import React, { useState } from "react";
import { MovieForm } from "../Utils/Forms/MovieForm";

export const Navigation: React.FunctionComponent = () => {
  const [isShown, setIsShown] = useState(false);

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
          <button className="button is-danger" onClick={addMovie}>
            + Add Movie
          </button>
        </div>
      </div>
      <MovieForm onClose={closeMovie} isShown={isShown} isEdit={false} />
    </>
  );
};
