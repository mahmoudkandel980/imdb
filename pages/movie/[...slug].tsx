import { GetServerSideProps } from "next";

import SpecificMedia from "../../components/models/specificMedia";
import SpecificMediaVideo from "../../components/models/specificMediaVideo";

import data from "../../response/movieId";
import movieVediosData from "../../response/movieVedios";

import { requestMovieIdPage } from "../../libs/requests";
import {
    MediaVedioDataInterface,
    initialVideoDataInterface,
} from "../../models/media-interfaces";
import { SpecificMediaDataInterface } from "../../models/media-interfaces";

const SelcetedMovie = (
    props: SpecificMediaDataInterface &
        MediaVedioDataInterface &
        initialVideoDataInterface
) => {
    const { mediaData, mediaVedioData, initialVideoData } = props;

    return (
        <div className="bg-[#141516]">
            <SpecificMedia mediaData={mediaData} />
            <SpecificMediaVideo
                mediaVedioData={mediaVedioData}
                initialVideoData={initialVideoData}
            />
        </div>
    );
};

export default SelcetedMovie;

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
        `https://api.themoviedb.org/3/movie/${id}${url}`
    );
    const mediaData = await mediaDataReq.json();

    const movieVediosReq = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`
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

    // specificMedia Key & name

    // const mediaData = data;
    // movieVediosData.forEach((el) => {
    //     if (el) {
    //         mediaVedioData.push(el);
    //     }
    // });

    return {
        props: {
            mediaData,
            mediaVedioData,
            initialVideoData,
        },
    };
};
