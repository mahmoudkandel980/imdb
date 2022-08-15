import { useContext } from "react";
import { useRouter } from "next/router.js";
import Image from "next/image";

import SpinnerContext from "../../../context/spinner-context";
import MovieContext from "../../../context/movieData-context";
import ToggleMode from "../../../context/darkMode";

import { BiPlayCircle } from "react-icons/bi";
import { AiFillStar, AiFillLike } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";

const srcStartWith = "https://image.tmdb.org/t/p/original/";

import { MediaSwiperInterface } from "../../../models/home-interfaces";
interface DataType {
    type: string;
}

const SwiperMeidaContent = (
    props: MediaSwiperInterface & DataType
): JSX.Element => {
    const { media, type } = props;

    const router = useRouter();
    const movieCtx = useContext(MovieContext);
    const spinnerCtx = useContext(SpinnerContext);
    const modeCtx = useContext(ToggleMode);

    const { getMovieData } = movieCtx;
    const { showSpinnerHandler } = spinnerCtx;
    const { mode } = modeCtx;

    const onClickHandler = (
        title: string,
        originalTile: string,
        id: string,
        mediahasVideo: boolean,
        media: any,
        media_type: string
    ) => {
        if (media_type === "movies") {
            router.push(`/movie/${title || originalTile}?id=${id}`);
        } else if (media_type === "tv") {
            router.push(`/tv/${title || originalTile}?id=${id}`);
        }

        showSpinnerHandler(true);
        getMovieData(media);
    };
    return (
        <div className="flex flex-col justify-start">
            <div className="h-60 w-52 group flex flex-col justify-center rounded-lg overflow-hidden mx-auto relative hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 duration-200">
                <div>
                    <Image
                        src={`${srcStartWith}${
                            media.backdrop_path || media.poster_path
                        }`}
                        alt={
                            media.title ||
                            media.original_title ||
                            media.name ||
                            media.original_name
                        }
                        width={234}
                        height={300}
                        layout="responsive"
                        className="absolute text-center object-cover"
                        priority
                    />
                </div>
                <div className="absolute w-full h-full bg-gradient-to-b from-darkGray/0 to-darkGray/70"></div>

                {/* coming soon */}
                {media.vote_average === 0 ? (
                    <div>
                        <div className="flex justify-center items-center absolute bg-darkGray opacity-80 w-full h-full">
                            <p className="capitalize text-4xl text-white">
                                coming soon
                            </p>
                        </div>
                        <div className="vedio-icon--parent group">
                            <BsEye
                                onClick={() => {
                                    onClickHandler(
                                        media.title || media.name,
                                        media.original_title ||
                                            media.original_name,
                                        media.id,
                                        media.vote_average === 0 ? false : true,
                                        media,
                                        type
                                    );
                                }}
                                className="vedio-icon"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="vedio-icon--parent group">
                        <BiPlayCircle
                            onClick={() => {
                                onClickHandler(
                                    media.title || media.name,
                                    media.original_title || media.original_name,
                                    media.id,
                                    media.vote_average === 0 ? false : true,
                                    media,
                                    type
                                );
                            }}
                            className="vedio-icon"
                        />
                    </div>
                )}

                {/* rate */}
                {media.vote_average > 0 && (
                    <div className="flicker flex items-center justify-center space-x-1 z-10 text-yellow-400 absolute top-4 -left-12 w-36 h-7 -rotate-45 bg-darkRed">
                        <AiFillStar className="h-5 w-5 " />
                        <span>{media.vote_average.toFixed(1)}</span>
                    </div>
                )}

                {/* language */}
                <div className="flicker absolute top-3 z-10 select-none right-3  bg-darkRed text-white p-1 px-1.5 rounded-full">
                    <span>{media.original_language.toLocaleUpperCase()}</span>
                </div>

                {/* media type */}
                <div className="flex justify-center items-center flicker absolute bottom-3 z-10 select-none right-3 flicker-black bg-smothDark text-white w-8 p-1 px-1.5 rounded-full">
                    <span className="capitalize">
                        {type === "tv" ? "tv" : "mo"}
                    </span>
                </div>

                {/* Rating */}
                <div className="flicker flex items-center justify-center space-x-1 z-10 text-yellow-400 absolute top-4 -left-12 w-36 h-7 -rotate-45 bg-darkRed">
                    <AiFillStar className="h-5 w-5 " />
                    {media.vote_average ? (
                        <span>{media.vote_average.toFixed(1)}</span>
                    ) : (
                        <span>0</span>
                    )}
                </div>

                <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 left-1 sm:-left-4 absolute bottom-0.5 sm:-bottom-0.5 sm:scale-[0.85] text-gray-200 w-full">
                    {/* like */}
                    <div className="group flex items-center justify-center space-x-1 z-10">
                        <AiFillLike className="flicker-white h-6 w-6 sm:h-7 sm:w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                        <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                            <span className=" font-mono font-medium">
                                {media.vote_count}
                            </span>
                        </div>
                    </div>
                    {/* date */}
                    <div
                        className={`${
                            !media.first_air_date &&
                            !media.release_date &&
                            "hidden"
                        } group flex items-center justify-center space-x-1 z-10`}
                    >
                        <GoCalendar className="flicker-white h-6 w-6 sm:h-7 sm:w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                        <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                            <span className="font-mono font-medium">
                                {media.release_date || media.first_air_date}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-center sm:self-start">
                <h3
                    className={`${
                        mode === "dark" ? "text-gray-200" : "text-smothDark"
                    } mt-1 sm:mt-3 `}
                >
                    {media.title ||
                        media.original_title ||
                        media.name ||
                        media.original_name}
                </h3>
            </div>
        </div>
    );
};

export default SwiperMeidaContent;
