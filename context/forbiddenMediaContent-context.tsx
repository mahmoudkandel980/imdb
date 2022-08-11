import { createContext, useState } from "react";

import { Props } from "../models/context-interfaces";
import {
    MediaDataContextInterface,
    SearchMediaDataContextInterface,
    MultiSearchDataContextInterface,
    PersonMedia,
} from "../models/forbiddentMediaContextInterfaces";

const initialMediaData: MediaDataContextInterface[] | null = [
    {
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
];

const initialSearchMedia: SearchMediaDataContextInterface[] = [
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
    },
];

const initialMultiSearch: MultiSearchDataContextInterface[] = [
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

const initialPersonMedia: PersonMedia[] = [
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
        credit_id: "",
        // department: "",
        // job: "",
        // tv
        origin_country: [""],
        original_name: "",
        first_air_date: "",
        name: "",
        episode_count: 0,
    },
];

const ForbiddenMediaContentContext = createContext({
    mediaData: initialMediaData,
    searchMedia: initialSearchMedia,
    multiSearch: initialMultiSearch,
    personMoviesCrew: initialPersonMedia,
    personTvCrew: initialPersonMedia,
    personMoviesCast: initialPersonMedia,
    personTvCast: initialPersonMedia,
    filterForbiddenContentMediaDataFun: (
        mediaData: MediaDataContextInterface[]
    ): void => {},
    filterForbiddenContentSearchMediaFun: (
        searchMedia: SearchMediaDataContextInterface[]
    ): void => {},
    filterForbiddenContentMultiSearchFun: (
        multiSearch: MultiSearchDataContextInterface[]
    ): void => {},
    filterForbiddenPersonMoviesCrewFun: (moviesCrew: PersonMedia[]): void => {},
    filterForbiddenPersonTvCrewFun: (tvCrew: PersonMedia[]): void => {},
    filterForbiddenPersonMoviesCastFun: (moviesCast: PersonMedia[]): void => {},
    filterForbiddenPersonTvCastFun: (tvCast: PersonMedia[]): void => {},
});

