import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoAlertCircleSharp } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { CgScreen } from "react-icons/cg";

import NavElement from "./navElment";

const Header = (): JSX.Element => {
    const router = useRouter();
    const { route } = router;

    console.log(route);

    return (
        <div className="fixed w-full z-50 ">
            <div className="flex justify-between py-5 px-2 sm:p-10 sm:px-16 items-center select-none text-white bg-gradient-to-b from-[#212529]/50 to-[#212529]/0  bg-opacity-80 space-x-3 sm:space-x-10">
                <nav className="flex items-center justify-start uppercase w-[80%] sm:w-[35%]">
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
                        href="/movie?type=Trending"
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
                        href="/"
                        icon={
                            <IoAlertCircleSharp
                                className={`w-7 h-7 p-1 rounded-full sm:w-7 sm:h-7 ${
                                    route === "/about" && "flicker-white"
                                }`}
                            />
                        }
                        navEl="about"
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
                                className="brightness-0 invert-[1] hover:brightness-100 hover:invert-0 hover:cursor-pointer"
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
