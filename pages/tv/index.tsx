import { useContext, useEffect } from "react";
import { GetServerSideProps } from "next";

import SearchInput from "../../components/search/searchInput";
import SearchMedia from "../../components/search/searchMedia";
import Media from "../../components/media/media";
import MediaPosterHeaader from "../../components/media/mediaPosterHeader";
import Footer from "../../components/footer/footer";
import RouterSpinner from "../../components/ui/routerSpinner";
import SpinnerContext from "../../context/spinner-context";
import ForbiddenMediaContentContext from "../../context/forbiddenMediaContent-context";
import { requestTvPage, requestSearchPage } from "../../libs/requests";

import { RequestMediaInterface } from "../../models/interfaces";
import { MediaDataInterface } from "../../models/media-interfaces";
import { TotalPagesInterface } from "../../models/interfaces";
import { SearchMediaInterface } from "../../models/search-interfaces";

const TvPage = (
    props: MediaDataInterface &
        RequestMediaInterface &
        TotalPagesInterface &
        SearchMediaInterface
) => {
    const { mediaData, total_pages, searchMedia } = props;
    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;

    const mediaDataCtx = useContext(ForbiddenMediaContentContext);
    const {
        mediaData: mediaDataModified,
        searchMedia: searchMediaModified,
        filterForbiddenContentMediaDataFun,
        filterForbiddenContentSearchMediaFun,
    } = mediaDataCtx;

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
                    <MediaPosterHeaader mediaData={mediaDataModified} />
                    <SearchInput
                        className="bg-darkGray"
                        searchFor="tv"
                        SearchDataWithImageLength={searchMediaModified.length}
                        searchMedia={searchMediaModified}
                        searchPeople={null}
                        modifiedMultiSearch={null}
                        searchPage={searchMedia?.page || 0}
                        searchTotal_pages={searchMedia?.total_pages || 0}
                    />
                    <SearchMedia searchMedia={searchMediaModified} />
                    <Media mediaData={mediaDataModified} />
                    {showMedia ? <></> : <Footer total_pages={total_pages} />}
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
