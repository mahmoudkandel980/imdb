import Link from "next/link";
import Image from "next/image";

import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoAlertCircleSharp } from "react-icons/io5";

import NavElement from "./navElment";

const Header = (): JSX.Element => {
    return (
        <div className="fixed w-full z-50 ">
            <div className="flex justify-between py-5 px-2 sm:p-10 sm:px-16 items-center select-none text-white bg-gray-800 bg-opacity-80 space-x-3 sm:space-x-10">
                <nav className="flex items-center justify-start uppercase w-[80%] sm:w-[35%]">
                    <NavElement
                        href="/"
                        icon={<AiFillHome className="w-5 h-5 sm:w-7 sm:h-7 " />}
                        navEl="home"
                    />
                    <NavElement
                        href="/"
                        icon={<FaUserAlt className="w-5 h-5 sm:w-7 sm:h-7" />}
                        navEl="account"
                    />
                    <NavElement
                        href="/"
                        icon={<IoMdCall className="w-5 h-5 sm:w-7 sm:h-7" />}
                        navEl="contact"
                    />
                    <NavElement
                        href="/"
                        icon={
                            <IoAlertCircleSharp className="w-5 h-5 sm:w-7 sm:h-7" />
                        }
                        navEl="about"
                    />
                </nav>
                <div className="flex items-stretch justify-end w-[50%]">
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
