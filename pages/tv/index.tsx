import { useContext } from "react";
import { GetServerSideProps } from "next";

import Media from "../../components/media/media";
import MediaPosterHeaader from "../../components/header/mediaPosterHeader";
import Footer from "../../components/footer/footer";
import RouterSpinner from "../../components/ui/routerSpinner";
import SpinnerContext from "../../context/spinner-context";
import { requestTvPage } from "../../libs/requests";

import { RequestMediaInterface } from "../../models/interfaces";
import { MediaDataInterface } from "../../models/media-interfaces";

const TvPage = (props: MediaDataInterface & RequestMediaInterface) => {
    const { mediaData, type } = props;

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
                    {showMedia ? <></> : <Footer />}
                </div>
            )}
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
            type,
        },
    };
};

// import { useRouter } from "next/router";
// import { useContext } from "react";
// import { GetServerSideProps } from "next";

// import Media from "../../components/media/media";
// import MediaPosterHeaader from "../../components/header/mediaPosterHeader";
// import Footer from "../../components/footer/footer";
// import RouterSpinner from "../../components/ui/routerSpinner";
// import SpinnerContext from "../../context/spinner-context";
// import { requestTvPage } from "../../libs/requests";

// import { RequestMediaInterface } from "../../models/interfaces";
// import { MediaDataInterface } from "../../models/media-interfaces";

// const TvPage = (props: any) => {
//     const { mediaData: allData } = props;
//     const router = useRouter();
//     const { type } = router.query;
//     // Popular TopRated Airing Today On The Air
//     let mediaData;
//     type === "Popular"
//         ? (mediaData = allData[0])
//         : type === "TopRated"
//         ? (mediaData = allData[1])
//         : type === "Airing Today"
//         ? (mediaData = allData[2])
//         : (mediaData = allData[3]);

//     const spinnerCtx = useContext(SpinnerContext);
//     const { showMedia } = spinnerCtx;

//     return (
//         <div className="bg-[#141516]">
//             {showMedia ? (
//                 <div className="h-screen w-full flex justify-center items-center">
//                     {/* <Spinner className="" /> */}
//                     <RouterSpinner />
//                 </div>
//             ) : (
//                 <div>
//                     <MediaPosterHeaader mediaData={mediaData} />
//                     <Media mediaData={mediaData} />
//                     {showMedia ? <></> : <Footer />}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TvPage;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const { query } = context;
//     const page = query.page;

//     const PopularURL = requestTvPage[0].url;
//     const TopRatedURL = requestTvPage[1].url;
//     const AiringTodayURL = requestTvPage[2].url;
//     const OnTheAirURL = requestTvPage[3].url;

//     //  Popular
//     const PopularReq = await fetch(
//         `https://api.themoviedb.org/3${PopularURL}&page=${page}`
//     );
//     const PopularRes = await PopularReq.json();

//     // TopRated
//     const TopRatedReq = await fetch(
//         `https://api.themoviedb.org/3${TopRatedURL}&page=${page}`
//     );
//     const TopRatedRes = await TopRatedReq.json();

//     // AiringToday
//     const reqAiringTodayReq = await fetch(
//         `https://api.themoviedb.org/3${AiringTodayURL}&page=${page}`
//     );
//     const AiringTodayRes = await reqAiringTodayReq.json();

//     // OnTheAir
//     const OnTheAirReq = await fetch(
//         `https://api.themoviedb.org/3${OnTheAirURL}&page=${page}`
//     );
//     const OnTheAirRes = await OnTheAirReq.json();

//     return {
//         props: {
//             mediaData: [
//                 PopularRes.results,
//                 TopRatedRes.results,
//                 AiringTodayRes.results,
//                 OnTheAirRes.results,
//             ],
//         },
//     };
// };
// // results
