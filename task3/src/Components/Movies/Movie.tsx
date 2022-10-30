import React from "react";

type MovieProps = {
    name?:string;
    genre?: string;
    year?: number;
    poster?: string;
}

export const Movie: React.FunctionComponent<MovieProps> = (props: MovieProps) => {

    const stub = "https://via.placeholder.com/300x450.png?text=No+Poster";

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={`images/` + props.poster}></img>
                </figure>
            </div>
            <div className="card-content">
                <nav className="navbar is-dark">
                    <div className="navbar-brand">
                        {props.name}
                    </div>
                    <div className="navbar-end">
                        {props.year}
                    </div>
                </nav>
                {props.genre}

            </div>
        </div>
    );
};