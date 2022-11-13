import React from "react";
import { Kebab, KebabItemValues } from "../Utils/Components/Kebab";

type MovieProps = {
  id: number;
  name?: string;
  genre?: string;
  year?: number;
  poster?: string;
  edit?: (id: number) => void;
  delete?: (id: number) => void;
  onSelected?: () => void;
};

export const MovieCard: React.FunctionComponent<MovieProps> = (
  props: MovieProps
) => {
  const kebabItems: KebabItemValues[] = [
    {
      label: "Edit",
      click: () => {
        if (props.edit) {
          props.edit(props.id);
        }
      },
    },
    {
      label: "Delete",
      click: () => {
        if (props.delete) {
          props.delete(props.id);
        }
      },
    },
  ];

  return (
    <div className="card" onClick={props.onSelected}>
      <div className="card-image">
        <figure className="image">
          <Kebab items={kebabItems} />
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
