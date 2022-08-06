import { useEffect, useState, useContext } from "react";
import { NextPage, GetServerSideProps } from "next";

import SpecificPerson from "../../components/people/specificPerson";
import SpecificPersonMediaCastSwiper from "../../components/people/models/specificPersonMediaCastSwiper";
import SpecificPersonMediaCrewSwiper from "../../components/people/models/specificPersonMediaCrewSwiper";

import Footer from "../../components/footer/footer";
import SpinnerContext from "../../context/spinner-context";
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
                    <SpecificPerson personDetails={personDetails} />
                    {!isSSR && (
                        <>
                            {/* Movies */}
                            <SpecificPersonMediaCastSwiper
                                personMedia={personMovieMedia}
                            />
                            <SpecificPersonMediaCrewSwiper
                                personMedia={personMovieMedia}
                            />

                            {/* Tv */}
                            <SpecificPersonMediaCastSwiper
                                personMedia={personTvMedia}
                            />
                            <SpecificPersonMediaCrewSwiper
                                personMedia={personTvMedia}
                            />
                        </>
                    )}
                    {showMedia ? <></> : <Footer total_pages={1} />}
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
