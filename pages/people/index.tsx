import { useContext } from "react";
import { NextPage } from "next";
import { GetServerSideProps } from "next";

import SearchInput from "../../components/search/searchInput";
import SearchPeople from "../../components/search/searchPeople";
import PeoplePosterHeader from "../../components/people/PeoplePosterHeader";
import RouterSpinner from "../../components/ui/routerSpinner";
import Footer from "../../components/footer/footer";
import SpinnerContext from "../../context/spinner-context";
import People from "../../components/people/people";
import { requestPeoplePage, requestSearchPage } from "../../libs/requests";

import { TotalPagesInterface } from "../../models/interfaces";
import { PeopleDataInterface } from "../../models/people-interfaces";
import { SearchPeopleInterface } from "../../models/search-interfaces";

const PeoplePage = (
    props: TotalPagesInterface & PeopleDataInterface & SearchPeopleInterface
) => {
    const { peopleData, total_pages, searchPeople } = props;
    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;

    return (
        <div className="bg-smothDark">
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    <RouterSpinner />
                </div>
            ) : (
                <div>
                    <PeoplePosterHeader peopleData={peopleData} />
                    <SearchInput
                        searchFor="actors"
                        searchPeople={searchPeople}
                        searchMedia={null}
                    />
                    <SearchPeople searchPeople={searchPeople} />
                    <People peopleData={peopleData} />
                    {showMedia ? <></> : <Footer total_pages={total_pages} />}
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
    let searchPages;

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
            // searchPages = requestType.pages;
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
