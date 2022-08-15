import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

import SpinnerContext from "../../context/spinner-context";
import ToggleMode from "../../context/darkMode";
import { TbGenderMale } from "react-icons/tb";
import { CgGenderFemale } from "react-icons/cg";
import { BsEye } from "react-icons/bs";

import { SearchPeopleInterface } from "../../models/search-interfaces";

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

const SearchPeople = (props: SearchPeopleInterface): JSX.Element => {
    const searchPeople = props.searchPeople?.results || null;
    const router = useRouter();

    const spinnerCtx = useContext(SpinnerContext);
    const { showSpinnerHandler } = spinnerCtx;

    const modeCtx = useContext(ToggleMode);
    const { mode } = modeCtx;

    const onClickHandler = (name: string, id: number) => {
        const type = router.query.type || "Popular";
        const page = router.pathname.toString().substring(1);
        router.push(`/${page}/${name}?type=${type}&id=${id}`);

        showSpinnerHandler(true);
    };

    if (router.query.query && searchPeople?.length === 0) {
        return (
            <div className={`${mode === "dark" ? "bg-smothDark" : "bg-white"}`}>
                <div className="container mx-auto">
                    <div className="flex items-center justify-center">
                        <div
                            className={`${
                                mode === "dark"
                                    ? "text-white"
                                    : "text-smothDark"
                            } text-sm sm:text-lg`}
                        >
                            Sorry we didn`t find any actor have{" "}
                            <span className="text-darkRed">
                                {router.query.query}
                            </span>
                            <span> name</span>
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
                            {searchPeople &&
                                searchPeople.map(
                                    (person, index) =>
                                        person.profile_path && (
                                            // +18 filter
                                            <SwiperSlide
                                                key={person.id}
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
                                                                src={`${srcStartWith}${person.profile_path}`}
                                                                alt={
                                                                    person.name
                                                                }
                                                                width={234}
                                                                height={300}
                                                                layout="responsive"
                                                                className="absolute text-center object-cover "
                                                                priority
                                                            />
                                                        </div>
                                                        <div className="absolute w-full h-full bg-gradient-to-b from-darkGray/0 to-darkGray/70"></div>

                                                        <div className="vedio-icon--parent group">
                                                            <BsEye
                                                                onClick={onClickHandler.bind(
                                                                    null,
                                                                    person.name,
                                                                    person.id
                                                                )}
                                                                className="vedio-icon"
                                                            />
                                                        </div>

                                                        {/* language */}
                                                        <div className="flicker absolute top-3 z-10 select-none right-3 bg-darkRed text-white p-1 px-1.5 rounded-full">
                                                            <span>
                                                                {
                                                                    person.known_for_department
                                                                }
                                                            </span>
                                                        </div>

                                                        <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 left-3 sm:-left-2 absolute bottom-0.5 sm:bottom-1 sm:scale-[0.85] text-gray-200 w-full">
                                                            {/* Gender */}
                                                            <div className="group flex items-center justify-center space-x-1 z-10">
                                                                {person.gender ===
                                                                1 ? (
                                                                    <CgGenderFemale className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                                                ) : (
                                                                    <TbGenderMale className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                                                )}
                                                                <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                                                    <span className=" font-mono font-medium">
                                                                        {person.gender ===
                                                                        1
                                                                            ? "Femail"
                                                                            : "Mail"}
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
                                                            {person.name}
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

export default SearchPeople;
