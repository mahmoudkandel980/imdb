export interface MediaSwiperInterface {
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
}
export interface PeopleSwiperInterface {
    person: {
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
    };
}

// Trending
export interface TrendingMediaInterface {
    trendingMedia:
        | {
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
          }[]
        | null;
}

// Movies
export interface PopularMoviesInterface {
    popularMovies: {
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
export interface topRatedMoviesInterface {
    topRatedMovies: {
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
export interface UpComingMoviesInterface {
    upComingMovies: {
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

// Tv
export interface PopularTvInterface {
    popularTv: {
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
export interface TopRatedTvInterface {
    topRatedTv: {
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
export interface UpComingTvInterface {
    upComingTv: {
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

// People
export interface PopularPeopleInterface {
    popularPeople: {
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
