import Link from "next/link";
import { useRouter } from "next/router";

import PaginationButtons from "./paginationButtons";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { TotalPagesInterface } from "../../models/interfaces";

const Pagination = (props: TotalPagesInterface): JSX.Element => {
    const router = useRouter();
    const { type, page } = router.query;

    const { total_pages } = props;

    const currentPage = Number(page);
    const pathName = router.pathname;

    // when pages less than 6 will use this array of numbers for pagination
    const ordinaryPagination = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // when pages bigger than 6 will use this array of numbers for pagination
    let modifiedPagination = [];
    for (let i = currentPage - 4; i <= currentPage + 4; i++) {
        modifiedPagination.push(i);
    }

    const paginationNumbers =
        currentPage < 5 ? ordinaryPagination : modifiedPagination;

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
                            className={`text-gray-200 ${
                                currentPage === page && "w-10 sm:w-12"
                            } ${
                                (currentPage - 1 > page ||
                                    currentPage + 1 < page) &&
                                "hidden"
                            } cursor-pointer overflow-hidden sm:block ${
                                page - 1 === page * 10 && "text-gray-200"
                            }`}
                            key={page}
                        >
                            <Link
                                href={`${pathName}?type=${type}&page=${page}`}
                            >
                                <p
                                    className={`${
                                        currentPage === page && "h-10 sm:h-12"
                                    } flex justify-center items-center select-none text-sm sm:text-lg`}
                                >
                                    <span
                                        className={`m-0 flex items-center justify-center w-full h-full rounded-full ${
                                            currentPage === page
                                                ? "bg-gray-700 bg-opacity-10 border-[1px] border-gray-700 scale-75 flex-1 text-lg sm:text-xl shadow-2xl text-white hover:bg-gray-700 hover:bg-opacity-30 hover:border-transparent duration-300"
                                                : "text-gray-400"
                                        }   duration-200 hover:text-white`}
                                    >
                                        {page}
                                    </span>
                                </p>
                            </Link>
                        </div>
                    ))}

                    {/* // Next */}
                    <PaginationButtons
                        icon={
                            <MdOutlineKeyboardArrowRight className="h-7 w-7" />
                        }
                        target={"next"}
                    />
                </div>
            </div>
        </>
    );
};

export default Pagination;
