// MEDIA DATA
export interface MediaDataInterface {
    mediaData: {
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
export interface MediaDataInterface {
    mediaData: {
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

// SPECIFIC MEDIA DATA
export interface SpecificMediaDataInterface {
    mediaData: {
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
        // tv
        name: string;
        first_air_date: string;
        episode_run_time: [num1: number];
        number_of_episodes: number;
        number_of_seasons: number;
        seasons: {
            air_date: string;
            episode_count: number;
            id: number;
            name: string;
            overview: string;
            poster_path: string;
            season_number: number;
        }[];
    };
}

// CARD
export interface CardInterface {
    media: {
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

// VEDIO DATA
export interface MediaVedioDataInterface {
    mediaVedioData: {
        iso_639_1: string;
        name: string;
        key: string;
        type: string;
        published_at: string;
        id: string;
    }[];
}

export interface initialVideoDataInterface {
    initialVideoData: {
        name: string;
        key: string;
    };
}
