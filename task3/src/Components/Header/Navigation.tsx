import React from 'react'


export const Navigation : React.FunctionComponent = () => {

    return (
        <div className="columns is-10">
            <div className="column">
                    <label>NetflixRoulette</label>
            </div>
            <div className="column is-2">
                <a className="button is-danger">+ Add Movie</a>
            </div>
        </div>
    );
};
