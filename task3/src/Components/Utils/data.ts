export type Movie = {
  name: string;
  genre: string;
  year: number;
  poster: string;
};

export const movies: Movie[] = [
  {
    name: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    poster: "pulpfiction.png",
  },
  {
    name: "Bohemia Rhapsody",
    genre: "Drama",
    year: 2018,
    poster: "BohemiaRhapsody.png",
  },
  { name: "Kill Bill", genre: "Action", year: 2003, poster: "KillBill.png" },
  {
    name: "Avengers Infinity War",
    genre: "Action",
    year: 2018,
    poster: "inifinity.jpg",
  },
  { name: "Inception", genre: "Action", year: 2010, poster: "inception.jpg" },
  {
    name: "Reservoir Dogs",
    genre: "Crime",
    year: 1992,
    poster: "reservoirdogs.jpg",
  },
  {
    name: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    poster: "shawshank.jpg",
  },
  {
    name: "The Godfather",
    genre: "Crime",
    year: 1972,
    poster: "godfather.jpg",
  },
  {
    name: "The Godfather: Part II",
    genre: "Crime",
    year: 1974,
    poster: "godfather2.jpg",
  },
  {
    name: "The Dark Knight",
    genre: "Action",
    year: 2008,
    poster: "darkknight.jpg",
  },
];
