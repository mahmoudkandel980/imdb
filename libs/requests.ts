const API_KEY = process.env.API_KEY;

export const requestMoviePage = [
    {
        pageName: "movie",
        mediaType: "Movie",
        type: "Trending",
        title: "Trending",
        url: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
        pages: "one page",
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

export const requestTvPage = [
    {
        pageName: "tv",
        mediaType: "Tv",
        type: "TopRated",
        title: "Top Rated",
        url: `/tv/popular?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },
    {
        pageName: "tv",
        mediaType: "Tv",
        type: "Popular",
        title: "Popular",
        url: `/tv/popular?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },
];

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

export const requestPeoplePage = [
    {
        pageName: "people",
        type: "Popular",
        title: "Popular",
        url: `/person/popular?api_key=${API_KEY}&language=en-US`,
        pages: "More than one",
    },
];

export const requestMovieIdPage = {
    pageName: "movieId",
    url: `?api_key=${API_KEY}&language=en-US`,
    pages: "More than one",
};
