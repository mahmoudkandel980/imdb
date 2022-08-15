import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import FilterMultiSearchContext from "../../context/filterMultiSearch-context";
import ToggleMode from "../../context/darkMode";

const searchTypes = ["all", "movie", "tv", "people"];

const SelectSearchFilter = (): JSX.Element => {
    const router = useRouter();
    const [prevQuery, SetPrevQuery] = useState("");
    const [modifiedMode, setModifiedMode] = useState("");

    const toggleModeCtx = useContext(ToggleMode);
    const { mode } = toggleModeCtx;

    const multSearchCtx = useContext(FilterMultiSearchContext);
    const {
        movieLength,
        peopleLength,
        tvLength,
        toggleSelectedType,
        selectedType,
    } = multSearchCtx;

    const filterSearchTypesHandler = (filterType: string) => {
        toggleSelectedType(filterType);
    };

    const searchType = router.query.searchType;

    const path = router.asPath;
    const query = path.split("query=").pop() || "";

    useEffect(() => {
        setModifiedMode(mode);
    }, [mode]);

    useEffect(() => {
        if (prevQuery !== query) {
            /* when you select something and change value of search make sure you in the all select 
            may be you select actors and when you change the value you may not got actors so you will
            bring back to all select  */
            toggleSelectedType("all");
        }

        return () => {
            SetPrevQuery(query);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prevQuery, query]);

    useEffect(() => {
        if (
            searchType === "movie" ||
            searchType === "tv" ||
            searchType === "people"
        ) {
            /*when toggle to movies or people or even tv search set state to all helps us when
            you search for all genes get all not specific last choise after toggle type of search*/
            toggleSelectedType("all");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchType]);

    console.log(modifiedMode);

    return (
        <div
            className={`${
                movieLength + tvLength + peopleLength === 0 && "hidden"
            }`}
        >
            {router.query.searchType === "all" && router.query.query ? (
                <div
                    className={`${
                        mode === "dark" ? "text-white" : "text-smothDark "
                    } flex select-none justify-center items-center space-x-5 mt-10  lg:mt-3 text-base sm:text-xl`}
                >
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
                            } ${
                                modifiedMode === "dark"
                                    ? selectedType === searchT
                                        ? "flicker-white scale-105"
                                        : "flicker-black"
                                    : selectedType === searchT
                                    ? "flicker-black scale-105"
                                    : "flicker-white border-[1px] border-gray-300"
                            }  rounded-xl  shadow-2xl hover:scale-90  cursor-pointer  p-1 px-3 duration-200`}
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
