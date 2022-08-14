import { createContext, useState } from "react";

import { Props } from "../models/context-interfaces";
import { MediaDataContextInterface } from "../models/forbiddentMediaContextInterfaces";

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

const ForbiddenHomePageMediaContext = createContext({
    trendingMedia: initialMediaData,
    filterForbiddenTrendingMediaDataFun: (
        trendingMedia: MediaDataContextInterface[]
    ): void => {},

    // movies
    popularMovies: initialMediaData,
    topRatedMovies: initialMediaData,
    upComingMovies: initialMediaData,
    filterForbiddenPopularMoviesDataFun: (
        popularMovies: MediaDataContextInterface[]
    ): void => {},
    filterForbiddenTopRatedMoviesDataFun: (
        topRatedMovies: MediaDataContextInterface[]
    ): void => {},
    filterForbiddenUpComingMoviesDataFun: (
        upComingMovies: MediaDataContextInterface[]
    ): void => {},

    // TV
    popularTv: initialMediaData,
    topRatedTv: initialMediaData,
    upComingTv: initialMediaData,
    filterForbiddenPopularTvDataFun: (
        popularTv: MediaDataContextInterface[]
    ): void => {},
    filterForbiddenTopRatedTvDataFun: (
        topRatedTv: MediaDataContextInterface[]
    ): void => {},
    filterForbiddenUpComingTvDataFun: (
        upComingTv: MediaDataContextInterface[]
    ): void => {},
});

