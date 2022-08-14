import { useState, useEffect, useContext } from "react";
import { useMediaPredicate } from "react-media-hook";
import { motion, AnimatePresence } from "framer-motion";

import SwiperMeidaContent from "./models/swiperMediaContent";
import SwiperPeopleContent from "./models/swiperPeopleContent";

import ToggleGenesContext from "../../context/toggleGenes-context";

import {
    PopularMoviesInterface,
    PopularTvInterface,
    PopularPeopleInterface,
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

const popularTypes = ["movies", "tv", "people"];

const Popular = (
    props: PopularMoviesInterface & PopularTvInterface & PopularPeopleInterface
): JSX.Element => {
    const moreThan640 = useMediaPredicate("(min-width: 640px)");
    const { popularMovies, popularTv, popularPeople } = props;
    const typeCtx = useContext(ToggleGenesContext);
    const { popularType, togglePopular } = typeCtx;

    const [sliderContent, SetSliderContent] = useState("movies");
    const [translateVale, SetTranslateValue] = useState(0);
    const [smTranslateVale, SetSmTranslateValue] = useState(0);
    const [currentContent, setCurentContent] = useState(popularMovies);

    useEffect(() => {
        SetSliderContent(popularType);

        if (popularType === "movies") {
            setCurentContent(popularMovies);
        } else if (popularType === "tv") {
            setCurentContent(popularTv);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [popularType]);

    useEffect(() => {
        if (popularType === "movies") {
            SetTranslateValue(0);
            SetSmTranslateValue(0);
        } else if (popularType === "tv") {
            SetTranslateValue(100);
            SetSmTranslateValue(75);
        } else if (popularType === "people") {
            SetTranslateValue(210);
            SetSmTranslateValue(150);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sliderContent]);

    const toggleTypeHandler = (type: string) => {
        togglePopular(type);
    };

    return (
        <div className="py-20 pb-0 bg-smothDark">
            <div className="container mx-auto pl-3 sm:pl-0">
                <h2 className="text-2xl text-white font-mono font-semibold mb-4">
                    Popular
                </h2>
                <div className="relative w-56 sm:w-80 flicker-black select-none bg-transparent text-gray-200 font-mono font-semibold p-2 px-0 rounded-full mb-3">
                    <div
                        className={`flicker-white z-20 flex justify-center items-center absolute w-[75px] h-8 sm:w-[110px] sm:h-11 bg-white top-0 p-2 px-0 rounded-full duration-700
                        `}
                        style={{
                            transform: `translateX(${
                                moreThan640 ? translateVale : smTranslateVale
                            }px)`,
                        }}
                    >
                        <span className="text-xs sm:text-base text-smothDark font-bold font-sans">
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
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                speed={1000}
                                grabCursor={true}
                                mousewheel={true}
                                parallax={true}
                                loop={true}
                            >
                                <AnimatePresence>
                                    {popularMovies &&
                                    popularTv &&
                                    popularType !== "people"
                                        ? currentContent.map(
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
                                                                      popularType
                                                                  }
                                                              />
                                                          </motion.div>
                                                      </SwiperSlide>
                                                  )
                                          )
                                        : popularPeople &&
                                          popularPeople.map(
                                              (person) =>
                                                  person.profile_path && (
                                                      <SwiperSlide
                                                          key={person.id}
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
                                                              <SwiperPeopleContent
                                                                  person={
                                                                      person
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

export default Popular;
