import { useContext } from "react";
import { useRouter } from "next/router";
import SpinnerContext from "../../context/spinner-context";
import { NavElInterface } from "../../models/interfaces";

const NavElement = (props: NavElInterface): JSX.Element => {
    const { href, icon, navEl } = props;
    const router = useRouter();

    const spinnerCtx = useContext(SpinnerContext);
    const { showSpinnerHandler } = spinnerCtx;

    const onClickHandler = (href: string) => {
        router.push(href);
        showSpinnerHandler(true);
    };

    return (
        <div className="w-full">
            <div
                className="group hover:text-gray-300 active:text-gray-50"
                onClick={onClickHandler.bind(null, href)}
            >
                <div className="sm:flex flex-col w-12 cursor-pointer h-12 relative items-center space-y-1">
                    {icon}
                    <span className="hidden sm:block opacity-0 absolute scale-75 group-hover:scale-100 top-0  md:group-hover:top-8 sm:top-5 sm:group-hover:top-5 text-sm group-hover:opacity-100 sm:text-lg duration-300">
                        {navEl}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NavElement;
