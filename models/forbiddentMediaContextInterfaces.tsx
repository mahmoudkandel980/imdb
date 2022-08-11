export interface MediaDataContextInterface {
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

export interface SearchMediaDataContextInterface {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    // tv
    first_air_date: string;
    name: string;
    origin_country: string;
    original_name: string;
}

export interface MultiSearchDataContextInterface {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    // tv
    first_air_date: string;
    name: string;
    origin_country: string;
    original_name: string;
    //
    media_type: string;
    // people
    gender: number;
    known_for_department: string;
    profile_path: string;
}

export interface PersonMedia {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    credit_id: string;
    // department: string;
    // job: string;
    // tv
    origin_country: string[];
    original_name: string;
    first_air_date: string;
    name: string;
    episode_count: number;
}
