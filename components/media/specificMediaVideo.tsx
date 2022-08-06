import { useState } from "react";

import {
    MediaVedioDataInterface,
    initialVideoDataInterface,
} from "../../models/media-interfaces";

const SpecificMediaVideo = (
    props: MediaVedioDataInterface & initialVideoDataInterface
): JSX.Element => {
    const { mediaVedioData, initialVideoData } = props;
    const [isMediaClicked, setIsMediaClicked] = useState(false);
    const [mediaData, setMediaData] = useState({ key: "", name: "" });
    const { key, name } = initialVideoData;

    const onClickHandler = (mediaKey: string, mediaName: string) => {
        setMediaData({ key: mediaKey, name: mediaName });
        setIsMediaClicked(true);
    };

    return (
        <div className="p-0 2xl:p-20 py-20 sm:py-32">
            {mediaVedioData.length > 0 ? (
                <div className="flex">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center justify-center ">
                            <h2 className="self-start text-white lg:ml-15 text-sm md:text-xl mb-5 font-bold font-mono">
                                {isMediaClicked ? mediaData.name : name}
                            </h2>
                            <div>
                                <iframe
                                    className="sm:w-[560px] sm:h-[315px] md:w-[768px] md:h-[432px] lg:w-[1024px] lg:h-[576px] xl:w-[1024px] xl:h-[576px] rounded-md"
                                    src={`https://www.youtube.com/embed/${
                                        isMediaClicked
                                            ? mediaData.key +
                                              "?autoplay=1&mute=0"
                                            : key
                                    }`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex ">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center justify-center ">
                            <h2 className="self-start text-darkRed lg:ml-15 text-sm md:text-xl mb-5 font-bold font-mono">
                                No Media To Show
                            </h2>
                            <div className="w-full h-full">
                                <iframe
                                    className="sm:w-[100%] sm:h-[600px] mx-auto md:w-[768px] md:h-[432px] lg:w-[1024px] lg:h-[576px] xl:w-[1024px] xl:h-[576px] rounded-md"
                                    src={`https://www.youtube.com/embed/`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {mediaVedioData.length > 0 && (
                <div className="flex justify-center items-end flex-wrap space-x-1 space-y-1 sm:space-x-2 sm:space-y-3 md:space-x-4 md:space-y-3 mt-14">
                    {mediaVedioData.map((mediaVedio) =>
                        mediaVedio.key.length > 0 &&
                        mediaVedio.name.length > 0 ? (
                            <div
                                className=""
                                key={mediaVedio.published_at + mediaVedio.name}
                            >
                                <div
                                    onClick={onClickHandler.bind(
                                        null,
                                        mediaVedio.key,
                                        mediaVedio.name
                                    )}
                                    className={`${
                                        mediaData.name === mediaVedio.name &&
                                        "sm-flicker text-white bg-black scale-[1.03] font-normal shadow-2xl cursor-not-allowed"
                                    } text-gray-700 text-xs sm:text-sm rounded-md cursor-pointer hover:scale-x-105 select-none p-1 px-3  truncate bg-white duration-200`}
                                >
                                    {mediaVedio.name}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default SpecificMediaVideo;
