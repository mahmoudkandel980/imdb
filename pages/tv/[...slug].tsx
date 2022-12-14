import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import SpecificMedia from "../../components/media/specificMedia";
import SpecifcPeopleMedia from "../../components/media/models/specifcPeopleMedia";
import SpecificMediaVideo from "../../components/media/specificMediaVideo";
import SpecificMediaSwiper from "../../components/media/models/specificMediaSwiper";
import Footer from "../../components/footer/footer";
import MovieTvVedio from "../../components/media/movieTvVedio";
import RouterSpinner from "../../components/ui/routerSpinner";
import SpinnerContext from "../../context/spinner-context";
import ToggleMode from "../../context/darkMode";
import {
    requestMovieIdPage,
    requestMediaPeoplePage,
} from "../../libs/requests";

import {
    SpecificMediaDataInterface,
    MediaVedioDataInterface,
    initialVideoDataInterface,
} from "../../models/media-interfaces";
import { MediaPeopleInterface } from "../../models/people-interfaces";

const isSSR = typeof window === "undefined";

const SelcetedTv = (
    props: SpecificMediaDataInterface &
        MediaVedioDataInterface &
        initialVideoDataInterface &
        MediaPeopleInterface
): JSX.Element => {
    const { mediaData, mediaVedioData, initialVideoData, mediaPeople } = props;

    const [isSSR, setIsSSR] = useState(true);
    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;
    const router = useRouter();

    const modeCtx = useContext(ToggleMode);
    const { mode } = modeCtx;

    useEffect(() => {
        setIsSSR(false);
    }, []);

    if (mediaData.overview.toLocaleLowerCase().includes("sex")) {
        router.push(`/`);
    }

    return (
        <div className={`${mode === "dark" ? "bg-smothDark" : "bg-white"}`}>
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    {/* <Spinner className="" />  */}
                    <RouterSpinner />
                </div>
            ) : (
                <div>
                    <SpecificMedia mediaData={mediaData} />
                    {!isSSR && (
                        <>
                            <SpecificMediaSwiper mediaData={mediaData} />
                            <SpecifcPeopleMedia mediaPeople={mediaPeople} />
                            <SpecificMediaVideo
                                mediaVedioData={mediaVedioData}
                                initialVideoData={initialVideoData}
                            />
                            <MovieTvVedio />
                            {showMedia ? <></> : <Footer total_pages={1} />}
                        </>
                    )}
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

    const mediaPeopleReq = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/credits${requestMediaPeoplePage.url}`
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
