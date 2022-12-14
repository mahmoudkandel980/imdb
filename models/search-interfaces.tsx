export interface SearchDataWithImageLengthInterface {
    SearchDataWithImageLength: number | null;
}

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
            // multi
            media_type: string;
        }[];
        total_pages: number;
        total_results: number;
    } | null;
}

export interface SearchMultiInterface {
    multiSearch: {
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
            //
            media_type: string;
            // people
            gender: number;
            known_for_department: string;
            profile_path: string;
        }[];

        total_pages: number;
        total_results: number;
    } | null;
}

export interface ModifiedSearchMultiWithImagesInterface {
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
    //
}

export interface ModifiedSearchMultiInterface {
    modifiedSearch:
        | {
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
              //
          }[]
        | null;
}

export interface ModifiedSearchMediaData {
    searchMedia:
        | {
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
          }[]
        | null;
}
export interface ModifiedMultiSearch {
    modifiedMultiSearch:
        | {
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
          }[]
        | null;
}
