export type Movie = {
  id: number;
  name: string;
  genre: string;
  year: number;
  poster: string;
  score: number;
  duration: number;
  description: string;
};

export const movies: Movie[] = [
  {
    id: 1,
    name: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    poster: "pulpfiction.png",
    duration: 154,
    score: 8.9,
    description:
      "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of crime in Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.",
  },
  {
    id: 2,
    name: "Bohemia Rhapsody",
    genre: "Drama",
    year: 2018,
    poster: "BohemiaRhapsody.png",
    duration: 134,
    score: 8.1,
    description:
      "Bohemian Rhapsody is a 2018 biographical drama film about the British rock band Queen. Directed by Bryan Singer",
  },
  {
    id: 3,
    name: "Kill Bill",
    genre: "Action",
    year: 2003,
    poster: "KillBill.png",
    duration: 111,
    score: 8.1,
    description:
      "Kill Bill: Volume 1 is a 2003 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who swears revenge on a team of assassins (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader Bill (David Carradine) after they try to kill her and her unborn child. Her journey takes her to Japan, where she battles the Tokyo yakuza.",
  },
  {
    id: 4,
    name: "Avengers Infinity War",
    genre: "Action",
    year: 2018,
    poster: "inifinity.jpg",
    duration: 149,
    score: 8.4,
    description:
      "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and Avengers: Age of Ultron (2015), and the 19th film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldaña, Josh Brolin, and Chris Pratt. In the film, the Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones as part of his quest to kill half of all life in the universe.",
  },
  {
    id: 5,
    name: "Inception",
    genre: "Action",
    year: 2010,
    poster: "inception.jpg",
    duration: 148,
    score: 8.8,
    description:
      "Inception is a 2010 science fiction action film written, co-produced, and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious, and is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious. The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Ellen Page, Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine. Nolan and his brother Jonathan wrote the screenplay after exploring the idea of inception for years. The film was released in the United States on July 16, 2010, in 2D, 3D, and IMAX 3D.",
  },
  {
    id: 6,
    name: "Reservoir Dogs",
    genre: "Crime",
    year: 1992,
    poster: "reservoirdogs.jpg",
    duration: 99,
    score: 8.3,
    description:
      "Reservoir Dogs is a 1992 American crime film written and directed by Quentin Tarantino in his feature film directorial debut. It stars Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn, Steve Buscemi, Lawrence Tierney, and Tarantino. The film follows a group of criminals who plan a diamond heist and then begin to suspect that one of them is an undercover police officer.",
  },
  {
    id: 7,
    name: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    poster: "shawshank.jpg",
    duration: 142,
    score: 9.3,
    description:
      "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis Boyd 'Red' Redding (Morgan Freeman), and becomes instrumental in a money-laundering operation led by the prison warden Samuel Norton (Bob Gunton).",
  },
  {
    id: 8,
    name: "The Godfather",
    genre: "Crime",
    year: 1972,
    poster: "godfather.jpg",
    duration: 175,
    score: 9.2,
    description:
      "The Godfather is a 1972 American crime film directed by Francis Ford Coppola and produced by Albert S. Ruddy, based on Mario Puzo's best-selling novel of the same name. It stars Marlon Brando and Al Pacino as the leaders of a fictional New York crime family. The story, spanning 1945 to 1955, chronicles the family under the patriarch Vito Corleone (Brando), focusing on the transformation of Michael Corleone (Pacino) from reluctant family outsider to ruthless mafia boss.",
  },
  {
    id: 9,
    name: "The Godfather: Part II",
    genre: "Crime",
    year: 1974,
    poster: "godfather2.jpg",
    duration: 202,
    score: 9.0,
    description:
      "The Godfather Part II is a 1974 American crime film produced and directed by Francis Ford Coppola from a screenplay co-written with Mario Puzo, starring Al Pacino and Robert De Niro. A sequel to The Godfather (1972), the film is the second installment in The Godfather trilogy. It follows the early life of Vito Corleone in 1910s New York City and Sicily, and his rise to power in 1920s New York City, while his son, Michael Corleone, expands and tightens his grip on the family crime syndicate.",
  },
  {
    id: 10,
    name: "The Dark Knight",
    genre: "Action",
    year: 2008,
    poster: "darkknight.jpg",
    duration: 152,
    score: 9.0,
    description:
      "The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Featuring the DC Comics character Batman, the film is the second part of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring an ensemble cast including Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman. In the film, Batman and Lieutenant James Gordon work together to bring down the criminal mastermind known as the Joker.",
  },
];
