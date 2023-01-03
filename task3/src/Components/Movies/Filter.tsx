import React, { useEffect, useState } from "react";
import { FilterOptions, SortOption } from "../Utils/Components/types";
import $ from "jquery";
import { useSearchParams } from "react-router-dom";
import { StringMappingType } from "typescript";

export type FilterProps = {
  filterChanged: (arr: Array<string>) => void;
  sortChanged: (arr: SortOption) => void;
};

const filters: FilterOptions[] = [
  { value: "Drama", label: "Drama", checked: false },
  { value: "Romance", label: "Romance", checked: false },
  { value: "Animation", label: "Animation", checked: false },
  { value: "Adventure", label: "Adventure", checked: false },
  { value: "Family", label: "Family", checked: false },
  { value: "Comedy", label: "Comedy", checked: false },
  { value: "Fantasy", label: "Fantasy", checked: false },
  { value: "Science Fiction", label: "Science Fiction", checked: false },
  { value: "Action", label: "Action", checked: false },
];

type SortSelection = {
  label: string;
  value: string | undefined;
};

type OrderSelection = {
  label: string;
  value: "asc" | "desc" | undefined;
};

const orderSelection: OrderSelection[] = [
  { label: "Ascending", value: "asc" },
  { label: "Descending", value: "desc" },
];

const sortOptions: SortSelection[] = [
  { label: "Select", value: undefined },
  { label: "Release Date", value: "release_date" },
  { label: "Name", value: "title" },
];

export const Filter: React.FunctionComponent<FilterProps> = (
  props: FilterProps
) => {
  const [filter, setFilter] = useState<FilterOptions[]>(filters);
  const [genres, setGenres] = useState<Array<string>>([]);
  const [sort, setSort] = useState<SortOption>({
    sortBy: undefined,
    order: undefined,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const genre = searchParams.get("genre");

    if (!genre) {
      clearFiltering();
      return;
    }
    var genres: string[] = genre.split(",");

    setGenres(genres);

    const temp = [...filter];
    temp.forEach((f) => {
      f.checked = false;
    });

    genres.forEach((g) => {
      const index = temp.findIndex((item) => item.value === g);
      temp[index].checked = true;
    });

    setFilter(temp);
  }, [searchParams]);

  useEffect(() => {
    if (sort.sortBy !== undefined && sort.order !== undefined) {
      setSearchParams({ sortBy: sort.sortBy + "," + sort.order });
      return;
    }
  }, [sort]);

  useEffect(() => {
    const sortBy = searchParams.get("sortBy") ?? "";

    if (sortBy !== undefined && sortBy.indexOf(",") > -1) {
      const sort = sortBy.split(",");
      setSort({ sortBy: sort[0], order: sort[1] as "asc" | "desc" });
    }
  }, [searchParams]);

  const clearFiltering = () => {
    setGenres([]);
    const temp = [...filter];
    temp.forEach((f) => {
      f.checked = false;
    });
    setFilter(temp);
  };

  const updateFilter = (value: string, checked: boolean) => {
    const temp = [...filter];
    const index = temp.findIndex((item) => item.value === value);
    temp[index].checked = checked;
    setFilter(temp);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let temp = handleFilters(value, checked);
    props.filterChanged(temp);
  };

  const handleFilters = (value: string, checked: boolean): any[] => {
    let temp = [];
    if (checked) {
      temp = [...genres, value];
      setGenres(temp);

      updateFilter(value, checked);
      setGenresInRoute(temp);
    } else {
      temp = genres.filter((genre: string) => genre !== value);
      setGenres(temp);

      updateFilter(value, checked);
      setGenresInRoute(temp);
    }
    return temp;
  };

  const setGenresInRoute = (genres: string[]) => {
    setSearchParams({ genre: genres.join(",") });
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, id } = event.target;
    let temp: SortOption = { ...sort };
    if (id === "sortSelection") {
      let val = value === "Select" ? undefined : value;

      let orderVal: string = $("#orderSelection").val() as string;
      temp = { sortBy: val, order: orderVal.toString() };
      setSort(temp);
    } else if (id === "orderSelection") {
      temp = { ...sort, order: value };
      setSort(temp);
    } else {
      temp = { sortBy: undefined, order: undefined };
      setSort(temp);
    }

    props.sortChanged(temp);
  };

  return (
    <div className="columns">
      {filter.map((f, i) => (
        <div className="column" key={i}>
          <label className="checkbox">
            <input
              type="checkbox"
              value={f.value}
              checked={f.checked}
              onChange={handleFilterChange}
            />
            {" " + f.label}
          </label>
        </div>
      ))}

      <div className="column">
        <label className="label m-2">Sort by:</label>
        <div className="select is-small">
          <select
            id="sortSelection"
            name="sortSelection"
            value={sort.sortBy}
            onChange={handleSortChange}
          >
            {sortOptions.map((option: SortSelection, i) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="select is-small">
          <select
            id="orderSelection"
            name="orderSelection"
            value={sort.order}
            onChange={handleSortChange}
          >
            {orderSelection.map((option: OrderSelection, i) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
