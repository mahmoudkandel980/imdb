import { GetServerSideProps } from "next";

import SpecificMedia from "../../components/models/specificMedia";
import SpecialMediaVideo from "../../components/models/specialMediaVideo";

import data from "../../response/movieId";
import movieVediosData from "../../response/movieVedios";

import { requestMovieIdPage } from "../../libs/requests";
import {
    movieDataInterface,
    movieVedioDataInterface,
} from "../../models/interfaces";

const SelcetedMovie = (props: movieDataInterface & movieVedioDataInterface) => {
    const { movieData, movieVedioData } = props;

    return (
        <div className="bg-[#141516]">
            <SpecificMedia movieData={movieData} />
            <SpecialMediaVideo movieVedioData={movieVedioData} />
        </div>
    );
};

export default SelcetedMovie;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const movieVedioData: any[] = [];
    const { params, query } = context;
    const { id, type } = query;
    let url = requestMovieIdPage.url;

    const movieDataReq = await fetch(
        `https://api.themoviedb.org/3/movie/${id}${url}`
    );
    const movieData = await movieDataReq.json();

    const movieVediosReq = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}&language=en-US`
    );
    const movieVedios = await movieVediosReq.json();

    if (movieVedios.results) {
        if (movieVedios.results.length > 0) {
            movieVedios.results.forEach((el: any) => {
                if (el) {
                    movieVedioData.push(el);
                }
            });
        }
    }

    // const movieData = data;
    // movieVediosData.forEach((el) => {
    //     if (el) {
    //         movieVedioData.push(el);
    //     }
    // });

    return {
        props: {
            movieData,
            movieVedioData,
        },
    };
};
