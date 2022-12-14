import { useState, useContext } from "react";

import ToggleMode from "../../context/darkMode";

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

    const modeCtx = useContext(ToggleMode);
    const { mode } = modeCtx;

    const onClickHandler = (mediaKey: string, mediaName: string) => {
        setMediaData({ key: mediaKey, name: mediaName });
        setIsMediaClicked(true);
    };

    return (
        <div
            className={`${
                mediaVedioData.length > 0 &&
                "p-0 2xl:p-20  py-14 pb-0 sm:py-14 sm:pb-0 "
            }`}
        >
            {mediaVedioData.length > 0 ? (
                <div className="flex">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center justify-center ">
                            <h2
                                className={`${
                                    mode === "dark"
                                        ? "text-white"
                                        : "text-smothDark"
                                } self-start lg:ml-15 text-sm md:text-xl mb-5 font-bold font-mono`}
                            >
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
                <></>
            )}

            {mediaVedioData.length > 0 && (
                <div className="container mx-auto">
                    <div className="overflow-x-auto flex  justify-start  items-end space-x-1 sm:space-x-2 md:space-x-4 md:space-y-3 ">
                        {mediaVedioData.map((mediaVedio) =>
                            mediaVedio.key.length > 0 &&
                            mediaVedio.name.length > 0 ? (
                                <div
                                    className="py-3"
                                    key={
                                        mediaVedio.published_at +
                                        mediaVedio.name
                                    }
                                >
                                    <div
                                        onClick={onClickHandler.bind(
                                            null,
                                            mediaVedio.key,
                                            mediaVedio.name
                                        )}
                                        className={`${
                                            mediaData.name ===
                                                mediaVedio.name &&
                                            `sm-flicker ${
                                                mode === "dark"
                                                    ? "bg-black text-white"
                                                    : "text-smothDark bg-white"
                                            }   scale-[1.03] font-normal shadow-2xl`
                                        } ${
                                            mode === "dark"
                                                ? "bg-white text-gray-700"
                                                : "text-white bg-smothDark"
                                        }   text-xs sm:text-sm rounded-md cursor-pointer hover:scale-x-105 select-none p-1 px-3 truncate duration-200`}
                                    >
                                        {mediaVedio.name}
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpecificMediaVideo;
