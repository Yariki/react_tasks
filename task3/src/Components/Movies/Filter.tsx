import React from "react";


export const Filter: React.FunctionComponent = () => {
    return (
        <nav className="navbar is-dark">
            <div className="navbar-item">
                <div className="control">
                    <label className="radio">
                        <input type="radio" name="genres" value="all" />
                        All
                    </label>
                    <label className="radio">
                        <input type="radio" name="genres" value="doc" />
                        Documentary
                    </label>
                    <label className="radio">
                        <input type="radio" name="genres" value="comedy" />
                        Comedy
                    </label>
                    <label className="radio">
                        <input type="radio" name="genres" value="horror" />
                        Horror
                    </label>
                    <label className="radio">
                        <input type="radio" name="genres" value="crime" />
                        Crime
                    </label>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <label className="label m-2">Sort by:</label>
                    <div className="select is-small">
                        <select>
                            <option value={1}>Release Date</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    );
}
