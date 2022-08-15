import { useState, useEffect, useContext } from "react";
import { useMediaPredicate } from "react-media-hook";
import { motion, AnimatePresence } from "framer-motion";

import SwiperMeidaContent from "./models/swiperMediaContent";
import SwiperPeopleContent from "./models/swiperPeopleContent";

import ToggleGenesContext from "../../context/toggleGenes-context";
import ToggleMode from "../../context/darkMode";

import {
    UpComingMoviesInterface,
    UpComingTvInterface,
} from "../../models/home-interfaces";

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

const popularTypes = ["movies", "tv"];

const UpComing = (
    props: UpComingMoviesInterface & UpComingTvInterface
): JSX.Element => {
    const moreThan640 = useMediaPredicate("(min-width: 640px)");
    const { upComingMovies, upComingTv } = props;

    const typeCtx = useContext(ToggleGenesContext);
    const { upComingType, toggleUpComing } = typeCtx;
    const toggleModeCtx = useContext(ToggleMode);
    const { mode } = toggleModeCtx;

    const [sliderContent, SetSliderContent] = useState("movies");
    const [translateVale, SetTranslateValue] = useState(0);
    const [smTranslateVale, SetSmTranslateValue] = useState(0);
    const [currentContent, setCurentContent] = useState(upComingMovies);

    useEffect(() => {
        SetSliderContent(upComingType);

        if (upComingType === "movies") {
            setCurentContent(upComingMovies);
        } else if (upComingType === "tv") {
            setCurentContent(upComingTv);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [upComingType]);

    useEffect(() => {
        if (upComingType === "movies") {
            SetTranslateValue(0);
            SetSmTranslateValue(0);
        } else if (upComingType === "tv") {
            SetTranslateValue(115);
            SetSmTranslateValue(87);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sliderContent]);

    const toggleTypeHandler = (type: string) => {
        toggleUpComing(type);
    };

    return (
        <div
            className={`py-20 pb-0 ${
                mode === "dark" ? "bg-smothDark" : "bg-white"
            }  `}
        >
            <div className="container mx-auto pl-3 sm:pl-0">
                <h2
                    className={` ${
                        mode === "dark" ? "text-white" : "text-smothDark"
                    } text-2xl font-mono font-semibold mb-4`}
                >
                    Up Coming
                </h2>
                <div
                    className={`${
                        mode === "dark" ? "text-gray-200" : "text-smothDark"
                    } relative w-40 sm:w-56 flicker-black select-none bg-transparent font-mono font-semibold p-2 px-0 rounded-full mb-3`}
                >
                    <div
                        className={`${
                            mode === "dark"
                                ? "flicker-white bg-white"
                                : "flicker-black bg-smothDark"
                        }  z-20 flex justify-center items-center absolute w-[75px] h-8 sm:w-[110px] sm:h-11 top-0 p-2 px-0 rounded-full duration-700
                        `}
                        style={{
                            transform: `translateX(${
                                moreThan640 ? translateVale : smTranslateVale
                            }px)`,
                        }}
                    >
                        <span
                            className={`${
                                mode === "dark"
                                    ? "text-smothDark"
                                    : "text-white"
                            } text-xs sm:text-base font-bold font-sans`}
                        >
                            {sliderContent}
                        </span>
                    </div>
                    <div className="flex justify-between w-full relative items-center space-x-2 sm:space-x-5 ">
                        {popularTypes.map((type, index) => (
                            <div key={`${type}${index * 2}`}>
                                <span
                                    onClick={() => {
                                        toggleTypeHandler(type);
                                    }}
                                    className="hidden w-[90px] text-lg sm:flex justify-center rounded-lg cursor-pointer"
                                >
                                    {type}
                                </span>
                                <span
                                    onClick={() => {
                                        toggleTypeHandler(type);
                                    }}
                                    className="sm:hidden w-[60px] text-xs flex justify-center rounded-lg cursor-pointer"
                                >
                                    {type}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-transparent">
                    <div className="container mx-auto">
                        <div className="relative px-5 sm:px-28 md:px-14 lg:px-20 xl:px-24">
                            <Swiper
                                className="tending-swiper"
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
                                    1030: {
                                        spaceBetween: 15,
                                        slidesPerView: 4,
                                    },
                                    1280: {
                                        spaceBetween: 10,
                                        slidesPerView: 5,
                                    },
                                    1536: {
                                        spaceBetween: 10,
                                        slidesPerView: 6,
                                    },
                                }}
                                navigation
                                slidesPerGroup={1}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 4500,
                                    disableOnInteraction: false,
                                }}
                                speed={1000}
                                grabCursor={true}
                                parallax={true}
                                loop={true}
                                mousewheel={true}
                            >
                                <AnimatePresence>
                                    {upComingMovies &&
                                        upComingTv &&
                                        upComingType !== "people" &&
                                        currentContent.map(
                                            (media) =>
                                                (media.backdrop_path ||
                                                    media.poster_path) && (
                                                    <SwiperSlide
                                                        key={media.id}
                                                        className="flex flex-col justify-start select-none py-10 pb-0"
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
                                                            <SwiperMeidaContent
                                                                media={media}
                                                                type={
                                                                    upComingType
                                                                }
                                                            />
                                                        </motion.div>
                                                    </SwiperSlide>
                                                )
                                        )}
                                </AnimatePresence>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpComing;
