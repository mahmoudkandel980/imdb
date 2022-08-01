import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import MovieContext from "../../context/movieData-context";

import { AiFillStar, AiFillLike } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import { BsEyeFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { SpecificMediaDataInterface } from "../../models/media-interfaces";

const srcStartWith = "https://image.tmdb.org/t/p/original/";

const SpecificMediaPoster = (
    props: SpecificMediaDataInterface
): JSX.Element => {
    const movieCtx = useContext(MovieContext);
    const contextMovieData = movieCtx.movieData;
    let {
        backdrop_path,
        genres,
        homepage,
        id,
        imdb_id,
        original_language,
        original_title,
        overview,
        poster_path,
        production_companies,
        production_countries,
        release_date,
        runtime,
        spoken_languages, //
        status, //
        title,
        vote_average,
        vote_count,
        name,
        first_air_date,
        episode_run_time,
        number_of_seasons,
        number_of_episodes,
        seasons,
    } = props.mediaData;

    runtime = runtime ? runtime : episode_run_time[0];

    backdrop_path = backdrop_path
        ? backdrop_path
        : contextMovieData.backdrop_path;

    original_title = original_title
        ? original_title
        : name
        ? name
        : contextMovieData.original_name || contextMovieData.name;
    poster_path = poster_path ? poster_path : contextMovieData.poster_path;
    release_date = release_date
        ? release_date
        : first_air_date
        ? first_air_date
        : contextMovieData.release_date || contextMovieData.first_air_date;

    vote_count = vote_count ? vote_count : contextMovieData.vote_count;

    vote_average = vote_average ? vote_average : contextMovieData.vote_average;

    overview = overview ? overview : contextMovieData.overview;

    original_language = original_language
        ? original_language
        : contextMovieData.original_language;

    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex flex-col select-none justify-center mx-auto w-[95%] xl:w-[85%] relative top-[12%] md:top-[18%] ">
                <div className="flex justify-start items-start  space-x-2 sm:space-x-5 md:space-x-10">
                    <div className="flex-1 md:flex-[2] lg:flex-[2] xl:flex-[1] 2xl:flex-1 shadow-2xl relative rounded-xl hidden md:block overflow-hidden">
                        <Image
                            src={`${srcStartWith}${
                                poster_path || backdrop_path
                            }`}
                            alt={title}
                            width={234}
                            height={300}
                            layout="responsive"
                            className="static text-center object-cover"
                            priority
                        />
                        {/*overlay*/}
                        <div className="absolute flex justify-center items-center top-0 left-0 h-full w-full bg-gradient-to-t from-[#212529]/40 to-[#212529]/0 duration-1000"></div>
                        {/* rate */}

                        <div className="flex items-center justify-center space-x-1 z-10 text-yellow-400 absolute top-4 -left-12 w-36 h-7 -rotate-45 bg-[#e03131]">
                            <AiFillStar className="h-5 w-5 " />
                            {vote_average ? (
                                <span>{vote_average.toFixed(1)}</span>
                            ) : (
                                <span>0</span>
                            )}
                        </div>
                        {/* language */}
                        {original_language && (
                            <div className="absolute top-3 z-10 select-none right-3 bg-[#e03131] text-white p-1 px-1.5 rounded-full">
                                <span>
                                    {original_language.toLocaleUpperCase()}
                                </span>
                            </div>
                        )}
                        {/* votes and date */}

                        <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 absolute bottom-0 text-gray-200 w-full0">
                            {/* like */}
                            <div className="group flex items-center justify-center space-x-1 z-10">
                                <AiFillLike className="flicker-black h-7 w-7 text-gray-300 bg-[#212529] p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                                <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                    <span className=" font-mono font-medium">
                                        {vote_count}
                                    </span>
                                </div>
                            </div>
                            {/* runtime */}

                            <div className="group flex items-center justify-center space-x-1 z-10">
                                <BsEyeFill className="flicker-black h-7 w-7 text-gray-300 bg-[#212529] p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                                <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                    <span className="font-mono font-medium">
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
                                    <span className="font-mono font-medium">
                                        {release_date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-[3] lg:flex-[4] w-full lg:w-[70%] xl-flex-[4] 2xl:flex-[4] items-start space-y-2 font-mono font-medium text-white p-0 md:p-5 pt-0">
                        <div className="flex items-center justify-start mb-2 sm:mb-3 md:mb-5 z-10 ">
                            {/* title */}
                            <h1 className="flicker-text text-xl md:text-2xl lg:text-3xl ">
                                {title || original_title}
                            </h1>
                        </div>
                        <div className="ml-2 sm:ml-3 md:ml-5">
                            {/* spoken_languages */}
                            {!spoken_languages ||
                                (spoken_languages.length !== 0 && (
                                    <div className="flex space-x-2 md:space-x-3 lg:space-x-5">
                                        {spoken_languages.map((lang, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-start space-x-2 md:space-x-3 lg:space-x-5 mb-2 sm:mb-3 md:mb-5"
                                            >
                                                <div className="bg-[#e03131] group relative cursor-pointer text-white p-1 px-2 rounded-full duration-150">
                                                    <span>
                                                        {lang.iso_639_1.toLocaleUpperCase()}
                                                    </span>
                                                    <span className="absolute opacity-0 whitespace-nowrap top-4 sm:top-5 left-0 p-1.5 text-[12px] sm:text-base group-hover:opacity-100 group-hover:translate-y-2 sm:group-hover:translate-y-3 duration-300">
                                                        spoken language:{" "}
                                                        {lang.english_name}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}

                            {/* production_companies */}
                            {production_companies && (
                                <div className="flex group-hover:mt-5 w-[80%] sm:w-full group-hover:mb-5">
                                    <div className="flex flex-wrap space-x-5 justify-start items-center">
                                        {production_companies.map(
                                            (pCompiny) =>
                                                pCompiny.logo_path && (
                                                    <div
                                                        key={pCompiny.id}
                                                        className="mb-4 sm:mb-7"
                                                    >
                                                        <div className="group relative mt-3 cursor-pointer hover:bg-opacity-50 text-white rounded-full duration-150">
                                                            <Image
                                                                src={`${srcStartWith}${pCompiny.logo_path}`}
                                                                alt={title}
                                                                width={"70"}
                                                                height={"35"}
                                                                className="static group-hover:brightness-125 duration-300"
                                                            />
                                                            <span className="absolute whitespace-nowrap opacity-0 top-4 sm:top-5 left-0 p-1.5 text-[12px] sm:text-base group-hover:opacity-100 group-hover:translate-y-2 sm:group-hover:translate-y-3 duration-300">
                                                                {pCompiny.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )
                                        )}
                                    </div>
                                </div>
                            )}

                            {genres && (
                                <div className="flex items-end justify-start flex-wrap space-x-2 md:space-x-3 lg:space-x-5 space-y-3 ">
                                    {/* categories */}
                                    {genres.map((genre) => (
                                        <span
                                            key={genre.id}
                                            className="flicker-red  bg-[#e03131] text-white p-1 px-1.5 rounded-full"
                                        >
                                            {genre.name}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {/* number_of_seasons  & number_of_episodes */}
                            <div className="flex items-end justify-start flex-wrap space-x-2 md:space-x-3 lg:space-x-5 space-y-3">
                                {number_of_seasons && (
                                    <span className="flicker-red  bg-[#e03131] text-white p-1 px-1.5 rounded-full">
                                        {number_of_seasons}{" "}
                                        {number_of_seasons > 1
                                            ? "Seasons"
                                            : "Season"}
                                    </span>
                                )}
                                {number_of_episodes && (
                                    <span className="flicker-red  bg-[#e03131] text-white p-1 px-1.5 rounded-full">
                                        {number_of_episodes}{" "}
                                        {number_of_episodes > 1
                                            ? "Episodes"
                                            : "Episode"}
                                    </span>
                                )}
                            </div>
                            {/* status */}
                            {status && (
                                <div className="flex items-center justify-start">
                                    <span
                                        className={`${
                                            status.toLocaleLowerCase() ===
                                                "released" ||
                                            status.toLocaleLowerCase() ===
                                                "ended"
                                                ? "bg-[#37b24d] flicker-green"
                                                : status.toLocaleLowerCase() ===
                                                  "post production"
                                                ? "bg-[#f59f00] flicker-yellow"
                                                : "bg-[#e03131] flicker-red"
                                        } cursor-pointer bg-opacity-80 hover:bg-opacity-100 hover:scale-105 text-white p-1 px-1.5 rounded-full duration-150 mt-5`}
                                    >
                                        {status}
                                    </span>
                                </div>
                            )}

                            {homepage && (
                                <div className="group relative flex items-center mt-5 justify-start">
                                    <div
                                        className={`flicker-black flex items-center justify-center space-x-1 ${
                                            homepage && "p-1 px-2"
                                        } z-10 rounded-2xl shadow-2xl text-md text-white bg-black  hover:opacity-100 duration-300`}
                                    >
                                        <div className="flex items-center justify-center">
                                            <Link href={homepage}>
                                                <a target="_blank">
                                                    Website Page
                                                </a>
                                            </Link>
                                            <MdOutlineKeyboardArrowRight className="shake-horizontal h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="absolute opacity-0  border-[1px] rounded-full border-black whitespace-nowrap top-6 bg-black/30 left-0 p-1.5 px-3 text-sm group-hover:opacity-100 group-hover:translate-y-3 duration-300">
                                        <Link href={homepage}>
                                            <a target="_blank">{homepage}</a>
                                        </Link>
                                    </div>
                                </div>
                            )}
                            <div className="flex items-center justify-start">
                                {/* overview */}
                                <span className="text-xs line-clamp-6 sm:line-clamp-none ml-4 sm:ml-0 sm:text-base mt-16 w-[90%] sm:w-[80%] md:[500px] lg:w-[100%] xl:w-[700px]">
                                    {overview}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecificMediaPoster;
