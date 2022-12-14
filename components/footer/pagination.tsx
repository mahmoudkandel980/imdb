import { useContext } from "react";
import { useRouter } from "next/router";

import PaginationButtons from "./paginationButtons";
import ToggleMode from "../../context/darkMode";

import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { TotalPagesInterface } from "../../models/interfaces";

const Pagination = (props: TotalPagesInterface): JSX.Element => {
    const router = useRouter();
    const { type, page } = router.query;

    const { total_pages } = props;

    const currentPage = Number(page);
    const pathName = router.pathname;

    const modeCtx = useContext(ToggleMode);
    const { mode } = modeCtx;

    // when pages less than 6 will use this array of numbers for pagination
    const ordinaryPagination = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // when pages bigger than 6 will use this array of numbers for pagination
    let modifiedPagination = [];
    for (let i = currentPage - 4; i <= currentPage + 4; i++) {
        modifiedPagination.push(i);
    }

    const paginationNumbers =
        currentPage < 5 ? ordinaryPagination : modifiedPagination;

    const onClickpageHandler = (pathName: string, type: any, page: number) => {
        router.push(`${pathName}?type=${type}&page=${page}`, undefined, {
            scroll: false,
        });
    };

    return (
        <>
            <div className="flex w-full items-center justify-center text-lg font-mono">
                <div className="flex justify-between items-center my-10 mb-16 w-56 sm:w-96 md:w-[45%] lg:w-[35rem]">
                    {currentPage > 1 && (
                        // Prev
                        <PaginationButtons
                            icon={
                                <MdOutlineKeyboardArrowLeft className="h-7 w-7" />
                            }
                            target={"prev"}
                        />
                    )}

                    {/* Pages */}
                    {paginationNumbers.map((page) => (
                        <div
                            className={`${
                                mode === "dark" ? "smothDark" : "text-smothDark"
                            }  ${currentPage === page && "w-10 sm:w-12"} ${
                                (currentPage - 1 > page ||
                                    currentPage + 1 < page) &&
                                "hidden"
                            } cursor-pointer overflow-hidden sm:block ${
                                page - 1 === page * 10 &&
                                `${
                                    mode === "dark"
                                        ? "text-gray-200"
                                        : "text-smothDark"
                                } `
                            }`}
                            key={page}
                        >
                            <div
                                onClick={onClickpageHandler.bind(
                                    null,
                                    pathName,
                                    type,
                                    page
                                )}
                                // href={`${pathName}?type=${type}&page=${page}`}
                            >
                                <p
                                    className={`${
                                        currentPage === page && "h-10 sm:h-12"
                                    } flex justify-center items-center select-none text-sm sm:text-lg`}
                                >
                                    <span
                                        className={`m-0 flex items-center justify-center w-full h-full rounded-full ${
                                            currentPage === page
                                                ? `${
                                                      mode === "dark"
                                                          ? "bg-gray-700 border-gray-700 text-white hover:bg-gray-700"
                                                          : "bg-black border-gray-300 text-black hover:bg-white"
                                                  }  bg-opacity-10 border-[1px] scale-75 flex-1 text-lg sm:text-xl shadow-2xl hover:bg-opacity-30 hover:border-transparent duration-300`
                                                : `${
                                                      mode === "dark"
                                                          ? "text-gray-400"
                                                          : "text-smothDark"
                                                  } `
                                        }  ${
                                            mode === "dark"
                                                ? "hover:text-white"
                                                : "hover:text-black"
                                        } duration-200 `}
                                    >
                                        {page}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                    {currentPage !== total_pages && (
                        <PaginationButtons
                            icon={
                                <MdOutlineKeyboardArrowRight className="h-7 w-7" />
                            }
                            target={"next"}
                        />
                    )}
                    {/* // Next */}
                </div>
            </div>
        </>
    );
};

export default Pagination;
