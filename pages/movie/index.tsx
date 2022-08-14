import { useContext, useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import SearchInput from "../../components/search/searchInput";
import Media from "../../components/media/media";
import MediaPosterHeaader from "../../components/media/mediaPosterHeader";
import Footer from "../../components/footer/footer";
import SearchMedia from "../../components/search/searchMedia";

import RouterSpinner from "../../components/ui/routerSpinner";
import SpinnerContext from "../../context/spinner-context";
import ForbiddenMediaContentContext from "../../context/forbiddenMediaContent-context";
import { requestMoviePage, requestSearchPage } from "../../libs/requests";

import {
    RequestMediaInterface,
    TotalPagesInterface,
} from "../../models/interfaces";
import { MediaDataInterface } from "../../models/media-interfaces";
import { SearchMediaInterface } from "../../models/search-interfaces";

const isSSR = typeof window === "undefined";
const MoviesPage = (
    props: RequestMediaInterface &
        TotalPagesInterface &
        MediaDataInterface &
        SearchMediaInterface
) => {
    const { mediaData, total_pages, searchMedia } = props;
    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;
    const [isSSR, setIsSSR] = useState(true);

    const mediaDataCtx = useContext(ForbiddenMediaContentContext);
    const {
        mediaData: mediaDataModified,
        searchMedia: searchMediaModified,
        filterForbiddenContentMediaDataFun,
        filterForbiddenContentSearchMediaFun,
    } = mediaDataCtx;

    useEffect(() => {
        setIsSSR(false);
    }, []);

    useEffect(() => {
        filterForbiddenContentMediaDataFun(mediaData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mediaData]);

    useEffect(() => {
        filterForbiddenContentSearchMediaFun(searchMedia?.results!);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchMedia?.results]);

    return (
        <div className="bg-smothDark">
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    <RouterSpinner />
                </div>
            ) : (
                <div>
                    {!isSSR && (
                        <>
                            <MediaPosterHeaader
                                mediaData={mediaDataModified}
                                trendingMedia={null}
                            />
                            <SearchInput
                                className="bg-smothDark"
                                searchFor="movies"
                                SearchDataWithImageLength={
                                    searchMediaModified.length
                                }
                                searchMedia={searchMediaModified}
                                searchPeople={null}
                                modifiedMultiSearch={null}
                                searchPage={searchMedia?.page || 0}
                                searchTotal_pages={
                                    searchMedia?.total_pages || 0
                                }
                            />
                            <SearchMedia searchMedia={searchMediaModified} />
                        </>
                    )}
                    <Media mediaData={mediaDataModified} />
                    {showMedia ? <></> : <Footer total_pages={total_pages} />}
                </div>
            )}
        </div>
    );
};

export default MoviesPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    let mediaURL;
    let MediaReq;
    let pages;

    let searchMediaReq;
    let searchMediaURL;

    const { query } = context;
    const type = query.type || "Trending";
    const page = query.page;
    const queryMedia = query.query;

    requestMoviePage.forEach((requestType) => {
        if (requestType.type == type) {
            mediaURL = requestType.url;
            pages = requestType.pages;
            return;
        }
    });

    requestSearchPage.forEach((requestType) => {
        if (requestType.type.toLowerCase() === "movie") {
            searchMediaURL = requestType.url;
            return;
        }
    });

    if (pages !== "one page") {
        MediaReq = await fetch(
            `https://api.themoviedb.org/3${mediaURL}&page=${page}`
        );
    } else {
        MediaReq = await fetch(`https://api.themoviedb.org/3${mediaURL}`);
    }

    const searchPage = query.querypage || 1;

    if (queryMedia) {
        searchMediaReq = await fetch(
            `https://api.themoviedb.org/3${searchMediaURL}&page=${searchPage}&query=${queryMedia}`
        );
    }

    const MediaRes = await MediaReq.json();
    const mediaData = MediaRes.results;
    const total_pages = MediaRes.total_pages;

    const searchMediaRes = await searchMediaReq?.json();
    const searchMedia = searchMediaRes || null;

    if (!mediaData) {
        return { notFound: true };
    }

    return {
        props: {
            mediaData,
            total_pages,
            type,
            searchMedia,
        },
    };
};
