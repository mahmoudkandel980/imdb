import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import FilterMultiSearchContext from "../../context/filterMultiSearch-context";

import { BsSearch } from "react-icons/bs";
import {
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

interface SearchFor {
    searchFor: string;
}
interface className {
    className: string;
}
interface Pages {
    searchPage: number;
    searchTotal_pages: number;
}

import {
    SearchPeopleInterface,
    SearchDataWithImageLengthInterface,
} from "../../models/search-interfaces";

import {
    ModifiedSearchMediaData,
    ModifiedMultiSearch,
} from "../../models/search-interfaces";

const SearchInput = (
    props: SearchFor &
        className &
        SearchPeopleInterface &
        ModifiedMultiSearch &
        SearchDataWithImageLengthInterface &
        Pages &
        ModifiedSearchMediaData
): JSX.Element => {
    const {
        searchFor,
        SearchDataWithImageLength,
        searchMedia,
        searchPage,
        searchTotal_pages,
        modifiedMultiSearch,
        searchPeople,
    } = props;
    const [searchValue, setSearchValue] = useState("");
    const [prevSearchvalue, setPrevSearchValue] = useState("");
    const [isTheSame, setIsTheSame] = useState(false);
    const [searchDataLength, setSearchDataLength] = useState(0);

    const multiSearchCtx = useContext(FilterMultiSearchContext);
    const { addMultiSearchData } = multiSearchCtx;

    // update multi search after mute +18 content and get the number of tv and movies and actors
    useEffect(() => {
        addMultiSearchData(modifiedMultiSearch!);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modifiedMultiSearch]);

    const router = useRouter();
    const pathname = router.pathname;
    const type = router.query.type || "";
    const page = router.query.page || "";
    const searchType = router.query.searchType || "all";
    const searchValueModified = searchValue.trim();

    // check if shearch  data has a data after doing forbiddent checks
    useEffect(() => {
        if (router.asPath.includes("tv") || router.asPath.includes("movie")) {
            searchMedia?.forEach((media) => {
                if (media.id === 0) {
                    setSearchDataLength(0);
                } else {
                    setSearchDataLength(searchMedia?.length || 0);
                }
            });
        } else if (router.asPath.includes("people")) {
            setSearchDataLength(searchPeople?.results.length || 0);
        } else {
            setSearchDataLength(SearchDataWithImageLength || 0);
        }
    }, [
        searchDataLength,
        SearchDataWithImageLength,
        router.asPath,
        router.query.query,
        router.query.searchType,
        searchMedia,
        searchPeople,
    ]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchValue === prevSearchvalue && searchValue.trim() !== "") {
                setIsTheSame(true);
            } else {
                setIsTheSame(false);
                setPrevSearchValue(searchValue);
                if (searchValue.trim() === "") {
                    router.push(
                        `${pathname}${type || page || searchType ? "?" : ""}${
                            type ? `type=${type}` : ""
                        }${searchType ? `&searchType=${searchType}` : ""}${
                            page ? `&page=${page}` : ""
                        }`,
                        undefined,
                        { scroll: false }
                    );
                }
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, prevSearchvalue]);

    useEffect(() => {
        if (isTheSame) {
            router.push(
                `${pathname}?${type && `type=${type}`}${
                    searchType ? `&searchType=${searchType}` : ""
                }${page && `&page=${page}`}${`&query=${searchValueModified}`}`,
                undefined,
                { scroll: false }
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue, isTheSame]);

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setIsTheSame(false);
        setSearchValue(e.currentTarget.value);
    };

    const nextPageHandler = () => {
        router.push(
            `${pathname}?${type && `type=${type}`}${page && `&page=${page}`}${
                searchType ? `&searchType=${searchType}` : ""
            }${`&query=${searchValueModified}&querypage=${searchPage! + 1}`}`,
            undefined,
            { scroll: false }
        );
    };
    const prevPageHandler = () => {
        router.push(
            `${pathname}?${type && `type=${type}`}${page && `&page=${page}`}${
                searchType ? `&searchType=${searchType}` : ""
            }${`&query=${searchValueModified}&querypage=${searchPage! - 1}`}`,
            undefined,
            { scroll: false }
        );
    };

    return (
        <div className={props.className}>
            <div className="container mx-auto py-5 pb-0">
                <div className="flex flex-col-reverse justify-center items-end relative ">
                    {searchTotal_pages && searchPage ? (
                        <div
                            className={`${
                                searchDataLength === 0 && "hidden"
                            } flex justify-center sm:justify-center items-center space-x-10 sm:space-x-0  mt-3 sm:mt-0 sm:mr-5`}
                        >
                            <div className="flicker-black p-1 select-none min-w-max rounded-md px-2 sm:px-4  text-white">
                                {SearchDataWithImageLength
                                    ? `${SearchDataWithImageLength}  Result`
                                    : ""}
                            </div>
                            <div className="flex justify-center items-center w-48 sm:w-52">
                                <div className="flex flex-col items-start sm:items-center top-3 text-xl h-12 w-12 text-gray-200 relative group cursor-pointer">
                                    {searchPage > 1 && (
                                        <div
                                            onClick={prevPageHandler}
                                            className="inline group-hover:text-gray-400 select-none duration-150"
                                        >
                                            <MdOutlineKeyboardArrowLeft className="h-7 w-7" />
                                            <span className="absolute capitalize opacity-100 text-sm sm:text-base sm:opacity-0 top-6 sm:top-3 sm:group-hover:translate-y-6 sm:group-hover:opacity-100 duration-300">
                                                prev
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="text-white select-none">
                                    {searchPage}
                                </div>
                                <div className="flex flex-col items-end sm:items-center top-3 text-xl h-12 w-12 text-gray-200 relative group cursor-pointer">
                                    {searchPage !== searchTotal_pages && (
                                        <div
                                            onClick={nextPageHandler}
                                            className="inline group-hover:text-gray-400 select-none  duration-150"
                                        >
                                            <MdOutlineKeyboardArrowRight className="h-7 w-7" />
                                            <span className="absolute capitalize opacity-100 text-sm sm:text-base sm:opacity-0 top-6 sm:top-3 sm:group-hover:translate-y-6 sm:group-hover:opacity-100 duration-300">
                                                next
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                    <div className="flex items-center justify-center space-x-5">
                        {searchDataLength > 0 && (
                            <div
                                className={`${
                                    searchDataLength === 0 && "hidden"
                                } flicker-black p-1 select-none min-w-max rounded-md px-2 sm:px-4 text-white`}
                            >
                                {searchTotal_pages} Pages
                            </div>
                        )}
                        <div className="relative flex justify-end items-center  flicker-black shadow-2xl">
                            <input
                                type="search"
                                value={searchValue}
                                onChange={changeHandler}
                                className="mr-5 sm:mr-0 focus:outline-none p-1 px-10 pl-3 placeholder:text-darkGray/50 rounded-md w-48 sm:w-52 focus:flicker-white focus:w-48 sm:focus:w-72  duration-300"
                                placeholder={`Search for ${searchFor}`}
                            />
                            <BsSearch className="w-5 h-5  absolute ml-3 top-1.5 right-8 sm:right-3 text-darkGray/80" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchInput;
