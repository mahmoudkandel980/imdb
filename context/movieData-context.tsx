import { createContext, useState } from "react";

import { movieDataInterface, Props } from "../models/context-interfaces";

const MovieContext = createContext({
    movieData: {
        backdrop_path: "",
        id: "",
        title: "",
        original_language: "",
        original_title: "",
        original_name: "",
        overview: "",
        poster_path: "",
        media_type: "",
        release_date: "",
        first_air_date: "",
        vote_average: 0,
        vote_count: 0,
        name: "",
    },
    getMovieData: (movieData: movieDataInterface): void => {},
});

export const MovieContextProvider = (props: Props): JSX.Element => {
    const { children } = props;
    const [movieData, setMovieData] = useState<movieDataInterface>({
        backdrop_path: "",
        id: "",
        title: "",
        original_language: "",
        original_title: "",
        original_name: "",
        overview: "",
        poster_path: "",
        media_type: "",
        release_date: "",
        first_air_date: "",
        vote_average: 0,
        vote_count: 0,
        name: "",
    });

    const getMovieData = (movieData: movieDataInterface) => {
        setMovieData(movieData);
    };

    const data = {
        movieData,
        getMovieData,
    };
    return (
        <MovieContext.Provider value={data}>{children}</MovieContext.Provider>
    );
};

export default MovieContext;
