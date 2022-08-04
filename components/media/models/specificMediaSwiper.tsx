import Image from "next/image";

import { SpecificMediaDataInterface } from "../../../models/media-interfaces";
import { GoCalendar } from "react-icons/go";
import { BiPlayCircle } from "react-icons/bi";

const srcStartWith = "https://image.tmdb.org/t/p/original/";

// swiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Autoplay]);

const SpecificMediaSwiper = (
    props: SpecificMediaDataInterface
): JSX.Element => {
    const { seasons } = props.mediaData;

    if (!seasons) {
        return <></>;
    }

    return (
        <div className="p-0 2xl:p-20 py-10 sm:py-14 pb-0 sm:pb-0">
            <div className="container mx-auto">
                <div className="relative px-10">
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
                        scrollbar={{ draggable: true }}
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
                        {seasons.map(
                            (season) =>
                                season.poster_path &&
                                season.season_number > 0 && (
                                    <SwiperSlide
                                        key={season.id}
                                        className={`group select-none relative hover:z-30 duration-300 pt-10 pb-10`}
                                    >
                                        <div className="relative rounded-lg overflow-hidden hover:scale-95  sm:hover:scale-[1.10] z-10 duration-300">
                                            <Image
                                                src={`${srcStartWith}${season.poster_path}`}
                                                alt={
                                                    season.name ||
                                                    `Season ${season.season_number}`
                                                }
                                                width={234}
                                                height={300}
                                                layout="responsive"
                                                className="absolute text-center object-cover select-none "
                                                priority
                                            />
                                            {/* overlay */}
                                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b  from-[#212529]/0 to-[#212529]/30 group-hover:from-[#212529]/10 group-hover:to-[#212529]/80 duration-300"></div>

                                            {/* season name */}
                                            <div
                                                className={`${
                                                    !season.name &&
                                                    !season.season_number &&
                                                    "hidden"
                                                } absolute left-5 top-5`}
                                            >
                                                <div className="flicker-black bg-[#212529] group-hover:bg-transparent rounded-full p-0.5 px-2 text-[#f8f9fa] bg-opacity-95 text-lg duration-200">
                                                    {season.name ||
                                                        `Season ${season.season_number}`}
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 absolute left-0 bottom-0 text-gray-200 w-full0">
                                                {/* episode count */}
                                                <div
                                                    className={`${
                                                        !season.episode_count &&
                                                        "hidden"
                                                    } group flex items-center justify-center space-x-1`}
                                                >
                                                    <BiPlayCircle className="flicker-black h-7 w-7 text-gray-300 bg-[#212529] group-hover:bg-transparent p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                                                    <div className="absolut left-10 text-white translate-x-3 duration-500">
                                                        {season.episode_count}
                                                        {season.episode_count >
                                                        1
                                                            ? "  Episodes"
                                                            : " Episode"}
                                                    </div>
                                                </div>
                                                {/* date */}
                                                <div
                                                    className={`${
                                                        !season.air_date &&
                                                        "hidden"
                                                    } group flex items-center justify-center space-x-1`}
                                                >
                                                    <GoCalendar className="flicker-black h-7 w-7 text-gray-300 bg-[#212529] group-hover:bg-transparent p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                                                    <div className="absolut left-10 text-white translate-x-3 duration-500">
                                                        {season.air_date}
                                                    </div>
                                                </div>
                                            </div>
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

export default SpecificMediaSwiper;
