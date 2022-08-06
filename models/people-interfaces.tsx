export interface PeopleDataInterface {
    peopleData: {
        adult: boolean;
        gender: number;
        id: number;
        known_for: {
            adult: boolean;
            backdrop_path: string;
            genre_ids: number[];
            id: number;
            media_type: string;
            original_language: string;
            original_title: string;
            overview: string;
            poster_path: string;
            release_date: string;
            title: string;
            video: boolean;
            vote_average: number;
            vote_count: number;
        }[];
        known_for_department: string;
        name: string;
        popularity: number;
        profile_path: string;
    }[];
}

export interface PeopleMediaDataIntrerface {
    known_for: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        media_type: string;
        original_language: string;
        original_title: string;
        overview: string;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }[];
    name: string;
    gender: number;
    id: number;
    onClickHandler: Function;
}

export interface SpecificPeopleMediaDataIntrerface {
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
}

export interface SpecificPersonDetailsDataIntrerface {
    personDetails: {
        adult: boolean;
        also_known_as: string[];
        biography: string;
        birthday: string;
        deathday: string;
        gender: number;
        homepage: string;
        id: number;
        imdb_id: string;
        known_for_department: string;
        name: string;
        place_of_birth: string;
        popularity: number;
        profile_path: string;
    };
}

export interface SpecificPersonMovieMediaDataIntrerface {
    personMovieMedia: {
        cast: {
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
            character: string;
            credit_id: string;
            order: number;
            // tv
            origin_country: string[];
            original_name: string;
            first_air_date: string;
            name: string;
            episode_count: number;
        }[];
        crew: {
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
            department: string;
            job: string;
            // tv
            origin_country: string[];
            original_name: string;
            first_air_date: string;
            name: string;
            episode_count: number;
        }[];
        id: number;
    };
}

export interface SpecificPersonTvMediaDataIntrerface {
    personTvMedia: {
        cast: {
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
            character: string;
            credit_id: string;
            order: number;
            // tv
            origin_country: string[];
            original_name: string;
            first_air_date: string;
            name: string;
            episode_count: number;
        }[];
        crew: {
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
            department: string;
            job: string;
            // tv
            origin_country: string[];
            original_name: string;
            first_air_date: string;
            name: string;
            episode_count: number;
        }[];
        id: number;
    };
}

export interface SpecificPersonMediaDataIntrerface {
    personMedia: {
        cast: {
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
            character: string;
            credit_id: string;
            order: number;
            // tv
            origin_country: string[];
            original_name: string;
            first_air_date: string;
            name: string;
            episode_count: number;
        }[];
        crew: {
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
            department: string;
            job: string;
            // tv
            origin_country: string[];
            original_name: string;
            first_air_date: string;
            name: string;
            episode_count: number;
        }[];
        id: number;
    };
}

export interface MediaPeopleInterface {
    mediaPeople: {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        cast_id: number;
        character: string;
        credit_id: string;
        order: number;
    }[];
}
