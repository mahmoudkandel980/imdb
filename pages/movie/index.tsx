import { useContext } from "react";
import { GetServerSideProps } from "next";

import Media from "../../components/media/media";
import MediaPosterHeaader from "../../components/media/mediaPosterHeader";
import Footer from "../../components/footer/footer";
import RouterSpinner from "../../components/ui/routerSpinner";
import SpinnerContext from "../../context/spinner-context";
import { requestMoviePage } from "../../libs/requests";

import { RequestMediaInterface } from "../../models/interfaces";
import { MediaDataInterface } from "../../models/media-interfaces";
import { TotalPagesInterface } from "../../models/interfaces";

const MoviesPage = (
    props: RequestMediaInterface & MediaDataInterface & TotalPagesInterface
) => {
    const { mediaData, type, total_pages } = props;
    console.log(total_pages);

    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;

    return (
        <div className="bg-[#141516]">
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    {/* <Spinner className="" /> */}
                    <RouterSpinner />
                </div>
            ) : (
                <div>
                    <MediaPosterHeaader mediaData={mediaData} />
                    <Media mediaData={mediaData} />
                    {showMedia ? <></> : <Footer total_pages={total_pages} />}
                </div>
            )}
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
    const total_pages = res.total_pages;

    return {
        props: {
            mediaData,
            total_pages,
            type,
        },
    };
};
