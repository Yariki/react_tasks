import React from "react";

export const Search: React.FunctionComponent = () => {
  return (
    <section className="section">
      <div className="field has-addons has-addons-centered">
        <div className="control">
          <input className="input" type="text" placeholder="Search" />
        </div>
        <div className="control">
          <button className="button is-danger m-4 is-info">Search</button>
        </div>
      </div>
    </section>
  );
};
