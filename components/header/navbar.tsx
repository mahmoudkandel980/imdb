import { useState } from "react";
import { useRouter } from "next/router.js";
import {
    requestHomePage,
    requestMoviePage,
    requestTvPage,
    requestPeoplePage,
} from "../../libs/requests";

import NavbarFrame from "./navbarFrame";

import { RequestMediaInterface } from "../../models/interfaces";

const Navbar = (props: RequestMediaInterface): JSX.Element => {
    const router = useRouter();
    const { type: queryType, mediaType } = props;

    const [translateVale, SetTranslateValue] = useState(0);
    const [sliderContent, SetSliderContent] = useState(
        router.route === "/tv" ? "Trending" : "Popular"
    );

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
                    ? router.push(`/${modifiedDestination}`)
                    : router.push(
                          `/${modifiedDestination}?type=${requestMoviePage[0].type}&page=1`
                      );
            } else if (modifiedType === "tv") {
                pages === "one page"
                    ? router.push(`/${modifiedDestination}`)
                    : router.push(
                          `/${modifiedDestination}?type=${requestTvPage[0].type}&page=1`
                      );
            } else {
                pages === "one page"
                    ? router.push(`/${modifiedDestination}`)
                    : router.push(
                          `/${modifiedDestination}?type=${requestPeoplePage[0].type}&page=1`
                      );
            }
            router.push(`/${modifiedDestination}`);
        } else {
            if (pages === "one page") {
                router.push(`/${currentPage.toLowerCase()}?type=${type}`);
            } else {
                router.push(
                    `/${currentPage.toLowerCase()}?type=${type}&page=1`
                );
            }
        }
    }

    const onClickHandlerSmallScreen = (
        type: string,
        currentPage: string,
        destination: string,
        pages: string
    ) => {
        if (router.route === "/movie") {
            if (type === "Trending") {
                SetTranslateValue(0);
                SetSliderContent("Trending");
            }
            if (type === "TopRated") {
                SetTranslateValue(82);
                SetSliderContent("Top Rated");
            }
            if (type === "Popular") {
                SetTranslateValue(165);
                SetSliderContent("Popular");
            }
            if (type === "Upcoming") {
                SetTranslateValue(250);
                SetSliderContent("Upcoming");
            }
        } else if (router.route === "/tv") {
            if (type === "Popular") {
                SetTranslateValue(0);
                SetSliderContent("Popular");
            }
            if (type === "TopRated") {
                SetTranslateValue(82);
                SetSliderContent("Top Rated");
            }
            if (type === "Airing Today") {
                SetTranslateValue(165);
                SetSliderContent("Airing Today");
            }
            if (type === "On The Air") {
                SetTranslateValue(250);
                SetSliderContent("On The Air");
            }
        }

        handlerFunction(type, currentPage, destination, pages);
    };

    const onClickHandler = (
        type: string,
        currentPage: string,
        destination: string,
        pages: string
    ) => {
        if (router.route === "/movie") {
            if (type === "Trending") {
                SetTranslateValue(0);
                SetSliderContent("Trending");
            }
            if (type === "TopRated") {
                SetTranslateValue(130);
                SetSliderContent("Top Rated");
            }
            if (type === "Popular") {
                SetTranslateValue(260);
                SetSliderContent("Popular");
            }
            if (type === "Upcoming") {
                SetTranslateValue(390);
                SetSliderContent("Upcoming");
            }
        } else if (router.route === "/tv") {
            if (type === "Popular") {
                SetTranslateValue(0);
                SetSliderContent("Popular");
            }
            if (type === "TopRated") {
                SetTranslateValue(130);
                SetSliderContent("Top Rated");
            }
            if (type === "Airing Today") {
                SetTranslateValue(260);
                SetSliderContent("Airing Today");
            }
            if (type === "On The Air") {
                SetTranslateValue(390);
                SetSliderContent("On The Air");
            }
        }

        handlerFunction(type, currentPage, destination, pages);
    };
    return (
        <div className="absolute bottom-0 left-0 z-10 w-full flex justify-center items-end">
            <div className="relative">
                <NavbarFrame>
                    <div
                        className={`flicker-white z-20 flex justify-center items-center absolute w-[75px] h-8 sm:w-[110px] sm:h-11 bg-black top-0 p-2 px-0 rounded-full duration-700
                        `}
                        style={{ transform: `translateX(${translateVale}px)` }}
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
                                    onClick={onClickHandler.bind(
                                        null,
                                        type.type,
                                        type.pageName,
                                        type.title,
                                        type.pages
                                    )}
                                    className="hidden w-[110px] text-lg sm:flex justify-center rounded-lg cursor-pointer"
                                >
                                    {type.title}
                                </span>
                                <span
                                    onClick={onClickHandlerSmallScreen.bind(
                                        null,
                                        type.type,
                                        type.pageName,
                                        type.title,
                                        type.pages
                                    )}
                                    className="sm:hidden w-[75px] text-xs flex justify-center rounded-lg cursor-pointer"
                                >
                                    {type.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </NavbarFrame>
            </div>
        </div>
    );
};

export default Navbar;
