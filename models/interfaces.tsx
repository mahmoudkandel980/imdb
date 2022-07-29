export interface NavbarFrameInterface {
    children: JSX.Element[] | JSX.Element;
}

export interface NavElInterface {
    href: string;
    icon: JSX.Element;
    navEl: string;
}

export interface CardInterface {
    movie: {
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
    };
    onClickHandler: Function;
}

// MOVIES
export interface moviesDataInterface {
    moviesData: {
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
    }[];
}

export interface movieDataInterface {
    movieData: {
        backdrop_path: string;
        genres: { id: number; name: string }[];
        homepage: string;
        id: number;
        imdb_id: string;
        original_language: string;
        original_title: string;
        overview: string;
        poster_path: string;
        production_companies: {
            id: number;
            logo_path: null | string;
            name: string;
            origin_country: string;
        }[];
        production_countries: { iso_3166_1: string; name: string }[];
        release_date: string;
        runtime: number;
        spoken_languages: {
            english_name: string;
            iso_639_1: string;
            name: string;
        }[];
        status: string;
        title: string;
        vote_average: number;
        vote_count: number;
    };
}
export interface movieVedioDataInterface {
    movieVedioData: {
        iso_639_1: string;
        name: string;
        key: string;
        type: string;
        published_at: string;
        id: string;
    }[];
}

export interface RequestMediaInterface {
    type: string;
    mediaType: string;
}

export interface PaginationButtons {
    icon: JSX.Element;
    target: string;
}
