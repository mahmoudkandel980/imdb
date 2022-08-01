import { GetServerSideProps } from "next";

import Media from "../../components/media/media";
import MediaPosterHeaader from "../../components/header/mediaPosterHeader";

import { requestTvPage } from "../../libs/requests";

import { RequestMediaInterface } from "../../models/interfaces";
import { MediaDataInterface } from "../../models/media-interfaces";

const TvPage = (props: MediaDataInterface & RequestMediaInterface) => {
    const { mediaData, type } = props;

    return (
        <div>
            <MediaPosterHeaader mediaData={mediaData} />

            <Media mediaData={mediaData} />
        </div>
    );
};

export default TvPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    let url;
    let pages;
    let req;
    const { query } = context;
    const type = query.type || "Popular";
    const page = query.page;

    requestTvPage.forEach((requestType) => {
        if (requestType.type === type) {
            url = requestType.url;
            return;
        }
    });

    if (pages !== "one page") {
        req = await fetch(`https://api.themoviedb.org/3${url}&page=${page}`);
    } else {
        req = await fetch(`https://api.themoviedb.org/3${url}`);
    }

    const res = await req.json();

    return {
        props: {
            mediaData: res.results,
            // mediaData: data,
            type,
        },
    };
};
