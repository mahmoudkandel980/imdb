import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";

import SearchInput from "../../components/search/searchInput";
import SearchPeople from "../../components/search/searchPeople";
import PeoplePosterHeader from "../../components/people/PeoplePosterHeader";
import RouterSpinner from "../../components/ui/routerSpinner";
import Footer from "../../components/footer/footer";
import SpinnerContext from "../../context/spinner-context";
import ToggleMode from "../../context/darkMode";
import People from "../../components/people/people";
import { requestPeoplePage, requestSearchPage } from "../../libs/requests";

import { TotalPagesInterface } from "../../models/interfaces";
import { PeopleDataInterface } from "../../models/people-interfaces";
import { SearchPeopleInterface } from "../../models/search-interfaces";

const isSSR = typeof window === "undefined";
const PeoplePage = (
    props: TotalPagesInterface & PeopleDataInterface & SearchPeopleInterface
) => {
    const [dataSearchWithImage, setDataSearchWithImage] = useState<any[]>([]);

    const router = useRouter();
    const { peopleData, total_pages, searchPeople } = props;
    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;
    const [isSSR, setIsSSR] = useState(true);

    const modeCtx = useContext(ToggleMode);
    const { mode } = modeCtx;

    useEffect(() => {
        setIsSSR(false);
    }, []);

    useEffect(() => {
        setDataSearchWithImage([]);
        searchPeople?.results.forEach((searchData) => {
            if (searchData.profile_path) {
                setDataSearchWithImage((prevState) =>
                    prevState?.concat(searchData)
                );
            }
        });
    }, [searchPeople, router.query.searchType, router.query.query]);
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
                            <PeoplePosterHeader peopleData={peopleData} />
                            <SearchInput
                                className={`${
                                    mode === "dark"
                                        ? "bg-smothDark"
                                        : "bg-white"
                                }`}
                                searchFor="actors"
                                SearchDataWithImageLength={
                                    dataSearchWithImage.length
                                }
                                searchPeople={searchPeople}
                                searchMedia={null}
                                modifiedMultiSearch={null}
                                searchPage={searchPeople?.page || 0}
                                searchTotal_pages={
                                    searchPeople?.total_pages || 0
                                }
                            />
                            <SearchPeople searchPeople={searchPeople} />
                            <People peopleData={peopleData} />
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

export default PeoplePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    let PeopleURL;
    let peopleReq;
    let pages;

    let searchPeopleReq;
    let searchPeopleURL;

    const { query } = context;
    const type = query.type || "Popular";
    const page = query.page;
    const queryPeople = query.query;

    requestPeoplePage.forEach((requestType) => {
        if (requestType.type === type) {
            PeopleURL = requestType.url;
            pages = requestType.pages;
            return;
        }
    });

    requestSearchPage.forEach((requestType) => {
        if (requestType.type.toLowerCase() === "people") {
            searchPeopleURL = requestType.url;
            return;
        }
    });

    if (pages !== "one page") {
        peopleReq = await fetch(
            `https://api.themoviedb.org/3${PeopleURL}&page=${page}`
        );
    } else {
        peopleReq = await fetch(`https://api.themoviedb.org/3${PeopleURL}`);
    }

    const searchPage = query.querypage || 1;

    if (queryPeople) {
        searchPeopleReq = await fetch(
            `https://api.themoviedb.org/3${searchPeopleURL}&page=${searchPage}&query=${queryPeople}`
        );
    }

    const peopleRes = await peopleReq.json();
    const peopleData = peopleRes.results;
    const total_pages = peopleRes.total_pages;

    const searchPeopleRes = await searchPeopleReq?.json();
    const searchPeople = searchPeopleRes || null;

    if (!peopleData) {
        return { notFound: true };
    }

    return {
        props: {
            peopleData,
            total_pages,
            searchPeople,
        },
    };
};
