import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ToggleMode from "../../context/darkMode";
import DarkModeButton from "./darkModeButton";

import { AiFillHome } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { CgScreen } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import NavElement from "./navHeaderElment";

const LargeScreensMenu = (): JSX.Element => {
    const router = useRouter();
    const { route } = router;

    const toggleModeCtx = useContext(ToggleMode);
    const { mode } = toggleModeCtx;

    return (
        <div className="flex justify-between py-2 px-1 sm:p-4 sm:px-2 md:px-10 items-center select-none text-white bg-gradient-to-b from-smothDark/50 to-smothDark/30  bg-opacity-80 space-x-3 sm:space-x-10">
            <nav className="flex items-center justify-start uppercase w-[80%]  lg:w-[55%] xl:w-[40%]">
                <NavElement
                    href="/"
                    icon={
                        <AiFillHome
                            className={`w-7 h-7 p-1 rounded-full sm:w-7 sm:h-7 ${
                                route === "/" &&
                                `${
                                    mode === "dark"
                                        ? "flicker-white"
                                        : "flicker-black"
                                }`
                            }`}
                        />
                    }
                    navEl="home"
                />
                <NavElement
                    href="/movie?type=Trending&page=1"
                    icon={
                        <RiMovie2Fill
                            className={`w-7 h-7 p-1 rounded-full sm:w-7 sm:h-7 ${
                                route === "/movie" &&
                                `${
                                    mode === "dark"
                                        ? "flicker-white"
                                        : "flicker-black"
                                }`
                            }`}
                        />
                    }
                    navEl="Movies"
                />
                <NavElement
                    href="/tv?type=Popular&page=1"
                    icon={
                        <CgScreen
                            className={`w-7 h-7 p-1 rounded-full sm:w-7 sm:h-7 ${
                                route === "/tv" &&
                                `${
                                    mode === "dark"
                                        ? "flicker-white"
                                        : "flicker-black"
                                }`
                            }`}
                        />
                    }
                    navEl="Tv"
                />
                <NavElement
                    href="/people?type=Popular&page=1"
                    icon={
                        <BsPeopleFill
                            className={`w-7 h-7 p-1 rounded-full sm:w-7 sm:h-7 ${
                                route === "/people" &&
                                `${
                                    mode === "dark"
                                        ? "flicker-white"
                                        : "flicker-black"
                                }`
                            }`}
                        />
                    }
                    navEl="people"
                />
                <NavElement
                    href="/search"
                    icon={
                        <BiSearch
                            className={`w-7 h-7 p-1 rounded-full sm:w-7 sm:h-7 ${
                                route === "/search" &&
                                `${
                                    mode === "dark"
                                        ? "flicker-white"
                                        : "flicker-black"
                                }`
                            }`}
                        />
                    }
                    navEl="search"
                />
            </nav>
            <div className="flex justify-center items-center space-x-5">
                <DarkModeButton />
                <div className="flex items-stretch justify-end w-[30%] ">
                    <Link href={`/`}>
                        <a>
                            <Image
                                src="/images/imdb-logo.png"
                                alt="imdb-logo"
                                width={`200%`}
                                height={`80%`}
                                className="hover:cursor-pointer"
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LargeScreensMenu;
