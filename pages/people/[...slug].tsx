import { NextPage, GetServerSideProps } from "next";
import { useContext } from "react";

import SpecificPerson from "../../components/people/specificPerson";
import SpecificPersonMovieCastSwiper from "../../components/people/models/specificPersonMovieCastSwiper";
import SpecificPersonMovieCrewSwiper from "../../components/people/models/specificPersonMovieCrewSwiper";
import SpecificPersonTvCastSwiper from "../../components/people/models/specificPersonTvCastSwiper";
import SpecificPersonTvCrewSwiper from "../../components/people/models/specificPersonTvCrewSwiper";

import Footer from "../../components/footer/footer";
import SpinnerContext from "../../context/spinner-context";
import RouterSpinner from "../../components/ui/routerSpinner";

import {
    SpecificPersonDetailsDataIntrerface,
    SpecificPersonMovieMediaDataIntrerface,
    SpecificPersonTvMediaDataIntrerface,
} from "../../models/people-interfaces";

import { requestPersonIdPage } from "../../libs/requests";

const SelectedActor = (
    props: SpecificPersonDetailsDataIntrerface &
        SpecificPersonMovieMediaDataIntrerface &
        SpecificPersonTvMediaDataIntrerface
) => {
    const { personDetails, personMovieMedia, personTvMedia } = props;
    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;

    return (
        <div className="bg-[#141516]">
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    <RouterSpinner />
                </div>
            ) : (
                <div>
                    <SpecificPerson personDetails={personDetails} />
                    {/* Movies */}
                    <SpecificPersonMovieCastSwiper
                        personMovieMedia={personMovieMedia}
                    />
                    <SpecificPersonMovieCrewSwiper
                        personMovieMedia={personMovieMedia}
                    />
                    {/* Tv */}
                    <SpecificPersonTvCastSwiper personTvMedia={personTvMedia} />
                    <SpecificPersonTvCrewSwiper personTvMedia={personTvMedia} />
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
