import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import FilterMultiSearchContext from "../../context/filterMultiSearch-context";

const searchTypes = ["all", "movie", "tv", "people"];

const SelectSearchFilter = (): JSX.Element => {
    const router = useRouter();

    const multSearchCtx = useContext(FilterMultiSearchContext);
    const { movieLength, peopleLength, tvLength, toggleSelectedType } =
        multSearchCtx;

    const filterSearchTypesHandler = (filterType: string) => {
        toggleSelectedType(filterType);
    };

    return (
        <div
            className={`${
                movieLength + tvLength + peopleLength === 0 && "hidden"
            }`}
        >
            {router.query.searchType === "all" && router.query.query ? (
                <div className="flex select-none justify-center items-center space-x-5 text-white mt-10  lg:mt-3 text-lg sm:text-xl">
                    {searchTypes.map((searchT, index) => (
                        <span
                            key={index}
                            onClick={filterSearchTypesHandler.bind(
                                null,
                                searchT
                            )}
                            className={`${
                                searchT === "movie" &&
                                movieLength === 0 &&
                                "hidden"
                            } ${
                                searchT === "tv" && tvLength === 0 && "hidden"
                            } ${
                                searchT === "people" &&
                                peopleLength === 0 &&
                                "hidden"
                            } flicker-black rounded-xl  shadow-2xl  hover:scale-90  cursor-pointer  p-1 px-3 duration-200`}
                        >
                            {searchT === "movie" && movieLength > 1
                                ? `${movieLength} Movies`
                                : searchT === "movie" && movieLength <= 1
                                ? `${movieLength} Movie`
                                : searchT === "tv"
                                ? `${tvLength} Tv`
                                : searchT === "people" && peopleLength > 1
                                ? `${peopleLength} Actors`
                                : searchT === "people" && peopleLength <= 1
                                ? `${peopleLength} Actor`
                                : `${
                                      movieLength + tvLength + peopleLength
                                  } All`}
                        </span>
                    ))}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default SelectSearchFilter;
