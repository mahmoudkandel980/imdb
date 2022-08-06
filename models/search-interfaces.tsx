export interface SearchMediaInterface {
    searchMedia: {
        page: number;
        results: {
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
        }[];
        total_pages: number;
        total_results: number;
    } | null;
}

export interface SearchPeopleInterface {
    searchPeople: {
        page: number;
        results: {
            adult: boolean;
            gender: number;
            id: number;
            known_for_department: string;
            name: string;
            popularity: number;
            profile_path: string;
        }[];
        total_pages: number;
        total_results: number;
    } | null;
}
