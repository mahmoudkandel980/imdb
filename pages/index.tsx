import { useContext, useState, useEffect } from "react";
import { NextPage, GetStaticProps } from "next";

import SpinnerContext from "../context/spinner-context";
import RouterSpinner from "../components/ui/routerSpinner";
import MediaPosterHeader from "../components/media/mediaPosterHeader";
import Popular from "../components/home/popular";
import TopRated from "../components/home/topRated";
import UpComing from "../components/home/upComing";
import Footer from "../components/footer/footer";
import ForbiddenHomePageMediaContext from "../context/forbiddenhomePageMedia-context";
import ToggleMode from "../context/darkMode";
import {
    requestMoviePage,
    requestTvPage,
    requestPeoplePage,
} from "../libs/requests";

import {
    TrendingMediaInterface,
    PopularMoviesInterface,
    topRatedMoviesInterface,
    UpComingMoviesInterface,
    PopularTvInterface,
    TopRatedTvInterface,
    UpComingTvInterface,
    PopularPeopleInterface,
} from "../models/home-interfaces";

const Home = (
    props: TrendingMediaInterface &
        PopularMoviesInterface &
        topRatedMoviesInterface &
        UpComingMoviesInterface &
        PopularTvInterface &
        TopRatedTvInterface &
        UpComingTvInterface &
        PopularPeopleInterface
) => {
    const {
        trendingMedia,
        popularMovies,
        topRatedMovies,
        upComingMovies,
        popularTv,
        topRatedTv,
        upComingTv,
        popularPeople,
    } = props;
    const [isSSR, setIsSSR] = useState(true);

    const modeCtx = useContext(ToggleMode);
    const { mode } = modeCtx;

    const spinnerCtx = useContext(SpinnerContext);
    const homePageMediaDataCtx = useContext(ForbiddenHomePageMediaContext);
    const {
        trendingMedia: modifiedTrendingMedia,
        popularMovies: modifiedPopularMovies,
        topRatedMovies: modifiedTopRatedMovies,
        upComingMovies: modifiedUpComingMovies,
        popularTv: modifiedPopularTv,
        topRatedTv: modifiedTopRatedTv,
        upComingTv: modifiedUpComingTv,
        filterForbiddenTrendingMediaDataFun,
        filterForbiddenPopularMoviesDataFun,
        filterForbiddenTopRatedMoviesDataFun,
        filterForbiddenUpComingMoviesDataFun,
        filterForbiddenPopularTvDataFun,
        filterForbiddenTopRatedTvDataFun,
        filterForbiddenUpComingTvDataFun,
    } = homePageMediaDataCtx;

    useEffect(() => {
        filterForbiddenTrendingMediaDataFun(trendingMedia!);
        filterForbiddenPopularMoviesDataFun(popularMovies!);
        filterForbiddenTopRatedMoviesDataFun(topRatedMovies!);
        filterForbiddenUpComingMoviesDataFun(upComingMovies!);
        filterForbiddenPopularTvDataFun(popularTv!);
        filterForbiddenTopRatedTvDataFun(topRatedTv!);
        filterForbiddenUpComingTvDataFun(upComingTv!);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        trendingMedia,
        popularMovies,
        topRatedMovies,
        upComingMovies,
        popularTv,
        topRatedTv,
        upComingTv,
        popularPeople,
    ]);

    const { showMedia } = spinnerCtx;

    useEffect(() => {
        setIsSSR(false);
    }, []);

    return (
        <div
            className={`${
                mode === "dark" ? "bg-smothDark" : "bg-white"
            }  h-screen`}
        >
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    <RouterSpinner />
                </div>
            ) : (
                <div>
                    {!isSSR && (
                        <>
                            <MediaPosterHeader
                                mediaData={modifiedUpComingMovies}
                                trendingMedia={modifiedTrendingMedia}
                            />
                            <Popular
                                popularMovies={modifiedPopularMovies}
                                popularTv={modifiedPopularTv}
                                popularPeople={popularPeople}
                            />
                            <TopRated
                                topRatedMovies={modifiedTopRatedMovies}
                                topRatedTv={modifiedTopRatedTv}
                            />
                            <UpComing
                                upComingMovies={modifiedUpComingMovies}
                                upComingTv={modifiedUpComingTv}
                            />
                            <div>
                                {showMedia ? <></> : <Footer total_pages={1} />}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    // Trending
    let trendingMediaURL;

    // movies
    let popularMoviesURL, topRatedMoviesURL, upComingMoviesURL;

    // tv
    let popularTvURL, topRatedTvURL, upComingTvURL;

    // people
    let popularPeopleURL;

    requestMoviePage.forEach((requestType) => {
        if (requestType.type == "Trending") {
            trendingMediaURL = requestType.url;
        } else if (requestType.type == "Popular") {
            popularMoviesURL = requestType.url;
        } else if (requestType.type == "TopRated") {
            topRatedMoviesURL = requestType.url;
        } else if (requestType.type == "Upcoming") {
            upComingMoviesURL = requestType.url;
        }
    });

    requestTvPage.forEach((requestType) => {
        if (requestType.type == "Popular") {
            popularTvURL = requestType.url;
        } else if (requestType.type == "TopRated") {
            topRatedTvURL = requestType.url;
        } else if (requestType.type == "Airing Today") {
            upComingTvURL = requestType.url;
        }
    });

    requestPeoplePage.forEach((requestType) => {
        if (requestType.type === "Popular") {
            popularPeopleURL = requestType.url;
        }
    });

    // Trending Media
    const trendingMediaReq = await fetch(
        `https://api.themoviedb.org/3${trendingMediaURL}`
    );
    const trendingMediaRes = await trendingMediaReq?.json();

    // popular Movies
    const popularMoviesReq = await fetch(
        `https://api.themoviedb.org/3${popularMoviesURL}`
    );
    const popularMoviesRes = await popularMoviesReq?.json();

    // TopRated Movies
    const topRatedMoviesReq = await fetch(
        `https://api.themoviedb.org/3${topRatedMoviesURL}`
    );
    const topRatedMoviesRes = await topRatedMoviesReq?.json();

    // UpComing Movies
    const upComingMoviesReq = await fetch(
        `https://api.themoviedb.org/3${upComingMoviesURL}`
    );
    const upComingMoviesRes = await upComingMoviesReq?.json();

    // popular Tv
    const popularTvReq = await fetch(
        `https://api.themoviedb.org/3${popularTvURL}`
    );
    const popularTvRes = await popularTvReq?.json();

    // TopRated Tv
    const topRatedTvReq = await fetch(
        `https://api.themoviedb.org/3${topRatedTvURL}`
    );
    const topRatedTvRes = await topRatedTvReq?.json();

    // UpComing Tv
    const upComingTvReq = await fetch(
        `https://api.themoviedb.org/3${upComingTvURL}`
    );
    const upComingTvRes = await upComingTvReq?.json();

    // popular Tv
    const popularPeopleReq = await fetch(
        `https://api.themoviedb.org/3${popularPeopleURL}`
    );
    const popularPeopleRes = await popularPeopleReq?.json();

    const trendingMedia = trendingMediaRes.results;
    const popularMovies = popularMoviesRes.results;
    const topRatedMovies = topRatedMoviesRes.results;
    const upComingMovies = upComingMoviesRes.results;
    const popularTv = popularTvRes.results;
    const topRatedTv = topRatedTvRes.results;
    const upComingTv = upComingTvRes.results;
    const popularPeople = popularPeopleRes.results;

    if (
        !trendingMedia ||
        !popularMovies ||
        !topRatedMovies ||
        !upComingMovies ||
        !popularTv ||
        !topRatedTv ||
        !upComingTv ||
        !popularPeople
    ) {
        return { notFound: true };
    }

    return {
        props: {
            trendingMedia,
            popularMovies,
            topRatedMovies,
            upComingMovies,
            popularTv,
            topRatedTv,
            upComingTv,
            popularPeople,
        },
        revalidate: 86400,
    };
};
