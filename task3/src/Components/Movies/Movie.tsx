import React from "react";

type MovieProps = {
  name?: string;
  genre?: string;
  year?: number;
  poster?: string;
};

export const Movie: React.FunctionComponent<MovieProps> = (
  props: MovieProps
) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={`images/` + props.poster} alt={props.poster}></img>
        </figure>
      </div>
      <div className="card-content">
        <nav className="navbar is-dark">
          <div className="navbar-brand">{props.name}</div>
          <div className="navbar-end">{props.year}</div>
        </nav>
        {props.genre}
      </div>
    </div>
  );
};
