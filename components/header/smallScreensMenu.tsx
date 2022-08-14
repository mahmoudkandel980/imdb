import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { AiFillHome } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { CgScreen } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import classes from "./smallScreensMenue.module.css";

const SmallScreensMenu = (): JSX.Element => {
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();
    const { route } = router;

    const clickMenueHandler = () => {
        setShowMenu((prevState) => !prevState);
    };

    return (
        <div className="flex justify-between items-center mx-5 sm:mx-10">
            <div className="mt-5 z-[1000]">
                <Link href={`/`}>
                    <a>
                        <Image
                            src="/images/imdb-logo.png"
                            alt="imdb-logo"
                            width={`75%`}
                            height={`30%`}
                            className="brightness-0 invert-[1] hover:brightness-100 hover:invert-0 hover:cursor-pointer"
                        />
                    </a>
                </Link>
            </div>
            <div className={classes.navigation}>
                <input
                    onClick={clickMenueHandler}
                    type="checkbox"
                    id="navigation-toggle"
                    className={classes.navigation__checkbox}
                    readOnly
                    checked={showMenu}
                />

                <label
                    htmlFor="navigation-toggle"
                    className={classes.navigation__button}
                >
                    <span className={classes.navigation__icon}>&nbsp;</span>
                </label>

                <div className={classes.navigation__background}>&nbsp;</div>

                <nav className={classes.navigation__nav}>
                    <ul
                        className={`h-screen flex flex-col justify-center mx-auto w-full items-center space-y-10 text-gray-400 text-xl`}
                    >
                        <li onClick={clickMenueHandler}>
                            <Link href="/">
                                <a
                                    className={`${
                                        route === "/" && "text-white"
                                    } flex justify-center items-center space-x-2 w-fit hover:scale-110 hover:-translate-y-1.5 duration-300`}
                                >
                                    <span>
                                        <AiFillHome className="w-5 h-5" />
                                    </span>
                                    <span className="capitalize">home</span>
                                </a>
                            </Link>
                        </li>
                        <li onClick={clickMenueHandler}>
                            <Link href="/movie?type=Trending&page=1">
                                <a
                                    className={`${
                                        route === "/movie" && "text-white"
                                    } flex justify-center items-center space-x-2 w-fit hover:scale-110 hover:-translate-y-1.5 duration-300`}
                                >
                                    <span>
                                        <RiMovie2Fill className="w-5 h-5" />
                                    </span>
                                    <span className="capitalize">movies</span>
                                </a>
                            </Link>
                        </li>
                        <li onClick={clickMenueHandler}>
                            <Link href="/tv?type=Popular&page=1">
                                <a
                                    className={`${
                                        route === "/tv" && "text-white"
                                    } flex justify-center items-center space-x-2 w-fit hover:scale-110 hover:-translate-y-1.5 duration-300`}
                                >
                                    <span>
                                        <CgScreen className="w-5 h-5" />
                                    </span>
                                    <span className="capitalize">tv</span>
                                </a>
                            </Link>
                        </li>
                        <li onClick={clickMenueHandler}>
                            <Link href="/people?type=Popular&page=1">
                                <a
                                    className={`${
                                        route === "/people" && "text-white"
                                    } flex justify-center items-center space-x-2 w-fit hover:scale-110 hover:-translate-y-1.5 duration-300`}
                                >
                                    <span>
                                        <BsPeopleFill className="w-5 h-5" />
                                    </span>
                                    <span className="capitalize">people</span>
                                </a>
                            </Link>
                        </li>
                        <li onClick={clickMenueHandler}>
                            <Link href="/search">
                                <a
                                    className={`${
                                        route === "/search" && "text-white"
                                    } flex justify-center items-center space-x-2 w-fit hover:scale-110 hover:-translate-y-1.5 duration-300`}
                                >
                                    <span>
                                        <BiSearch className="w-5 h-5" />
                                    </span>
                                    <span className="capitalize">search</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SmallScreensMenu;
