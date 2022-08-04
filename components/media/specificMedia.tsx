import { useContext } from "react";
import Image from "next/image";

import MovieContext from "../../context/movieData-context";
import SpecificMediaPoster from "./models/specificMediaPoster";

import { AiFillStar, AiFillLike } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import { BsEyeFill } from "react-icons/bs";

import { SpecificMediaDataInterface } from "../../models/media-interfaces";

const srcStartWith = "https://image.tmdb.org/t/p/original/";

const SpecificMedia = (props: SpecificMediaDataInterface): JSX.Element => {
    const movieCtx = useContext(MovieContext);
    const contextMovieData = movieCtx.movieData;
    let {
        backdrop_path,
        original_title,
        poster_path,
        release_date,
        runtime,
        title,
        vote_average,
        vote_count,
        first_air_date,
    } = props.mediaData;

    runtime = runtime ? runtime : 0;

    backdrop_path = backdrop_path
        ? backdrop_path
        : contextMovieData.backdrop_path;

    poster_path = poster_path ? poster_path : contextMovieData.poster_path;

    release_date = release_date
        ? release_date
        : first_air_date
        ? first_air_date
        : contextMovieData.release_date || contextMovieData.first_air_date;

    vote_count = vote_count ? vote_count : contextMovieData.vote_count;
    vote_average = vote_average ? vote_average : contextMovieData.vote_average;

    return (
        <div className="bg-[#212529]">
            <div className="w-full h-screen  relative  mx-auto shadow-xl overflow-hidden">
                <div className="hidden md:block  relative w-full h-screen">
                    <Image
                        src={`${srcStartWith}${backdrop_path || poster_path}`}
                        alt={title || original_title}
                        layout="fill"
                        className="absolute text-center object-fill sm:object-cover opacity-95  bg-center bg-no-repeat"
                        priority
                    />
                </div>
                <div className="relative w-full h-screen  md:hidden">
                    <Image
                        src={`${srcStartWith}${poster_path || backdrop_path}`}
                        alt={title || original_title}
                        layout="fill"
                        className="static text-center object-fill sm:object-cover opacity-95  bg-center bg-no-repeat"
                        priority
                    />
                </div>
                {/* small screens */}
                <div className="block md:hidden">
                    {/* votes and date */}
                    <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 absolute left-0 bottom-0 text-gray-200 w-full0">
                        {/* like */}
                        <div className="group flex items-center justify-center space-x-1 z-10">
                            <AiFillLike className="flicker-black h-7 w-7 text-gray-300 bg-[#212529] p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                            <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                <span className="flicker-black font-mono font-medium bg-[#212529] p-4 py-0.5 rounded-md bg-opacity-95">
                                    {vote_count}
                                </span>
                            </div>
                        </div>
                        {/* rate */}
                        <div className="group flex items-center justify-center space-x-1 z-10">
                            <AiFillStar className="flicker-black h-7 w-7 text-gray-300 bg-[#212529] p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                            <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                {vote_average ? (
                                    <span className="flicker-black font-mono font-medium bg-[#212529] p-4 py-0.5 rounded-md bg-opacity-95">
                                        {vote_average.toFixed(1)}
                                    </span>
                                ) : (
                                    <span className="flicker-black font-mono font-medium bg-[#212529] p-4 py-0.5 rounded-md bg-opacity-95">
                                        0
                                    </span>
                                )}
                            </div>
                        </div>
                        {/* runtime */}
                        <div className="group flex items-center justify-center space-x-1 z-10">
                            <BsEyeFill className="flicker-black h-7 w-7 text-gray-300 bg-[#212529] p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                            <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                <span className="flicker-black font-mono font-medium bg-[#212529] p-4 py-0.5 rounded-md bg-opacity-95">
                                    {runtime || 0}
                                </span>
                            </div>
                        </div>
                        {/* date */}
                        <div
                            className={`${
                                !release_date && "hidden"
                            } group flex items-center justify-center space-x-1 z-10`}
                        >
                            <GoCalendar className="flicker-black h-7 w-7 text-gray-300 bg-[#212529] p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                            <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                <span className="flicker-black font-mono font-medium bg-[#212529] p-4 py-0.5 rounded-md bg-opacity-95">
                                    {release_date}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*overlay*/}
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#212529]/30 to-[#212529]/90 "></div>
                <SpecificMediaPoster mediaData={props.mediaData} />
            </div>
        </div>
    );
};

export default SpecificMedia;