export const ForbiddenMediaContentContextProvider = (
    props: Props
): JSX.Element => {
    const { children } = props;
    const [mediaData, setMediaData] =
        useState<MediaDataContextInterface[]>(initialMediaData);

    const [searchMedia, setSearchMediaData] =
        useState<SearchMediaDataContextInterface[]>(initialSearchMedia);
    const [multiSearch, setMultiSearch] =
        useState<MultiSearchDataContextInterface[]>(initialMultiSearch);
    const [personMoviesCrew, setPersonMoviesCrew] =
        useState<PersonMedia[]>(initialPersonMedia);
    const [personTvCrew, setpersonTvCrew] =
        useState<PersonMedia[]>(initialPersonMedia);
    const [personMoviesCast, setPersonMoviesCast] =
        useState<PersonMedia[]>(initialPersonMedia);
    const [personTvCast, setpersonTvCast] =
        useState<PersonMedia[]>(initialPersonMedia);

    const filterForbiddenContentMediaDataFun = (
        mediaData: MediaDataContextInterface[]
    ) => {
        setMediaData([]);
        mediaData.forEach((media) => {
            const name = media?.name?.toLowerCase();
            const original_name = media?.original_name?.toLowerCase();
            const title = media?.title?.toLowerCase();
            const original_title = media?.original_title?.toLowerCase();
            const backdrop_path = media?.backdrop_path;
            const poster_path = media?.poster_path;
            if (
                name?.includes("sex") ||
                original_name?.includes("sex") ||
                title?.includes("sex") ||
                original_title?.includes("sex") ||
                name?.includes("horny") ||
                original_name?.includes("horny") ||
                title?.includes("horny") ||
                original_title?.includes("horny") ||
                name?.includes("tit") ||
                original_name?.includes("tit") ||
                title?.includes("tit") ||
                original_title?.includes("tit") ||
                name?.includes("boob") ||
                original_name?.includes("boob") ||
                title?.includes("boob") ||
                original_title?.includes("boob") ||
                name?.includes("hentai") ||
                original_name?.includes("hentai") ||
                title?.includes("hentai") ||
                original_title?.includes("hentai") ||
                name?.includes("fuck") ||
                original_name?.includes("fuck") ||
                title?.includes("fuck") ||
                original_title?.includes("fuck") ||
                name?.includes("porn") ||
                original_name?.includes("porn") ||
                title?.includes("porn") ||
                original_title?.includes("porn") ||
                name?.includes("gay") ||
                original_name?.includes("gay") ||
                title?.includes("gay") ||
                original_title?.includes("gay") ||
                name?.includes("lesbian") ||
                original_name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                original_title?.includes("lesbian") ||
                name?.includes("ass") ||
                original_name?.includes("ass") ||
                title?.includes("ass") ||
                original_title?.includes("ass") ||
                name?.includes("orgasm") ||
                original_name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                original_title?.includes("orgasm") ||
                name?.includes("virgin") ||
                original_name?.includes("virgin") ||
                title?.includes("virgin") ||
                original_title?.includes("virgin") ||
                name?.includes("18") ||
                original_name?.includes("18") ||
                title?.includes("18") ||
                original_title?.includes("18") ||
                name?.includes("16") ||
                original_name?.includes("16") ||
                title?.includes("16") ||
                original_title?.includes("16") ||
                name?.includes("transgender") ||
                original_name?.includes("transgender") ||
                title?.includes("transgender") ||
                original_title?.includes("transgender") ||
                name?.includes("mature") ||
                original_name?.includes("mature") ||
                title?.includes("mature") ||
                original_title?.includes("mature") ||
                name?.includes("milf") ||
                original_name?.includes("milf") ||
                title?.includes("milf") ||
                original_title?.includes("milf") ||
                name?.includes("orgy") ||
                original_name?.includes("orgy") ||
                title?.includes("orgy") ||
                original_title?.includes("orgy") ||
                name?.includes("cosplay") ||
                original_name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                original_title?.includes("cosplay") ||
                name?.includes("squirt") ||
                original_name?.includes("squirt") ||
                title?.includes("squirt") ||
                original_title?.includes("squirt") ||
                name?.includes("brunette") ||
                original_name?.includes("brunette") ||
                title?.includes("brunette") ||
                original_title?.includes("brunette") ||
                name?.includes("handjob") ||
                original_name?.includes("handjob") ||
                title?.includes("handjob") ||
                original_title?.includes("handjob") ||
                name?.includes("cum") ||
                original_name?.includes("cum") ||
                title?.includes("cum") ||
                original_title?.includes("cum") ||
                name?.includes("blowjob") ||
                original_name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                original_title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                original_name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                original_title?.includes("hardcore") ||
                name?.includes("tatto") ||
                original_name?.includes("tatto") ||
                title?.includes("tatto") ||
                original_title?.includes("tatto") ||
                name?.includes("pussy") ||
                original_name?.includes("pussy") ||
                title?.includes("pussy") ||
                original_title?.includes("pussy") ||
                name?.includes("fisting") ||
                original_name?.includes("fisting") ||
                title?.includes("fisting") ||
                original_title?.includes("fisting") ||
                name?.includes("strap") ||
                original_name?.includes("strap") ||
                title?.includes("strap") ||
                original_title?.includes("strap") ||
                name?.includes("creampie") ||
                original_name?.includes("creampie") ||
                title?.includes("creampie") ||
                original_title?.includes("creampie") ||
                name?.includes("gangbang") ||
                original_name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                original_title?.includes("gangbang") ||
                name?.includes("female") ||
                original_name?.includes("female") ||
                title?.includes("female") ||
                original_title?.includes("female") ||
                name?.includes("threesome") ||
                original_name?.includes("threesome") ||
                title?.includes("threesome") ||
                original_title?.includes("threesome") ||
                name?.includes("step") ||
                original_name?.includes("step") ||
                title?.includes("step") ||
                original_title?.includes("step") ||
                name?.includes("vintage") ||
                original_name?.includes("vintage") ||
                title?.includes("vintage") ||
                original_title?.includes("vintage") ||
                name?.includes("beach") ||
                original_name?.includes("beach") ||
                title?.includes("beach") ||
                original_title?.includes("beach") ||
                name?.includes("massage") ||
                original_name?.includes("massage") ||
                title?.includes("massage") ||
                original_title?.includes("massage") ||
                name?.includes("love") ||
                original_name?.includes("love") ||
                title?.includes("love") ||
                original_title?.includes("love") ||
                name?.includes("tight") ||
                original_name?.includes("tight") ||
                title?.includes("tight") ||
                original_title?.includes("tight") ||
                name?.includes("feeling") ||
                original_name?.includes("feeling") ||
                title?.includes("feeling") ||
                original_title?.includes("feeling") ||
                name?.includes("heart") ||
                original_name?.includes("heart") ||
                title?.includes("heart") ||
                original_title?.includes("heart") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("pretty") ||
                original_name?.includes("pretty") ||
                title?.includes("pretty") ||
                original_title?.includes("pretty") ||
                name?.includes("high school") ||
                original_name?.includes("high school") ||
                title?.includes("high school") ||
                original_title?.includes("high school") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("girl") ||
                original_name?.includes("girl") ||
                title?.includes("girl") ||
                original_title?.includes("girl") ||
                name?.includes("boy") ||
                original_name?.includes("boy") ||
                title?.includes("boy") ||
                original_title?.includes("boy") ||
                name?.includes("friend") ||
                original_name?.includes("friend") ||
                title?.includes("friend") ||
                original_title?.includes("friend") ||
                name?.includes("x") ||
                original_name?.includes("x") ||
                title?.includes("x") ||
                original_title?.includes("x") ||
                name?.includes("fu") ||
                original_name?.includes("fu") ||
                title?.includes("fu") ||
                original_title?.includes("fu") ||
                name?.includes("f*") ||
                original_name?.includes("f*") ||
                title?.includes("f*") ||
                original_title?.includes("f*") ||
                name?.includes("san") ||
                original_name?.includes("san") ||
                title?.includes("san") ||
                original_title?.includes("san") ||
                name?.includes("whore") ||
                original_name?.includes("whore") ||
                title?.includes("whore") ||
                original_title?.includes("whore") ||
                name?.includes("revolver") ||
                original_name?.includes("revolver") ||
                title?.includes("revolver") ||
                original_title?.includes("revolver") ||
                name?.includes("bare") ||
                original_name?.includes("bare") ||
                title?.includes("bare") ||
                original_title?.includes("bare") ||
                name?.includes("naked") ||
                original_name?.includes("naked") ||
                title?.includes("naked") ||
                original_title?.includes("naked") ||
                name?.includes("to be true") ||
                original_name?.includes("to be true") ||
                title?.includes("to be true") ||
                original_title?.includes("to be true") ||
                name?.includes("lust") ||
                original_name?.includes("lust") ||
                title?.includes("lust") ||
                original_title?.includes("lust") ||
                name?.includes("forbidden") ||
                original_name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                original_title?.includes("forbidden") ||
                name?.includes("lisa") ||
                original_name?.includes("lisa") ||
                title?.includes("lisa") ||
                original_title?.includes("lisa") ||
                name?.includes("ann") ||
                original_name?.includes("ann") ||
                title?.includes("ann") ||
                original_title?.includes("ann") ||
                name?.includes("mom") ||
                original_name?.includes("mom") ||
                title?.includes("mom") ||
                original_title?.includes("mom") ||
                name?.includes("teen") ||
                original_name?.includes("teen") ||
                title?.includes("teen") ||
                original_title?.includes("teen") ||
                name?.includes("wife") ||
                original_name?.includes("wife") ||
                title?.includes("wife") ||
                original_title?.includes("wife") ||
                name?.includes("anal") ||
                original_name?.includes("anal") ||
                title?.includes("anal") ||
                original_title?.includes("anal") ||
                name?.includes("dirty") ||
                original_name?.includes("dirty") ||
                title?.includes("dirty") ||
                original_title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                original_name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                original_title?.includes("shades of kink") ||
                name?.includes("inside") ||
                original_name?.includes("inside") ||
                title?.includes("inside") ||
                original_title?.includes("inside") ||
                name?.includes("mistress") ||
                original_name?.includes("mistress") ||
                title?.includes("mistress") ||
                original_title?.includes("mistress") ||
                name?.includes("blond") ||
                original_name?.includes("blond") ||
                title?.includes("blond") ||
                original_title?.includes("blond") ||
                name?.includes("black") ||
                original_name?.includes("black") ||
                title?.includes("black") ||
                original_title?.includes("black") ||
                name?.includes("after") ||
                original_name?.includes("after") ||
                title?.includes("after") ||
                original_title?.includes("after") ||
                name?.includes("married") ||
                original_name?.includes("married") ||
                title?.includes("married") ||
                original_title?.includes("married") ||
                name?.includes("husbands") ||
                original_name?.includes("husbands") ||
                title?.includes("husbands") ||
                original_title?.includes("husbands") ||
                name?.includes("dance") ||
                original_name?.includes("dance") ||
                title?.includes("dance") ||
                original_title?.includes("dance") ||
                name?.includes("check out") ||
                original_name?.includes("check out") ||
                title?.includes("check out") ||
                original_title?.includes("check out") ||
                name?.includes("don't tell") ||
                original_name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                original_title?.includes("dont tell") ||
                name?.includes("dont tell") ||
                original_name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                original_title?.includes("dont tell")
            ) {
            } else {
                if (backdrop_path || poster_path) {
                    setMediaData((prevState) => prevState.concat(media));
                }
            }
        });
    };

    const filterForbiddenContentSearchMediaFun = (
        searchMedia: SearchMediaDataContextInterface[]
    ) => {
        setSearchMediaData(initialSearchMedia);
        searchMedia?.forEach((media, index) => {
            const name = media?.name?.toLowerCase();
            const original_name = media?.original_name?.toLowerCase();
            const title = media?.title?.toLowerCase();
            const original_title = media?.original_title?.toLowerCase();
            const backdrop_path = media?.backdrop_path;
            const poster_path = media?.poster_path;
            if (
                name?.includes("sex") ||
                original_name?.includes("sex") ||
                title?.includes("sex") ||
                original_title?.includes("sex") ||
                name?.includes("horny") ||
                original_name?.includes("horny") ||
                title?.includes("horny") ||
                original_title?.includes("horny") ||
                name?.includes("tit") ||
                original_name?.includes("tit") ||
                title?.includes("tit") ||
                original_title?.includes("tit") ||
                name?.includes("boob") ||
                original_name?.includes("boob") ||
                title?.includes("boob") ||
                original_title?.includes("boob") ||
                name?.includes("hentai") ||
                original_name?.includes("hentai") ||
                title?.includes("hentai") ||
                original_title?.includes("hentai") ||
                name?.includes("fuck") ||
                original_name?.includes("fuck") ||
                title?.includes("fuck") ||
                original_title?.includes("fuck") ||
                name?.includes("porn") ||
                original_name?.includes("porn") ||
                title?.includes("porn") ||
                original_title?.includes("porn") ||
                name?.includes("gay") ||
                original_name?.includes("gay") ||
                title?.includes("gay") ||
                original_title?.includes("gay") ||
                name?.includes("lesbian") ||
                original_name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                original_title?.includes("lesbian") ||
                name?.includes("ass") ||
                original_name?.includes("ass") ||
                title?.includes("ass") ||
                original_title?.includes("ass") ||
                name?.includes("orgasm") ||
                original_name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                original_title?.includes("orgasm") ||
                name?.includes("virgin") ||
                original_name?.includes("virgin") ||
                title?.includes("virgin") ||
                original_title?.includes("virgin") ||
                name?.includes("18") ||
                original_name?.includes("18") ||
                title?.includes("18") ||
                original_title?.includes("18") ||
                name?.includes("16") ||
                original_name?.includes("16") ||
                title?.includes("16") ||
                original_title?.includes("16") ||
                name?.includes("transgender") ||
                original_name?.includes("transgender") ||
                title?.includes("transgender") ||
                original_title?.includes("transgender") ||
                name?.includes("mature") ||
                original_name?.includes("mature") ||
                title?.includes("mature") ||
                original_title?.includes("mature") ||
                name?.includes("milf") ||
                original_name?.includes("milf") ||
                title?.includes("milf") ||
                original_title?.includes("milf") ||
                name?.includes("orgy") ||
                original_name?.includes("orgy") ||
                title?.includes("orgy") ||
                original_title?.includes("orgy") ||
                name?.includes("cosplay") ||
                original_name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                original_title?.includes("cosplay") ||
                name?.includes("squirt") ||
                original_name?.includes("squirt") ||
                title?.includes("squirt") ||
                original_title?.includes("squirt") ||
                name?.includes("brunette") ||
                original_name?.includes("brunette") ||
                title?.includes("brunette") ||
                original_title?.includes("brunette") ||
                name?.includes("handjob") ||
                original_name?.includes("handjob") ||
                title?.includes("handjob") ||
                original_title?.includes("handjob") ||
                name?.includes("cum") ||
                original_name?.includes("cum") ||
                title?.includes("cum") ||
                original_title?.includes("cum") ||
                name?.includes("blowjob") ||
                original_name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                original_title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                original_name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                original_title?.includes("hardcore") ||
                name?.includes("tatto") ||
                original_name?.includes("tatto") ||
                title?.includes("tatto") ||
                original_title?.includes("tatto") ||
                name?.includes("pussy") ||
                original_name?.includes("pussy") ||
                title?.includes("pussy") ||
                original_title?.includes("pussy") ||
                name?.includes("fisting") ||
                original_name?.includes("fisting") ||
                title?.includes("fisting") ||
                original_title?.includes("fisting") ||
                name?.includes("strap") ||
                original_name?.includes("strap") ||
                title?.includes("strap") ||
                original_title?.includes("strap") ||
                name?.includes("creampie") ||
                original_name?.includes("creampie") ||
                title?.includes("creampie") ||
                original_title?.includes("creampie") ||
                name?.includes("gangbang") ||
                original_name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                original_title?.includes("gangbang") ||
                name?.includes("female") ||
                original_name?.includes("female") ||
                title?.includes("female") ||
                original_title?.includes("female") ||
                name?.includes("threesome") ||
                original_name?.includes("threesome") ||
                title?.includes("threesome") ||
                original_title?.includes("threesome") ||
                name?.includes("step") ||
                original_name?.includes("step") ||
                title?.includes("step") ||
                original_title?.includes("step") ||
                name?.includes("vintage") ||
                original_name?.includes("vintage") ||
                title?.includes("vintage") ||
                original_title?.includes("vintage") ||
                name?.includes("beach") ||
                original_name?.includes("beach") ||
                title?.includes("beach") ||
                original_title?.includes("beach") ||
                name?.includes("massage") ||
                original_name?.includes("massage") ||
                title?.includes("massage") ||
                original_title?.includes("massage") ||
                name?.includes("love") ||
                original_name?.includes("love") ||
                title?.includes("love") ||
                original_title?.includes("love") ||
                name?.includes("tight") ||
                original_name?.includes("tight") ||
                title?.includes("tight") ||
                original_title?.includes("tight") ||
                name?.includes("feeling") ||
                original_name?.includes("feeling") ||
                title?.includes("feeling") ||
                original_title?.includes("feeling") ||
                name?.includes("heart") ||
                original_name?.includes("heart") ||
                title?.includes("heart") ||
                original_title?.includes("heart") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("pretty") ||
                original_name?.includes("pretty") ||
                title?.includes("pretty") ||
                original_title?.includes("pretty") ||
                name?.includes("high school") ||
                original_name?.includes("high school") ||
                title?.includes("high school") ||
                original_title?.includes("high school") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("girl") ||
                original_name?.includes("girl") ||
                title?.includes("girl") ||
                original_title?.includes("girl") ||
                name?.includes("boy") ||
                original_name?.includes("boy") ||
                title?.includes("boy") ||
                original_title?.includes("boy") ||
                name?.includes("friend") ||
                original_name?.includes("friend") ||
                title?.includes("friend") ||
                original_title?.includes("friend") ||
                name?.includes("x") ||
                original_name?.includes("x") ||
                title?.includes("x") ||
                original_title?.includes("x") ||
                name?.includes("fu") ||
                original_name?.includes("fu") ||
                title?.includes("fu") ||
                original_title?.includes("fu") ||
                name?.includes("f*") ||
                original_name?.includes("f*") ||
                title?.includes("f*") ||
                original_title?.includes("f*") ||
                name?.includes("san") ||
                original_name?.includes("san") ||
                title?.includes("san") ||
                original_title?.includes("san") ||
                name?.includes("whore") ||
                original_name?.includes("whore") ||
                title?.includes("whore") ||
                original_title?.includes("whore") ||
                name?.includes("revolver") ||
                original_name?.includes("revolver") ||
                title?.includes("revolver") ||
                original_title?.includes("revolver") ||
                name?.includes("bare") ||
                original_name?.includes("bare") ||
                title?.includes("bare") ||
                original_title?.includes("bare") ||
                name?.includes("naked") ||
                original_name?.includes("naked") ||
                title?.includes("naked") ||
                original_title?.includes("naked") ||
                name?.includes("to be true") ||
                original_name?.includes("to be true") ||
                title?.includes("to be true") ||
                original_title?.includes("to be true") ||
                name?.includes("lust") ||
                original_name?.includes("lust") ||
                title?.includes("lust") ||
                original_title?.includes("lust") ||
                name?.includes("forbidden") ||
                original_name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                original_title?.includes("forbidden") ||
                name?.includes("lisa") ||
                original_name?.includes("lisa") ||
                title?.includes("lisa") ||
                original_title?.includes("lisa") ||
                name?.includes("ann") ||
                original_name?.includes("ann") ||
                title?.includes("ann") ||
                original_title?.includes("ann") ||
                name?.includes("mom") ||
                original_name?.includes("mom") ||
                title?.includes("mom") ||
                original_title?.includes("mom") ||
                name?.includes("teen") ||
                original_name?.includes("teen") ||
                title?.includes("teen") ||
                original_title?.includes("teen") ||
                name?.includes("wife") ||
                original_name?.includes("wife") ||
                title?.includes("wife") ||
                original_title?.includes("wife") ||
                name?.includes("anal") ||
                original_name?.includes("anal") ||
                title?.includes("anal") ||
                original_title?.includes("anal") ||
                name?.includes("dirty") ||
                original_name?.includes("dirty") ||
                title?.includes("dirty") ||
                original_title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                original_name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                original_title?.includes("shades of kink") ||
                name?.includes("inside") ||
                original_name?.includes("inside") ||
                title?.includes("inside") ||
                original_title?.includes("inside") ||
                name?.includes("mistress") ||
                original_name?.includes("mistress") ||
                title?.includes("mistress") ||
                original_title?.includes("mistress") ||
                name?.includes("blond") ||
                original_name?.includes("blond") ||
                title?.includes("blond") ||
                original_title?.includes("blond") ||
                name?.includes("black") ||
                original_name?.includes("black") ||
                title?.includes("black") ||
                original_title?.includes("black") ||
                name?.includes("after") ||
                original_name?.includes("after") ||
                title?.includes("after") ||
                original_title?.includes("after") ||
                name?.includes("married") ||
                original_name?.includes("married") ||
                title?.includes("married") ||
                original_title?.includes("married") ||
                name?.includes("husbands") ||
                original_name?.includes("husbands") ||
                title?.includes("husbands") ||
                original_title?.includes("husbands") ||
                name?.includes("dance") ||
                original_name?.includes("dance") ||
                title?.includes("dance") ||
                original_title?.includes("dance") ||
                name?.includes("check out") ||
                original_name?.includes("check out") ||
                title?.includes("check out") ||
                original_title?.includes("check out") ||
                name?.includes("don't tell") ||
                original_name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                original_title?.includes("dont tell") ||
                name?.includes("dont tell") ||
                original_name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                original_title?.includes("dont tell")
            ) {
            } else {
                if (poster_path || backdrop_path) {
                    setSearchMediaData((prevState) => prevState.concat(media));
                }
            }
        });
    };
    const filterForbiddenContentMultiSearchFun = (
        searchMedia: MultiSearchDataContextInterface[]
    ) => {
        setMultiSearch(initialMultiSearch);
        searchMedia?.forEach((media, index) => {
            const name = media?.name?.toLowerCase();
            const original_name = media?.original_name?.toLowerCase();
            const title = media?.title?.toLowerCase();
            const original_title = media?.original_title?.toLowerCase();
            const backdrop_path = media?.backdrop_path;
            const poster_path = media?.poster_path;
            const profile_path = media?.profile_path;
            if (
                name?.includes("sex") ||
                original_name?.includes("sex") ||
                title?.includes("sex") ||
                original_title?.includes("sex") ||
                name?.includes("horny") ||
                original_name?.includes("horny") ||
                title?.includes("horny") ||
                original_title?.includes("horny") ||
                name?.includes("tit") ||
                original_name?.includes("tit") ||
                title?.includes("tit") ||
                original_title?.includes("tit") ||
                name?.includes("boob") ||
                original_name?.includes("boob") ||
                title?.includes("boob") ||
                original_title?.includes("boob") ||
                name?.includes("hentai") ||
                original_name?.includes("hentai") ||
                title?.includes("hentai") ||
                original_title?.includes("hentai") ||
                name?.includes("fuck") ||
                original_name?.includes("fuck") ||
                title?.includes("fuck") ||
                original_title?.includes("fuck") ||
                name?.includes("porn") ||
                original_name?.includes("porn") ||
                title?.includes("porn") ||
                original_title?.includes("porn") ||
                name?.includes("gay") ||
                original_name?.includes("gay") ||
                title?.includes("gay") ||
                original_title?.includes("gay") ||
                name?.includes("lesbian") ||
                original_name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                original_title?.includes("lesbian") ||
                name?.includes("ass") ||
                original_name?.includes("ass") ||
                title?.includes("ass") ||
                original_title?.includes("ass") ||
                name?.includes("orgasm") ||
                original_name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                original_title?.includes("orgasm") ||
                name?.includes("virgin") ||
                original_name?.includes("virgin") ||
                title?.includes("virgin") ||
                original_title?.includes("virgin") ||
                name?.includes("18") ||
                original_name?.includes("18") ||
                title?.includes("18") ||
                original_title?.includes("18") ||
                name?.includes("16") ||
                original_name?.includes("16") ||
                title?.includes("16") ||
                original_title?.includes("16") ||
                name?.includes("transgender") ||
                original_name?.includes("transgender") ||
                title?.includes("transgender") ||
                original_title?.includes("transgender") ||
                name?.includes("mature") ||
                original_name?.includes("mature") ||
                title?.includes("mature") ||
                original_title?.includes("mature") ||
                name?.includes("milf") ||
                original_name?.includes("milf") ||
                title?.includes("milf") ||
                original_title?.includes("milf") ||
                name?.includes("orgy") ||
                original_name?.includes("orgy") ||
                title?.includes("orgy") ||
                original_title?.includes("orgy") ||
                name?.includes("cosplay") ||
                original_name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                original_title?.includes("cosplay") ||
                name?.includes("squirt") ||
                original_name?.includes("squirt") ||
                title?.includes("squirt") ||
                original_title?.includes("squirt") ||
                name?.includes("brunette") ||
                original_name?.includes("brunette") ||
                title?.includes("brunette") ||
                original_title?.includes("brunette") ||
                name?.includes("handjob") ||
                original_name?.includes("handjob") ||
                title?.includes("handjob") ||
                original_title?.includes("handjob") ||
                name?.includes("cum") ||
                original_name?.includes("cum") ||
                title?.includes("cum") ||
                original_title?.includes("cum") ||
                name?.includes("blowjob") ||
                original_name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                original_title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                original_name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                original_title?.includes("hardcore") ||
                name?.includes("tatto") ||
                original_name?.includes("tatto") ||
                title?.includes("tatto") ||
                original_title?.includes("tatto") ||
                name?.includes("pussy") ||
                original_name?.includes("pussy") ||
                title?.includes("pussy") ||
                original_title?.includes("pussy") ||
                name?.includes("fisting") ||
                original_name?.includes("fisting") ||
                title?.includes("fisting") ||
                original_title?.includes("fisting") ||
                name?.includes("strap") ||
                original_name?.includes("strap") ||
                title?.includes("strap") ||
                original_title?.includes("strap") ||
                name?.includes("creampie") ||
                original_name?.includes("creampie") ||
                title?.includes("creampie") ||
                original_title?.includes("creampie") ||
                name?.includes("gangbang") ||
                original_name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                original_title?.includes("gangbang") ||
                name?.includes("female") ||
                original_name?.includes("female") ||
                title?.includes("female") ||
                original_title?.includes("female") ||
                name?.includes("threesome") ||
                original_name?.includes("threesome") ||
                title?.includes("threesome") ||
                original_title?.includes("threesome") ||
                name?.includes("step") ||
                original_name?.includes("step") ||
                title?.includes("step") ||
                original_title?.includes("step") ||
                name?.includes("vintage") ||
                original_name?.includes("vintage") ||
                title?.includes("vintage") ||
                original_title?.includes("vintage") ||
                name?.includes("beach") ||
                original_name?.includes("beach") ||
                title?.includes("beach") ||
                original_title?.includes("beach") ||
                name?.includes("massage") ||
                original_name?.includes("massage") ||
                title?.includes("massage") ||
                original_title?.includes("massage") ||
                name?.includes("love") ||
                original_name?.includes("love") ||
                title?.includes("love") ||
                original_title?.includes("love") ||
                name?.includes("tight") ||
                original_name?.includes("tight") ||
                title?.includes("tight") ||
                original_title?.includes("tight") ||
                name?.includes("feeling") ||
                original_name?.includes("feeling") ||
                title?.includes("feeling") ||
                original_title?.includes("feeling") ||
                name?.includes("heart") ||
                original_name?.includes("heart") ||
                title?.includes("heart") ||
                original_title?.includes("heart") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("pretty") ||
                original_name?.includes("pretty") ||
                title?.includes("pretty") ||
                original_title?.includes("pretty") ||
                name?.includes("high school") ||
                original_name?.includes("high school") ||
                title?.includes("high school") ||
                original_title?.includes("high school") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("girl") ||
                original_name?.includes("girl") ||
                title?.includes("girl") ||
                original_title?.includes("girl") ||
                name?.includes("boy") ||
                original_name?.includes("boy") ||
                title?.includes("boy") ||
                original_title?.includes("boy") ||
                name?.includes("friend") ||
                original_name?.includes("friend") ||
                title?.includes("friend") ||
                original_title?.includes("friend") ||
                name?.includes("x") ||
                original_name?.includes("x") ||
                title?.includes("x") ||
                original_title?.includes("x") ||
                name?.includes("fu") ||
                original_name?.includes("fu") ||
                title?.includes("fu") ||
                original_title?.includes("fu") ||
                name?.includes("f*") ||
                original_name?.includes("f*") ||
                title?.includes("f*") ||
                original_title?.includes("f*") ||
                name?.includes("san") ||
                original_name?.includes("san") ||
                title?.includes("san") ||
                original_title?.includes("san") ||
                name?.includes("whore") ||
                original_name?.includes("whore") ||
                title?.includes("whore") ||
                original_title?.includes("whore") ||
                name?.includes("revolver") ||
                original_name?.includes("revolver") ||
                title?.includes("revolver") ||
                original_title?.includes("revolver") ||
                name?.includes("bare") ||
                original_name?.includes("bare") ||
                title?.includes("bare") ||
                original_title?.includes("bare") ||
                name?.includes("naked") ||
                original_name?.includes("naked") ||
                title?.includes("naked") ||
                original_title?.includes("naked") ||
                name?.includes("to be true") ||
                original_name?.includes("to be true") ||
                title?.includes("to be true") ||
                original_title?.includes("to be true") ||
                name?.includes("lust") ||
                original_name?.includes("lust") ||
                title?.includes("lust") ||
                original_title?.includes("lust") ||
                name?.includes("forbidden") ||
                original_name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                original_title?.includes("forbidden") ||
                name?.includes("lisa") ||
                original_name?.includes("lisa") ||
                title?.includes("lisa") ||
                original_title?.includes("lisa") ||
                name?.includes("ann") ||
                original_name?.includes("ann") ||
                title?.includes("ann") ||
                original_title?.includes("ann") ||
                name?.includes("mom") ||
                original_name?.includes("mom") ||
                title?.includes("mom") ||
                original_title?.includes("mom") ||
                name?.includes("teen") ||
                original_name?.includes("teen") ||
                title?.includes("teen") ||
                original_title?.includes("teen") ||
                name?.includes("wife") ||
                original_name?.includes("wife") ||
                title?.includes("wife") ||
                original_title?.includes("wife") ||
                name?.includes("anal") ||
                original_name?.includes("anal") ||
                title?.includes("anal") ||
                original_title?.includes("anal") ||
                name?.includes("dirty") ||
                original_name?.includes("dirty") ||
                title?.includes("dirty") ||
                original_title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                original_name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                original_title?.includes("shades of kink") ||
                name?.includes("inside") ||
                original_name?.includes("inside") ||
                title?.includes("inside") ||
                original_title?.includes("inside") ||
                name?.includes("mistress") ||
                original_name?.includes("mistress") ||
                title?.includes("mistress") ||
                original_title?.includes("mistress") ||
                name?.includes("blond") ||
                original_name?.includes("blond") ||
                title?.includes("blond") ||
                original_title?.includes("blond") ||
                name?.includes("black") ||
                original_name?.includes("black") ||
                title?.includes("black") ||
                original_title?.includes("black") ||
                name?.includes("after") ||
                original_name?.includes("after") ||
                title?.includes("after") ||
                original_title?.includes("after") ||
                name?.includes("married") ||
                original_name?.includes("married") ||
                title?.includes("married") ||
                original_title?.includes("married") ||
                name?.includes("husbands") ||
                original_name?.includes("husbands") ||
                title?.includes("husbands") ||
                original_title?.includes("husbands") ||
                name?.includes("dance") ||
                original_name?.includes("dance") ||
                title?.includes("dance") ||
                original_title?.includes("dance") ||
                name?.includes("check out") ||
                original_name?.includes("check out") ||
                title?.includes("check out") ||
                original_title?.includes("check out") ||
                name?.includes("don't tell") ||
                original_name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                original_title?.includes("dont tell") ||
                name?.includes("dont tell") ||
                original_name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                original_title?.includes("dont tell")
            ) {
            } else {
                if (poster_path || backdrop_path || profile_path) {
                    setMultiSearch((prevState) => prevState.concat(media));
                }
            }
        });
    };

    const filterForbiddenPersonMoviesCrewFun = (moviesCrew: PersonMedia[]) => {
        setPersonMoviesCrew(initialPersonMedia);
        moviesCrew?.forEach((media, index) => {
            const name = media?.name?.toLowerCase();
            const original_name = media?.original_name?.toLowerCase();
            const title = media?.title?.toLowerCase();
            const original_title = media?.original_title?.toLowerCase();
            const backdrop_path = media?.backdrop_path;
            const poster_path = media?.poster_path;
            if (
                name?.includes("sex") ||
                original_name?.includes("sex") ||
                title?.includes("sex") ||
                original_title?.includes("sex") ||
                name?.includes("horny") ||
                original_name?.includes("horny") ||
                title?.includes("horny") ||
                original_title?.includes("horny") ||
                name?.includes("tit") ||
                original_name?.includes("tit") ||
                title?.includes("tit") ||
                original_title?.includes("tit") ||
                name?.includes("boob") ||
                original_name?.includes("boob") ||
                title?.includes("boob") ||
                original_title?.includes("boob") ||
                name?.includes("hentai") ||
                original_name?.includes("hentai") ||
                title?.includes("hentai") ||
                original_title?.includes("hentai") ||
                name?.includes("fuck") ||
                original_name?.includes("fuck") ||
                title?.includes("fuck") ||
                original_title?.includes("fuck") ||
                name?.includes("porn") ||
                original_name?.includes("porn") ||
                title?.includes("porn") ||
                original_title?.includes("porn") ||
                name?.includes("gay") ||
                original_name?.includes("gay") ||
                title?.includes("gay") ||
                original_title?.includes("gay") ||
                name?.includes("lesbian") ||
                original_name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                original_title?.includes("lesbian") ||
                name?.includes("ass") ||
                original_name?.includes("ass") ||
                title?.includes("ass") ||
                original_title?.includes("ass") ||
                name?.includes("orgasm") ||
                original_name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                original_title?.includes("orgasm") ||
                name?.includes("virgin") ||
                original_name?.includes("virgin") ||
                title?.includes("virgin") ||
                original_title?.includes("virgin") ||
                name?.includes("18") ||
                original_name?.includes("18") ||
                title?.includes("18") ||
                original_title?.includes("18") ||
                name?.includes("16") ||
                original_name?.includes("16") ||
                title?.includes("16") ||
                original_title?.includes("16") ||
                name?.includes("transgender") ||
                original_name?.includes("transgender") ||
                title?.includes("transgender") ||
                original_title?.includes("transgender") ||
                name?.includes("mature") ||
                original_name?.includes("mature") ||
                title?.includes("mature") ||
                original_title?.includes("mature") ||
                name?.includes("milf") ||
                original_name?.includes("milf") ||
                title?.includes("milf") ||
                original_title?.includes("milf") ||
                name?.includes("orgy") ||
                original_name?.includes("orgy") ||
                title?.includes("orgy") ||
                original_title?.includes("orgy") ||
                name?.includes("cosplay") ||
                original_name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                original_title?.includes("cosplay") ||
                name?.includes("squirt") ||
                original_name?.includes("squirt") ||
                title?.includes("squirt") ||
                original_title?.includes("squirt") ||
                name?.includes("brunette") ||
                original_name?.includes("brunette") ||
                title?.includes("brunette") ||
                original_title?.includes("brunette") ||
                name?.includes("handjob") ||
                original_name?.includes("handjob") ||
                title?.includes("handjob") ||
                original_title?.includes("handjob") ||
                name?.includes("cum") ||
                original_name?.includes("cum") ||
                title?.includes("cum") ||
                original_title?.includes("cum") ||
                name?.includes("blowjob") ||
                original_name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                original_title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                original_name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                original_title?.includes("hardcore") ||
                name?.includes("tatto") ||
                original_name?.includes("tatto") ||
                title?.includes("tatto") ||
                original_title?.includes("tatto") ||
                name?.includes("pussy") ||
                original_name?.includes("pussy") ||
                title?.includes("pussy") ||
                original_title?.includes("pussy") ||
                name?.includes("fisting") ||
                original_name?.includes("fisting") ||
                title?.includes("fisting") ||
                original_title?.includes("fisting") ||
                name?.includes("strap") ||
                original_name?.includes("strap") ||
                title?.includes("strap") ||
                original_title?.includes("strap") ||
                name?.includes("creampie") ||
                original_name?.includes("creampie") ||
                title?.includes("creampie") ||
                original_title?.includes("creampie") ||
                name?.includes("gangbang") ||
                original_name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                original_title?.includes("gangbang") ||
                name?.includes("female") ||
                original_name?.includes("female") ||
                title?.includes("female") ||
                original_title?.includes("female") ||
                name?.includes("threesome") ||
                original_name?.includes("threesome") ||
                title?.includes("threesome") ||
                original_title?.includes("threesome") ||
                name?.includes("step") ||
                original_name?.includes("step") ||
                title?.includes("step") ||
                original_title?.includes("step") ||
                name?.includes("vintage") ||
                original_name?.includes("vintage") ||
                title?.includes("vintage") ||
                original_title?.includes("vintage") ||
                name?.includes("beach") ||
                original_name?.includes("beach") ||
                title?.includes("beach") ||
                original_title?.includes("beach") ||
                name?.includes("massage") ||
                original_name?.includes("massage") ||
                title?.includes("massage") ||
                original_title?.includes("massage") ||
                name?.includes("love") ||
                original_name?.includes("love") ||
                title?.includes("love") ||
                original_title?.includes("love") ||
                name?.includes("tight") ||
                original_name?.includes("tight") ||
                title?.includes("tight") ||
                original_title?.includes("tight") ||
                name?.includes("feeling") ||
                original_name?.includes("feeling") ||
                title?.includes("feeling") ||
                original_title?.includes("feeling") ||
                name?.includes("heart") ||
                original_name?.includes("heart") ||
                title?.includes("heart") ||
                original_title?.includes("heart") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("pretty") ||
                original_name?.includes("pretty") ||
                title?.includes("pretty") ||
                original_title?.includes("pretty") ||
                name?.includes("high school") ||
                original_name?.includes("high school") ||
                title?.includes("high school") ||
                original_title?.includes("high school") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("girl") ||
                original_name?.includes("girl") ||
                title?.includes("girl") ||
                original_title?.includes("girl") ||
                name?.includes("boy") ||
                original_name?.includes("boy") ||
                title?.includes("boy") ||
                original_title?.includes("boy") ||
                name?.includes("friend") ||
                original_name?.includes("friend") ||
                title?.includes("friend") ||
                original_title?.includes("friend") ||
                name?.includes("x") ||
                original_name?.includes("x") ||
                title?.includes("x") ||
                original_title?.includes("x") ||
                name?.includes("fu") ||
                original_name?.includes("fu") ||
                title?.includes("fu") ||
                original_title?.includes("fu") ||
                name?.includes("f*") ||
                original_name?.includes("f*") ||
                title?.includes("f*") ||
                original_title?.includes("f*") ||
                name?.includes("san") ||
                original_name?.includes("san") ||
                title?.includes("san") ||
                original_title?.includes("san") ||
                name?.includes("whore") ||
                original_name?.includes("whore") ||
                title?.includes("whore") ||
                original_title?.includes("whore") ||
                name?.includes("revolver") ||
                original_name?.includes("revolver") ||
                title?.includes("revolver") ||
                original_title?.includes("revolver") ||
                name?.includes("bare") ||
                original_name?.includes("bare") ||
                title?.includes("bare") ||
                original_title?.includes("bare") ||
                name?.includes("naked") ||
                original_name?.includes("naked") ||
                title?.includes("naked") ||
                original_title?.includes("naked") ||
                name?.includes("to be true") ||
                original_name?.includes("to be true") ||
                title?.includes("to be true") ||
                original_title?.includes("to be true") ||
                name?.includes("lust") ||
                original_name?.includes("lust") ||
                title?.includes("lust") ||
                original_title?.includes("lust") ||
                name?.includes("forbidden") ||
                original_name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                original_title?.includes("forbidden") ||
                name?.includes("lisa") ||
                original_name?.includes("lisa") ||
                title?.includes("lisa") ||
                original_title?.includes("lisa") ||
                name?.includes("ann") ||
                original_name?.includes("ann") ||
                title?.includes("ann") ||
                original_title?.includes("ann") ||
                name?.includes("mom") ||
                original_name?.includes("mom") ||
                title?.includes("mom") ||
                original_title?.includes("mom") ||
                name?.includes("teen") ||
                original_name?.includes("teen") ||
                title?.includes("teen") ||
                original_title?.includes("teen") ||
                name?.includes("wife") ||
                original_name?.includes("wife") ||
                title?.includes("wife") ||
                original_title?.includes("wife") ||
                name?.includes("anal") ||
                original_name?.includes("anal") ||
                title?.includes("anal") ||
                original_title?.includes("anal") ||
                name?.includes("dirty") ||
                original_name?.includes("dirty") ||
                title?.includes("dirty") ||
                original_title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                original_name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                original_title?.includes("shades of kink") ||
                name?.includes("inside") ||
                original_name?.includes("inside") ||
                title?.includes("inside") ||
                original_title?.includes("inside") ||
                name?.includes("mistress") ||
                original_name?.includes("mistress") ||
                title?.includes("mistress") ||
                original_title?.includes("mistress") ||
                name?.includes("blond") ||
                original_name?.includes("blond") ||
                title?.includes("blond") ||
                original_title?.includes("blond") ||
                name?.includes("black") ||
                original_name?.includes("black") ||
                title?.includes("black") ||
                original_title?.includes("black") ||
                name?.includes("after") ||
                original_name?.includes("after") ||
                title?.includes("after") ||
                original_title?.includes("after") ||
                name?.includes("married") ||
                original_name?.includes("married") ||
                title?.includes("married") ||
                original_title?.includes("married") ||
                name?.includes("husbands") ||
                original_name?.includes("husbands") ||
                title?.includes("husbands") ||
                original_title?.includes("husbands") ||
                name?.includes("dance") ||
                original_name?.includes("dance") ||
                title?.includes("dance") ||
                original_title?.includes("dance") ||
                name?.includes("check out") ||
                original_name?.includes("check out") ||
                title?.includes("check out") ||
                original_title?.includes("check out") ||
                name?.includes("don't tell") ||
                original_name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                original_title?.includes("dont tell") ||
                name?.includes("dont tell") ||
                original_name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                original_title?.includes("dont tell")
            ) {
            } else {
                if (poster_path || backdrop_path) {
                    setPersonMoviesCrew((prevState) => prevState.concat(media));
                }
            }
        });
    };
    const filterForbiddenPersonTvCrewFun = (tvCrew: PersonMedia[]) => {
        setpersonTvCrew(initialPersonMedia);
        tvCrew?.forEach((media, index) => {
            const name = media?.name?.toLowerCase();
            const original_name = media?.original_name?.toLowerCase();
            const title = media?.title?.toLowerCase();
            const original_title = media?.original_title?.toLowerCase();
            const backdrop_path = media?.backdrop_path;
            const poster_path = media?.poster_path;
            if (
                name?.includes("sex") ||
                original_name?.includes("sex") ||
                title?.includes("sex") ||
                original_title?.includes("sex") ||
                name?.includes("horny") ||
                original_name?.includes("horny") ||
                title?.includes("horny") ||
                original_title?.includes("horny") ||
                name?.includes("tit") ||
                original_name?.includes("tit") ||
                title?.includes("tit") ||
                original_title?.includes("tit") ||
                name?.includes("boob") ||
                original_name?.includes("boob") ||
                title?.includes("boob") ||
                original_title?.includes("boob") ||
                name?.includes("hentai") ||
                original_name?.includes("hentai") ||
                title?.includes("hentai") ||
                original_title?.includes("hentai") ||
                name?.includes("fuck") ||
                original_name?.includes("fuck") ||
                title?.includes("fuck") ||
                original_title?.includes("fuck") ||
                name?.includes("porn") ||
                original_name?.includes("porn") ||
                title?.includes("porn") ||
                original_title?.includes("porn") ||
                name?.includes("gay") ||
                original_name?.includes("gay") ||
                title?.includes("gay") ||
                original_title?.includes("gay") ||
                name?.includes("lesbian") ||
                original_name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                original_title?.includes("lesbian") ||
                name?.includes("ass") ||
                original_name?.includes("ass") ||
                title?.includes("ass") ||
                original_title?.includes("ass") ||
                name?.includes("orgasm") ||
                original_name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                original_title?.includes("orgasm") ||
                name?.includes("virgin") ||
                original_name?.includes("virgin") ||
                title?.includes("virgin") ||
                original_title?.includes("virgin") ||
                name?.includes("18") ||
                original_name?.includes("18") ||
                title?.includes("18") ||
                original_title?.includes("18") ||
                name?.includes("16") ||
                original_name?.includes("16") ||
                title?.includes("16") ||
                original_title?.includes("16") ||
                name?.includes("transgender") ||
                original_name?.includes("transgender") ||
                title?.includes("transgender") ||
                original_title?.includes("transgender") ||
                name?.includes("mature") ||
                original_name?.includes("mature") ||
                title?.includes("mature") ||
                original_title?.includes("mature") ||
                name?.includes("milf") ||
                original_name?.includes("milf") ||
                title?.includes("milf") ||
                original_title?.includes("milf") ||
                name?.includes("orgy") ||
                original_name?.includes("orgy") ||
                title?.includes("orgy") ||
                original_title?.includes("orgy") ||
                name?.includes("cosplay") ||
                original_name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                original_title?.includes("cosplay") ||
                name?.includes("squirt") ||
                original_name?.includes("squirt") ||
                title?.includes("squirt") ||
                original_title?.includes("squirt") ||
                name?.includes("brunette") ||
                original_name?.includes("brunette") ||
                title?.includes("brunette") ||
                original_title?.includes("brunette") ||
                name?.includes("handjob") ||
                original_name?.includes("handjob") ||
                title?.includes("handjob") ||
                original_title?.includes("handjob") ||
                name?.includes("cum") ||
                original_name?.includes("cum") ||
                title?.includes("cum") ||
                original_title?.includes("cum") ||
                name?.includes("blowjob") ||
                original_name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                original_title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                original_name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                original_title?.includes("hardcore") ||
                name?.includes("tatto") ||
                original_name?.includes("tatto") ||
                title?.includes("tatto") ||
                original_title?.includes("tatto") ||
                name?.includes("pussy") ||
                original_name?.includes("pussy") ||
                title?.includes("pussy") ||
                original_title?.includes("pussy") ||
                name?.includes("fisting") ||
                original_name?.includes("fisting") ||
                title?.includes("fisting") ||
                original_title?.includes("fisting") ||
                name?.includes("strap") ||
                original_name?.includes("strap") ||
                title?.includes("strap") ||
                original_title?.includes("strap") ||
                name?.includes("creampie") ||
                original_name?.includes("creampie") ||
                title?.includes("creampie") ||
                original_title?.includes("creampie") ||
                name?.includes("gangbang") ||
                original_name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                original_title?.includes("gangbang") ||
                name?.includes("female") ||
                original_name?.includes("female") ||
                title?.includes("female") ||
                original_title?.includes("female") ||
                name?.includes("threesome") ||
                original_name?.includes("threesome") ||
                title?.includes("threesome") ||
                original_title?.includes("threesome") ||
                name?.includes("step") ||
                original_name?.includes("step") ||
                title?.includes("step") ||
                original_title?.includes("step") ||
                name?.includes("vintage") ||
                original_name?.includes("vintage") ||
                title?.includes("vintage") ||
                original_title?.includes("vintage") ||
                name?.includes("beach") ||
                original_name?.includes("beach") ||
                title?.includes("beach") ||
                original_title?.includes("beach") ||
                name?.includes("massage") ||
                original_name?.includes("massage") ||
                title?.includes("massage") ||
                original_title?.includes("massage") ||
                name?.includes("love") ||
                original_name?.includes("love") ||
                title?.includes("love") ||
                original_title?.includes("love") ||
                name?.includes("tight") ||
                original_name?.includes("tight") ||
                title?.includes("tight") ||
                original_title?.includes("tight") ||
                name?.includes("feeling") ||
                original_name?.includes("feeling") ||
                title?.includes("feeling") ||
                original_title?.includes("feeling") ||
                name?.includes("heart") ||
                original_name?.includes("heart") ||
                title?.includes("heart") ||
                original_title?.includes("heart") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("pretty") ||
                original_name?.includes("pretty") ||
                title?.includes("pretty") ||
                original_title?.includes("pretty") ||
                name?.includes("high school") ||
                original_name?.includes("high school") ||
                title?.includes("high school") ||
                original_title?.includes("high school") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("girl") ||
                original_name?.includes("girl") ||
                title?.includes("girl") ||
                original_title?.includes("girl") ||
                name?.includes("boy") ||
                original_name?.includes("boy") ||
                title?.includes("boy") ||
                original_title?.includes("boy") ||
                name?.includes("friend") ||
                original_name?.includes("friend") ||
                title?.includes("friend") ||
                original_title?.includes("friend") ||
                name?.includes("x") ||
                original_name?.includes("x") ||
                title?.includes("x") ||
                original_title?.includes("x") ||
                name?.includes("fu") ||
                original_name?.includes("fu") ||
                title?.includes("fu") ||
                original_title?.includes("fu") ||
                name?.includes("f*") ||
                original_name?.includes("f*") ||
                title?.includes("f*") ||
                original_title?.includes("f*") ||
                name?.includes("san") ||
                original_name?.includes("san") ||
                title?.includes("san") ||
                original_title?.includes("san") ||
                name?.includes("whore") ||
                original_name?.includes("whore") ||
                title?.includes("whore") ||
                original_title?.includes("whore") ||
                name?.includes("revolver") ||
                original_name?.includes("revolver") ||
                title?.includes("revolver") ||
                original_title?.includes("revolver") ||
                name?.includes("bare") ||
                original_name?.includes("bare") ||
                title?.includes("bare") ||
                original_title?.includes("bare") ||
                name?.includes("naked") ||
                original_name?.includes("naked") ||
                title?.includes("naked") ||
                original_title?.includes("naked") ||
                name?.includes("to be true") ||
                original_name?.includes("to be true") ||
                title?.includes("to be true") ||
                original_title?.includes("to be true") ||
                name?.includes("lust") ||
                original_name?.includes("lust") ||
                title?.includes("lust") ||
                original_title?.includes("lust") ||
                name?.includes("forbidden") ||
                original_name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                original_title?.includes("forbidden") ||
                name?.includes("lisa") ||
                original_name?.includes("lisa") ||
                title?.includes("lisa") ||
                original_title?.includes("lisa") ||
                name?.includes("ann") ||
                original_name?.includes("ann") ||
                title?.includes("ann") ||
                original_title?.includes("ann") ||
                name?.includes("mom") ||
                original_name?.includes("mom") ||
                title?.includes("mom") ||
                original_title?.includes("mom") ||
                name?.includes("teen") ||
                original_name?.includes("teen") ||
                title?.includes("teen") ||
                original_title?.includes("teen") ||
                name?.includes("wife") ||
                original_name?.includes("wife") ||
                title?.includes("wife") ||
                original_title?.includes("wife") ||
                name?.includes("anal") ||
                original_name?.includes("anal") ||
                title?.includes("anal") ||
                original_title?.includes("anal") ||
                name?.includes("dirty") ||
                original_name?.includes("dirty") ||
                title?.includes("dirty") ||
                original_title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                original_name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                original_title?.includes("shades of kink") ||
                name?.includes("inside") ||
                original_name?.includes("inside") ||
                title?.includes("inside") ||
                original_title?.includes("inside") ||
                name?.includes("mistress") ||
                original_name?.includes("mistress") ||
                title?.includes("mistress") ||
                original_title?.includes("mistress") ||
                name?.includes("blond") ||
                original_name?.includes("blond") ||
                title?.includes("blond") ||
                original_title?.includes("blond") ||
                name?.includes("black") ||
                original_name?.includes("black") ||
                title?.includes("black") ||
                original_title?.includes("black") ||
                name?.includes("after") ||
                original_name?.includes("after") ||
                title?.includes("after") ||
                original_title?.includes("after") ||
                name?.includes("married") ||
                original_name?.includes("married") ||
                title?.includes("married") ||
                original_title?.includes("married") ||
                name?.includes("husbands") ||
                original_name?.includes("husbands") ||
                title?.includes("husbands") ||
                original_title?.includes("husbands") ||
                name?.includes("dance") ||
                original_name?.includes("dance") ||
                title?.includes("dance") ||
                original_title?.includes("dance") ||
                name?.includes("check out") ||
                original_name?.includes("check out") ||
                title?.includes("check out") ||
                original_title?.includes("check out") ||
                name?.includes("don't tell") ||
                original_name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                original_title?.includes("dont tell") ||
                name?.includes("dont tell") ||
                original_name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                original_title?.includes("dont tell")
            ) {
            } else {
                if (poster_path || backdrop_path) {
                    setpersonTvCrew((prevState) => prevState.concat(media));
                }
            }
        });
    };
    const filterForbiddenPersonMoviesCastFun = (moviesCast: PersonMedia[]) => {
        setPersonMoviesCast(initialPersonMedia);
        moviesCast?.forEach((media, index) => {
            const name = media?.name?.toLowerCase();
            const original_name = media?.original_name?.toLowerCase();
            const title = media?.title?.toLowerCase();
            const original_title = media?.original_title?.toLowerCase();
            const backdrop_path = media?.backdrop_path;
            const poster_path = media?.poster_path;
            if (
                name?.includes("sex") ||
                original_name?.includes("sex") ||
                title?.includes("sex") ||
                original_title?.includes("sex") ||
                name?.includes("horny") ||
                original_name?.includes("horny") ||
                title?.includes("horny") ||
                original_title?.includes("horny") ||
                name?.includes("tit") ||
                original_name?.includes("tit") ||
                title?.includes("tit") ||
                original_title?.includes("tit") ||
                name?.includes("boob") ||
                original_name?.includes("boob") ||
                title?.includes("boob") ||
                original_title?.includes("boob") ||
                name?.includes("hentai") ||
                original_name?.includes("hentai") ||
                title?.includes("hentai") ||
                original_title?.includes("hentai") ||
                name?.includes("fuck") ||
                original_name?.includes("fuck") ||
                title?.includes("fuck") ||
                original_title?.includes("fuck") ||
                name?.includes("porn") ||
                original_name?.includes("porn") ||
                title?.includes("porn") ||
                original_title?.includes("porn") ||
                name?.includes("gay") ||
                original_name?.includes("gay") ||
                title?.includes("gay") ||
                original_title?.includes("gay") ||
                name?.includes("lesbian") ||
                original_name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                original_title?.includes("lesbian") ||
                name?.includes("ass") ||
                original_name?.includes("ass") ||
                title?.includes("ass") ||
                original_title?.includes("ass") ||
                name?.includes("orgasm") ||
                original_name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                original_title?.includes("orgasm") ||
                name?.includes("virgin") ||
                original_name?.includes("virgin") ||
                title?.includes("virgin") ||
                original_title?.includes("virgin") ||
                name?.includes("18") ||
                original_name?.includes("18") ||
                title?.includes("18") ||
                original_title?.includes("18") ||
                name?.includes("16") ||
                original_name?.includes("16") ||
                title?.includes("16") ||
                original_title?.includes("16") ||
                name?.includes("transgender") ||
                original_name?.includes("transgender") ||
                title?.includes("transgender") ||
                original_title?.includes("transgender") ||
                name?.includes("mature") ||
                original_name?.includes("mature") ||
                title?.includes("mature") ||
                original_title?.includes("mature") ||
                name?.includes("milf") ||
                original_name?.includes("milf") ||
                title?.includes("milf") ||
                original_title?.includes("milf") ||
                name?.includes("orgy") ||
                original_name?.includes("orgy") ||
                title?.includes("orgy") ||
                original_title?.includes("orgy") ||
                name?.includes("cosplay") ||
                original_name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                original_title?.includes("cosplay") ||
                name?.includes("squirt") ||
                original_name?.includes("squirt") ||
                title?.includes("squirt") ||
                original_title?.includes("squirt") ||
                name?.includes("brunette") ||
                original_name?.includes("brunette") ||
                title?.includes("brunette") ||
                original_title?.includes("brunette") ||
                name?.includes("handjob") ||
                original_name?.includes("handjob") ||
                title?.includes("handjob") ||
                original_title?.includes("handjob") ||
                name?.includes("cum") ||
                original_name?.includes("cum") ||
                title?.includes("cum") ||
                original_title?.includes("cum") ||
                name?.includes("blowjob") ||
                original_name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                original_title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                original_name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                original_title?.includes("hardcore") ||
                name?.includes("tatto") ||
                original_name?.includes("tatto") ||
                title?.includes("tatto") ||
                original_title?.includes("tatto") ||
                name?.includes("pussy") ||
                original_name?.includes("pussy") ||
                title?.includes("pussy") ||
                original_title?.includes("pussy") ||
                name?.includes("fisting") ||
                original_name?.includes("fisting") ||
                title?.includes("fisting") ||
                original_title?.includes("fisting") ||
                name?.includes("strap") ||
                original_name?.includes("strap") ||
                title?.includes("strap") ||
                original_title?.includes("strap") ||
                name?.includes("creampie") ||
                original_name?.includes("creampie") ||
                title?.includes("creampie") ||
                original_title?.includes("creampie") ||
                name?.includes("gangbang") ||
                original_name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                original_title?.includes("gangbang") ||
                name?.includes("female") ||
                original_name?.includes("female") ||
                title?.includes("female") ||
                original_title?.includes("female") ||
                name?.includes("threesome") ||
                original_name?.includes("threesome") ||
                title?.includes("threesome") ||
                original_title?.includes("threesome") ||
                name?.includes("step") ||
                original_name?.includes("step") ||
                title?.includes("step") ||
                original_title?.includes("step") ||
                name?.includes("vintage") ||
                original_name?.includes("vintage") ||
                title?.includes("vintage") ||
                original_title?.includes("vintage") ||
                name?.includes("beach") ||
                original_name?.includes("beach") ||
                title?.includes("beach") ||
                original_title?.includes("beach") ||
                name?.includes("massage") ||
                original_name?.includes("massage") ||
                title?.includes("massage") ||
                original_title?.includes("massage") ||
                name?.includes("love") ||
                original_name?.includes("love") ||
                title?.includes("love") ||
                original_title?.includes("love") ||
                name?.includes("tight") ||
                original_name?.includes("tight") ||
                title?.includes("tight") ||
                original_title?.includes("tight") ||
                name?.includes("feeling") ||
                original_name?.includes("feeling") ||
                title?.includes("feeling") ||
                original_title?.includes("feeling") ||
                name?.includes("heart") ||
                original_name?.includes("heart") ||
                title?.includes("heart") ||
                original_title?.includes("heart") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("pretty") ||
                original_name?.includes("pretty") ||
                title?.includes("pretty") ||
                original_title?.includes("pretty") ||
                name?.includes("high school") ||
                original_name?.includes("high school") ||
                title?.includes("high school") ||
                original_title?.includes("high school") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("girl") ||
                original_name?.includes("girl") ||
                title?.includes("girl") ||
                original_title?.includes("girl") ||
                name?.includes("boy") ||
                original_name?.includes("boy") ||
                title?.includes("boy") ||
                original_title?.includes("boy") ||
                name?.includes("friend") ||
                original_name?.includes("friend") ||
                title?.includes("friend") ||
                original_title?.includes("friend") ||
                name?.includes("x") ||
                original_name?.includes("x") ||
                title?.includes("x") ||
                original_title?.includes("x") ||
                name?.includes("fu") ||
                original_name?.includes("fu") ||
                title?.includes("fu") ||
                original_title?.includes("fu") ||
                name?.includes("f*") ||
                original_name?.includes("f*") ||
                title?.includes("f*") ||
                original_title?.includes("f*") ||
                name?.includes("san") ||
                original_name?.includes("san") ||
                title?.includes("san") ||
                original_title?.includes("san") ||
                name?.includes("whore") ||
                original_name?.includes("whore") ||
                title?.includes("whore") ||
                original_title?.includes("whore") ||
                name?.includes("revolver") ||
                original_name?.includes("revolver") ||
                title?.includes("revolver") ||
                original_title?.includes("revolver") ||
                name?.includes("bare") ||
                original_name?.includes("bare") ||
                title?.includes("bare") ||
                original_title?.includes("bare") ||
                name?.includes("naked") ||
                original_name?.includes("naked") ||
                title?.includes("naked") ||
                original_title?.includes("naked") ||
                name?.includes("to be true") ||
                original_name?.includes("to be true") ||
                title?.includes("to be true") ||
                original_title?.includes("to be true") ||
                name?.includes("lust") ||
                original_name?.includes("lust") ||
                title?.includes("lust") ||
                original_title?.includes("lust") ||
                name?.includes("forbidden") ||
                original_name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                original_title?.includes("forbidden") ||
                name?.includes("lisa") ||
                original_name?.includes("lisa") ||
                title?.includes("lisa") ||
                original_title?.includes("lisa") ||
                name?.includes("ann") ||
                original_name?.includes("ann") ||
                title?.includes("ann") ||
                original_title?.includes("ann") ||
                name?.includes("mom") ||
                original_name?.includes("mom") ||
                title?.includes("mom") ||
                original_title?.includes("mom") ||
                name?.includes("teen") ||
                original_name?.includes("teen") ||
                title?.includes("teen") ||
                original_title?.includes("teen") ||
                name?.includes("wife") ||
                original_name?.includes("wife") ||
                title?.includes("wife") ||
                original_title?.includes("wife") ||
                name?.includes("anal") ||
                original_name?.includes("anal") ||
                title?.includes("anal") ||
                original_title?.includes("anal") ||
                name?.includes("dirty") ||
                original_name?.includes("dirty") ||
                title?.includes("dirty") ||
                original_title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                original_name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                original_title?.includes("shades of kink") ||
                name?.includes("inside") ||
                original_name?.includes("inside") ||
                title?.includes("inside") ||
                original_title?.includes("inside") ||
                name?.includes("mistress") ||
                original_name?.includes("mistress") ||
                title?.includes("mistress") ||
                original_title?.includes("mistress") ||
                name?.includes("blond") ||
                original_name?.includes("blond") ||
                title?.includes("blond") ||
                original_title?.includes("blond") ||
                name?.includes("black") ||
                original_name?.includes("black") ||
                title?.includes("black") ||
                original_title?.includes("black") ||
                name?.includes("after") ||
                original_name?.includes("after") ||
                title?.includes("after") ||
                original_title?.includes("after") ||
                name?.includes("married") ||
                original_name?.includes("married") ||
                title?.includes("married") ||
                original_title?.includes("married") ||
                name?.includes("husbands") ||
                original_name?.includes("husbands") ||
                title?.includes("husbands") ||
                original_title?.includes("husbands") ||
                name?.includes("dance") ||
                original_name?.includes("dance") ||
                title?.includes("dance") ||
                original_title?.includes("dance") ||
                name?.includes("check out") ||
                original_name?.includes("check out") ||
                title?.includes("check out") ||
                original_title?.includes("check out") ||
                name?.includes("don't tell") ||
                original_name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                original_title?.includes("dont tell") ||
                name?.includes("dont tell") ||
                original_name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                original_title?.includes("dont tell")
            ) {
            } else {
                if (poster_path || backdrop_path) {
                    setPersonMoviesCast((prevState) => prevState.concat(media));
                }
            }
        });
    };
    const filterForbiddenPersonTvCastFun = (tvCast: PersonMedia[]) => {
        setpersonTvCast(initialPersonMedia);
        tvCast?.forEach((media, index) => {
            const name = media?.name?.toLowerCase();
            const original_name = media?.original_name?.toLowerCase();
            const title = media?.title?.toLowerCase();
            const original_title = media?.original_title?.toLowerCase();
            const backdrop_path = media?.backdrop_path;
            const poster_path = media?.poster_path;
            if (
                name?.includes("sex") ||
                original_name?.includes("sex") ||
                title?.includes("sex") ||
                original_title?.includes("sex") ||
                name?.includes("horny") ||
                original_name?.includes("horny") ||
                title?.includes("horny") ||
                original_title?.includes("horny") ||
                name?.includes("tit") ||
                original_name?.includes("tit") ||
                title?.includes("tit") ||
                original_title?.includes("tit") ||
                name?.includes("boob") ||
                original_name?.includes("boob") ||
                title?.includes("boob") ||
                original_title?.includes("boob") ||
                name?.includes("hentai") ||
                original_name?.includes("hentai") ||
                title?.includes("hentai") ||
                original_title?.includes("hentai") ||
                name?.includes("fuck") ||
                original_name?.includes("fuck") ||
                title?.includes("fuck") ||
                original_title?.includes("fuck") ||
                name?.includes("porn") ||
                original_name?.includes("porn") ||
                title?.includes("porn") ||
                original_title?.includes("porn") ||
                name?.includes("gay") ||
                original_name?.includes("gay") ||
                title?.includes("gay") ||
                original_title?.includes("gay") ||
                name?.includes("lesbian") ||
                original_name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                original_title?.includes("lesbian") ||
                name?.includes("ass") ||
                original_name?.includes("ass") ||
                title?.includes("ass") ||
                original_title?.includes("ass") ||
                name?.includes("orgasm") ||
                original_name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                original_title?.includes("orgasm") ||
                name?.includes("virgin") ||
                original_name?.includes("virgin") ||
                title?.includes("virgin") ||
                original_title?.includes("virgin") ||
                name?.includes("18") ||
                original_name?.includes("18") ||
                title?.includes("18") ||
                original_title?.includes("18") ||
                name?.includes("16") ||
                original_name?.includes("16") ||
                title?.includes("16") ||
                original_title?.includes("16") ||
                name?.includes("transgender") ||
                original_name?.includes("transgender") ||
                title?.includes("transgender") ||
                original_title?.includes("transgender") ||
                name?.includes("mature") ||
                original_name?.includes("mature") ||
                title?.includes("mature") ||
                original_title?.includes("mature") ||
                name?.includes("milf") ||
                original_name?.includes("milf") ||
                title?.includes("milf") ||
                original_title?.includes("milf") ||
                name?.includes("orgy") ||
                original_name?.includes("orgy") ||
                title?.includes("orgy") ||
                original_title?.includes("orgy") ||
                name?.includes("cosplay") ||
                original_name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                original_title?.includes("cosplay") ||
                name?.includes("squirt") ||
                original_name?.includes("squirt") ||
                title?.includes("squirt") ||
                original_title?.includes("squirt") ||
                name?.includes("brunette") ||
                original_name?.includes("brunette") ||
                title?.includes("brunette") ||
                original_title?.includes("brunette") ||
                name?.includes("handjob") ||
                original_name?.includes("handjob") ||
                title?.includes("handjob") ||
                original_title?.includes("handjob") ||
                name?.includes("cum") ||
                original_name?.includes("cum") ||
                title?.includes("cum") ||
                original_title?.includes("cum") ||
                name?.includes("blowjob") ||
                original_name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                original_title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                original_name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                original_title?.includes("hardcore") ||
                name?.includes("tatto") ||
                original_name?.includes("tatto") ||
                title?.includes("tatto") ||
                original_title?.includes("tatto") ||
                name?.includes("pussy") ||
                original_name?.includes("pussy") ||
                title?.includes("pussy") ||
                original_title?.includes("pussy") ||
                name?.includes("fisting") ||
                original_name?.includes("fisting") ||
                title?.includes("fisting") ||
                original_title?.includes("fisting") ||
                name?.includes("strap") ||
                original_name?.includes("strap") ||
                title?.includes("strap") ||
                original_title?.includes("strap") ||
                name?.includes("creampie") ||
                original_name?.includes("creampie") ||
                title?.includes("creampie") ||
                original_title?.includes("creampie") ||
                name?.includes("gangbang") ||
                original_name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                original_title?.includes("gangbang") ||
                name?.includes("female") ||
                original_name?.includes("female") ||
                title?.includes("female") ||
                original_title?.includes("female") ||
                name?.includes("threesome") ||
                original_name?.includes("threesome") ||
                title?.includes("threesome") ||
                original_title?.includes("threesome") ||
                name?.includes("step") ||
                original_name?.includes("step") ||
                title?.includes("step") ||
                original_title?.includes("step") ||
                name?.includes("vintage") ||
                original_name?.includes("vintage") ||
                title?.includes("vintage") ||
                original_title?.includes("vintage") ||
                name?.includes("beach") ||
                original_name?.includes("beach") ||
                title?.includes("beach") ||
                original_title?.includes("beach") ||
                name?.includes("massage") ||
                original_name?.includes("massage") ||
                title?.includes("massage") ||
                original_title?.includes("massage") ||
                name?.includes("love") ||
                original_name?.includes("love") ||
                title?.includes("love") ||
                original_title?.includes("love") ||
                name?.includes("tight") ||
                original_name?.includes("tight") ||
                title?.includes("tight") ||
                original_title?.includes("tight") ||
                name?.includes("feeling") ||
                original_name?.includes("feeling") ||
                title?.includes("feeling") ||
                original_title?.includes("feeling") ||
                name?.includes("heart") ||
                original_name?.includes("heart") ||
                title?.includes("heart") ||
                original_title?.includes("heart") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("pretty") ||
                original_name?.includes("pretty") ||
                title?.includes("pretty") ||
                original_title?.includes("pretty") ||
                name?.includes("high school") ||
                original_name?.includes("high school") ||
                title?.includes("high school") ||
                original_title?.includes("high school") ||
                name?.includes("kiss") ||
                original_name?.includes("kiss") ||
                title?.includes("kiss") ||
                original_title?.includes("kiss") ||
                name?.includes("girl") ||
                original_name?.includes("girl") ||
                title?.includes("girl") ||
                original_title?.includes("girl") ||
                name?.includes("boy") ||
                original_name?.includes("boy") ||
                title?.includes("boy") ||
                original_title?.includes("boy") ||
                name?.includes("friend") ||
                original_name?.includes("friend") ||
                title?.includes("friend") ||
                original_title?.includes("friend") ||
                name?.includes("x") ||
                original_name?.includes("x") ||
                title?.includes("x") ||
                original_title?.includes("x") ||
                name?.includes("fu") ||
                original_name?.includes("fu") ||
                title?.includes("fu") ||
                original_title?.includes("fu") ||
                name?.includes("f*") ||
                original_name?.includes("f*") ||
                title?.includes("f*") ||
                original_title?.includes("f*") ||
                name?.includes("san") ||
                original_name?.includes("san") ||
                title?.includes("san") ||
                original_title?.includes("san") ||
                name?.includes("whore") ||
                original_name?.includes("whore") ||
                title?.includes("whore") ||
                original_title?.includes("whore") ||
                name?.includes("revolver") ||
                original_name?.includes("revolver") ||
                title?.includes("revolver") ||
                original_title?.includes("revolver") ||
                name?.includes("bare") ||
                original_name?.includes("bare") ||
                title?.includes("bare") ||
                original_title?.includes("bare") ||
                name?.includes("naked") ||
                original_name?.includes("naked") ||
                title?.includes("naked") ||
                original_title?.includes("naked") ||
                name?.includes("to be true") ||
                original_name?.includes("to be true") ||
                title?.includes("to be true") ||
                original_title?.includes("to be true") ||
                name?.includes("lust") ||
                original_name?.includes("lust") ||
                title?.includes("lust") ||
                original_title?.includes("lust") ||
                name?.includes("forbidden") ||
                original_name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                original_title?.includes("forbidden") ||
                name?.includes("lisa") ||
                original_name?.includes("lisa") ||
                title?.includes("lisa") ||
                original_title?.includes("lisa") ||
                name?.includes("ann") ||
                original_name?.includes("ann") ||
                title?.includes("ann") ||
                original_title?.includes("ann") ||
                name?.includes("mom") ||
                original_name?.includes("mom") ||
                title?.includes("mom") ||
                original_title?.includes("mom") ||
                name?.includes("teen") ||
                original_name?.includes("teen") ||
                title?.includes("teen") ||
                original_title?.includes("teen") ||
                name?.includes("wife") ||
                original_name?.includes("wife") ||
                title?.includes("wife") ||
                original_title?.includes("wife") ||
                name?.includes("anal") ||
                original_name?.includes("anal") ||
                title?.includes("anal") ||
                original_title?.includes("anal") ||
                name?.includes("dirty") ||
                original_name?.includes("dirty") ||
                title?.includes("dirty") ||
                original_title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                original_name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                original_title?.includes("shades of kink") ||
                name?.includes("inside") ||
                original_name?.includes("inside") ||
                title?.includes("inside") ||
                original_title?.includes("inside") ||
                name?.includes("mistress") ||
                original_name?.includes("mistress") ||
                title?.includes("mistress") ||
                original_title?.includes("mistress") ||
                name?.includes("blond") ||
                original_name?.includes("blond") ||
                title?.includes("blond") ||
                original_title?.includes("blond") ||
                name?.includes("black") ||
                original_name?.includes("black") ||
                title?.includes("black") ||
                original_title?.includes("black") ||
                name?.includes("after") ||
                original_name?.includes("after") ||
                title?.includes("after") ||
                original_title?.includes("after") ||
                name?.includes("married") ||
                original_name?.includes("married") ||
                title?.includes("married") ||
                original_title?.includes("married") ||
                name?.includes("husbands") ||
                original_name?.includes("husbands") ||
                title?.includes("husbands") ||
                original_title?.includes("husbands") ||
                name?.includes("dance") ||
                original_name?.includes("dance") ||
                title?.includes("dance") ||
                original_title?.includes("dance") ||
                name?.includes("check out") ||
                original_name?.includes("check out") ||
                title?.includes("check out") ||
                original_title?.includes("check out") ||
                name?.includes("don't tell") ||
                original_name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                original_title?.includes("dont tell") ||
                name?.includes("dont tell") ||
                original_name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                original_title?.includes("dont tell")
            ) {
            } else {
                if (poster_path || backdrop_path) {
                    setpersonTvCast((prevState) => prevState.concat(media));
                }
            }
        });
    };

    const data = {
        mediaData,
        filterForbiddenContentMediaDataFun,
        searchMedia,
        filterForbiddenContentSearchMediaFun,
        multiSearch,
        filterForbiddenContentMultiSearchFun,
        personMoviesCrew,
        filterForbiddenPersonMoviesCrewFun,
        personTvCrew,
        filterForbiddenPersonTvCrewFun,
        personMoviesCast,
        filterForbiddenPersonMoviesCastFun,
        personTvCast,
        filterForbiddenPersonTvCastFun,
    };
    return (
        <ForbiddenMediaContentContext.Provider value={data}>
            {children}
        </ForbiddenMediaContentContext.Provider>
    );
};

export default ForbiddenMediaContentContext;
