export type Movie = {
  id: number;
  name: string;
  genre: string;
  year: number;
  poster: string;
};

export const movies: Movie[] = [
  {
    id: 1,
    name: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    poster: "pulpfiction.png",
  },
  {
    id: 2,
    name: "Bohemia Rhapsody",
    genre: "Drama",
    year: 2018,
    poster: "BohemiaRhapsody.png",
  },
  {
    id: 3,
    name: "Kill Bill",
    genre: "Action",
    year: 2003,
    poster: "KillBill.png",
  },
  {
    id: 4,
    name: "Avengers Infinity War",
    genre: "Action",
    year: 2018,
    poster: "inifinity.jpg",
  },
  {
    id: 5,
    name: "Inception",
    genre: "Action",
    year: 2010,
    poster: "inception.jpg",
  },
  {
    id: 6,
    name: "Reservoir Dogs",
    genre: "Crime",
    year: 1992,
    poster: "reservoirdogs.jpg",
  },
  {
    id: 7,
    name: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    poster: "shawshank.jpg",
  },
  {
    id: 8,
    name: "The Godfather",
    genre: "Crime",
    year: 1972,
    poster: "godfather.jpg",
  },
  {
    id: 9,
    name: "The Godfather: Part II",
    genre: "Crime",
    year: 1974,
    poster: "godfather2.jpg",
  },
  {
    id: 10,
    name: "The Dark Knight",
    genre: "Action",
    year: 2008,
    poster: "darkknight.jpg",
  },
];
