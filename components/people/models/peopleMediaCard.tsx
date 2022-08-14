import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import SpinnerContext from "../../../context/spinner-context";
import MovieContext from "../../../context/movieData-context";

import { AiFillStar, AiFillLike } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { BiPlayCircle } from "react-icons/bi";
import { GoCalendar } from "react-icons/go";
import { IoIosArrowUp } from "react-icons/io";
import { TbGenderMale } from "react-icons/tb";
import { CgGenderFemale } from "react-icons/cg";

import { PeopleMediaDataIntrerface } from "../../../models/people-interfaces";

const srcStartWith = "https://image.tmdb.org/t/p/original/";

import * as React from "react";

//
declare module "framer-motion" {
    export interface AnimatePresenceProps {
        children?: React.ReactNode;
    }
}

const PeopleMediaCard = (props: PeopleMediaDataIntrerface): JSX.Element => {
    const { known_for: mediaData, onClickHandler, gender, id, name } = props;
    const router = useRouter();
    const [showMedia, setShowMedia] = useState(false);
    const [rotateValue, setRotateValue] = useState(180);

    const spinnerCtx = useContext(SpinnerContext);
    const movieCtx = useContext(MovieContext);

    const { showSpinnerHandler } = spinnerCtx;
    const { getMovieData } = movieCtx;

    const mediaToggleHandler = () => {
        setShowMedia((prevState) => !prevState);
        if (showMedia) {
            setRotateValue(180);
        } else {
            setRotateValue(0);
        }
    };

    const specifcMediaHandler = (
        title: string,
        name: string,
        id: number,
        mediahasVideo: boolean,
        mediaType: string,
        media: any
    ) => {
        if (name) {
            mediahasVideo
                ? router.push(`/${mediaType}/${name}?id=${id}`)
                : router.push(`/${mediaType}/${name}?&id=${id}`);
        } else {
            mediahasVideo
                ? router.push(`/${mediaType}/${title}?id=${id}`)
                : router.push(`/${mediaType}/${title}?&id=${id}`);
        }

        showSpinnerHandler(true);
        getMovieData(media);
    };

    return (
        <div>
            <div className=" h-full w-full">
                <div className="flex flex-col items-start justify-between z-10 space-y-5 p-2.5 px-2 absolute left-[50%] top-[50%] -translate-x-10 -translate-y-12 text-gray-200 w-full0">
                    {/* see person */}

                    {!showMedia ? (
                        <div className="group  flex items-center justify-center space-x-1 z-40">
                            <div onClick={() => onClickHandler(name, id)}>
                                <BsEye className="w-16 h-16 cursor-pointer flicker-red rounded-full text-iconRed flickerAnimation" />
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 absolute left-3 bottom-3 text-gray-200 w-full">
                    {/* Gender */}
                    <div className="group flex items-center justify-center space-x-1 z-10">
                        {gender === 1 ? (
                            <CgGenderFemale className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                        ) : (
                            <TbGenderMale className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                        )}
                        <div className="absolut left-10 group-hover:text-white translate-x-2 duration-500">
                            <div className="font-mono font-medium p-4 py-0.5 bg-opacity-95">
                                {gender === 1 ? "Femail" : "Mail"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="mx-auto w-[95%] xl:w-[85%] relative top-[8%] md:top-[18%] ">
                    <div className="flex flex-col items-start space-y-2 md:space-y-10 font-mono font-medium text-white p-0 md:p-5 pt-0">
                        <div className="flex items-center justify-start mb-2 sm:mb-3 md:mb-5 z-10 ">
                            {/* title */}
                            <h1 className="flicker-text text-xl md:text-2xl lg:text-3xl ">
                                {name}
                            </h1>
                        </div>
                        <div className="flex flex-col space-y-4 sm:space-y-7 md:space-y-10 self-center w-full sm:ml-3 md:ml-5">
                            <div
                                onClick={mediaToggleHandler}
                                className="flicker-black bg-black rounded-full p-1 px-3 w-fit cursor-pointer flex justify-start items-center space-x-2"
                            >
                                {showMedia ? (
                                    <span>Hide {name} works</span>
                                ) : (
                                    <span>Show {name} works</span>
                                )}
                                <div
                                    style={{
                                        transform: `rotate(${rotateValue}deg)`,
                                    }}
                                    className="duration-300"
                                >
                                    <IoIosArrowUp className="flicker-white  shake-vertical  bg-transparent h-5 w-5 text-gray-300  p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                                </div>
                            </div>
                            <AnimatePresence>
                                {showMedia && (
                                    <div className="flex  mx-auto items-center relative justify-center">
                                        <div className="grid mx-auto justify-center items-center grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-5 md:gap-5 lg:gap-8 xl:gap-10">
                                            {/* Media Data */}
                                            {mediaData.map((media) => (
                                                <motion.div
                                                    key={media.id}
                                                    initial={{
                                                        opacity: 0,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        transform: `translateY(0)`,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        transform: `translateY(0)`,
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                    }}
                                                >
                                                    <div className="flex flex-col w-36 sm:w-52 md:w-56 lg:w-72 xl:w-80 justify-center select-none h-full">
                                                        <div className="group flex flex-col justify-center rounded-lg overflow-hidden mx-auto w-full relative hover:scale-105 sm:hover:scale-110 duration-200">
                                                            <div>
                                                                <Image
                                                                    src={`${srcStartWith}${
                                                                        media.backdrop_path ||
                                                                        media.poster_path
                                                                    }`}
                                                                    alt={
                                                                        media.title ||
                                                                        media.original_title
                                                                    }
                                                                    width={234}
                                                                    height={300}
                                                                    layout="responsive"
                                                                    className="absolute text-center object-cover "
                                                                    priority
                                                                />
                                                            </div>
                                                            <div className="absolute w-full h-full bg-gradient-to-b from-darkGray/0 to-darkGray/70"></div>

                                                            {/* coming soon */}
                                                            {media.vote_average ===
                                                            0 ? (
                                                                <>
                                                                    <div className="flex justify-center items-center absolute bg-darkGray opacity-80 w-full h-full">
                                                                        <p className="capitalize text-4xl text-white">
                                                                            coming
                                                                            soon
                                                                        </p>
                                                                    </div>
                                                                    <div className="vedio-icon--parent group">
                                                                        <BsEye
                                                                            onClick={() => {
                                                                                specifcMediaHandler(
                                                                                    media.title,
                                                                                    media.original_title,
                                                                                    media.id,
                                                                                    media.vote_average ===
                                                                                        0
                                                                                        ? false
                                                                                        : true,
                                                                                    media.media_type,
                                                                                    media
                                                                                );
                                                                            }}
                                                                            className="vedio-icon"
                                                                        />
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <div className="vedio-icon--parent group">
                                                                    <BiPlayCircle
                                                                        onClick={() => {
                                                                            specifcMediaHandler(
                                                                                media.title,
                                                                                media.original_title,
                                                                                media.id,
                                                                                media.vote_average ===
                                                                                    0
                                                                                    ? false
                                                                                    : true,
                                                                                media.media_type,
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
                                                                <div className="flicker flex items-center justify-center text-sm sm:text-base space-x-1 z-10 text-yellow-400 absolute top-3 -left-14 sm:top-4 sm:-left-12 w-36 h-5 sm:h-7 -rotate-45 bg-darkRed">
                                                                    <AiFillStar className="h-3 w-3 sm:h-5 sm:w-5 " />
                                                                    <span>
                                                                        {media.vote_average.toFixed(
                                                                            1
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            )}

                                                            {/* language */}
                                                            <div className="flicker absolute top-1 sm:top-3 z-10 select-none text-sm sm:text-base right-1 sm:right-3 bg-darkRed text-white p-0.5 px-1  sm:p-1 sm:px-1.5 rounded-full">
                                                                <span>
                                                                    {media.original_language.toLocaleUpperCase()}
                                                                </span>
                                                            </div>

                                                            <div className="flex flex-col items-start justify-between space-y-2 sm:space-y-5 p-2.5 px-2 left-0 sm:-left-3 absolute bottom-0 sm:bottom-3  sm:scale-[0.85] text-gray-200 w-full">
                                                                {/* like */}
                                                                <div className="group flex items-center justify-center space-x-1 z-10">
                                                                    <AiFillLike className="flicker-white h-5 w-5 sm:h-7 sm:w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                                                    <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                                                        <span className="font-mono font-medium text-sm sm:text-base">
                                                                            {
                                                                                media.vote_count
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                {/* date */}
                                                                <div
                                                                    className={`${
                                                                        !media.release_date &&
                                                                        "hidden"
                                                                    } group flex items-center justify-center space-x-1 z-10`}
                                                                >
                                                                    <GoCalendar className="flicker-white h-5 w-5 sm:h-7 sm:w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                                                    <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                                                        <span className="font-mono font-medium text-sm sm:text-base">
                                                                            {
                                                                                media.release_date
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h3 className="mt-1 truncate sm:mt-2 md:mt-4 text-gray-200">
                                                                {media.title ||
                                                                    media.original_title ||
                                                                    "Dummy Title"}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleMediaCard;
