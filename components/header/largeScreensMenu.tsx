import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { AiFillHome } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { CgScreen } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import NavElement from "./navHeaderElment";

const LargeScreensMenu = (): JSX.Element => {
    const router = useRouter();
    const { route } = router;

    return (
        <div className="flex justify-between py-2 px-1 sm:p-5 sm:px-2 md:px-10 items-center select-none text-white bg-gradient-to-b from-darkGray/50 to-darkGray/0  bg-opacity-80 space-x-3 sm:space-x-10">
            <nav className="flex items-center justify-start uppercase w-[80%]  lg:w-[55%] xl:w-[40%]">
                <NavElement
                    href="/"
                    icon={
                        <AiFillHome
                            className={`w-7 h-7 p-1 rounded-full sm:w-7 sm:h-7 ${
                                route === "/" && "flicker-white"
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
                                route === "/movie" && "flicker-white"
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
                                route === "/tv" && "flicker-white"
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
                                route === "/people" && "flicker-white"
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
                                route === "/search" && "flicker-white"
                            }`}
                        />
                    }
                    navEl="search"
                />
            </nav>
            <div className="flex items-stretch justify-end w-[30%] ">
                <Link href={`/`}>
                    <a>
                        <Image
                            src="/images/imdb-logo.png"
                            alt="imdb-logo"
                            width={`75%`}
                            height={`30%`}
                            className="hover:cursor-pointer"
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default LargeScreensMenu;
