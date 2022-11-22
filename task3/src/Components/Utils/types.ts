export interface MovieFormValues {
    title: string;
    tagline?: string;
    voteAverage?: number;
    voteCount?: number;
    releaseDate?: string;
    posterPath: string;
    overview: string;
    budget?: number;
    revenue?: number;
    runtime: number;
    genres: string;
}