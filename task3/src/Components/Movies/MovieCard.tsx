import React from "react";
import { Kebab, KebabItemValues } from "../Utils/Components/Kebab";

type MovieProps = {
  id: number;
  title?: string;
  genres?: Array<string>;
  releaseDate?: string;
  posterPath?: string;
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
          <img src={`images/` + props.posterPath} alt={props.title}></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="columns">
          <div className="column">
            <div style={{ whiteSpace: "pre-wrap" }}>{props.title}</div>
          </div>
          <div className="column">
            <div style={{ whiteSpace: "pre-wrap" }}>{props.releaseDate}</div>
          </div>
        </div>
        <div style={{ whiteSpace: "pre-wrap" }}>{props.genres?.join(", ")}</div>
      </div>
    </div>
  );
};
