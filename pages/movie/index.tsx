import { GetServerSideProps } from "next";

import Media from "../../components/media/media";
import MediaPosterHeaader from "../../components/header/mediaPosterHeader";

import { RequestMediaInterface } from "../../models/interfaces";
import { MediaDataInterface } from "../../models/media-interfaces";

import { requestMoviePage } from "../../libs/requests";

const MoviesPage = (props: MediaDataInterface & RequestMediaInterface) => {
    const { mediaData, type } = props;

    return (
        <div>
            <MediaPosterHeaader mediaData={mediaData} />
            <Media mediaData={mediaData} />
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
    const mediaData = res.results;

    // const mediaData = data;

    return {
        props: {
            mediaData,
            type,
        },
    };
};
