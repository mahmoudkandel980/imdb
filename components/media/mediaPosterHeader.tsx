import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import MovieContext from "../../context/movieData-context";
import SpinnerContext from "../../context/spinner-context";
import Navbar from "../header/navbar";
import TrendingMediaPoster from "../home/trendingMediaPoster";

import { AiFillStar, AiFillLike } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import { BiPlayCircle } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

import { MediaDataInterface } from "../../models/media-interfaces";
import { movieDataInterface } from "../../models/context-interfaces";
import { TrendingMediaInterface } from "../../models/home-interfaces";
// swiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Autoplay]);
const srcStartWith = "https://image.tmdb.org/t/p/original/";

const MediaPosterHeaader = (
    props: MediaDataInterface & TrendingMediaInterface
): JSX.Element => {
    const { mediaData, trendingMedia } = props;
    const router = useRouter();
    const movieCtx = useContext(MovieContext);
    const spinnerCtx = useContext(SpinnerContext);

    const { getMovieData } = movieCtx;
    const { showSpinnerHandler } = spinnerCtx;

    const type =
        router.asPath === "/"
            ? ""
            : router.asPath.startsWith("/movie")
            ? router.query.type?.toString() || "Trending"
            : router.asPath.startsWith("/tv")
            ? router.query.type?.toString() || "Popular"
            : router.query.type?.toString() || "Popular";

    const mediaType = router.asPath.toLocaleLowerCase().includes("movie")
        ? "movie"
        : router.asPath.toLocaleLowerCase().includes("tv")
        ? "tv"
        : router.asPath.toLocaleLowerCase().includes("people")
        ? "people"
        : "home";

    const onClickHandler = (
        title: string,
        name: string,
        id: string,
        mediahasVideo: number,
        movieData: movieDataInterface
    ) => {
        const type = router.query.type || "Trending";
        const page = router.pathname.toString().substring(1);
        // Name has the first role
        // Explain : you will get one of name and title undefined

        if (router.pathname === "/") {
            router.push(`/movie/${name || title}?id=${id}`);
        } else {
            if (name) {
                mediahasVideo > 0
                    ? router.push(
                          `/${page}/${name}?type=${type}&media=${true}&id=${id}`
                      )
                    : router.push(`/${page}/${name}?type=${type}&id=${id}`);
            } else {
                mediahasVideo > 0
                    ? router.push(
                          `/${page}/${title}?type=${type}&media=${true}&id=${id}`
                      )
                    : router.push(`/${page}/${title}?type=${type}&id=${id}`);
            }
        }

        getMovieData(movieData);
        showSpinnerHandler(true);
    };

    return (
        <div className="bg-darkGray">
            <div
                className={`${
                    router.pathname !== "/" && "md:h-[800px]"
                } w-full h-screen relative mx-auto shadow-xl overflow-hidden`}
            >
                <Swiper
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation
                    slidesPerGroup={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    speed={2500}
                    grabCursor={true}
                    mousewheel={true}
                    loop={true}
                    parallax={true}
                    className="z-50"
                >
                    {mediaData.map(
                        (media) =>
                            (media.backdrop_path || media.poster_path) && (
                                <SwiperSlide key={media.id}>
                                    <div
                                        className={`${
                                            router.pathname !== "/" &&
                                            "md:h-[800px]"
                                        } hidden md:block relative w-full h-screen`}
                                    >
                                        <Image
                                            src={`${srcStartWith}${
                                                media.backdrop_path ||
                                                media.poster_path
                                            }`}
                                            alt={
                                                media.title ||
                                                media.original_title
                                            }
                                            layout="fill"
                                            className="absolute text-center object-fill sm:object-cover opacity-95  bg-center bg-no-repeat"
                                            priority
                                        />
                                    </div>
                                    <div className="relative w-full h-screen  md:hidden">
                                        <Image
                                            src={`${srcStartWith}${
                                                media.poster_path ||
                                                media.backdrop_path
                                            }`}
                                            alt={
                                                media.title ||
                                                media.original_title
                                            }
                                            layout="fill"
                                            className="static text-center object-fill sm:object-cover opacity-95  bg-center bg-no-repeat"
                                            priority
                                        />
                                    </div>
                                    {/* small screens */}
                                    <div className="block md:hidden h-full w-full">
                                        <div className="flex flex-col items-start justify-between z-10 space-y-5 p-2.5 px-2 absolute left-[50%] top-[50%] -translate-x-10 -translate-y-12 text-gray-200 w-full0">
                                            {/* see media */}
                                            <div className="group flex items-center justify-center space-x-1 z-10">
                                                {media.vote_average === 0 ? (
                                                    <div
                                                        onClick={() =>
                                                            onClickHandler(
                                                                media.title,
                                                                media.name,
                                                                media.id,
                                                                media.vote_average,
                                                                media
                                                            )
                                                        }
                                                    >
                                                        <BsEye className="w-16 h-16 cursor-pointer flicker-red rounded-full text-iconRed flickerAnimation" />
                                                    </div>
                                                ) : (
                                                    <div
                                                        onClick={() =>
                                                            onClickHandler(
                                                                media.title,
                                                                media.name,
                                                                media.id,
                                                                media.vote_average,
                                                                media
                                                            )
                                                        }
                                                    >
                                                        <BiPlayCircle className="w-16 h-16 cursor-pointer flicker-red rounded-full text-iconRed flickerAnimation" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {/* votes and date */}
                                        <div
                                            className={`${
                                                router.pathname === "/"
                                                    ? "bottom-0 hidden sm:block"
                                                    : "bottom-20"
                                            } flex flex-col items-start justify-between space-y-5 p-2.5 px-2 absolute left-0 text-gray-200 w-full`}
                                        >
                                            {/* like */}
                                            <div className="group flex items-center justify-center space-x-1 z-10">
                                                <AiFillLike className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                                                <div className="absolut left-10 group-hover:text-white translate-x-2 duration-500">
                                                    <span className="font-mono font-medium p-4 py-0.5 bg-opacity-95">
                                                        {media.vote_count}
                                                    </span>
                                                </div>
                                            </div>
                                            {/* rate */}
                                            <div className="group flex items-center justify-center space-x-1 z-10">
                                                <AiFillStar className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                                                <div className="absolut left-10 group-hover:text-white translate-x-2 duration-500">
                                                    {media.vote_average ? (
                                                        <span className="font-mono font-medium p-4 py-0.5 bg-opacity-95">
                                                            {media.vote_average.toFixed(
                                                                1
                                                            )}
                                                        </span>
                                                    ) : (
                                                        <span className="font-mono font-medium p-4 py-0.5 bg-opacity-95">
                                                            0
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            {/* date */}
                                            <div
                                                className={`${
                                                    !media.release_date &&
                                                    "hidden"
                                                } group flex items-center justify-center space-x-1 z-10`}
                                            >
                                                <GoCalendar className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                                                <div className="absolut left-10 group-hover:text-white translate-x-2 duration-500">
                                                    <span className="font-mono font-medium p-4 py-0.5 bg-opacity-95">
                                                        {media.release_date}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*overlay*/}
                                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-darkGray/30 to-darkGray/90 "></div>

                                    {/* Large Screen */}
                                    {/* Poster Data */}
                                    <div className="absolute -top-10 left-0 w-full h-full">
                                        <div className="flex flex-col select-none justify-center mx-auto w-[95%] xl:w-[85%] relative top-[12%] md:top-[18%] ">
                                            <div className="flex justify-start items-start  space-x-2 sm:space-x-5 md:space-x-10">
                                                <div className=" flex-1 md:flex-[1.5] lg:flex-[1.5] xl:flex-[1] 2xl:flex-1 shadow-2xl relative rounded-xl hidden md:block overflow-hidden">
                                                    <Image
                                                        src={`${srcStartWith}${
                                                            media.poster_path ||
                                                            media.backdrop_path
                                                        }`}
                                                        alt={media.title}
                                                        width={234}
                                                        height={300}
                                                        layout="responsive"
                                                        className="static text-center object-cover"
                                                        priority
                                                    />
                                                    {/*overlay*/}
                                                    <div className="absolute flex justify-center items-center top-0 left-0 h-full w-full bg-gradient-to-t from-darkGray/40 to-darkGray/0 duration-1000"></div>

                                                    {/* Large Screan */}
                                                    <div className="flex flex-col items-start justify-between z-10 space-y-5 p-2.5 px-2 absolute left-[50%] top-[50%] -translate-x-10 -translate-y-12 text-gray-200 w-full0">
                                                        {/* see media */}
                                                        <div className="group flex items-center justify-center space-x-1 z-10">
                                                            {media.vote_average ===
                                                            0 ? (
                                                                <div
                                                                    onClick={() =>
                                                                        onClickHandler(
                                                                            media.title,
                                                                            media.name,
                                                                            media.id,
                                                                            media.vote_average,
                                                                            media
                                                                        )
                                                                    }
                                                                >
                                                                    <BsEye className="w-16 h-16 cursor-pointer flicker-red rounded-full text-iconRed flickerAnimation" />
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    onClick={() =>
                                                                        onClickHandler(
                                                                            media.title,
                                                                            media.name,
                                                                            media.id,
                                                                            media.vote_average,
                                                                            media
                                                                        )
                                                                    }
                                                                >
                                                                    <BiPlayCircle className="w-16 h-16 cursor-pointer flicker-red rounded-full text-iconRed flickerAnimation" />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* rate */}
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
                                                    {/* language */}
                                                    {media.original_language && (
                                                        <div className="absolute top-3 z-10 select-none right-3 bg-darkRed text-white p-1 px-1.5 rounded-full">
                                                            <span>
                                                                {media.original_language.toLocaleUpperCase()}
                                                            </span>
                                                        </div>
                                                    )}
                                                    {/* votes and date */}

                                                    <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 absolute bottom-0 text-gray-200 w-full0">
                                                        {/* like */}
                                                        <div className="group flex items-center justify-center space-x-1 z-10">
                                                            <AiFillLike className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                                                            <div className="absolut left-10  group-hover:text-white translate-x-2 duration-500">
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
                                                                !(
                                                                    media.release_date ||
                                                                    media.first_air_date
                                                                ) && "hidden"
                                                            } group flex items-center justify-center space-x-1 z-10`}
                                                        >
                                                            <GoCalendar className="flicker-white h-7 w-7 bg-darkGray p-1 rounded-full text-white cursor-pointer duration-300" />
                                                            <div className="absolut left-10 group-hover:text-white translate-x-2 duration-500">
                                                                <span className="font-mono font-medium">
                                                                    {media.release_date ||
                                                                        media.first_air_date}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:flex-[3] lg:flex-[4] w-full lg:w-[70%] xl-flex-[4] 2xl:flex-[4] items-start space-y-2 font-mono font-medium text-white p-0 md:p-5 pt-0">
                                                    <div className="flex items-center justify-start mb-2 sm:mb-3 md:mb-5 z-10 ">
                                                        {/* title */}
                                                        <h1 className="flicker-text text-xl md:text-2xl lg:text-3xl ">
                                                            {media.title ||
                                                                media.original_title ||
                                                                media.name ||
                                                                media.original_name}
                                                        </h1>
                                                    </div>
                                                    <div className="ml-2 sm:ml-3 md:ml-5">
                                                        <div className="flex items-center justify-start">
                                                            {/* overview */}
                                                            <span className="text-sm line-clamp-[8] sm:line-clamp-none  ml-4 sm:ml-0 sm:text-base mt-5 w-[100%] sm:w-[80%] md:[500px] lg:w-[100%] xl:w-[700px]">
                                                                {media.overview}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                    )}
                </Swiper>
                {/* NavBar */}
                <Navbar type={type} mediaType={mediaType} />
                {/* trending media */}
                {trendingMedia && (
                    <div>
                        <TrendingMediaPoster trendingMedia={trendingMedia} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MediaPosterHeaader;
