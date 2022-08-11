import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Props } from "../models/context-interfaces";
import { ModifiedSearchMultiWithImagesInterface } from "../models/search-interfaces";

export interface ModifiedMultiSearch {
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
}

const initailLength: number = 0;
const InimMdifiedMultiSearch: ModifiedMultiSearch[] = [
    {
        adult: false,
        backdrop_path: "",
        genre_ids: [0],
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
        // tv
        first_air_date: "",
        name: "",
        origin_country: "",
        original_name: "",
        //
        media_type: "",
        // people
        gender: 0,
        known_for_department: "",
        profile_path: "",
    },
];

const IniMultiSearchWithImage: ModifiedSearchMultiWithImagesInterface[] = [
    {
        adult: false,
        backdrop_path: "",
        genre_ids: [0],
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
        // tv
        first_air_date: "",
        name: "",
        origin_country: "",
        original_name: "",
        //
        media_type: "",
        // people
        gender: 0,
        known_for_department: "",
        profile_path: "",
    },
];

const initialSelectedType: string = "all";

const FilterMultiSearchContext = createContext({
    modifiedMultiSearch: InimMdifiedMultiSearch,
    selectedType: initialSelectedType,
    multiSearchWithImage: IniMultiSearchWithImage,
    movieSearchWithImage: IniMultiSearchWithImage,
    tvSearchWithImage: IniMultiSearchWithImage,
    peopleSearchWithImage: IniMultiSearchWithImage,
    movieLength: initailLength,
    tvLength: initailLength,
    peopleLength: initailLength,
    addMultiSearchData: (
        modifiedMultiSearch: ModifiedMultiSearch[]
    ): void => {},
    toggleSelectedType: (selectedType: string): void => {},
});

export const FilterMultiSearchContextProvider = (props: Props): JSX.Element => {
    const { children } = props;
    const router = useRouter();

    const [modifiedMultiSearch, setModifiedMultiSearch] = useState<
        ModifiedMultiSearch[]
    >(InimMdifiedMultiSearch);

    // toggle selectedType
    const [selectedType, setSelectedType] = useState(initialSelectedType);
    const toggleSelectedType = (selecedT: string) => {
        setSelectedType(selecedT);
    };

    // filter data has images state
    const [multiSearchWithImage, setMultiSearchWithImage] = useState<
        ModifiedSearchMultiWithImagesInterface[]
    >([]);

    // specific filters those filter movies , tv and people those has an images
    const [movieSearchWithImage, setMovieSearchWithImage] = useState<
        ModifiedSearchMultiWithImagesInterface[]
    >([]);
    const [tvSearchWithImage, setTvSearchWithImage] = useState<
        ModifiedSearchMultiWithImagesInterface[]
    >([]);
    const [peopleSearchWithImage, setPeopleSearchWithImage] = useState<
        ModifiedSearchMultiWithImagesInterface[]
    >([]);

    const [movieLength, setMovieLength] = useState(0);
    const [tvLength, setTvLength] = useState(0);
    const [peopleLength, setPeopleLength] = useState(0);

    // get all data from search.tsx to filtering it
    const addMultiSearchData = (modifiedMultiSearch: ModifiedMultiSearch[]) => {
        setModifiedMultiSearch(modifiedMultiSearch);
    };

    // filter allData that have Images
    useEffect(() => {
        setMultiSearchWithImage([]);
        modifiedMultiSearch?.forEach((searchData) => {
            if (
                searchData.poster_path ||
                searchData.backdrop_path ||
                searchData.profile_path
            ) {
                setMultiSearchWithImage((prevState) =>
                    prevState?.concat(searchData)
                );
            }
        });
    }, [modifiedMultiSearch, router.query.searchType, router.query.query]);

    // filter people movies tv those has an images
    useEffect(() => {
        if (!router.query.searchType || router.query.searchType === "all") {
            setMovieSearchWithImage([]);
            setTvSearchWithImage([]);
            setPeopleSearchWithImage([]);

            setMovieLength(0);
            setTvLength(0);
            setPeopleLength(0);

            modifiedMultiSearch?.forEach((searchData) => {
                if (
                    searchData.media_type === "movie" &&
                    (searchData.poster_path || searchData.backdrop_path)
                ) {
                    setMovieLength(movieSearchWithImage.length);
                    setMovieSearchWithImage((prevState) =>
                        prevState?.concat(searchData)
                    );
                } else if (
                    searchData.media_type === "tv" &&
                    (searchData.poster_path || searchData.backdrop_path)
                ) {
                    setTvLength(tvSearchWithImage.length);
                    setTvSearchWithImage((prevState) =>
                        prevState?.concat(searchData)
                    );
                } else if (
                    searchData.media_type === "person" &&
                    searchData.profile_path
                ) {
                    setPeopleLength(peopleSearchWithImage.length);
                    setPeopleSearchWithImage((prevState) =>
                        prevState?.concat(searchData)
                    );
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modifiedMultiSearch]);

    // set movies, tv and perople length
    useEffect(() => {
        if (!router.query.searchType || router.query.searchType === "all") {
            setMovieLength(0);
            setTvLength(0);
            setPeopleLength(0);
            modifiedMultiSearch?.forEach((searchData) => {
                if (
                    searchData.media_type === "movie" &&
                    (searchData.poster_path || searchData.backdrop_path)
                ) {
                    setMovieLength(movieSearchWithImage.length);
                } else if (
                    searchData.media_type === "tv" &&
                    (searchData.poster_path || searchData.backdrop_path)
                ) {
                    setTvLength(tvSearchWithImage.length);
                } else if (
                    searchData.media_type === "person" &&
                    searchData.profile_path
                ) {
                    setPeopleLength(peopleSearchWithImage.length);
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        modifiedMultiSearch,
        multiSearchWithImage,
        movieSearchWithImage,
        tvSearchWithImage,
        peopleSearchWithImage,
    ]);

    const data = {
        modifiedMultiSearch,
        selectedType,
        multiSearchWithImage,
        movieSearchWithImage,
        tvSearchWithImage,
        peopleSearchWithImage,
        movieLength,
        tvLength,
        peopleLength,
        addMultiSearchData,
        toggleSelectedType,
    };
    return (
        <FilterMultiSearchContext.Provider value={data}>
            {children}
        </FilterMultiSearchContext.Provider>
    );
};

export default FilterMultiSearchContext;
