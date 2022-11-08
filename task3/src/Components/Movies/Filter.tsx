import React from "react";
import { SortOptions } from "../Utils/Components/types";

export type FilterProps = {
  onChanges: (value: string) => void;
};

const SortingArray: SortOptions[] = [
  { value: -1, label: "Select Sorting" },
  { value: 0, label: "Release date" },
];

export const Filter: React.FunctionComponent<FilterProps> = (
  props: FilterProps
) => {
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
            <select
              id="sortSelection"
              onChange={(arg: React.ChangeEvent<HTMLSelectElement>) =>
                props.onChanges(arg.target.value)
              }
            >
              {SortingArray.map((option: SortOptions) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};
