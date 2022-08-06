import { useContext } from "react";
import { GetServerSideProps } from "next";

import SearchInput from "../../components/search/searchInput";
import Media from "../../components/media/media";
import MediaPosterHeaader from "../../components/media/mediaPosterHeader";
import Footer from "../../components/footer/footer";
import SearchMedia from "../../components/search/searchMedia";

import RouterSpinner from "../../components/ui/routerSpinner";
import SpinnerContext from "../../context/spinner-context";
import { requestMoviePage, requestSearchPage } from "../../libs/requests";

import {
    RequestMediaInterface,
    TotalPagesInterface,
} from "../../models/interfaces";
import { MediaDataInterface } from "../../models/media-interfaces";
import { SearchMediaInterface } from "../../models/search-interfaces";

const MoviesPage = (
    props: RequestMediaInterface &
        TotalPagesInterface &
        MediaDataInterface &
        SearchMediaInterface
) => {
    const { mediaData, type, total_pages, searchMedia } = props;

    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;

    return (
        <div className="bg-smothDark">
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    {/* <Spinner className="" /> */}
                    <RouterSpinner />
                </div>
            ) : (
                <div>
                    <MediaPosterHeaader mediaData={mediaData} />
                    <SearchInput
                        searchFor="movies"
                        searchMedia={searchMedia}
                        searchPeople={null}
                    />
                    <SearchMedia searchMedia={searchMedia} />
                    <Media mediaData={mediaData} />
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
    let searchPages;

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
            // searchPages = requestType.pages;
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
