import { useEffect, useState } from "react";
import { useContext } from "react";
import { GetServerSideProps } from "next";

import SpecificMedia from "../../components/media/specificMedia";
import SpecifcPeopleMedia from "../../components/media/models/specifcPeopleMedia";
import SpecificMediaVideo from "../../components/media/specificMediaVideo";
import Footer from "../../components/footer/footer";
import RouterSpinner from "../../components/ui/routerSpinner";
import SpinnerContext from "../../context/spinner-context";
import {
    requestMovieIdPage,
    requestMediaPeoplePage,
} from "../../libs/requests";

import {
    MediaVedioDataInterface,
    initialVideoDataInterface,
} from "../../models/media-interfaces";
import { SpecificMediaDataInterface } from "../../models/media-interfaces";
import { MediaPeopleInterface } from "../../models/people-interfaces";

const isSSR = typeof window === "undefined";

const SelcetedMovie = (
    props: MediaVedioDataInterface &
        initialVideoDataInterface &
        SpecificMediaDataInterface &
        MediaPeopleInterface
) => {
    const [isSSR, setIsSSR] = useState(true);

    const { mediaData, mediaVedioData, initialVideoData, mediaPeople } = props;
    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;

    useEffect(() => {
        setIsSSR(false);
    }, []);

    return (
        <div className="bg-smothDark">
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    <RouterSpinner />
                </div>
            ) : (
                <div>
                    <SpecificMedia mediaData={mediaData} />
                    {!isSSR && (
                        <>
                            <SpecifcPeopleMedia mediaPeople={mediaPeople} />
                            <SpecificMediaVideo
                                mediaVedioData={mediaVedioData}
                                initialVideoData={initialVideoData}
                            />
                        </>
                    )}
                    {showMedia ? <></> : <Footer total_pages={1} />}
                </div>
            )}
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

    const mediaPeopleReq = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits${requestMediaPeoplePage.url}`
    );
    const mediaPeopleRes = await mediaPeopleReq.json();
    const mediaPeople = mediaPeopleRes.cast;

    return {
        props: {
            mediaData,
            mediaVedioData,
            initialVideoData,
            mediaPeople,
        },
    };
};
