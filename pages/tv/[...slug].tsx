import { useContext } from "react";
import { GetServerSideProps } from "next";

import SpecificMedia from "../../components/media/specificMedia";
import SpecificMediaVideo from "../../components/media/specificMediaVideo";
import SpecificMediaSwiper from "../../components/media/models/specificMediaSwiper";
import Footer from "../../components/footer/footer";
import RouterSpinner from "../../components/ui/routerSpinner";
import SpinnerContext from "../../context/spinner-context";
import { requestMovieIdPage } from "../../libs/requests";

import {
    SpecificMediaDataInterface,
    MediaVedioDataInterface,
    initialVideoDataInterface,
} from "../../models/media-interfaces";

const SelcetedTv = (
    props: SpecificMediaDataInterface &
        MediaVedioDataInterface &
        initialVideoDataInterface
) => {
    const { mediaData, mediaVedioData, initialVideoData } = props;

    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;

    return (
        <div className="bg-[#141516]">
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    {/* <Spinner className="" />  */}
                    <RouterSpinner />
                </div>
            ) : (
                <div>
                    <SpecificMedia mediaData={mediaData} />
                    <SpecificMediaSwiper mediaData={mediaData} />

                    <SpecificMediaVideo
                        mediaVedioData={mediaVedioData}
                        initialVideoData={initialVideoData}
                    />
                    {showMedia ? <></> : <Footer total_pages={1} />}
                </div>
            )}
        </div>
    );
};

export default SelcetedTv;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const mediaVedioData: any[] = [];
    let initialVideoData = {
        name: "",
        key: "",
    };

    const { params, query } = context;
    const { id, type } = query;
    let url = requestMovieIdPage.url;

    const mediaDataReq = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US`
    );
    const mediaData = await mediaDataReq.json();

    const movieVediosReq = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`
    );
    const movieVedios = await movieVediosReq.json();

    if (movieVedios.results) {
        if (movieVedios.results.length > 0) {
            movieVedios.results.forEach((el: any) => {
                if (el) {
                    mediaVedioData.push(el);
                    mediaVedioData.forEach((vedio) => {
                        if (vedio.name === "Official Trailer") {
                            initialVideoData.key = vedio.key;
                            initialVideoData.name = vedio.name;
                            return;
                        } else if (vedio.name.includes("Official Trailer")) {
                            initialVideoData.key = vedio.key;
                            initialVideoData.name = vedio.name;
                            return;
                        } else if (vedio.name.includes("Trailer")) {
                            initialVideoData.key = vedio.key;
                            initialVideoData.name = vedio.name;
                            return;
                        } else if (
                            vedio.name.toLocaleLowerCase().includes("promo")
                        ) {
                            initialVideoData.key = vedio.key;
                            initialVideoData.name = vedio.name;
                            return;
                        } else {
                            initialVideoData.key = vedio.key;
                            initialVideoData.name = vedio.name;
                            return;
                        }
                    });
                }
            });
        }
    }

    return {
        props: {
            mediaData,
            mediaVedioData,
            initialVideoData,
        },
    };
};
