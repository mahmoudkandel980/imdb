import { useContext } from "react";
import { NextPage } from "next";
import { GetServerSideProps } from "next";

import PeoplePosterHeader from "../../components/people/PeoplePosterHeader";
import RouterSpinner from "../../components/ui/routerSpinner";
import Footer from "../../components/footer/footer";
import SpinnerContext from "../../context/spinner-context";
import People from "../../components/people/people";
import { requestPeoplePage } from "../../libs/requests";

import { TotalPagesInterface } from "../../models/interfaces";
import { PeopleDataInterface } from "../../models/people-interfaces";

const PeoplePage = (props: PeopleDataInterface & TotalPagesInterface) => {
    const { peopleData, total_pages } = props;
    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;

    return (
        <div className="bg-[#141516]">
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    <RouterSpinner />
                </div>
            ) : (
                <div>
                    <PeoplePosterHeader peopleData={peopleData} />
                    <People peopleData={peopleData} />
                    {showMedia ? <></> : <Footer total_pages={total_pages} />}
                </div>
            )}
        </div>
    );
};

export default PeoplePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    let url;
    let pages;
    let req;
    const { query } = context;
    const type = query.type || "Popular";
    const page = query.page;

    requestPeoplePage.forEach((requestType) => {
        if (requestType.type === type) {
            url = requestType.url;
            pages = requestType.pages;
            return;
        }
    });

    if (pages !== "one page") {
        req = await fetch(`https://api.themoviedb.org/3${url}&page=${page}`);
    } else {
        req = await fetch(`https://api.themoviedb.org/3${url}`);
    }

    const res = await req.json();

    const peopleData = res.results;
    const total_pages = res.total_pages;

    return {
        props: {
            peopleData,
            total_pages,
        },
    };
};
