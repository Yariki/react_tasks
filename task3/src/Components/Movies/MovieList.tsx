import React from "react";
import { Movie } from "./Movie";
import {movies} from "../Utils/data";

export const MoviesList: React.FunctionComponent = () => {
    return (
        <div className="movie-list">
            <div className="speaker-row">
                {movies.map((movie, index) => <Movie key={index} {...movie} />)}
            </div>
        </div>
    );
};