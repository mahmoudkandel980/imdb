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
    const [showMedia, setShowMedia] = useState<boolean>(false);
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

    const getMovieData = ({
        backdrop_path,
        id,
        title,
        original_language,
        original_title,
        original_name,
        overview,
        poster_path,
        media_type,
        release_date,
        first_air_date,
        vote_average,
        vote_count,
        name,
    }: movieDataInterface) => {
        setMovieData({
            backdrop_path,
            id,
            title,
            original_language,
            original_title,
            original_name,
            overview,
            poster_path,
            media_type,
            release_date,
            first_air_date,
            vote_average,
            vote_count,
            name,
        });
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
