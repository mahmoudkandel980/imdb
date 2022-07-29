import { useState, useEffect } from "react";
import { movieVedioDataInterface } from "../../models/interfaces";

const SpecialMediaVideo = (props: movieVedioDataInterface): JSX.Element => {
    const { movieVedioData } = props;
    const [initialVideo, setInitialVideo] = useState({ key: "", name: "" });
    const [isMovieClicked, setIsMovieClicked] = useState(false);
    const [MovieData, setMovieData] = useState({ key: "", name: "" });

    useEffect(() => {
        movieVedioData.forEach((vedio) => {
            const name = vedio.name;
            const key = vedio.key;

            if (name === "Official Trailer") {
                setInitialVideo({ key: key, name: name });
                return;
            } else if (name.includes("Official Trailer")) {
                setInitialVideo({ key: key, name: name });
                return;
            } else if (name.includes("Official Trailer")) {
                setInitialVideo({ key: key, name: name });
                return;
            } else if (name.includes("Trailer")) {
                setInitialVideo({ key: key, name: name });
                return;
            } else if (name.toLocaleLowerCase().includes("promo")) {
                setInitialVideo({ key: key, name: name });
                return;
            } else if (name.includes("CLIP")) {
                setInitialVideo({ key: key, name: name });
                return;
            } else {
                setInitialVideo({ key: key, name: name });
                return;
            }
        });
    }, []);

    const onClickHandler = (movieKey: string, movieName: string) => {
        setMovieData({ key: movieKey, name: movieName });
        setIsMovieClicked(true);
    };

    return (
        <div className="p-0 2xl:p-20 py-20 sm:py-32">
            {movieVedioData.length > 0 ? (
                <div className="flex ">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center justify-center ">
                            <h2 className="self-start text-white lg:ml-15 text-sm md:text-xl mb-5 font-bold font-mono">
                                {isMovieClicked
                                    ? MovieData.name
                                    : initialVideo.name}
                            </h2>
                            <div className="">
                                <iframe
                                    className="sm:w-[560px] sm:h-[315px] md:w-[768px] md:h-[432px] lg:w-[1024px] lg:h-[576px] xl:w-[1024px] xl:h-[576px] rounded-md"
                                    src={`https://www.youtube.com/embed/${
                                        isMovieClicked
                                            ? MovieData.key +
                                              "?autoplay=1&mute=0"
                                            : initialVideo.key
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
                            <h2 className="self-start text-red-500 lg:ml-15 text-sm md:text-xl mb-5 font-bold font-mono">
                                No Media To Show
                            </h2>
                            <div className="">
                                <iframe
                                    className="sm:w-[560px] sm:h-[315px] md:w-[768px] md:h-[432px] lg:w-[1024px] lg:h-[576px] xl:w-[1024px] xl:h-[576px] rounded-md"
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

            {movieVedioData.length > 0 && (
                <div className="flex justify-center items-end flex-wrap space-x-1 space-y-1 sm:space-x-2 sm:space-y-3 md:space-x-4 md:space-y-3 mt-14">
                    {movieVedioData.map((movieVedio) =>
                        movieVedio.key.length > 0 &&
                        movieVedio.name.length > 0 ? (
                            <div
                                className=""
                                key={movieVedio.published_at + movieVedio.name}
                            >
                                <div
                                    onClick={onClickHandler.bind(
                                        null,
                                        movieVedio.key,
                                        movieVedio.name
                                    )}
                                    className={`${
                                        MovieData.name === movieVedio.name &&
                                        "sm-flicker text-white bg-black scale-[1.03] font-normal shadow-2xl cursor-not-allowed"
                                    } text-gray-700 text-xs sm:text-sm rounded-md cursor-pointer hover:scale-x-105 select-none p-1 px-3  truncate bg-white duration-200`}
                                >
                                    {movieVedio.name}
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

export default SpecialMediaVideo;
