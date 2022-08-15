import { useEffect, useState, useContext } from "react";
import { NextPage, GetServerSideProps } from "next";

import SpecificPerson from "../../components/people/specificPerson";
import SpecificPersonMediaCastSwiper from "../../components/people/models/specificPersonMediaCastSwiper";
import SpecificPersonMediaCrewSwiper from "../../components/people/models/specificPersonMediaCrewSwiper";

import Footer from "../../components/footer/footer";
import SpinnerContext from "../../context/spinner-context";
import ToggleMode from "../../context/darkMode";
import ForbiddenMediaContentContext from "../../context/forbiddenMediaContent-context";

import RouterSpinner from "../../components/ui/routerSpinner";

import {
    SpecificPersonDetailsDataIntrerface,
    SpecificPersonMovieMediaDataIntrerface,
    SpecificPersonTvMediaDataIntrerface,
} from "../../models/people-interfaces";

import { requestPersonIdPage } from "../../libs/requests";

const isSSR = typeof window === "undefined";

const SelectedActor = (
    props: SpecificPersonDetailsDataIntrerface &
        SpecificPersonMovieMediaDataIntrerface &
        SpecificPersonTvMediaDataIntrerface
) => {
    const { personDetails, personMovieMedia, personTvMedia } = props;

    const [isSSR, setIsSSR] = useState(true);
    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;

    const modeCtx = useContext(ToggleMode);
    const { mode } = modeCtx;

    const mediaDataCtx = useContext(ForbiddenMediaContentContext);
    const {
        // filter person CREW Media
        personMoviesCrew,
        personTvCrew,
        filterForbiddenPersonMoviesCrewFun,
        filterForbiddenPersonTvCrewFun,

        // filter person CAST Media
        personMoviesCast,
        personTvCast,
        filterForbiddenPersonMoviesCastFun,
        filterForbiddenPersonTvCastFun,
    } = mediaDataCtx;

    useEffect(() => {
        filterForbiddenPersonMoviesCastFun(personMovieMedia.cast);
        filterForbiddenPersonTvCastFun(personTvMedia.cast);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [personMovieMedia, personTvMedia]);

    useEffect(() => {
        filterForbiddenPersonMoviesCrewFun(personMovieMedia.crew);
        filterForbiddenPersonTvCrewFun(personTvMedia.crew);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [personMovieMedia, personTvMedia]);

    useEffect(() => {
        setIsSSR(false);
    }, []);

    // if (personDetails.place_of_birth.toLocaleLowerCase().includes("france"))
    return (
        <div className={`${mode === "dark" ? "bg-smothDark" : "bg-white"}`}>
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    <RouterSpinner />
                </div>
            ) : (
                <div>
                    <SpecificPerson personDetails={personDetails} />
                    {!isSSR && (
                        <>
                            {/* Movies */}
                            <SpecificPersonMediaCastSwiper
                                personMedia={personMoviesCast}
                            />
                            {/* <SpecificPersonMediaCrewSwiper
                                personMedia={personMoviesCrew}
                            /> */}

                            {/* Tv */}
                            <SpecificPersonMediaCastSwiper
                                personMedia={personTvCast}
                            />
                            {/* <SpecificPersonMediaCrewSwiper
                                personMedia={personTvCrew}
                            /> */}
                            {showMedia ? <></> : <Footer total_pages={1} />}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default SelectedActor;

export const getServerSideProps: GetServerSideProps = async (context) => {
    let url = requestPersonIdPage.url;
    const { query } = context;
    const { id } = query;

    // person media
    const personMediaReq = await fetch(
        `https://api.themoviedb.org/3/person/${id}/movie_credits${url}`
    );
    const personMediaRes = await personMediaReq.json();

    // person tvMedia
    const personTvMediaReq = await fetch(
        `https://api.themoviedb.org/3/person/${id}/tv_credits${url}`
    );
    const personTvMediaRes = await personTvMediaReq.json();

    // person details
    const personDetailsReq = await fetch(
        `https://api.themoviedb.org/3/person/${id}${url}`
    );
    const personDetailsRes = await personDetailsReq.json();

    const personMovieMedia = personMediaRes;
    const personTvMedia = personTvMediaRes;
    const personDetails = personDetailsRes;

    return {
        props: {
            personMovieMedia,
            personTvMedia,
            personDetails,
        },
    };
};
