import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

import SpinnerContext from "../../context/spinner-context";
import MovieContext from "../../context/movieData-context";
import ToggleMode from "../../context/darkMode";
import { BiPlayCircle } from "react-icons/bi";
import { AiFillStar, AiFillLike } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";

import { SearchMediaInterface } from "../../models/search-interfaces";
import { ModifiedSearchMediaData } from "../../models/search-interfaces";

const srcStartWith = "https://image.tmdb.org/t/p/original/";

// swiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Autoplay]);

//
declare module "framer-motion" {
    export interface AnimatePresenceProps {
        children?: React.ReactNode;
    }
}

const SearchMedia = (props: ModifiedSearchMediaData): JSX.Element => {
    const mediaData = props.searchMedia || null;
    const [modifiedSearchMediaLength, setModifiedSearchMediaLength] = useState(
        mediaData?.length || 0
    );

    const router = useRouter();
    const movieCtx = useContext(MovieContext);
    const spinnerCtx = useContext(SpinnerContext);
    const modeCtx = useContext(ToggleMode);

    const { getMovieData } = movieCtx;
    const { showSpinnerHandler } = spinnerCtx;
    const { mode } = modeCtx;

    useEffect(() => {
        if (mediaData?.length! > 1) {
            setModifiedSearchMediaLength(mediaData?.length!);
        } else {
            mediaData?.forEach((media) => {
                if (media.id === 0) {
                    setModifiedSearchMediaLength(0);
                }
            });
        }
    }, [mediaData]);

    const onClickHandler = (
        title: string,
        originalTile: string,
        id: number,
        mediahasVideo: boolean,
        media: any
    ) => {
        const pathname = router.pathname;

        // title has the first role
        // Explain : you will get one of title and originalTile undefined
        if (title) {
            mediahasVideo
                ? router.push(`${pathname}/${title}?media=${true}&id=${id}`)
                : router.push(`${pathname}/${title}?id=${id}`);
        } else {
            mediahasVideo
                ? router.push(
                      `${pathname}/${originalTile}?media=${true}&id=${id}`
                  )
                : router.push(`${pathname}/${originalTile}?id=${id}`);
        }

        showSpinnerHandler(true);
        getMovieData(media);
    };

    const media = router.pathname.includes("movie") ? "movie" : "tv";

    if (router.query.query && modifiedSearchMediaLength === 0) {
        return (
            <div className={`${mode === "dark" ? "bg-smothDark" : "bg-white"}`}>
                <div className="container mx-auto ">
                    <div className="flex items-center justify-center pt-5">
                        <div
                            className={`${
                                mode === "dark"
                                    ? "text-white"
                                    : "text-smothDark"
                            } sm:text-lg font-mono font-bold`}
                        >
                            Sorry we didn`t find any {media} have{" "}
                            <span className="text-darkRed">
                                {router.query.query}
                            </span>{" "}
                            {router.query.query.length > 1 ? "words" : "word"}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`${mode === "dark" ? "bg-smothDark" : "bg-white"}`}>
            <div className="container mx-auto">
                <div className="relative px-5 sm:px-10">
                    <Swiper
                        breakpoints={{
                            0: {
                                spaceBetween: 15,
                                slidesPerView: 1,
                            },
                            640: {
                                spaceBetween: 15,
                                slidesPerView: 2,
                            },
                            768: {
                                spaceBetween: 15,
                                slidesPerView: 3,
                            },
                            1280: {
                                spaceBetween: 15,
                                slidesPerView: 4,
                            },
                            1536: {
                                spaceBetween: 15,
                                slidesPerView: 5,
                            },
                        }}
                        navigation
                        slidesPerGroup={1}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        speed={800}
                        grabCursor={true}
                        mousewheel={true}
                        parallax={true}
                        loop={true}
                    >
                        <AnimatePresence>
                            {mediaData &&
                                mediaData.map(
                                    (media, index) =>
                                        (media.backdrop_path ||
                                            media.poster_path) && (
                                            <SwiperSlide
                                                key={media.id}
                                                className="flex flex-col justify-start select-none h-full py-10 pb-0"
                                            >
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                    }}
                                                >
                                                    <div className="group flex flex-col justify-center rounded-lg overflow-hidden mx-auto w-full relative hover:scale-105 sm:hover:scale-110 duration-200">
                                                        <div>
                                                            <Image
                                                                src={`${srcStartWith}${
                                                                    media.backdrop_path ||
                                                                    media.poster_path
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
                                                        {media.vote_average ===
                                                        0 ? (
                                                            <div>
                                                                <div className="flex justify-center items-center absolute bg-darkGray opacity-80 w-full h-full">
                                                                    <p className="capitalize text-4xl text-white">
                                                                        coming
                                                                        soon
                                                                    </p>
                                                                </div>
                                                                <div className="vedio-icon--parent group">
                                                                    <BsEye
                                                                        onClick={() => {
                                                                            onClickHandler(
                                                                                media.title ||
                                                                                    media.name,
                                                                                media.original_title ||
                                                                                    media.original_name,
                                                                                media.id,
                                                                                media.vote_average ===
                                                                                    0
                                                                                    ? false
                                                                                    : true,
                                                                                media
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
                                                                            media.title ||
                                                                                media.name,
                                                                            media.original_title ||
                                                                                media.original_name,
                                                                            media.id,
                                                                            media.vote_average ===
                                                                                0
                                                                                ? false
                                                                                : true,
                                                                            media
                                                                        );
                                                                    }}
                                                                    className="vedio-icon"
                                                                />
                                                            </div>
                                                        )}

                                                        {/* rate */}
                                                        {media.vote_average >
                                                            0 && (
                                                            <div className="flicker flex items-center justify-center space-x-1 z-10 text-yellow-400 absolute top-4 -left-12 w-36 h-7 -rotate-45 bg-darkRed">
                                                                <AiFillStar className="h-5 w-5 " />
                                                                <span>
                                                                    {media.vote_average.toFixed(
                                                                        1
                                                                    )}
                                                                </span>
                                                            </div>
                                                        )}

                                                        {/* language */}
                                                        <div className="flicker absolute top-3 z-10 select-none right-3  bg-darkRed text-white p-1 px-1.5 rounded-full">
                                                            <span>
                                                                {media.original_language.toLocaleUpperCase()}
                                                            </span>
                                                        </div>

                                                        {/* Rating */}
                                                        <div className="flex items-center justify-center space-x-1 z-10 text-yellow-400 absolute top-4 -left-12 w-36 h-7 -rotate-45 bg-darkRed">
                                                            <AiFillStar className="h-5 w-5 " />
                                                            {media.vote_average ? (
                                                                <span>
                                                                    {media.vote_average.toFixed(
                                                                        1
                                                                    )}
                                                                </span>
                                                            ) : (
                                                                <span>0</span>
                                                            )}
                                                        </div>

                                                        <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 left-3 sm:-left-2 absolute bottom-0.5 sm:bottom-1  sm:scale-[0.85] text-gray-200 w-full">
                                                            {/* like */}
                                                            <div className="group flex items-center justify-center space-x-1 z-10">
                                                                <AiFillLike className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                                                <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                                                    <span className=" font-mono font-medium">
                                                                        {
                                                                            media.vote_count
                                                                        }
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
                                                                <GoCalendar className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                                                <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                                                    <span className="font-mono font-medium">
                                                                        {media.release_date ||
                                                                            media.first_air_date}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h3
                                                            className={`${
                                                                mode === "dark"
                                                                    ? "text-gray-200"
                                                                    : "text-smothDark"
                                                            } mt-4 sm:mt-5 `}
                                                        >
                                                            {media.title ||
                                                                media.original_title ||
                                                                media.name ||
                                                                media.original_name}
                                                        </h3>
                                                    </div>
                                                </motion.div>
                                            </SwiperSlide>
                                        )
                                )}
                        </AnimatePresence>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default SearchMedia;
