import { exitCode } from "process";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import {
  SelectedContext,
  SelectedContextType,
} from "../Context/SelectedContext";

export const Search: React.FunctionComponent = () => {
  const { movie, setMovie } = React.useContext(
    SelectedContext
  ) as SelectedContextType;

  const navigate = useNavigate();

  const { searchQuery } = useParams();

  const [search, setSearch] = useState(searchQuery);

  useEffect(() => {
    setSearch(searchQuery);
  }, [searchQuery]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const keyDownHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode !== 13) return;
    navigate("/search/" + search);
  };

  const calculateDuration = (duration: number): string => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h ${minutes}min`;
  };

  const clickHandle = (event: any): void => {
    navigate("/search/" + search);
  };

  return movie === null ? (
    <section className="section">
      <div className="field has-addons has-addons-centered">
        <div className="control">
          <input
            id="search"
            name="search"
            className="input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={onChange}
            onKeyDown={keyDownHandle}
          />
        </div>
        <div className="control">
          <button
            className="button is-danger m-4 is-info"
            onClick={clickHandle}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  ) : (
    <section className="section">
      <div className="columns">
        <div className="column is-one-quarter">
          <figure className="image">
            <img
              style={{ width: "300px" }}
              src={`images/` + movie.posterPath}
              alt={movie.posterPath}
            />
          </figure>
        </div>
        <div className="column is-three-quarters">
          <div className="columns">
            <div className="column is-two-fifths">
              <h1 className="title is-1">{movie.title}</h1>
            </div>
            <div className="column is-one-quarter">{movie.voteAverage}</div>
          </div>
          <div className="columns">
            <div className="column is-one-quarter">
              <p>{movie?.genres?.join(",")}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-quarter">
              <p>{movie.releaseDate}</p>
            </div>
            <div className="column is-one-quarter">
              <p>{calculateDuration(movie.runtime)}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-full">
              <div className="content">{movie.overview}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
