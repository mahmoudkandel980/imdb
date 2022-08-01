import Image from "next/image";

import { CardInterface } from "../../models/media-interfaces";

import { AiFillStar, AiFillLike } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";

const srcStartWith = "https://image.tmdb.org/t/p/original/";

const MediaCard = (props: CardInterface): JSX.Element => {
    const {
        name,
        id,
        backdrop_path,
        first_air_date,
        original_language,
        overview,
        release_date,
        title,
        vote_average,
        vote_count,
        poster_path,
    } = props.media;
    const { onClickHandler } = props;

    const mediahasVideo = vote_average === 0 ? false : true;

    return (
        <div
            key={id}
            className="flex flex-col justify-start select-none h-full"
        >
            <div className="group flex flex-col justify-center rounded-lg overflow-hidden mx-auto w-full relative hover:scale-105 sm:hover:scale-110 duration-200">
                <div>
                    <Image
                        src={`${srcStartWith}${backdrop_path || poster_path}`}
                        alt={title}
                        width={234}
                        height={300}
                        layout="responsive"
                        className="absolute text-center object-cover "
                        priority
                    />
                </div>
                <div className="absolute w-full h-full bg-gradient-to-b from-[#212529]/0 to-[#212529]/70"></div>

                {/* coming soon */}
                {vote_average === 0 ? (
                    <>
                        <div className="flex justify-center items-center absolute bg-[#212529] opacity-80 w-full h-full">
                            <p className="capitalize text-4xl text-white">
                                coming soon
                            </p>
                        </div>
                        <div className="vedio-icon--parent group">
                            <BsEye
                                onClick={onClickHandler.bind(
                                    null,
                                    title,
                                    name,
                                    id,
                                    mediahasVideo,
                                    props.media
                                )}
                                className="vedio-icon"
                            />
                        </div>
                    </>
                ) : (
                    <div className="vedio-icon--parent group">
                        <BiPlayCircle
                            onClick={onClickHandler.bind(
                                null,
                                title,
                                name,
                                id,
                                mediahasVideo,
                                props.media
                            )}
                            className="vedio-icon"
                        />
                    </div>
                )}

                {/* rate */}
                {vote_average > 0 && (
                    <div className="flicker flex items-center justify-center space-x-1 z-10 text-yellow-400 absolute top-4 -left-12 w-36 h-7 -rotate-45 bg-[#e03131]">
                        <AiFillStar className="h-5 w-5 " />
                        <span>{vote_average.toFixed(1)}</span>
                    </div>
                )}

                {/* language */}
                <div className="flicker absolute top-3 z-10 select-none right-3  bg-[#e03131] text-white p-1 px-1.5 rounded-full">
                    <span>{original_language.toLocaleUpperCase()}</span>
                </div>

                {/* likes and date */}
                <div className="flex items-center justify-center space-x-1 z-10 text-yellow-400 absolute top-4 -left-12 w-36 h-7 -rotate-45 bg-[#e03131]">
                    <AiFillStar className="h-5 w-5 " />
                    {vote_average ? (
                        <span>{vote_average.toFixed(1)}</span>
                    ) : (
                        <span>0</span>
                    )}
                </div>

                <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 left-3 sm:-left-2 absolute bottom-10 sm:bottom-3  sm:scale-[0.85] text-gray-200 w-full">
                    {/* like */}
                    <div className="group flex items-center justify-center space-x-1 z-10">
                        <AiFillLike className="flicker-white h-7 w-7 text-gray-300 bg-[#212529] p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                        <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                            <span className=" font-mono font-medium">
                                {vote_count}
                            </span>
                        </div>
                    </div>
                    {/* date */}
                    <div
                        className={`${
                            !release_date && !first_air_date && "hidden"
                        } group flex items-center justify-center space-x-1 z-10`}
                    >
                        <GoCalendar className="flicker-white h-7 w-7 text-gray-300 bg-[#212529] p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                        <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                            <span className="font-mono font-medium">
                                {release_date || first_air_date}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="mt-4 sm:mt-3 text-gray-200">{title || name}</h3>
            </div>
        </div>
    );
};

export default MediaCard;
