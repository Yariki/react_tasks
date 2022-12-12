import React from "react";
import { number } from "yup/lib/locale";

export interface IMovieCountProps {
  count?: number;
}

export const MoviesCount: React.FunctionComponent<IMovieCountProps> = (
  props: IMovieCountProps
) => {
  return (
    <div className="block">
      <label>{props.count} movies found</label>
    </div>
  );
};
