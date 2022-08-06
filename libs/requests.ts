const API_KEY = process.env.API_KEY;

// Movies
export const requestMoviePage = [
    {
        pageName: "movie",
        mediaType: "Movie",
        type: "Trending",
        title: "Trending",
        url: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },
    {
        pageName: "movie",
        mediaType: "Movie",
        type: "TopRated",
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },
    {
        pageName: "movie",
        mediaType: "Movie",
        type: "Popular",
        title: "Popular",
        url: `/movie/popular?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },
    {
        pageName: "movie",
        mediaType: "Movie",
        type: "Upcoming",
        title: "Upcoming",
        url: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },
];

// Tv
export const requestTvPage = [
    {
        pageName: "tv",
        mediaType: "Tv",
        type: "Popular",
        title: "Popular",
        url: `/tv/popular?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },
    {
        pageName: "tv",
        mediaType: "Tv",
        type: "TopRated",
        title: "Top Rated",
        url: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },

    {
        pageName: "tv",
        mediaType: "Tv",
        type: "Airing Today",
        title: "Airing Today",
        url: `/tv/airing_today?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },
    {
        pageName: "tv",
        mediaType: "Tv",
        type: "On The Air",
        title: "On The Air",
        url: `/tv/on_the_air?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },
];

// HomePage
export const requestHomePage = [
    {
        pageName: "home",
        type: "Movie",
        title: "Movie",
        url: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
        pages: "one page",
    },
    {
        pageName: "home",
        type: "Tv",
        title: "Tv",
        url: `/tv/popular?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },
    {
        pageName: "home",
        type: "People",
        title: "People",
        url: `person/popular?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },
];

// People
export const requestPeoplePage = [
    {
        pageName: "people",
        type: "Popular",
        title: "Popular",
        url: `/person/popular?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },
];

// Search
export const requestSearchPage = [
    {
        // page query
        pageName: "multi",
        type: "Multi",
        title: "Multi",
        url: `/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false`,
        pages: "More than one",
    },
    {
        // page query
        pageName: "movie",
        type: "Movie",
        title: "Movie",
        url: `/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false`,
        pages: "More than one",
    },
    {
        // page query
        pageName: "tv",
        type: "Tv",
        title: "Tv",
        url: `/search/tv?api_key=${API_KEY}&language=en-US&include_adult=false`,
        pages: "More than one",
    },
    {
        // page query
        pageName: "People",
        type: "People",
        title: "People",
        url: `/search/person?api_key=${API_KEY}&language=en-US&include_adult=false`,
        pages: "More than one",
    },
];

// Media People
export const requestMediaPeoplePage = {
    pageName: "mediaPeople",
    url: `?api_key=${API_KEY}&language=en-US`,
    pages: "one page",
};

export const requestPersonIdPage = {
    pageName: "personId",
    url: `?api_key=${API_KEY}&language=en-US`,
    pages: "one page",
};

export const requestMovieIdPage = {
    pageName: "movieId",
    url: `?api_key=${API_KEY}&language=en-US`,
    pages: "one page",
};
