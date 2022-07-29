import { useRouter } from "next/router";

import { PaginationButtons } from "../../models/interfaces";

const PaginationButtons = (props: PaginationButtons): JSX.Element => {
    const { icon, target } = props;
    const router = useRouter();
    const { type, page } = router.query;

    const pathName = router.pathname;
    const currentPage = Number(page);

    const pageNavHandler = (target: String) => {
        if (target.toLocaleLowerCase() === "next") {
            router.push(`${pathName}?type=${type}&page=${currentPage + 1}`);
        } else {
            router.push(`${pathName}?type=${type}&page=${currentPage - 1}`);
        }
    };

    return (
        <div className="flex flex-col items-center top-3 text-xl h-12 w-12 text-gray-200 relative group cursor-pointer">
            <div onClick={pageNavHandler.bind(null, target)}>
                <p className="inline group-hover:text-gray-400 select-none  duration-150">
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
