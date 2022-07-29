import { GetServerSideProps } from "next";

import {
    moviesDataInterface,
    RequestMediaInterface,
} from "../../models/interfaces";

import data from "../../response/movies";

import { requestMoviePage } from "../../libs/requests";

import Media from "../../components/media/media";

const MoviesPage = (props: moviesDataInterface & RequestMediaInterface) => {
    const { moviesData, type } = props;
    // console.log(moviesData);

    return (
        <div>
            <Media moviesData={moviesData} />
        </div>
    );
};

export default MoviesPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    let url;
    let pages;
    let req;

    const { query } = context;
    const type = query.type || "Trending";
    const page = query.page;

    requestMoviePage.forEach((requestType) => {
        if (requestType.type == type) {
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
    const moviesData = res.results;

    // const moviesData = data;

    return {
        props: {
            moviesData,
            type,
        },
    };
};
