import { useContext, useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import SearchInput from "../../components/search/searchInput";
import SearchMedia from "../../components/search/searchMedia";
import Media from "../../components/media/media";
import MediaPosterHeaader from "../../components/media/mediaPosterHeader";
import Footer from "../../components/footer/footer";
import RouterSpinner from "../../components/ui/routerSpinner";
import SpinnerContext from "../../context/spinner-context";
import ToggleMode from "../../context/darkMode";
import ForbiddenMediaContentContext from "../../context/forbiddenMediaContent-context";
import { requestTvPage, requestSearchPage } from "../../libs/requests";

import { RequestMediaInterface } from "../../models/interfaces";
import { MediaDataInterface } from "../../models/media-interfaces";
import { TotalPagesInterface } from "../../models/interfaces";
import { SearchMediaInterface } from "../../models/search-interfaces";

const isSSR = typeof window === "undefined";

const TvPage = (
    props: MediaDataInterface &
        RequestMediaInterface &
        TotalPagesInterface &
        SearchMediaInterface
): JSX.Element => {
    const [isSSR, setIsSSR] = useState(true);
    const { mediaData, total_pages, searchMedia } = props;
    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;

    const modeCtx = useContext(ToggleMode);
    const { mode } = modeCtx;

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
        <div className={`${mode === "dark" ? "bg-smothDark" : "bg-white"}`}>
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
                                className={`${
                                    mode === "dark"
                                        ? "bg-smothDark"
                                        : "bg-white"
                                }`}
                                searchFor="tv"
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
                            <Media mediaData={mediaDataModified} />
                            {showMedia ? (
                                <></>
                            ) : (
                                <Footer total_pages={total_pages} />
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default TvPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    let mediaURL;
    let MediaReq;
    let pages;

    let searchMediaReq;
    let searchMediaURL;

    const { query } = context;
    const type = query.type || "Popular";
    const page = query.page;
    const queryMedia = query.query;

    requestTvPage.forEach((requestType) => {
        if (requestType.type === type) {
            mediaURL = requestType.url;
            return;
        }
    });

    requestSearchPage.forEach((requestType) => {
        if (requestType.type.toLowerCase() === "tv") {
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
