export interface Props {
    children: React.ReactNode;
}

export interface movieDataInterface {
    backdrop_path: string;
    id: string;
    title: string;
    original_language: string;
    original_title: string;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: string;
    release_date: string;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    name: string;
}

export interface MovieDataContextInterface {
    movieData: {};
    getMovieData: (movieData: movieDataInterface) => {};
}
