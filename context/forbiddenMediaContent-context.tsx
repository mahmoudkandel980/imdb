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
                title?.includes("sex") ||
                name?.includes("horny") ||
                title?.includes("horny") ||
                name?.includes("tit") ||
                title?.includes("tit") ||
                name?.includes("boob") ||
                title?.includes("boob") ||
                name?.includes("hentai") ||
                title?.includes("hentai") ||
                name?.includes("fuck") ||
                title?.includes("fuck") ||
                name?.includes("porn") ||
                title?.includes("porn") ||
                name?.includes("gay") ||
                title?.includes("gay") ||
                name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                name?.includes("ass") ||
                title?.includes("ass") ||
                name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                name?.includes("virgin") ||
                title?.includes("virgin") ||
                name?.includes("18") ||
                title?.includes("18") ||
                name?.includes("16") ||
                title?.includes("16") ||
                name?.includes("transgender") ||
                title?.includes("transgender") ||
                name?.includes("mature") ||
                title?.includes("mature") ||
                name?.includes("milf") ||
                title?.includes("milf") ||
                name?.includes("orgy") ||
                title?.includes("orgy") ||
                name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                name?.includes("squirt") ||
                title?.includes("squirt") ||
                name?.includes("brunette") ||
                title?.includes("brunette") ||
                name?.includes("handjob") ||
                title?.includes("handjob") ||
                name?.includes("cum") ||
                title?.includes("cum") ||
                name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                name?.includes("tatto") ||
                title?.includes("tatto") ||
                name?.includes("pussy") ||
                title?.includes("pussy") ||
                name?.includes("fisting") ||
                title?.includes("fisting") ||
                name?.includes("strap") ||
                title?.includes("strap") ||
                name?.includes("creampie") ||
                title?.includes("creampie") ||
                name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                name?.includes("female") ||
                title?.includes("female") ||
                name?.includes("threesome") ||
                title?.includes("threesome") ||
                name?.includes("step") ||
                title?.includes("step") ||
                name?.includes("vintage") ||
                title?.includes("vintage") ||
                name?.includes("beach") ||
                title?.includes("beach") ||
                name?.includes("massage") ||
                title?.includes("massage") ||
                name?.includes("love") ||
                title?.includes("love") ||
                name?.includes("tight") ||
                title?.includes("tight") ||
                name?.includes("feeling") ||
                title?.includes("feeling") ||
                name?.includes("heart") ||
                title?.includes("heart") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("pretty") ||
                title?.includes("pretty") ||
                name?.includes("high school") ||
                title?.includes("high school") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("girl") ||
                title?.includes("girl") ||
                name?.includes("boy") ||
                title?.includes("boy") ||
                name?.includes("friend") ||
                title?.includes("friend") ||
                name?.includes("x") ||
                title?.includes("x") ||
                name?.includes("fu") ||
                title?.includes("fu") ||
                name?.includes("f*") ||
                title?.includes("f*") ||
                name?.includes("san") ||
                title?.includes("san") ||
                name?.includes("whore") ||
                title?.includes("whore") ||
                name?.includes("revolver") ||
                title?.includes("revolver") ||
                name?.includes("bare") ||
                title?.includes("bare") ||
                name?.includes("naked") ||
                title?.includes("naked") ||
                name?.includes("to be true") ||
                title?.includes("to be true") ||
                name?.includes("lust") ||
                title?.includes("lust") ||
                name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                name?.includes("lisa") ||
                title?.includes("lisa") ||
                name?.includes("ann") ||
                title?.includes("ann") ||
                name?.includes("mom") ||
                title?.includes("mom") ||
                name?.includes("teen") ||
                title?.includes("teen") ||
                name?.includes("wife") ||
                title?.includes("wife") ||
                name?.includes("anal") ||
                title?.includes("anal") ||
                name?.includes("dirty") ||
                title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                name?.includes("inside") ||
                title?.includes("inside") ||
                name?.includes("mistress") ||
                title?.includes("mistress") ||
                name?.includes("blond") ||
                title?.includes("blond") ||
                name?.includes("black") ||
                title?.includes("black") ||
                name?.includes("after") ||
                title?.includes("after") ||
                name?.includes("married") ||
                title?.includes("married") ||
                name?.includes("husbands") ||
                title?.includes("husbands") ||
                name?.includes("dance") ||
                title?.includes("dance") ||
                name?.includes("check out") ||
                title?.includes("check out") ||
                name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                name?.includes("kardashians") ||
                title?.includes("kardashians") ||
                name?.includes("student") ||
                title?.includes("student") ||
                name?.includes("shark") ||
                title?.includes("shark") ||
                name?.includes("sleep") ||
                title?.includes("sleep") ||
                name?.includes("fantasme") ||
                title?.includes("fantasme") ||
                name?.includes("fantas") ||
                title?.includes("fantas") ||
                name?.includes("dark") ||
                title?.includes("dark") ||
                name?.includes("secret") ||
                title?.includes("secret") ||
                name?.includes("bourgeoise") ||
                title?.includes("bourgeoise") ||
                name?.includes("crazy") ||
                title?.includes("crazy") ||
                name?.includes("women") ||
                title?.includes("women") ||
                name?.includes("men") ||
                title?.includes("men") ||
                name?.includes("hot") ||
                title?.includes("hot") ||
                name?.includes("electric blue") ||
                title?.includes("electric blue") ||
                name?.includes("sweet") ||
                title?.includes("sweet") ||
                name?.includes("seka") ||
                title?.includes("seka") ||
                name?.includes("desire") ||
                title?.includes("desire") ||
                name?.includes("superstar") ||
                title?.includes("superstar") ||
                name?.includes("big leagues") ||
                title?.includes("big leagues") ||
                name?.includes("memorie") ||
                title?.includes("memorie") ||
                name?.includes("hole") ||
                title?.includes("hole") ||
                name?.includes("campus") ||
                title?.includes("campus") ||
                name?.includes("stormy") ||
                title?.includes("stormy") ||
                name?.includes("same time") ||
                title?.includes("same time") ||
                name?.includes("lips") ||
                title?.includes("lips") ||
                name?.includes("toush") ||
                title?.includes("toush") ||
                name?.includes("Homecoming") ||
                title?.includes("Homecoming") ||
                name?.includes("redhead") ||
                title?.includes("redhead") ||
                name?.includes("inspiration") ||
                title?.includes("inspiration") ||
                name?.includes("daughter") ||
                title?.includes("daughter") ||
                name?.includes("son") ||
                title?.includes("son") ||
                name?.includes("cream") ||
                title?.includes("cream") ||
                name?.includes("night") ||
                title?.includes("night") ||
                name?.includes("fantasy") ||
                title?.includes("fantasy") ||
                name?.includes("scandal") ||
                title?.includes("scandal") ||
                name?.includes("aunt peg") ||
                title?.includes("aunt peg") ||
                name?.includes("coming") ||
                title?.includes("coming") ||
                name?.includes("Kathy") ||
                title?.includes("Kathy") ||
                name?.includes("dicked") ||
                title?.includes("dicked") ||
                name?.includes("insatiable") ||
                title?.includes("insatiable") ||
                name?.includes("undulation") ||
                title?.includes("undulation") ||
                name?.includes("nude") ||
                title?.includes("nude") ||
                name?.includes("getting off") ||
                title?.includes("getting off") ||
                name?.includes("get off") ||
                title?.includes("get off") ||
                name?.includes("serena") ||
                title?.includes("serena") ||
                name?.includes("nymphomaniacs") ||
                title?.includes("nymphomaniacs") ||
                name?.includes("candy") ||
                title?.includes("candy") ||
                name?.includes("depraved") ||
                title?.includes("depraved") ||
                name?.includes("diamond collection") ||
                title?.includes("diamond collection") ||
                name?.includes("enqu??tes") ||
                title?.includes("enqu??tes") ||
                name?.includes("honey") ||
                title?.includes("honey") ||
                name?.includes("rup") ||
                title?.includes("rup") ||
                name?.includes("weekend tail") ||
                title?.includes("weekend tail") ||
                name?.includes("caresse") ||
                title?.includes("caresse") ||
                name?.includes("jouis") ||
                title?.includes("jouis") ||
                name?.includes("submission") ||
                title?.includes("submission") ||
                name?.includes("couple") ||
                title?.includes("couple") ||
                name?.includes("plus") ||
                title?.includes("plus") ||
                name?.includes("lewd") ||
                title?.includes("lewd") ||
                name?.includes("scrabble") ||
                title?.includes("scrabble") ||
                name?.includes("virgen") ||
                title?.includes("virgen") ||
                name?.includes("i'amour") ||
                title?.includes("i'amour") ||
                name?.includes("impudique") ||
                title?.includes("impudique") ||
                name?.includes("vacances ?? ibiza") ||
                title?.includes("vacances ?? ibiza") ||
                name?.includes("spa") ||
                title?.includes("spa") ||
                name?.includes("tounge twisters") ||
                title?.includes("tounge twisters") ||
                name?.includes("gang bangs") ||
                title?.includes("gang bangs") ||
                name?.includes("cupid's arrow") ||
                title?.includes("cupid's arrow") ||
                name?.includes("sperminator") ||
                title?.includes("sperminator") ||
                name?.includes("pink") ||
                title?.includes("pink") ||
                name?.includes("abracadabra") ||
                title?.includes("abracadabra") ||
                name?.includes("head game") ||
                title?.includes("head game") ||
                name?.includes("ecstas") ||
                title?.includes("ecstas") ||
                name?.includes("man") ||
                title?.includes("man") ||
                name?.includes("before") ||
                title?.includes("before") ||
                name?.includes("naughty") ||
                title?.includes("naughty") ||
                name?.includes("tasty") ||
                title?.includes("tasty") ||
                name?.includes("eva") ||
                title?.includes("eva") ||
                name?.includes("taboo") ||
                title?.includes("taboo") ||
                name?.includes("deep") ||
                title?.includes("deep") ||
                name?.includes("touch") ||
                title?.includes("touch") ||
                name?.includes("mother") ||
                title?.includes("mother") ||
                name?.includes("private") ||
                title?.includes("private") ||
                name?.includes("double") ||
                title?.includes("double") ||
                name?.includes("bubble gum") ||
                title?.includes("bubble gum") ||
                name?.includes("frisky business") ||
                title?.includes("frisky business") ||
                name?.includes("wives") ||
                title?.includes("wives") ||
                name?.includes("pervert") ||
                title?.includes("pervert") ||
                name?.includes("easy") ||
                title?.includes("easy") ||
                name?.includes("gabriel's") ||
                title?.includes("gabriel's") ||
                name?.includes("wild") ||
                title?.includes("wild") ||
                name?.includes("wire") ||
                title?.includes("wire") ||
                name?.includes("side") ||
                title?.includes("side") ||
                name?.includes("Oscenit??") ||
                title?.includes("Oscenit??") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
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
                title?.includes("sex") ||
                name?.includes("horny") ||
                title?.includes("horny") ||
                name?.includes("tit") ||
                title?.includes("tit") ||
                name?.includes("boob") ||
                title?.includes("boob") ||
                name?.includes("hentai") ||
                title?.includes("hentai") ||
                name?.includes("fuck") ||
                title?.includes("fuck") ||
                name?.includes("porn") ||
                title?.includes("porn") ||
                name?.includes("gay") ||
                title?.includes("gay") ||
                name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                name?.includes("ass") ||
                title?.includes("ass") ||
                name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                name?.includes("virgin") ||
                title?.includes("virgin") ||
                name?.includes("18") ||
                title?.includes("18") ||
                name?.includes("16") ||
                title?.includes("16") ||
                name?.includes("transgender") ||
                title?.includes("transgender") ||
                name?.includes("mature") ||
                title?.includes("mature") ||
                name?.includes("milf") ||
                title?.includes("milf") ||
                name?.includes("orgy") ||
                title?.includes("orgy") ||
                name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                name?.includes("squirt") ||
                title?.includes("squirt") ||
                name?.includes("brunette") ||
                title?.includes("brunette") ||
                name?.includes("handjob") ||
                title?.includes("handjob") ||
                name?.includes("cum") ||
                title?.includes("cum") ||
                name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                name?.includes("tatto") ||
                title?.includes("tatto") ||
                name?.includes("pussy") ||
                title?.includes("pussy") ||
                name?.includes("fisting") ||
                title?.includes("fisting") ||
                name?.includes("strap") ||
                title?.includes("strap") ||
                name?.includes("creampie") ||
                title?.includes("creampie") ||
                name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                name?.includes("female") ||
                title?.includes("female") ||
                name?.includes("threesome") ||
                title?.includes("threesome") ||
                name?.includes("step") ||
                title?.includes("step") ||
                name?.includes("vintage") ||
                title?.includes("vintage") ||
                name?.includes("beach") ||
                title?.includes("beach") ||
                name?.includes("massage") ||
                title?.includes("massage") ||
                name?.includes("love") ||
                title?.includes("love") ||
                name?.includes("tight") ||
                title?.includes("tight") ||
                name?.includes("feeling") ||
                title?.includes("feeling") ||
                name?.includes("heart") ||
                title?.includes("heart") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("pretty") ||
                title?.includes("pretty") ||
                name?.includes("high school") ||
                title?.includes("high school") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("girl") ||
                title?.includes("girl") ||
                name?.includes("boy") ||
                title?.includes("boy") ||
                name?.includes("friend") ||
                title?.includes("friend") ||
                name?.includes("x") ||
                title?.includes("x") ||
                name?.includes("fu") ||
                title?.includes("fu") ||
                name?.includes("f*") ||
                title?.includes("f*") ||
                name?.includes("san") ||
                title?.includes("san") ||
                name?.includes("whore") ||
                title?.includes("whore") ||
                name?.includes("revolver") ||
                title?.includes("revolver") ||
                name?.includes("bare") ||
                title?.includes("bare") ||
                name?.includes("naked") ||
                title?.includes("naked") ||
                name?.includes("to be true") ||
                title?.includes("to be true") ||
                name?.includes("lust") ||
                title?.includes("lust") ||
                name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                name?.includes("lisa") ||
                title?.includes("lisa") ||
                name?.includes("ann") ||
                title?.includes("ann") ||
                name?.includes("mom") ||
                title?.includes("mom") ||
                name?.includes("teen") ||
                title?.includes("teen") ||
                name?.includes("wife") ||
                title?.includes("wife") ||
                name?.includes("anal") ||
                title?.includes("anal") ||
                name?.includes("dirty") ||
                title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                name?.includes("inside") ||
                title?.includes("inside") ||
                name?.includes("mistress") ||
                title?.includes("mistress") ||
                name?.includes("blond") ||
                title?.includes("blond") ||
                name?.includes("black") ||
                title?.includes("black") ||
                name?.includes("after") ||
                title?.includes("after") ||
                name?.includes("married") ||
                title?.includes("married") ||
                name?.includes("husbands") ||
                title?.includes("husbands") ||
                name?.includes("dance") ||
                title?.includes("dance") ||
                name?.includes("check out") ||
                title?.includes("check out") ||
                name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                name?.includes("kardashians") ||
                title?.includes("kardashians") ||
                name?.includes("student") ||
                title?.includes("student") ||
                name?.includes("shark") ||
                title?.includes("shark") ||
                name?.includes("sleep") ||
                title?.includes("sleep") ||
                name?.includes("fantasme") ||
                title?.includes("fantasme") ||
                name?.includes("fantas") ||
                title?.includes("fantas") ||
                name?.includes("dark") ||
                title?.includes("dark") ||
                name?.includes("secret") ||
                title?.includes("secret") ||
                name?.includes("bourgeoise") ||
                title?.includes("bourgeoise") ||
                name?.includes("crazy") ||
                title?.includes("crazy") ||
                name?.includes("women") ||
                title?.includes("women") ||
                name?.includes("men") ||
                title?.includes("men") ||
                name?.includes("hot") ||
                title?.includes("hot") ||
                name?.includes("electric blue") ||
                title?.includes("electric blue") ||
                name?.includes("sweet") ||
                title?.includes("sweet") ||
                name?.includes("seka") ||
                title?.includes("seka") ||
                name?.includes("desire") ||
                title?.includes("desire") ||
                name?.includes("superstar") ||
                title?.includes("superstar") ||
                name?.includes("big leagues") ||
                title?.includes("big leagues") ||
                name?.includes("memorie") ||
                title?.includes("memorie") ||
                name?.includes("hole") ||
                title?.includes("hole") ||
                name?.includes("campus") ||
                title?.includes("campus") ||
                name?.includes("stormy") ||
                title?.includes("stormy") ||
                name?.includes("same time") ||
                title?.includes("same time") ||
                name?.includes("lips") ||
                title?.includes("lips") ||
                name?.includes("toush") ||
                title?.includes("toush") ||
                name?.includes("Homecoming") ||
                title?.includes("Homecoming") ||
                name?.includes("redhead") ||
                title?.includes("redhead") ||
                name?.includes("inspiration") ||
                title?.includes("inspiration") ||
                name?.includes("daughter") ||
                title?.includes("daughter") ||
                name?.includes("son") ||
                title?.includes("son") ||
                name?.includes("cream") ||
                title?.includes("cream") ||
                name?.includes("night") ||
                title?.includes("night") ||
                name?.includes("fantasy") ||
                title?.includes("fantasy") ||
                name?.includes("scandal") ||
                title?.includes("scandal") ||
                name?.includes("aunt peg") ||
                title?.includes("aunt peg") ||
                name?.includes("coming") ||
                title?.includes("coming") ||
                name?.includes("Kathy") ||
                title?.includes("Kathy") ||
                name?.includes("dicked") ||
                title?.includes("dicked") ||
                name?.includes("insatiable") ||
                title?.includes("insatiable") ||
                name?.includes("undulation") ||
                title?.includes("undulation") ||
                name?.includes("nude") ||
                title?.includes("nude") ||
                name?.includes("getting off") ||
                title?.includes("getting off") ||
                name?.includes("get off") ||
                title?.includes("get off") ||
                name?.includes("serena") ||
                title?.includes("serena") ||
                name?.includes("nymphomaniacs") ||
                title?.includes("nymphomaniacs") ||
                name?.includes("candy") ||
                title?.includes("candy") ||
                name?.includes("depraved") ||
                title?.includes("depraved") ||
                name?.includes("diamond collection") ||
                title?.includes("diamond collection") ||
                name?.includes("enqu??tes") ||
                title?.includes("enqu??tes") ||
                name?.includes("honey") ||
                title?.includes("honey") ||
                name?.includes("rup") ||
                title?.includes("rup") ||
                name?.includes("weekend tail") ||
                title?.includes("weekend tail") ||
                name?.includes("caresse") ||
                title?.includes("caresse") ||
                name?.includes("jouis") ||
                title?.includes("jouis") ||
                name?.includes("submission") ||
                title?.includes("submission") ||
                name?.includes("couple") ||
                title?.includes("couple") ||
                name?.includes("plus") ||
                title?.includes("plus") ||
                name?.includes("lewd") ||
                title?.includes("lewd") ||
                name?.includes("scrabble") ||
                title?.includes("scrabble") ||
                name?.includes("virgen") ||
                title?.includes("virgen") ||
                name?.includes("i'amour") ||
                title?.includes("i'amour") ||
                name?.includes("impudique") ||
                title?.includes("impudique") ||
                name?.includes("vacances ?? ibiza") ||
                title?.includes("vacances ?? ibiza") ||
                name?.includes("spa") ||
                title?.includes("spa") ||
                name?.includes("tounge twisters") ||
                title?.includes("tounge twisters") ||
                name?.includes("gang bangs") ||
                title?.includes("gang bangs") ||
                name?.includes("cupid's arrow") ||
                title?.includes("cupid's arrow") ||
                name?.includes("sperminator") ||
                title?.includes("sperminator") ||
                name?.includes("pink") ||
                title?.includes("pink") ||
                name?.includes("abracadabra") ||
                title?.includes("abracadabra") ||
                name?.includes("head game") ||
                title?.includes("head game") ||
                name?.includes("ecstas") ||
                title?.includes("ecstas") ||
                name?.includes("man") ||
                title?.includes("man") ||
                name?.includes("before") ||
                title?.includes("before") ||
                name?.includes("naughty") ||
                title?.includes("naughty") ||
                name?.includes("tasty") ||
                title?.includes("tasty") ||
                name?.includes("eva") ||
                title?.includes("eva") ||
                name?.includes("taboo") ||
                title?.includes("taboo") ||
                name?.includes("deep") ||
                title?.includes("deep") ||
                name?.includes("touch") ||
                title?.includes("touch") ||
                name?.includes("mother") ||
                title?.includes("mother") ||
                name?.includes("private") ||
                title?.includes("private") ||
                name?.includes("double") ||
                title?.includes("double") ||
                name?.includes("bubble gum") ||
                title?.includes("bubble gum") ||
                name?.includes("frisky business") ||
                title?.includes("frisky business") ||
                name?.includes("wives") ||
                title?.includes("wives") ||
                name?.includes("pervert") ||
                title?.includes("pervert") ||
                name?.includes("easy") ||
                title?.includes("easy") ||
                name?.includes("gabriel's") ||
                title?.includes("gabriel's") ||
                name?.includes("wild") ||
                title?.includes("wild") ||
                name?.includes("wire") ||
                title?.includes("wire") ||
                name?.includes("side") ||
                title?.includes("side") ||
                name?.includes("Oscenit??") ||
                title?.includes("Oscenit??") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
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
                title?.includes("sex") ||
                name?.includes("horny") ||
                title?.includes("horny") ||
                name?.includes("tit") ||
                title?.includes("tit") ||
                name?.includes("boob") ||
                title?.includes("boob") ||
                name?.includes("hentai") ||
                title?.includes("hentai") ||
                name?.includes("fuck") ||
                title?.includes("fuck") ||
                name?.includes("porn") ||
                title?.includes("porn") ||
                name?.includes("gay") ||
                title?.includes("gay") ||
                name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                name?.includes("ass") ||
                title?.includes("ass") ||
                name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                name?.includes("virgin") ||
                title?.includes("virgin") ||
                name?.includes("18") ||
                title?.includes("18") ||
                name?.includes("16") ||
                title?.includes("16") ||
                name?.includes("transgender") ||
                title?.includes("transgender") ||
                name?.includes("mature") ||
                title?.includes("mature") ||
                name?.includes("milf") ||
                title?.includes("milf") ||
                name?.includes("orgy") ||
                title?.includes("orgy") ||
                name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                name?.includes("squirt") ||
                title?.includes("squirt") ||
                name?.includes("brunette") ||
                title?.includes("brunette") ||
                name?.includes("handjob") ||
                title?.includes("handjob") ||
                name?.includes("cum") ||
                title?.includes("cum") ||
                name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                name?.includes("tatto") ||
                title?.includes("tatto") ||
                name?.includes("pussy") ||
                title?.includes("pussy") ||
                name?.includes("fisting") ||
                title?.includes("fisting") ||
                name?.includes("strap") ||
                title?.includes("strap") ||
                name?.includes("creampie") ||
                title?.includes("creampie") ||
                name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                name?.includes("female") ||
                title?.includes("female") ||
                name?.includes("threesome") ||
                title?.includes("threesome") ||
                name?.includes("step") ||
                title?.includes("step") ||
                name?.includes("vintage") ||
                title?.includes("vintage") ||
                name?.includes("beach") ||
                title?.includes("beach") ||
                name?.includes("massage") ||
                title?.includes("massage") ||
                name?.includes("love") ||
                title?.includes("love") ||
                name?.includes("tight") ||
                title?.includes("tight") ||
                name?.includes("feeling") ||
                title?.includes("feeling") ||
                name?.includes("heart") ||
                title?.includes("heart") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("pretty") ||
                title?.includes("pretty") ||
                name?.includes("high school") ||
                title?.includes("high school") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("girl") ||
                title?.includes("girl") ||
                name?.includes("boy") ||
                title?.includes("boy") ||
                name?.includes("friend") ||
                title?.includes("friend") ||
                name?.includes("x") ||
                title?.includes("x") ||
                name?.includes("fu") ||
                title?.includes("fu") ||
                name?.includes("f*") ||
                title?.includes("f*") ||
                name?.includes("san") ||
                title?.includes("san") ||
                name?.includes("whore") ||
                title?.includes("whore") ||
                name?.includes("revolver") ||
                title?.includes("revolver") ||
                name?.includes("bare") ||
                title?.includes("bare") ||
                name?.includes("naked") ||
                title?.includes("naked") ||
                name?.includes("to be true") ||
                title?.includes("to be true") ||
                name?.includes("lust") ||
                title?.includes("lust") ||
                name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                name?.includes("lisa") ||
                title?.includes("lisa") ||
                name?.includes("ann") ||
                title?.includes("ann") ||
                name?.includes("mom") ||
                title?.includes("mom") ||
                name?.includes("teen") ||
                title?.includes("teen") ||
                name?.includes("wife") ||
                title?.includes("wife") ||
                name?.includes("anal") ||
                title?.includes("anal") ||
                name?.includes("dirty") ||
                title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                name?.includes("inside") ||
                title?.includes("inside") ||
                name?.includes("mistress") ||
                title?.includes("mistress") ||
                name?.includes("blond") ||
                title?.includes("blond") ||
                name?.includes("black") ||
                title?.includes("black") ||
                name?.includes("after") ||
                title?.includes("after") ||
                name?.includes("married") ||
                title?.includes("married") ||
                name?.includes("husbands") ||
                title?.includes("husbands") ||
                name?.includes("dance") ||
                title?.includes("dance") ||
                name?.includes("check out") ||
                title?.includes("check out") ||
                name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                name?.includes("kardashians") ||
                title?.includes("kardashians") ||
                name?.includes("student") ||
                title?.includes("student") ||
                name?.includes("shark") ||
                title?.includes("shark") ||
                name?.includes("sleep") ||
                title?.includes("sleep") ||
                name?.includes("fantasme") ||
                title?.includes("fantasme") ||
                name?.includes("fantas") ||
                title?.includes("fantas") ||
                name?.includes("dark") ||
                title?.includes("dark") ||
                name?.includes("secret") ||
                title?.includes("secret") ||
                name?.includes("bourgeoise") ||
                title?.includes("bourgeoise") ||
                name?.includes("crazy") ||
                title?.includes("crazy") ||
                name?.includes("women") ||
                title?.includes("women") ||
                name?.includes("men") ||
                title?.includes("men") ||
                name?.includes("hot") ||
                title?.includes("hot") ||
                name?.includes("electric blue") ||
                title?.includes("electric blue") ||
                name?.includes("sweet") ||
                title?.includes("sweet") ||
                name?.includes("seka") ||
                title?.includes("seka") ||
                name?.includes("desire") ||
                title?.includes("desire") ||
                name?.includes("superstar") ||
                title?.includes("superstar") ||
                name?.includes("big leagues") ||
                title?.includes("big leagues") ||
                name?.includes("memorie") ||
                title?.includes("memorie") ||
                name?.includes("hole") ||
                title?.includes("hole") ||
                name?.includes("campus") ||
                title?.includes("campus") ||
                name?.includes("stormy") ||
                title?.includes("stormy") ||
                name?.includes("same time") ||
                title?.includes("same time") ||
                name?.includes("lips") ||
                title?.includes("lips") ||
                name?.includes("toush") ||
                title?.includes("toush") ||
                name?.includes("Homecoming") ||
                title?.includes("Homecoming") ||
                name?.includes("redhead") ||
                title?.includes("redhead") ||
                name?.includes("inspiration") ||
                title?.includes("inspiration") ||
                name?.includes("daughter") ||
                title?.includes("daughter") ||
                name?.includes("son") ||
                title?.includes("son") ||
                name?.includes("cream") ||
                title?.includes("cream") ||
                name?.includes("night") ||
                title?.includes("night") ||
                name?.includes("fantasy") ||
                title?.includes("fantasy") ||
                name?.includes("scandal") ||
                title?.includes("scandal") ||
                name?.includes("aunt peg") ||
                title?.includes("aunt peg") ||
                name?.includes("coming") ||
                title?.includes("coming") ||
                name?.includes("Kathy") ||
                title?.includes("Kathy") ||
                name?.includes("dicked") ||
                title?.includes("dicked") ||
                name?.includes("insatiable") ||
                title?.includes("insatiable") ||
                name?.includes("undulation") ||
                title?.includes("undulation") ||
                name?.includes("nude") ||
                title?.includes("nude") ||
                name?.includes("getting off") ||
                title?.includes("getting off") ||
                name?.includes("get off") ||
                title?.includes("get off") ||
                name?.includes("serena") ||
                title?.includes("serena") ||
                name?.includes("nymphomaniacs") ||
                title?.includes("nymphomaniacs") ||
                name?.includes("candy") ||
                title?.includes("candy") ||
                name?.includes("depraved") ||
                title?.includes("depraved") ||
                name?.includes("diamond collection") ||
                title?.includes("diamond collection") ||
                name?.includes("enqu??tes") ||
                title?.includes("enqu??tes") ||
                name?.includes("honey") ||
                title?.includes("honey") ||
                name?.includes("rup") ||
                title?.includes("rup") ||
                name?.includes("weekend tail") ||
                title?.includes("weekend tail") ||
                name?.includes("caresse") ||
                title?.includes("caresse") ||
                name?.includes("jouis") ||
                title?.includes("jouis") ||
                name?.includes("submission") ||
                title?.includes("submission") ||
                name?.includes("couple") ||
                title?.includes("couple") ||
                name?.includes("plus") ||
                title?.includes("plus") ||
                name?.includes("lewd") ||
                title?.includes("lewd") ||
                name?.includes("scrabble") ||
                title?.includes("scrabble") ||
                name?.includes("virgen") ||
                title?.includes("virgen") ||
                name?.includes("i'amour") ||
                title?.includes("i'amour") ||
                name?.includes("impudique") ||
                title?.includes("impudique") ||
                name?.includes("vacances ?? ibiza") ||
                title?.includes("vacances ?? ibiza") ||
                name?.includes("spa") ||
                title?.includes("spa") ||
                name?.includes("tounge twisters") ||
                title?.includes("tounge twisters") ||
                name?.includes("gang bangs") ||
                title?.includes("gang bangs") ||
                name?.includes("cupid's arrow") ||
                title?.includes("cupid's arrow") ||
                name?.includes("sperminator") ||
                title?.includes("sperminator") ||
                name?.includes("pink") ||
                title?.includes("pink") ||
                name?.includes("abracadabra") ||
                title?.includes("abracadabra") ||
                name?.includes("head game") ||
                title?.includes("head game") ||
                name?.includes("ecstas") ||
                title?.includes("ecstas") ||
                name?.includes("man") ||
                title?.includes("man") ||
                name?.includes("before") ||
                title?.includes("before") ||
                name?.includes("naughty") ||
                title?.includes("naughty") ||
                name?.includes("tasty") ||
                title?.includes("tasty") ||
                name?.includes("eva") ||
                title?.includes("eva") ||
                name?.includes("taboo") ||
                title?.includes("taboo") ||
                name?.includes("deep") ||
                title?.includes("deep") ||
                name?.includes("touch") ||
                title?.includes("touch") ||
                name?.includes("mother") ||
                title?.includes("mother") ||
                name?.includes("private") ||
                title?.includes("private") ||
                name?.includes("double") ||
                title?.includes("double") ||
                name?.includes("bubble gum") ||
                title?.includes("bubble gum") ||
                name?.includes("frisky business") ||
                title?.includes("frisky business") ||
                name?.includes("wives") ||
                title?.includes("wives") ||
                name?.includes("pervert") ||
                title?.includes("pervert") ||
                name?.includes("easy") ||
                title?.includes("easy") ||
                name?.includes("gabriel's") ||
                title?.includes("gabriel's") ||
                name?.includes("wild") ||
                title?.includes("wild") ||
                name?.includes("wire") ||
                title?.includes("wire") ||
                name?.includes("side") ||
                title?.includes("side") ||
                name?.includes("Oscenit??") ||
                title?.includes("Oscenit??") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
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
                title?.includes("sex") ||
                name?.includes("horny") ||
                title?.includes("horny") ||
                name?.includes("tit") ||
                title?.includes("tit") ||
                name?.includes("boob") ||
                title?.includes("boob") ||
                name?.includes("hentai") ||
                title?.includes("hentai") ||
                name?.includes("fuck") ||
                title?.includes("fuck") ||
                name?.includes("porn") ||
                title?.includes("porn") ||
                name?.includes("gay") ||
                title?.includes("gay") ||
                name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                name?.includes("ass") ||
                title?.includes("ass") ||
                name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                name?.includes("virgin") ||
                title?.includes("virgin") ||
                name?.includes("18") ||
                title?.includes("18") ||
                name?.includes("16") ||
                title?.includes("16") ||
                name?.includes("transgender") ||
                title?.includes("transgender") ||
                name?.includes("mature") ||
                title?.includes("mature") ||
                name?.includes("milf") ||
                title?.includes("milf") ||
                name?.includes("orgy") ||
                title?.includes("orgy") ||
                name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                name?.includes("squirt") ||
                title?.includes("squirt") ||
                name?.includes("brunette") ||
                title?.includes("brunette") ||
                name?.includes("handjob") ||
                title?.includes("handjob") ||
                name?.includes("cum") ||
                title?.includes("cum") ||
                name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                name?.includes("tatto") ||
                title?.includes("tatto") ||
                name?.includes("pussy") ||
                title?.includes("pussy") ||
                name?.includes("fisting") ||
                title?.includes("fisting") ||
                name?.includes("strap") ||
                title?.includes("strap") ||
                name?.includes("creampie") ||
                title?.includes("creampie") ||
                name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                name?.includes("female") ||
                title?.includes("female") ||
                name?.includes("threesome") ||
                title?.includes("threesome") ||
                name?.includes("step") ||
                title?.includes("step") ||
                name?.includes("vintage") ||
                title?.includes("vintage") ||
                name?.includes("beach") ||
                title?.includes("beach") ||
                name?.includes("massage") ||
                title?.includes("massage") ||
                name?.includes("love") ||
                title?.includes("love") ||
                name?.includes("tight") ||
                title?.includes("tight") ||
                name?.includes("feeling") ||
                title?.includes("feeling") ||
                name?.includes("heart") ||
                title?.includes("heart") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("pretty") ||
                title?.includes("pretty") ||
                name?.includes("high school") ||
                title?.includes("high school") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("girl") ||
                title?.includes("girl") ||
                name?.includes("boy") ||
                title?.includes("boy") ||
                name?.includes("friend") ||
                title?.includes("friend") ||
                name?.includes("x") ||
                title?.includes("x") ||
                name?.includes("fu") ||
                title?.includes("fu") ||
                name?.includes("f*") ||
                title?.includes("f*") ||
                name?.includes("san") ||
                title?.includes("san") ||
                name?.includes("whore") ||
                title?.includes("whore") ||
                name?.includes("revolver") ||
                title?.includes("revolver") ||
                name?.includes("bare") ||
                title?.includes("bare") ||
                name?.includes("naked") ||
                title?.includes("naked") ||
                name?.includes("to be true") ||
                title?.includes("to be true") ||
                name?.includes("lust") ||
                title?.includes("lust") ||
                name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                name?.includes("lisa") ||
                title?.includes("lisa") ||
                name?.includes("ann") ||
                title?.includes("ann") ||
                name?.includes("mom") ||
                title?.includes("mom") ||
                name?.includes("teen") ||
                title?.includes("teen") ||
                name?.includes("wife") ||
                title?.includes("wife") ||
                name?.includes("anal") ||
                title?.includes("anal") ||
                name?.includes("dirty") ||
                title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                name?.includes("inside") ||
                title?.includes("inside") ||
                name?.includes("mistress") ||
                title?.includes("mistress") ||
                name?.includes("blond") ||
                title?.includes("blond") ||
                name?.includes("black") ||
                title?.includes("black") ||
                name?.includes("after") ||
                title?.includes("after") ||
                name?.includes("married") ||
                title?.includes("married") ||
                name?.includes("husbands") ||
                title?.includes("husbands") ||
                name?.includes("dance") ||
                title?.includes("dance") ||
                name?.includes("check out") ||
                title?.includes("check out") ||
                name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                name?.includes("kardashians") ||
                title?.includes("kardashians") ||
                name?.includes("student") ||
                title?.includes("student") ||
                name?.includes("shark") ||
                title?.includes("shark") ||
                name?.includes("sleep") ||
                title?.includes("sleep") ||
                name?.includes("fantasme") ||
                title?.includes("fantasme") ||
                name?.includes("fantas") ||
                title?.includes("fantas") ||
                name?.includes("dark") ||
                title?.includes("dark") ||
                name?.includes("secret") ||
                title?.includes("secret") ||
                name?.includes("bourgeoise") ||
                title?.includes("bourgeoise") ||
                name?.includes("crazy") ||
                title?.includes("crazy") ||
                name?.includes("women") ||
                title?.includes("women") ||
                name?.includes("men") ||
                title?.includes("men") ||
                name?.includes("hot") ||
                title?.includes("hot") ||
                name?.includes("electric blue") ||
                title?.includes("electric blue") ||
                name?.includes("sweet") ||
                title?.includes("sweet") ||
                name?.includes("seka") ||
                title?.includes("seka") ||
                name?.includes("desire") ||
                title?.includes("desire") ||
                name?.includes("superstar") ||
                title?.includes("superstar") ||
                name?.includes("big leagues") ||
                title?.includes("big leagues") ||
                name?.includes("memorie") ||
                title?.includes("memorie") ||
                name?.includes("hole") ||
                title?.includes("hole") ||
                name?.includes("campus") ||
                title?.includes("campus") ||
                name?.includes("stormy") ||
                title?.includes("stormy") ||
                name?.includes("same time") ||
                title?.includes("same time") ||
                name?.includes("lips") ||
                title?.includes("lips") ||
                name?.includes("toush") ||
                title?.includes("toush") ||
                name?.includes("Homecoming") ||
                title?.includes("Homecoming") ||
                name?.includes("redhead") ||
                title?.includes("redhead") ||
                name?.includes("inspiration") ||
                title?.includes("inspiration") ||
                name?.includes("daughter") ||
                title?.includes("daughter") ||
                name?.includes("son") ||
                title?.includes("son") ||
                name?.includes("cream") ||
                title?.includes("cream") ||
                name?.includes("night") ||
                title?.includes("night") ||
                name?.includes("fantasy") ||
                title?.includes("fantasy") ||
                name?.includes("scandal") ||
                title?.includes("scandal") ||
                name?.includes("aunt peg") ||
                title?.includes("aunt peg") ||
                name?.includes("coming") ||
                title?.includes("coming") ||
                name?.includes("Kathy") ||
                title?.includes("Kathy") ||
                name?.includes("dicked") ||
                title?.includes("dicked") ||
                name?.includes("insatiable") ||
                title?.includes("insatiable") ||
                name?.includes("undulation") ||
                title?.includes("undulation") ||
                name?.includes("nude") ||
                title?.includes("nude") ||
                name?.includes("getting off") ||
                title?.includes("getting off") ||
                name?.includes("get off") ||
                title?.includes("get off") ||
                name?.includes("serena") ||
                title?.includes("serena") ||
                name?.includes("nymphomaniacs") ||
                title?.includes("nymphomaniacs") ||
                name?.includes("candy") ||
                title?.includes("candy") ||
                name?.includes("depraved") ||
                title?.includes("depraved") ||
                name?.includes("diamond collection") ||
                title?.includes("diamond collection") ||
                name?.includes("enqu??tes") ||
                title?.includes("enqu??tes") ||
                name?.includes("honey") ||
                title?.includes("honey") ||
                name?.includes("rup") ||
                title?.includes("rup") ||
                name?.includes("weekend tail") ||
                title?.includes("weekend tail") ||
                name?.includes("caresse") ||
                title?.includes("caresse") ||
                name?.includes("jouis") ||
                title?.includes("jouis") ||
                name?.includes("submission") ||
                title?.includes("submission") ||
                name?.includes("couple") ||
                title?.includes("couple") ||
                name?.includes("plus") ||
                title?.includes("plus") ||
                name?.includes("lewd") ||
                title?.includes("lewd") ||
                name?.includes("scrabble") ||
                title?.includes("scrabble") ||
                name?.includes("virgen") ||
                title?.includes("virgen") ||
                name?.includes("i'amour") ||
                title?.includes("i'amour") ||
                name?.includes("impudique") ||
                title?.includes("impudique") ||
                name?.includes("vacances ?? ibiza") ||
                title?.includes("vacances ?? ibiza") ||
                name?.includes("spa") ||
                title?.includes("spa") ||
                name?.includes("tounge twisters") ||
                title?.includes("tounge twisters") ||
                name?.includes("gang bangs") ||
                title?.includes("gang bangs") ||
                name?.includes("cupid's arrow") ||
                title?.includes("cupid's arrow") ||
                name?.includes("sperminator") ||
                title?.includes("sperminator") ||
                name?.includes("pink") ||
                title?.includes("pink") ||
                name?.includes("abracadabra") ||
                title?.includes("abracadabra") ||
                name?.includes("head game") ||
                title?.includes("head game") ||
                name?.includes("ecstas") ||
                title?.includes("ecstas") ||
                name?.includes("man") ||
                title?.includes("man") ||
                name?.includes("before") ||
                title?.includes("before") ||
                name?.includes("naughty") ||
                title?.includes("naughty") ||
                name?.includes("tasty") ||
                title?.includes("tasty") ||
                name?.includes("eva") ||
                title?.includes("eva") ||
                name?.includes("taboo") ||
                title?.includes("taboo") ||
                name?.includes("deep") ||
                title?.includes("deep") ||
                name?.includes("touch") ||
                title?.includes("touch") ||
                name?.includes("mother") ||
                title?.includes("mother") ||
                name?.includes("private") ||
                title?.includes("private") ||
                name?.includes("double") ||
                title?.includes("double") ||
                name?.includes("bubble gum") ||
                title?.includes("bubble gum") ||
                name?.includes("frisky business") ||
                title?.includes("frisky business") ||
                name?.includes("wives") ||
                title?.includes("wives") ||
                name?.includes("pervert") ||
                title?.includes("pervert") ||
                name?.includes("easy") ||
                title?.includes("easy") ||
                name?.includes("gabriel's") ||
                title?.includes("gabriel's") ||
                name?.includes("wild") ||
                title?.includes("wild") ||
                name?.includes("wire") ||
                title?.includes("wire") ||
                name?.includes("side") ||
                title?.includes("side") ||
                name?.includes("Oscenit??") ||
                title?.includes("Oscenit??") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
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
                title?.includes("sex") ||
                name?.includes("horny") ||
                title?.includes("horny") ||
                name?.includes("tit") ||
                title?.includes("tit") ||
                name?.includes("boob") ||
                title?.includes("boob") ||
                name?.includes("hentai") ||
                title?.includes("hentai") ||
                name?.includes("fuck") ||
                title?.includes("fuck") ||
                name?.includes("porn") ||
                title?.includes("porn") ||
                name?.includes("gay") ||
                title?.includes("gay") ||
                name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                name?.includes("ass") ||
                title?.includes("ass") ||
                name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                name?.includes("virgin") ||
                title?.includes("virgin") ||
                name?.includes("18") ||
                title?.includes("18") ||
                name?.includes("16") ||
                title?.includes("16") ||
                name?.includes("transgender") ||
                title?.includes("transgender") ||
                name?.includes("mature") ||
                title?.includes("mature") ||
                name?.includes("milf") ||
                title?.includes("milf") ||
                name?.includes("orgy") ||
                title?.includes("orgy") ||
                name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                name?.includes("squirt") ||
                title?.includes("squirt") ||
                name?.includes("brunette") ||
                title?.includes("brunette") ||
                name?.includes("handjob") ||
                title?.includes("handjob") ||
                name?.includes("cum") ||
                title?.includes("cum") ||
                name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                name?.includes("tatto") ||
                title?.includes("tatto") ||
                name?.includes("pussy") ||
                title?.includes("pussy") ||
                name?.includes("fisting") ||
                title?.includes("fisting") ||
                name?.includes("strap") ||
                title?.includes("strap") ||
                name?.includes("creampie") ||
                title?.includes("creampie") ||
                name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                name?.includes("female") ||
                title?.includes("female") ||
                name?.includes("threesome") ||
                title?.includes("threesome") ||
                name?.includes("step") ||
                title?.includes("step") ||
                name?.includes("vintage") ||
                title?.includes("vintage") ||
                name?.includes("beach") ||
                title?.includes("beach") ||
                name?.includes("massage") ||
                title?.includes("massage") ||
                name?.includes("love") ||
                title?.includes("love") ||
                name?.includes("tight") ||
                title?.includes("tight") ||
                name?.includes("feeling") ||
                title?.includes("feeling") ||
                name?.includes("heart") ||
                title?.includes("heart") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("pretty") ||
                title?.includes("pretty") ||
                name?.includes("high school") ||
                title?.includes("high school") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("girl") ||
                title?.includes("girl") ||
                name?.includes("boy") ||
                title?.includes("boy") ||
                name?.includes("friend") ||
                title?.includes("friend") ||
                name?.includes("x") ||
                title?.includes("x") ||
                name?.includes("fu") ||
                title?.includes("fu") ||
                name?.includes("f*") ||
                title?.includes("f*") ||
                name?.includes("san") ||
                title?.includes("san") ||
                name?.includes("whore") ||
                title?.includes("whore") ||
                name?.includes("revolver") ||
                title?.includes("revolver") ||
                name?.includes("bare") ||
                title?.includes("bare") ||
                name?.includes("naked") ||
                title?.includes("naked") ||
                name?.includes("to be true") ||
                title?.includes("to be true") ||
                name?.includes("lust") ||
                title?.includes("lust") ||
                name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                name?.includes("lisa") ||
                title?.includes("lisa") ||
                name?.includes("ann") ||
                title?.includes("ann") ||
                name?.includes("mom") ||
                title?.includes("mom") ||
                name?.includes("teen") ||
                title?.includes("teen") ||
                name?.includes("wife") ||
                title?.includes("wife") ||
                name?.includes("anal") ||
                title?.includes("anal") ||
                name?.includes("dirty") ||
                title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                name?.includes("inside") ||
                title?.includes("inside") ||
                name?.includes("mistress") ||
                title?.includes("mistress") ||
                name?.includes("blond") ||
                title?.includes("blond") ||
                name?.includes("black") ||
                title?.includes("black") ||
                name?.includes("after") ||
                title?.includes("after") ||
                name?.includes("married") ||
                title?.includes("married") ||
                name?.includes("husbands") ||
                title?.includes("husbands") ||
                name?.includes("dance") ||
                title?.includes("dance") ||
                name?.includes("check out") ||
                title?.includes("check out") ||
                name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                name?.includes("kardashians") ||
                title?.includes("kardashians") ||
                name?.includes("student") ||
                title?.includes("student") ||
                name?.includes("shark") ||
                title?.includes("shark") ||
                name?.includes("sleep") ||
                title?.includes("sleep") ||
                name?.includes("fantasme") ||
                title?.includes("fantasme") ||
                name?.includes("fantas") ||
                title?.includes("fantas") ||
                name?.includes("dark") ||
                title?.includes("dark") ||
                name?.includes("secret") ||
                title?.includes("secret") ||
                name?.includes("bourgeoise") ||
                title?.includes("bourgeoise") ||
                name?.includes("crazy") ||
                title?.includes("crazy") ||
                name?.includes("women") ||
                title?.includes("women") ||
                name?.includes("men") ||
                title?.includes("men") ||
                name?.includes("hot") ||
                title?.includes("hot") ||
                name?.includes("electric blue") ||
                title?.includes("electric blue") ||
                name?.includes("sweet") ||
                title?.includes("sweet") ||
                name?.includes("seka") ||
                title?.includes("seka") ||
                name?.includes("desire") ||
                title?.includes("desire") ||
                name?.includes("superstar") ||
                title?.includes("superstar") ||
                name?.includes("big leagues") ||
                title?.includes("big leagues") ||
                name?.includes("memorie") ||
                title?.includes("memorie") ||
                name?.includes("hole") ||
                title?.includes("hole") ||
                name?.includes("campus") ||
                title?.includes("campus") ||
                name?.includes("stormy") ||
                title?.includes("stormy") ||
                name?.includes("same time") ||
                title?.includes("same time") ||
                name?.includes("lips") ||
                title?.includes("lips") ||
                name?.includes("toush") ||
                title?.includes("toush") ||
                name?.includes("Homecoming") ||
                title?.includes("Homecoming") ||
                name?.includes("redhead") ||
                title?.includes("redhead") ||
                name?.includes("inspiration") ||
                title?.includes("inspiration") ||
                name?.includes("daughter") ||
                title?.includes("daughter") ||
                name?.includes("son") ||
                title?.includes("son") ||
                name?.includes("cream") ||
                title?.includes("cream") ||
                name?.includes("night") ||
                title?.includes("night") ||
                name?.includes("fantasy") ||
                title?.includes("fantasy") ||
                name?.includes("scandal") ||
                title?.includes("scandal") ||
                name?.includes("aunt peg") ||
                title?.includes("aunt peg") ||
                name?.includes("coming") ||
                title?.includes("coming") ||
                name?.includes("Kathy") ||
                title?.includes("Kathy") ||
                name?.includes("dicked") ||
                title?.includes("dicked") ||
                name?.includes("insatiable") ||
                title?.includes("insatiable") ||
                name?.includes("undulation") ||
                title?.includes("undulation") ||
                name?.includes("nude") ||
                title?.includes("nude") ||
                name?.includes("getting off") ||
                title?.includes("getting off") ||
                name?.includes("get off") ||
                title?.includes("get off") ||
                name?.includes("serena") ||
                title?.includes("serena") ||
                name?.includes("nymphomaniacs") ||
                title?.includes("nymphomaniacs") ||
                name?.includes("candy") ||
                title?.includes("candy") ||
                name?.includes("depraved") ||
                title?.includes("depraved") ||
                name?.includes("diamond collection") ||
                title?.includes("diamond collection") ||
                name?.includes("enqu??tes") ||
                title?.includes("enqu??tes") ||
                name?.includes("honey") ||
                title?.includes("honey") ||
                name?.includes("rup") ||
                title?.includes("rup") ||
                name?.includes("weekend tail") ||
                title?.includes("weekend tail") ||
                name?.includes("caresse") ||
                title?.includes("caresse") ||
                name?.includes("jouis") ||
                title?.includes("jouis") ||
                name?.includes("submission") ||
                title?.includes("submission") ||
                name?.includes("couple") ||
                title?.includes("couple") ||
                name?.includes("plus") ||
                title?.includes("plus") ||
                name?.includes("lewd") ||
                title?.includes("lewd") ||
                name?.includes("scrabble") ||
                title?.includes("scrabble") ||
                name?.includes("virgen") ||
                title?.includes("virgen") ||
                name?.includes("i'amour") ||
                title?.includes("i'amour") ||
                name?.includes("impudique") ||
                title?.includes("impudique") ||
                name?.includes("vacances ?? ibiza") ||
                title?.includes("vacances ?? ibiza") ||
                name?.includes("spa") ||
                title?.includes("spa") ||
                name?.includes("tounge twisters") ||
                title?.includes("tounge twisters") ||
                name?.includes("gang bangs") ||
                title?.includes("gang bangs") ||
                name?.includes("cupid's arrow") ||
                title?.includes("cupid's arrow") ||
                name?.includes("sperminator") ||
                title?.includes("sperminator") ||
                name?.includes("pink") ||
                title?.includes("pink") ||
                name?.includes("abracadabra") ||
                title?.includes("abracadabra") ||
                name?.includes("head game") ||
                title?.includes("head game") ||
                name?.includes("ecstas") ||
                title?.includes("ecstas") ||
                name?.includes("man") ||
                title?.includes("man") ||
                name?.includes("before") ||
                title?.includes("before") ||
                name?.includes("naughty") ||
                title?.includes("naughty") ||
                name?.includes("tasty") ||
                title?.includes("tasty") ||
                name?.includes("eva") ||
                title?.includes("eva") ||
                name?.includes("taboo") ||
                title?.includes("taboo") ||
                name?.includes("deep") ||
                title?.includes("deep") ||
                name?.includes("touch") ||
                title?.includes("touch") ||
                name?.includes("mother") ||
                title?.includes("mother") ||
                name?.includes("private") ||
                title?.includes("private") ||
                name?.includes("double") ||
                title?.includes("double") ||
                name?.includes("bubble gum") ||
                title?.includes("bubble gum") ||
                name?.includes("frisky business") ||
                title?.includes("frisky business") ||
                name?.includes("wives") ||
                title?.includes("wives") ||
                name?.includes("pervert") ||
                title?.includes("pervert") ||
                name?.includes("easy") ||
                title?.includes("easy") ||
                name?.includes("gabriel's") ||
                title?.includes("gabriel's") ||
                name?.includes("wild") ||
                title?.includes("wild") ||
                name?.includes("wire") ||
                title?.includes("wire") ||
                name?.includes("side") ||
                title?.includes("side") ||
                name?.includes("Oscenit??") ||
                title?.includes("Oscenit??") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
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
                title?.includes("sex") ||
                name?.includes("horny") ||
                title?.includes("horny") ||
                name?.includes("tit") ||
                title?.includes("tit") ||
                name?.includes("boob") ||
                title?.includes("boob") ||
                name?.includes("hentai") ||
                title?.includes("hentai") ||
                name?.includes("fuck") ||
                title?.includes("fuck") ||
                name?.includes("porn") ||
                title?.includes("porn") ||
                name?.includes("gay") ||
                title?.includes("gay") ||
                name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                name?.includes("ass") ||
                title?.includes("ass") ||
                name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                name?.includes("virgin") ||
                title?.includes("virgin") ||
                name?.includes("18") ||
                title?.includes("18") ||
                name?.includes("16") ||
                title?.includes("16") ||
                name?.includes("transgender") ||
                title?.includes("transgender") ||
                name?.includes("mature") ||
                title?.includes("mature") ||
                name?.includes("milf") ||
                title?.includes("milf") ||
                name?.includes("orgy") ||
                title?.includes("orgy") ||
                name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                name?.includes("squirt") ||
                title?.includes("squirt") ||
                name?.includes("brunette") ||
                title?.includes("brunette") ||
                name?.includes("handjob") ||
                title?.includes("handjob") ||
                name?.includes("cum") ||
                title?.includes("cum") ||
                name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                name?.includes("tatto") ||
                title?.includes("tatto") ||
                name?.includes("pussy") ||
                title?.includes("pussy") ||
                name?.includes("fisting") ||
                title?.includes("fisting") ||
                name?.includes("strap") ||
                title?.includes("strap") ||
                name?.includes("creampie") ||
                title?.includes("creampie") ||
                name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                name?.includes("female") ||
                title?.includes("female") ||
                name?.includes("threesome") ||
                title?.includes("threesome") ||
                name?.includes("step") ||
                title?.includes("step") ||
                name?.includes("vintage") ||
                title?.includes("vintage") ||
                name?.includes("beach") ||
                title?.includes("beach") ||
                name?.includes("massage") ||
                title?.includes("massage") ||
                name?.includes("love") ||
                title?.includes("love") ||
                name?.includes("tight") ||
                title?.includes("tight") ||
                name?.includes("feeling") ||
                title?.includes("feeling") ||
                name?.includes("heart") ||
                title?.includes("heart") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("pretty") ||
                title?.includes("pretty") ||
                name?.includes("high school") ||
                title?.includes("high school") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("girl") ||
                title?.includes("girl") ||
                name?.includes("boy") ||
                title?.includes("boy") ||
                name?.includes("friend") ||
                title?.includes("friend") ||
                name?.includes("x") ||
                title?.includes("x") ||
                name?.includes("fu") ||
                title?.includes("fu") ||
                name?.includes("f*") ||
                title?.includes("f*") ||
                name?.includes("san") ||
                title?.includes("san") ||
                name?.includes("whore") ||
                title?.includes("whore") ||
                name?.includes("revolver") ||
                title?.includes("revolver") ||
                name?.includes("bare") ||
                title?.includes("bare") ||
                name?.includes("naked") ||
                title?.includes("naked") ||
                name?.includes("to be true") ||
                title?.includes("to be true") ||
                name?.includes("lust") ||
                title?.includes("lust") ||
                name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                name?.includes("lisa") ||
                title?.includes("lisa") ||
                name?.includes("ann") ||
                title?.includes("ann") ||
                name?.includes("mom") ||
                title?.includes("mom") ||
                name?.includes("teen") ||
                title?.includes("teen") ||
                name?.includes("wife") ||
                title?.includes("wife") ||
                name?.includes("anal") ||
                title?.includes("anal") ||
                name?.includes("dirty") ||
                title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                name?.includes("inside") ||
                title?.includes("inside") ||
                name?.includes("mistress") ||
                title?.includes("mistress") ||
                name?.includes("blond") ||
                title?.includes("blond") ||
                name?.includes("black") ||
                title?.includes("black") ||
                name?.includes("after") ||
                title?.includes("after") ||
                name?.includes("married") ||
                title?.includes("married") ||
                name?.includes("husbands") ||
                title?.includes("husbands") ||
                name?.includes("dance") ||
                title?.includes("dance") ||
                name?.includes("check out") ||
                title?.includes("check out") ||
                name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                name?.includes("kardashians") ||
                title?.includes("kardashians") ||
                name?.includes("student") ||
                title?.includes("student") ||
                name?.includes("shark") ||
                title?.includes("shark") ||
                name?.includes("sleep") ||
                title?.includes("sleep") ||
                name?.includes("fantasme") ||
                title?.includes("fantasme") ||
                name?.includes("fantas") ||
                title?.includes("fantas") ||
                name?.includes("dark") ||
                title?.includes("dark") ||
                name?.includes("secret") ||
                title?.includes("secret") ||
                name?.includes("bourgeoise") ||
                title?.includes("bourgeoise") ||
                name?.includes("crazy") ||
                title?.includes("crazy") ||
                name?.includes("women") ||
                title?.includes("women") ||
                name?.includes("men") ||
                title?.includes("men") ||
                name?.includes("hot") ||
                title?.includes("hot") ||
                name?.includes("electric blue") ||
                title?.includes("electric blue") ||
                name?.includes("sweet") ||
                title?.includes("sweet") ||
                name?.includes("seka") ||
                title?.includes("seka") ||
                name?.includes("desire") ||
                title?.includes("desire") ||
                name?.includes("superstar") ||
                title?.includes("superstar") ||
                name?.includes("big leagues") ||
                title?.includes("big leagues") ||
                name?.includes("memorie") ||
                title?.includes("memorie") ||
                name?.includes("hole") ||
                title?.includes("hole") ||
                name?.includes("campus") ||
                title?.includes("campus") ||
                name?.includes("stormy") ||
                title?.includes("stormy") ||
                name?.includes("same time") ||
                title?.includes("same time") ||
                name?.includes("lips") ||
                title?.includes("lips") ||
                name?.includes("toush") ||
                title?.includes("toush") ||
                name?.includes("Homecoming") ||
                title?.includes("Homecoming") ||
                name?.includes("redhead") ||
                title?.includes("redhead") ||
                name?.includes("inspiration") ||
                title?.includes("inspiration") ||
                name?.includes("daughter") ||
                title?.includes("daughter") ||
                name?.includes("son") ||
                title?.includes("son") ||
                name?.includes("cream") ||
                title?.includes("cream") ||
                name?.includes("night") ||
                title?.includes("night") ||
                name?.includes("fantasy") ||
                title?.includes("fantasy") ||
                name?.includes("scandal") ||
                title?.includes("scandal") ||
                name?.includes("aunt peg") ||
                title?.includes("aunt peg") ||
                name?.includes("coming") ||
                title?.includes("coming") ||
                name?.includes("Kathy") ||
                title?.includes("Kathy") ||
                name?.includes("dicked") ||
                title?.includes("dicked") ||
                name?.includes("insatiable") ||
                title?.includes("insatiable") ||
                name?.includes("undulation") ||
                title?.includes("undulation") ||
                name?.includes("nude") ||
                title?.includes("nude") ||
                name?.includes("getting off") ||
                title?.includes("getting off") ||
                name?.includes("get off") ||
                title?.includes("get off") ||
                name?.includes("serena") ||
                title?.includes("serena") ||
                name?.includes("nymphomaniacs") ||
                title?.includes("nymphomaniacs") ||
                name?.includes("candy") ||
                title?.includes("candy") ||
                name?.includes("depraved") ||
                title?.includes("depraved") ||
                name?.includes("diamond collection") ||
                title?.includes("diamond collection") ||
                name?.includes("enqu??tes") ||
                title?.includes("enqu??tes") ||
                name?.includes("honey") ||
                title?.includes("honey") ||
                name?.includes("rup") ||
                title?.includes("rup") ||
                name?.includes("weekend tail") ||
                title?.includes("weekend tail") ||
                name?.includes("caresse") ||
                title?.includes("caresse") ||
                name?.includes("jouis") ||
                title?.includes("jouis") ||
                name?.includes("submission") ||
                title?.includes("submission") ||
                name?.includes("couple") ||
                title?.includes("couple") ||
                name?.includes("plus") ||
                title?.includes("plus") ||
                name?.includes("lewd") ||
                title?.includes("lewd") ||
                name?.includes("scrabble") ||
                title?.includes("scrabble") ||
                name?.includes("virgen") ||
                title?.includes("virgen") ||
                name?.includes("i'amour") ||
                title?.includes("i'amour") ||
                name?.includes("impudique") ||
                title?.includes("impudique") ||
                name?.includes("vacances ?? ibiza") ||
                title?.includes("vacances ?? ibiza") ||
                name?.includes("spa") ||
                title?.includes("spa") ||
                name?.includes("tounge twisters") ||
                title?.includes("tounge twisters") ||
                name?.includes("gang bangs") ||
                title?.includes("gang bangs") ||
                name?.includes("cupid's arrow") ||
                title?.includes("cupid's arrow") ||
                name?.includes("sperminator") ||
                title?.includes("sperminator") ||
                name?.includes("pink") ||
                title?.includes("pink") ||
                name?.includes("abracadabra") ||
                title?.includes("abracadabra") ||
                name?.includes("head game") ||
                title?.includes("head game") ||
                name?.includes("ecstas") ||
                title?.includes("ecstas") ||
                name?.includes("man") ||
                title?.includes("man") ||
                name?.includes("before") ||
                title?.includes("before") ||
                name?.includes("naughty") ||
                title?.includes("naughty") ||
                name?.includes("tasty") ||
                title?.includes("tasty") ||
                name?.includes("eva") ||
                title?.includes("eva") ||
                name?.includes("taboo") ||
                title?.includes("taboo") ||
                name?.includes("deep") ||
                title?.includes("deep") ||
                name?.includes("touch") ||
                title?.includes("touch") ||
                name?.includes("mother") ||
                title?.includes("mother") ||
                name?.includes("private") ||
                title?.includes("private") ||
                name?.includes("double") ||
                title?.includes("double") ||
                name?.includes("bubble gum") ||
                title?.includes("bubble gum") ||
                name?.includes("frisky business") ||
                title?.includes("frisky business") ||
                name?.includes("wives") ||
                title?.includes("wives") ||
                name?.includes("pervert") ||
                title?.includes("pervert") ||
                name?.includes("easy") ||
                title?.includes("easy") ||
                name?.includes("gabriel's") ||
                title?.includes("gabriel's") ||
                name?.includes("wild") ||
                title?.includes("wild") ||
                name?.includes("wire") ||
                title?.includes("wire") ||
                name?.includes("side") ||
                title?.includes("side") ||
                name?.includes("Oscenit??") ||
                title?.includes("Oscenit??") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
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
                title?.includes("sex") ||
                name?.includes("horny") ||
                title?.includes("horny") ||
                name?.includes("tit") ||
                title?.includes("tit") ||
                name?.includes("boob") ||
                title?.includes("boob") ||
                name?.includes("hentai") ||
                title?.includes("hentai") ||
                name?.includes("fuck") ||
                title?.includes("fuck") ||
                name?.includes("porn") ||
                title?.includes("porn") ||
                name?.includes("gay") ||
                title?.includes("gay") ||
                name?.includes("lesbian") ||
                title?.includes("lesbian") ||
                name?.includes("ass") ||
                title?.includes("ass") ||
                name?.includes("orgasm") ||
                title?.includes("orgasm") ||
                name?.includes("virgin") ||
                title?.includes("virgin") ||
                name?.includes("18") ||
                title?.includes("18") ||
                name?.includes("16") ||
                title?.includes("16") ||
                name?.includes("transgender") ||
                title?.includes("transgender") ||
                name?.includes("mature") ||
                title?.includes("mature") ||
                name?.includes("milf") ||
                title?.includes("milf") ||
                name?.includes("orgy") ||
                title?.includes("orgy") ||
                name?.includes("cosplay") ||
                title?.includes("cosplay") ||
                name?.includes("squirt") ||
                title?.includes("squirt") ||
                name?.includes("brunette") ||
                title?.includes("brunette") ||
                name?.includes("handjob") ||
                title?.includes("handjob") ||
                name?.includes("cum") ||
                title?.includes("cum") ||
                name?.includes("blowjob") ||
                title?.includes("blowjob") ||
                name?.includes("hardcore") ||
                title?.includes("hardcore") ||
                name?.includes("tatto") ||
                title?.includes("tatto") ||
                name?.includes("pussy") ||
                title?.includes("pussy") ||
                name?.includes("fisting") ||
                title?.includes("fisting") ||
                name?.includes("strap") ||
                title?.includes("strap") ||
                name?.includes("creampie") ||
                title?.includes("creampie") ||
                name?.includes("gangbang") ||
                title?.includes("gangbang") ||
                name?.includes("female") ||
                title?.includes("female") ||
                name?.includes("threesome") ||
                title?.includes("threesome") ||
                name?.includes("step") ||
                title?.includes("step") ||
                name?.includes("vintage") ||
                title?.includes("vintage") ||
                name?.includes("beach") ||
                title?.includes("beach") ||
                name?.includes("massage") ||
                title?.includes("massage") ||
                name?.includes("love") ||
                title?.includes("love") ||
                name?.includes("tight") ||
                title?.includes("tight") ||
                name?.includes("feeling") ||
                title?.includes("feeling") ||
                name?.includes("heart") ||
                title?.includes("heart") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("pretty") ||
                title?.includes("pretty") ||
                name?.includes("high school") ||
                title?.includes("high school") ||
                name?.includes("kiss") ||
                title?.includes("kiss") ||
                name?.includes("girl") ||
                title?.includes("girl") ||
                name?.includes("boy") ||
                title?.includes("boy") ||
                name?.includes("friend") ||
                title?.includes("friend") ||
                name?.includes("x") ||
                title?.includes("x") ||
                name?.includes("fu") ||
                title?.includes("fu") ||
                name?.includes("f*") ||
                title?.includes("f*") ||
                name?.includes("san") ||
                title?.includes("san") ||
                name?.includes("whore") ||
                title?.includes("whore") ||
                name?.includes("revolver") ||
                title?.includes("revolver") ||
                name?.includes("bare") ||
                title?.includes("bare") ||
                name?.includes("naked") ||
                title?.includes("naked") ||
                name?.includes("to be true") ||
                title?.includes("to be true") ||
                name?.includes("lust") ||
                title?.includes("lust") ||
                name?.includes("forbidden") ||
                title?.includes("forbidden") ||
                name?.includes("lisa") ||
                title?.includes("lisa") ||
                name?.includes("ann") ||
                title?.includes("ann") ||
                name?.includes("mom") ||
                title?.includes("mom") ||
                name?.includes("teen") ||
                title?.includes("teen") ||
                name?.includes("wife") ||
                title?.includes("wife") ||
                name?.includes("anal") ||
                title?.includes("anal") ||
                name?.includes("dirty") ||
                title?.includes("dirty") ||
                name?.includes("shades of kink") ||
                title?.includes("shades of kink") ||
                name?.includes("inside") ||
                title?.includes("inside") ||
                name?.includes("mistress") ||
                title?.includes("mistress") ||
                name?.includes("blond") ||
                title?.includes("blond") ||
                name?.includes("black") ||
                title?.includes("black") ||
                name?.includes("after") ||
                title?.includes("after") ||
                name?.includes("married") ||
                title?.includes("married") ||
                name?.includes("husbands") ||
                title?.includes("husbands") ||
                name?.includes("dance") ||
                title?.includes("dance") ||
                name?.includes("check out") ||
                title?.includes("check out") ||
                name?.includes("don't tell") ||
                title?.includes("don't tell") ||
                name?.includes("dont tell") ||
                title?.includes("dont tell") ||
                name?.includes("kardashians") ||
                title?.includes("kardashians") ||
                name?.includes("student") ||
                title?.includes("student") ||
                name?.includes("shark") ||
                title?.includes("shark") ||
                name?.includes("sleep") ||
                title?.includes("sleep") ||
                name?.includes("fantasme") ||
                title?.includes("fantasme") ||
                name?.includes("fantas") ||
                title?.includes("fantas") ||
                name?.includes("dark") ||
                title?.includes("dark") ||
                name?.includes("secret") ||
                title?.includes("secret") ||
                name?.includes("bourgeoise") ||
                title?.includes("bourgeoise") ||
                name?.includes("crazy") ||
                title?.includes("crazy") ||
                name?.includes("women") ||
                title?.includes("women") ||
                name?.includes("men") ||
                title?.includes("men") ||
                name?.includes("hot") ||
                title?.includes("hot") ||
                name?.includes("electric blue") ||
                title?.includes("electric blue") ||
                name?.includes("sweet") ||
                title?.includes("sweet") ||
                name?.includes("seka") ||
                title?.includes("seka") ||
                name?.includes("desire") ||
                title?.includes("desire") ||
                name?.includes("superstar") ||
                title?.includes("superstar") ||
                name?.includes("big leagues") ||
                title?.includes("big leagues") ||
                name?.includes("memorie") ||
                title?.includes("memorie") ||
                name?.includes("hole") ||
                title?.includes("hole") ||
                name?.includes("campus") ||
                title?.includes("campus") ||
                name?.includes("stormy") ||
                title?.includes("stormy") ||
                name?.includes("same time") ||
                title?.includes("same time") ||
                name?.includes("lips") ||
                title?.includes("lips") ||
                name?.includes("toush") ||
                title?.includes("toush") ||
                name?.includes("Homecoming") ||
                title?.includes("Homecoming") ||
                name?.includes("redhead") ||
                title?.includes("redhead") ||
                name?.includes("inspiration") ||
                title?.includes("inspiration") ||
                name?.includes("daughter") ||
                title?.includes("daughter") ||
                name?.includes("son") ||
                title?.includes("son") ||
                name?.includes("cream") ||
                title?.includes("cream") ||
                name?.includes("night") ||
                title?.includes("night") ||
                name?.includes("fantasy") ||
                title?.includes("fantasy") ||
                name?.includes("scandal") ||
                title?.includes("scandal") ||
                name?.includes("aunt peg") ||
                title?.includes("aunt peg") ||
                name?.includes("coming") ||
                title?.includes("coming") ||
                name?.includes("Kathy") ||
                title?.includes("Kathy") ||
                name?.includes("dicked") ||
                title?.includes("dicked") ||
                name?.includes("insatiable") ||
                title?.includes("insatiable") ||
                name?.includes("undulation") ||
                title?.includes("undulation") ||
                name?.includes("nude") ||
                title?.includes("nude") ||
                name?.includes("getting off") ||
                title?.includes("getting off") ||
                name?.includes("get off") ||
                title?.includes("get off") ||
                name?.includes("serena") ||
                title?.includes("serena") ||
                name?.includes("nymphomaniacs") ||
                title?.includes("nymphomaniacs") ||
                name?.includes("candy") ||
                title?.includes("candy") ||
                name?.includes("depraved") ||
                title?.includes("depraved") ||
                name?.includes("diamond collection") ||
                title?.includes("diamond collection") ||
                name?.includes("enqu??tes") ||
                title?.includes("enqu??tes") ||
                name?.includes("honey") ||
                title?.includes("honey") ||
                name?.includes("rup") ||
                title?.includes("rup") ||
                name?.includes("weekend tail") ||
                title?.includes("weekend tail") ||
                name?.includes("caresse") ||
                title?.includes("caresse") ||
                name?.includes("jouis") ||
                title?.includes("jouis") ||
                name?.includes("submission") ||
                title?.includes("submission") ||
                name?.includes("couple") ||
                title?.includes("couple") ||
                name?.includes("plus") ||
                title?.includes("plus") ||
                name?.includes("lewd") ||
                title?.includes("lewd") ||
                name?.includes("scrabble") ||
                title?.includes("scrabble") ||
                name?.includes("virgen") ||
                title?.includes("virgen") ||
                name?.includes("i'amour") ||
                title?.includes("i'amour") ||
                name?.includes("impudique") ||
                title?.includes("impudique") ||
                name?.includes("vacances ?? ibiza") ||
                title?.includes("vacances ?? ibiza") ||
                name?.includes("spa") ||
                title?.includes("spa") ||
                name?.includes("tounge twisters") ||
                title?.includes("tounge twisters") ||
                name?.includes("gang bangs") ||
                title?.includes("gang bangs") ||
                name?.includes("cupid's arrow") ||
                title?.includes("cupid's arrow") ||
                name?.includes("sperminator") ||
                title?.includes("sperminator") ||
                name?.includes("pink") ||
                title?.includes("pink") ||
                name?.includes("abracadabra") ||
                title?.includes("abracadabra") ||
                name?.includes("head game") ||
                title?.includes("head game") ||
                name?.includes("ecstas") ||
                title?.includes("ecstas") ||
                name?.includes("man") ||
                title?.includes("man") ||
                name?.includes("before") ||
                title?.includes("before") ||
                name?.includes("naughty") ||
                title?.includes("naughty") ||
                name?.includes("tasty") ||
                title?.includes("tasty") ||
                name?.includes("eva") ||
                title?.includes("eva") ||
                name?.includes("taboo") ||
                title?.includes("taboo") ||
                name?.includes("deep") ||
                title?.includes("deep") ||
                name?.includes("touch") ||
                title?.includes("touch") ||
                name?.includes("mother") ||
                title?.includes("mother") ||
                name?.includes("private") ||
                title?.includes("private") ||
                name?.includes("double") ||
                title?.includes("double") ||
                name?.includes("bubble gum") ||
                title?.includes("bubble gum") ||
                name?.includes("frisky business") ||
                title?.includes("frisky business") ||
                name?.includes("wives") ||
                title?.includes("wives") ||
                name?.includes("pervert") ||
                title?.includes("pervert") ||
                name?.includes("easy") ||
                title?.includes("easy") ||
                name?.includes("gabriel's") ||
                title?.includes("gabriel's") ||
                name?.includes("wild") ||
                title?.includes("wild") ||
                name?.includes("wire") ||
                title?.includes("wire") ||
                name?.includes("side") ||
                title?.includes("side") ||
                name?.includes("Oscenit??") ||
                title?.includes("Oscenit??") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
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
