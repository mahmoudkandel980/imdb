import { GetServerSideProps } from "next";

import {
    moviesDataInterface,
    RequestMediaInterface,
} from "../../models/interfaces";

import data from "../../response/movies";

import { requestMoviePage } from "../../libs/requests";

import Media from "../../components/media/media";

const TvPage = (props: moviesDataInterface & RequestMediaInterface) => {
    const { moviesData, type } = props;
    // console.log(type);

    // console.log(moviesData);
    console.log(moviesData);

    return (
        <div>
            <Media moviesData={moviesData} />
        </div>
    );
};

export default TvPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const type = query.type || "TopRated";
    let url;

    requestMoviePage.forEach((requestType) => {
        if (requestType.type == type) {
            url = requestType.url;
            return;
        }
    });

    console.log(type);

    // const req = await fetch(`https://api.themoviedb.org/3${url}`);

    // const res = await req.json();

    return {
        props: {
            // moviesData: res.results,
            moviesData: data,
            type,
        },
    };
};
