import { useContext } from "react";
import { useRouter } from "next/router";

import ToggleMode from "../../context/darkMode";

import { PaginationButtons } from "../../models/interfaces";

const PaginationButtons = (props: PaginationButtons): JSX.Element => {
    const { icon, target } = props;
    const router = useRouter();
    const { type, page } = router.query;

    const pathName = router.pathname;
    const currentPage = Number(page);

    const modeCtx = useContext(ToggleMode);
    const { mode } = modeCtx;

    const pageNavHandler = (target: String) => {
        if (target.toLocaleLowerCase() === "next") {
            router.push(
                `${pathName}?type=${type}&page=${currentPage + 1}`,
                undefined,
                { scroll: false }
            );
        } else {
            router.push(
                `${pathName}?type=${type}&page=${currentPage - 1}`,
                undefined,
                { scroll: false }
            );
        }
    };

    return (
        <div
            className={`${
                mode === "dark" ? "text-gray-200" : "text-smothDark"
            } flex flex-col items-center top-3 text-xl h-12 w-12 relative group cursor-pointer`}
        >
            <div onClick={pageNavHandler.bind(null, target)}>
                <p
                    className={`${
                        mode === "dark"
                            ? "group-hover:text-gray-400"
                            : "group-hover:text-dark"
                    } inline select-none duration-150`}
                >
                    {icon}
                    <span className="absolute capitalize opacity-0 top-3 group-hover:translate-y-6 group-hover:opacity-100 duration-300">
                        {target}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default PaginationButtons;
