import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import SpinnerContext from "../../../context/spinner-context";

import { BsEye } from "react-icons/bs";
import { TbGenderMale } from "react-icons/tb";
import { CgGenderFemale } from "react-icons/cg";

const srcStartWith = "https://image.tmdb.org/t/p/original/";

// swiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Autoplay]);

import { MediaPeopleInterface } from "../../../models/people-interfaces";

const SpecifcPeopleMedia = (props: MediaPeopleInterface) => {
    const { mediaPeople } = props;
    const router = useRouter();
    const spinnerCtx = useContext(SpinnerContext);
    const { showSpinnerHandler } = spinnerCtx;

    const onClickHandler = (name: string, id: number) => {
        const type = router.query.type || "Popular";
        router.push(`/people/${name}?type=${type}&id=${id}`);

        showSpinnerHandler(true);
    };

    return (
        <div
            className={`${
                router.asPath.includes("tv")
                    ? "p-0 2xl:px-10  2xl:pt-5 2xl:pb-0 py-7 sm:py-10 pb-0 sm:pb-0 "
                    : "p-0 2xl:px-10  2xl:pt-10 2xl:pb-0 py-7 sm:py-14 pb-0 sm:pb-0"
            }`}
        >
            <div className="container mx-auto">
                <h1 className="flicker-text select-none w-fit text-white text-xl sm:text-2xl md:text-3xl mb-2">
                    {router.query.slug} Actors
                </h1>
                <div className="relative px-5 sm:px-28 md:px-14 lg:px-20 xl:px-24">
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
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        speed={800}
                        grabCursor={true}
                        mousewheel={true}
                        parallax={true}
                        loop={true}
                    >
                        {mediaPeople.map(
                            (person, index) =>
                                person.profile_path && (
                                    <SwiperSlide
                                        key={`${person.id} ${index}`}
                                        className="flex flex-col justify-start select-none h-full py-10"
                                    >
                                        <div className="h-60 w-52 group flex flex-col justify-center rounded-lg overflow-hidden mx-auto  relative hover:scale-105 sm:hover:scale-110 duration-200">
                                            <div>
                                                <Image
                                                    src={`${srcStartWith}${person.profile_path}`}
                                                    alt={
                                                        person.name ||
                                                        person.character
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
                                            <div className="flicker absolute top-3 z-10 select-none right-3  bg-darkRed text-white p-1 px-1.5 rounded-full">
                                                <span>
                                                    {
                                                        person.known_for_department
                                                    }
                                                </span>
                                            </div>

                                            <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 left-3 sm:-left-2 absolute bottom-0.5 sm:bottom-1 sm:scale-[0.85] text-gray-200 w-full">
                                                {/* Gender */}
                                                <div className="group flex items-center justify-center space-x-1 z-10">
                                                    {person.gender === 1 ? (
                                                        <CgGenderFemale className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                                    ) : (
                                                        <TbGenderMale className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                                    )}
                                                    <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                                        <span className=" font-mono font-medium">
                                                            {person.gender === 1
                                                                ? "Femail"
                                                                : "Mail"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="mt-4 sm:mt-5 text-gray-200">
                                                {person.name ||
                                                    person.original_name}
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                )
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default SpecifcPeopleMedia;
