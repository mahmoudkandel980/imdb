import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { BsSearch } from "react-icons/bs";
import {
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

interface SearchFor {
    searchFor: string;
}
import {
    SearchMediaInterface,
    SearchPeopleInterface,
} from "../../models/search-interfaces";

const SearchInput = (
    props: SearchFor & SearchMediaInterface & SearchPeopleInterface
): JSX.Element => {
    const { searchFor } = props;
    const [searchValue, setSearchValue] = useState("");
    const [prevSearchvalue, setPrevSearchValue] = useState("");
    const [isTheSame, setIsTheSame] = useState(false);

    // const [searchPage, setSearchPage] = useState(1);
    let searchPage = props.searchMedia?.page || props.searchPeople?.page;
    const searchTotal_pages =
        props.searchMedia?.total_pages || props.searchPeople?.total_pages;

    const router = useRouter();
    const pathname = router.pathname;
    const type = router.query.type;
    const page = router.query.page;
    const searchValueModified = searchValue.trim();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchValue === prevSearchvalue && searchValue.trim() !== "") {
                setIsTheSame(true);
            } else {
                setIsTheSame(false);
                setPrevSearchValue(searchValue);
                if (searchValue.trim() === "") {
                    router.push(
                        `${pathname}?${type && `type=${type}`}${
                            page && `&page=${page}`
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
                    page && `&page=${page}`
                }${`&query=${searchValueModified}`}`,
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
        // setSearchPage((prevState) => prevState + 1);

        router.push(
            `${pathname}?${type && `type=${type}`}${
                page && `&page=${page}`
            }${`&query=${searchValueModified}&querypage=${searchPage! + 1}`}`,
            undefined,
            { scroll: false }
        );
    };
    const prevPageHandler = () => {
        // setSearchPage((prevState) => prevState - 1);

        router.push(
            `${pathname}?${type && `type=${type}`}${
                page && `&page=${page}`
            }${`&query=${searchValueModified}&querypage=${searchPage! - 1}`}`,
            undefined,
            { scroll: false }
        );
    };

    return (
        <div className="bg-darkGray">
            <div className="container mx-auto py-5 pb-0">
                <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-end items-end sm:items-center relative space-x-10 sm:space-x-20">
                    {searchTotal_pages && searchPage && (
                        <div className="flex justify-center sm:justify-center items-center max-w-max w-full space-x-5 mt-3 sm:mt-0 sm:mr-5">
                            <div className="flex flex-col items-end sm:items-center top-3 text-xl h-12 w-12 text-gray-200 relative group cursor-pointer">
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
                    )}
                    <div className="flex items-center justify-center space-x-5">
                        {searchTotal_pages && (
                            <div className="flicker-black p-1 select-none min-w-max rounded-md px-2 sm:px-4 text-white">
                                {searchTotal_pages} Pages
                            </div>
                        )}
                        <div className="relative flex justify-end items-center">
                            <input
                                type="search"
                                value={searchValue}
                                onChange={changeHandler}
                                className="focus:outline-none p-1 px-10 pl-3 placeholder:text-darkGray/50 rounded-md w-48 sm:w-52 focus:flicker-white focus:w-48 sm:focus:w-72  duration-300"
                                placeholder={`Search for ${searchFor}`}
                            />
                            <BsSearch className="w-5 h-5  absolute ml-3 top-1.5 right-3 text-darkGray/80" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchInput;
