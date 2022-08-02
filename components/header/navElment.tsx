import { useContext } from "react";
import Link from "next/link";
import SpinnerContext from "../../context/spinner-context";

import { NavElInterface } from "../../models/interfaces";

const NavElement = (props: NavElInterface): JSX.Element => {
    const { href, icon, navEl } = props;

    const spinnerCtx = useContext(SpinnerContext);
    const { showSpinnerHandler } = spinnerCtx;

    const onClickHandler = () => {
        showSpinnerHandler(true);
    };

    return (
        <div className="w-full">
            <div
                className="group hover:text-yellow-400 active:text-yellow-500"
                onClick={onClickHandler}
            >
                <Link href={href}>
                    <a className="flex flex-col w-12 h-12 relative items-center space-y-1">
                        {icon}
                        <span className="opacity-0 absolute scale-75 group-hover:scale-100 top-0 group-hover:top-5 sm:top-5 sm:group-hover:top-10 text-sm group-hover:opacity-100 sm:text-lg duration-300">
                            {navEl}
                        </span>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default NavElement;
