import { useMediaPredicate } from "react-media-hook";
import { useState, useEffect } from "react";
import { useRouter } from "next/router.js";
import {
    requestHomePage,
    requestMoviePage,
    requestTvPage,
    requestPeoplePage,
} from "../../libs/requests";


import { RequestMediaInterface } from "../../models/interfaces";

const Navbar = (props: RequestMediaInterface): JSX.Element => {
    const moreThan640 = useMediaPredicate("(min-width: 640px)");

    const router = useRouter();
    const { type: queryType, mediaType } = props;

    const [translateVale, SetTranslateValue] = useState(0);
    const [smTranslateVale, SetSmTranslateValue] = useState(0);
    const [sliderContent, SetSliderContent] = useState(
        router.route === "/tv"
            ? "Popular"
            : router.route === "/movie"
            ? "Trending"
            : router.route === "/people"
            ? "Popular"
            : "Movie"
    );

    useEffect(() => {
        router.route === "/tv"
            ? SetSliderContent("Popular")
            : router.route === "/movie"
            ? SetSliderContent("Trending")
            : router.route === "/people"
            ? SetSliderContent("Popular")
            : SetSliderContent("Movie");
    }, [router.route]);

    function handlerFunction(
        type: string,
        currentPage: string,
        destination: string,
        pages: string
    ) {
        const modifiedType = type.toLocaleLowerCase();
        const modifiedDestination = destination.toLocaleLowerCase();

        if (currentPage.toLocaleLowerCase().includes("home")) {
            if (modifiedType === "movie") {
                pages === "one page"
                    ? router.push(`/${modifiedDestination}`, undefined, {
                          scroll: false,
                      })
                    : router.push(
                          `/${modifiedDestination}?type=${requestMoviePage[0].type}&page=1`,
                          undefined,
                          { scroll: false }
                      );
            } else if (modifiedType === "tv") {
                pages === "one page"
                    ? router.push(`/${modifiedDestination}`, undefined, {
                          scroll: false,
                      })
                    : router.push(
                          `/${modifiedDestination}?type=${requestTvPage[0].type}&page=1`,
                          undefined,
                          { scroll: false }
                      );
            } else if (modifiedType === "people") {
                pages === "one page"
                    ? router.push(`/${modifiedDestination}`, undefined, {
                          scroll: false,
                      })
                    : router.push(
                          `/${modifiedDestination}?type=${requestPeoplePage[0].type}&page=1`,
                          undefined,
                          { scroll: false }
                      );
            }
            router.push(`/${modifiedDestination}`, undefined, {
                scroll: false,
            });
        } else {
            if (pages === "one page") {
                router.push(
                    `/${currentPage.toLowerCase()}?type=${type}`,
                    undefined,
                    { scroll: false }
                );
            } else {
                router.push(
                    `/${currentPage.toLowerCase()}?type=${type}&page=1`,
                    undefined,
                    { scroll: false }
                );
            }
        }
    }

    const onClickHandler = (
        type: string,
        currentPage: string,
        destination: string,
        pages: string
    ) => {
        if (router.route === "/movie") {
            if (type === "Trending") {
                SetTranslateValue(0);
                SetSmTranslateValue(0);
                SetSliderContent("Trending");
            }
            if (type === "TopRated") {
                SetTranslateValue(130);
                SetSmTranslateValue(82);
                SetSliderContent("Top Rated");
            }
            if (type === "Popular") {
                SetTranslateValue(260);
                SetSmTranslateValue(165);
                SetSliderContent("Popular");
            }
            if (type === "Upcoming") {
                SetTranslateValue(390);
                SetSmTranslateValue(250);
                SetSliderContent("Upcoming");
            }
        } else if (router.route === "/tv") {
            if (type === "Popular") {
                SetTranslateValue(0);
                SetSmTranslateValue(0);
                SetSliderContent("Popular");
            }
            if (type === "TopRated") {
                SetTranslateValue(130);
                SetSmTranslateValue(82);
                SetSliderContent("Top Rated");
            }
            if (type === "Airing Today") {
                SetTranslateValue(260);
                SetSmTranslateValue(165);
                SetSliderContent("Airing Today");
            }
            if (type === "On The Air") {
                SetTranslateValue(390);
                SetSmTranslateValue(250);
                SetSliderContent("On The Air");
            }
        } else if (router.route === "/people") {
            if (type === "Latest") {
                SetTranslateValue(0);
                SetSmTranslateValue(0);
                SetSliderContent("Latest");
            }
            if (type === "Popular") {
                SetTranslateValue(130);
                SetSmTranslateValue(82);
                SetSliderContent("Popular");
            }
        }

        handlerFunction(type, currentPage, destination, pages);
    };

    return (
        <div className="absolute bottom-0 left-0 z-10 w-full flex justify-center items-end">
            <div className="relative">
                <div className="flicker-white select-none bg-transparent text-gray-200 p-2 px-0 rounded-full mb-3">
                    <div
                        className={`flicker-black z-20 flex justify-center items-center absolute w-[75px] h-8 sm:w-[110px] sm:h-11 bg-black top-0 p-2 px-0 rounded-full duration-700
                        `}
                        style={{
                            transform: `translateX(${
                                moreThan640 ? translateVale : smTranslateVale
                            }px)`,
                        }}
                    >
                        <span className="text-xs sm:text-base text-white">
                            {sliderContent}
                        </span>
                    </div>
                    <div className="flex justify-between relative items-center space-x-2 sm:space-x-5 ">
                        {(router.asPath === "/"
                            ? requestHomePage
                            : router.asPath
                                  .toLocaleLowerCase()
                                  .includes("movie")
                            ? requestMoviePage
                            : router.asPath.toLocaleLowerCase().includes("tv")
                            ? requestTvPage
                            : requestPeoplePage
                        ).map((type) => (
                            <div key={type.type}>
                                <span
                                    onClick={() => {
                                        onClickHandler(
                                            type.type,
                                            type.pageName,
                                            type.title,
                                            type.pages
                                        );
                                    }}
                                    className="hidden w-[110px] text-lg sm:flex justify-center rounded-lg cursor-pointer"
                                >
                                    {type.title}
                                </span>
                                <span
                                    onClick={() => {
                                        onClickHandler(
                                            type.type,
                                            type.pageName,
                                            type.title,
                                            type.pages
                                        );
                                    }}
                                    className="sm:hidden w-[75px] text-xs flex justify-center rounded-lg cursor-pointer"
                                >
                                    {type.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
