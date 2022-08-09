import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage, GetServerSideProps } from "next";

import SearchInput from "../../components/search/searchInput";
import RouterSpinner from "../../components/ui/routerSpinner";
import MultiSearch from "../../components/search/multiSearch";
import Footer from "../../components/footer/footer";
import FilterMultiSearchContext from "../../context/filterMultiSearch-context";
import SpinnerContext from "../../context/spinner-context";
import SearchFilter from "../../components/search/selectSearchFilter";
import SelectSearchFilter from "../../components/search/selectType";
import { ForbiddenMultiSearch } from "../../checks/checkForForbiddenContent";

import { requestSearchPage } from "../../libs/requests";
import { SearchMultiInterface } from "../../models/search-interfaces";
import { TotalPagesInterface } from "../../models/interfaces";

const SearchPage = (props: SearchMultiInterface & TotalPagesInterface) => {
    const { multiSearch, total_pages } = props;
    // Ignore +18 searchMediaData
    const [modifiedMultiSearchData, setModifiedMultiSearchData] =
        useState(multiSearch);

    const router = useRouter();
    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;

    const multSearchCtx = useContext(FilterMultiSearchContext);
    const {
        movieSearchWithImage,
        multiSearchWithImage,
        peopleSearchWithImage,
        tvSearchWithImage,
        selectedType,
    } = multSearchCtx;

    const searchType = router.query.searchType;
    const searchT = searchType?.includes("all")
        ? "all"
        : searchType?.includes("movie")
        ? "movie"
        : "tv";

    // check for forbidden Data
    ForbiddenMultiSearch(multiSearch);
    useEffect(() => {
        setModifiedMultiSearchData(multiSearch);
    }, [multiSearch, modifiedMultiSearchData]);

    return (
        <div
            className={`${
                (!router.query.query ||
                    !multiSearch ||
                    multiSearchWithImage.length === 0) &&
                "relative h-screen"
            } bg-smothDark h-screen w-full`}
        >
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    <RouterSpinner />
                </div>
            ) : (
                <div className="pt-32">
                    <SelectSearchFilter />
                    <SearchInput
                        className="bg-smothDark"
                        SearchDataWithImageLength={multiSearchWithImage.length}
                        searchFor={searchT}
                        searchPeople={null}
                        searchMedia={null}
                        multiSearch={modifiedMultiSearchData}
                    />
                    <SearchFilter />
                    <MultiSearch
                        modifiedSearch={
                            selectedType === "movie"
                                ? movieSearchWithImage
                                : selectedType === "tv"
                                ? tvSearchWithImage
                                : selectedType === "people"
                                ? peopleSearchWithImage
                                : multiSearchWithImage
                        }
                        SearchDataWithImageLength={multiSearchWithImage.length}
                    />
                    {showMedia ? (
                        <></>
                    ) : (
                        <div
                            className={`${
                                (!router.query.query ||
                                    !modifiedMultiSearchData ||
                                    multiSearchWithImage.length === 0) &&
                                "absolute w-full bottom-0"
                            }`}
                        >
                            <Footer total_pages={1} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    let searchURL;
    let multiSearchReq;

    let specificSearchReq;
    let specificSearchURL;

    const { query, req } = context;
    // prevLink
    const prevLink = req.headers.referer;

    const querySearch = query.query || null;
    const searchType = query.searchType || null;

    requestSearchPage.forEach((requestType) => {
        if (requestType.type.toLowerCase() === "multi") {
            searchURL = requestType.url;
            return;
        }
    });

    const searchPage = query.querypage || 1;

    if (querySearch && searchType && searchType !== "all") {
        requestSearchPage.forEach((requestType) => {
            if (requestType.type.toLowerCase() === searchType) {
                specificSearchURL = requestType.url;
                return;
            }
        });

        specificSearchReq = await fetch(
            `https://api.themoviedb.org/3${specificSearchURL}&page=${searchPage}&query=${querySearch}`
        );
    }

    if (
        querySearch &&
        searchType !== "people" &&
        searchType !== "movie" &&
        searchType !== "tv"
    ) {
        multiSearchReq = await fetch(
            `https://api.themoviedb.org/3${searchURL}&page=${searchPage}&query=${querySearch}`
        );
    }

    const multiSearchRes = await multiSearchReq?.json();
    const specificSearchRes = await specificSearchReq?.json();

    const multiSearch = multiSearchRes || specificSearchRes;
    const total_pages =
        multiSearchRes?.total_pages || multiSearchRes?.total_pages;

    // if (!multiSearchRes) {
    //     return { notFound: true };
    // }

    return {
        props: {
            multiSearch: multiSearch?.results ? multiSearch : null,
            total_pages: total_pages ? total_pages : null,
        },
    };
};