export const ForbiddenHomePageMediaContextProvider = (
    props: Props
): JSX.Element => {
    const { children } = props;

    const [trendingMedia, setTrendingMedia] =
        useState<MediaDataContextInterface[]>(initialMediaData);

    // movies States
    const [popularMovies, setPopularMovies] =
        useState<MediaDataContextInterface[]>(initialMediaData);
    const [topRatedMovies, setTopRatedMovies] =
        useState<MediaDataContextInterface[]>(initialMediaData);
    const [upComingMovies, setUpComingMovies] =
        useState<MediaDataContextInterface[]>(initialMediaData);

    // tv States
    const [popularTv, setPopularTv] =
        useState<MediaDataContextInterface[]>(initialMediaData);
    const [topRatedTv, setTopRatedTv] =
        useState<MediaDataContextInterface[]>(initialMediaData);
    const [upComingTv, setUpComingTv] =
        useState<MediaDataContextInterface[]>(initialMediaData);

    const filterForbiddenTrendingMediaDataFun = (
        trendingMedia: MediaDataContextInterface[]
    ) => {
        setTrendingMedia([]);
        trendingMedia.forEach((media) => {
            const name = media?.name?.toLowerCase();
            const title = media?.title?.toLowerCase();
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
                name?.includes("enquêtes") ||
                title?.includes("enquêtes") ||
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
                name?.includes("vacances à ibiza") ||
                title?.includes("vacances à ibiza") ||
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
                name?.includes("Oscenità") ||
                title?.includes("Oscenità") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
            ) {
            } else {
                if (backdrop_path || poster_path) {
                    setTrendingMedia((prevState) => prevState.concat(media));
                }
            }
        });
    };

    /**********************************************************************/
    /*************************MOVIES FUNCTIONS*****************************/
    /**********************************************************************/
    const filterForbiddenPopularMoviesDataFun = (
        popularMovies: MediaDataContextInterface[]
    ) => {
        setPopularMovies([]);
        popularMovies.forEach((media) => {
            const name = media?.name?.toLowerCase();
            const title = media?.title?.toLowerCase();
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
                name?.includes("enquêtes") ||
                title?.includes("enquêtes") ||
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
                name?.includes("vacances à ibiza") ||
                title?.includes("vacances à ibiza") ||
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
                name?.includes("Oscenità") ||
                title?.includes("Oscenità") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
            ) {
            } else {
                if (backdrop_path || poster_path) {
                    setPopularMovies((prevState) => prevState.concat(media));
                }
            }
        });
    };

    const filterForbiddenTopRatedMoviesDataFun = (
        topRatedMovies: MediaDataContextInterface[]
    ) => {
        setTopRatedMovies([]);
        topRatedMovies.forEach((media) => {
            const name = media?.name?.toLowerCase();
            const title = media?.title?.toLowerCase();
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
                name?.includes("enquêtes") ||
                title?.includes("enquêtes") ||
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
                name?.includes("vacances à ibiza") ||
                title?.includes("vacances à ibiza") ||
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
                name?.includes("Oscenità") ||
                title?.includes("Oscenità") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
            ) {
            } else {
                if (backdrop_path || poster_path) {
                    setTopRatedMovies((prevState) => prevState.concat(media));
                }
            }
        });
    };

    const filterForbiddenUpComingMoviesDataFun = (
        upComingMovies: MediaDataContextInterface[]
    ) => {
        setUpComingMovies([]);
        upComingMovies.forEach((media) => {
            const name = media?.name?.toLowerCase();
            const title = media?.title?.toLowerCase();
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
                name?.includes("enquêtes") ||
                title?.includes("enquêtes") ||
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
                name?.includes("vacances à ibiza") ||
                title?.includes("vacances à ibiza") ||
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
                name?.includes("Oscenità") ||
                title?.includes("Oscenità") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
            ) {
            } else {
                if (backdrop_path || poster_path) {
                    setUpComingMovies((prevState) => prevState.concat(media));
                }
            }
        });
    };
    /**********************************************************************/
    /*************************TV FUNCTIONS*****************************/
    /**********************************************************************/
    const filterForbiddenPopularTvDataFun = (
        popularTv: MediaDataContextInterface[]
    ) => {
        setPopularTv([]);
        popularTv.forEach((media) => {
            const name = media?.name?.toLowerCase();
            const title = media?.title?.toLowerCase();
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
                name?.includes("enquêtes") ||
                title?.includes("enquêtes") ||
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
                name?.includes("vacances à ibiza") ||
                title?.includes("vacances à ibiza") ||
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
                name?.includes("Oscenità") ||
                title?.includes("Oscenità") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
            ) {
            } else {
                if (backdrop_path || poster_path) {
                    setPopularTv((prevState) => prevState.concat(media));
                }
            }
        });
    };

    const filterForbiddenTopRatedTvDataFun = (
        topRatedTv: MediaDataContextInterface[]
    ) => {
        setTopRatedTv([]);
        topRatedTv.forEach((media) => {
            const name = media?.name?.toLowerCase();
            const title = media?.title?.toLowerCase();
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
                name?.includes("enquêtes") ||
                title?.includes("enquêtes") ||
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
                name?.includes("vacances à ibiza") ||
                title?.includes("vacances à ibiza") ||
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
                name?.includes("Oscenità") ||
                title?.includes("Oscenità") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
            ) {
            } else {
                if (backdrop_path || poster_path) {
                    setTopRatedTv((prevState) => prevState.concat(media));
                }
            }
        });
    };

    const filterForbiddenUpComingTvDataFun = (
        upComingTv: MediaDataContextInterface[]
    ) => {
        setUpComingTv([]);
        upComingTv.forEach((media) => {
            const name = media?.name?.toLowerCase();
            const title = media?.title?.toLowerCase();
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
                name?.includes("enquêtes") ||
                title?.includes("enquêtes") ||
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
                name?.includes("vacances à ibiza") ||
                title?.includes("vacances à ibiza") ||
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
                name?.includes("Oscenità") ||
                title?.includes("Oscenità") ||
                name?.includes("teacher") ||
                title?.includes("teacher") ||
                name?.includes("swim") ||
                title?.includes("swim")
            ) {
            } else {
                if (backdrop_path || poster_path) {
                    setUpComingTv((prevState) => prevState.concat(media));
                }
            }
        });
    };

    const data = {
        trendingMedia,
        filterForbiddenTrendingMediaDataFun,

        // movies
        popularMovies,
        topRatedMovies,
        upComingMovies,
        filterForbiddenPopularMoviesDataFun,
        filterForbiddenTopRatedMoviesDataFun,
        filterForbiddenUpComingMoviesDataFun,

        // TV
        popularTv,
        topRatedTv,
        upComingTv,
        filterForbiddenPopularTvDataFun,
        filterForbiddenTopRatedTvDataFun,
        filterForbiddenUpComingTvDataFun,
    };
    return (
        <ForbiddenHomePageMediaContext.Provider value={data}>
            {children}
        </ForbiddenHomePageMediaContext.Provider>
    );
};

export default ForbiddenHomePageMediaContext;
