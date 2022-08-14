import Image from "next/image";
import Link from "next/link";

import { BsFacebook } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";

import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const FooterContent = (): JSX.Element => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-5 gap-y-10 px-5 sm:px-10">
                <div className="col-span-2 flex flex-col justify-center space-y-5 items-start">
                    <Link href={`/`}>
                        <a>
                            <Image
                                src="/images/imdb-logo.png"
                                alt="imdb-logo"
                                width={`100%`}
                                height={`35%`}
                                className="brightness-0 invert-[1] hover:brightness-100 hover:invert-0 hover:cursor-pointer"
                            />
                        </a>
                    </Link>
                    <div className="flex justify-start gap-x-3 items-center pt-5 w-8/12">
                        <Link
                            rel="noreferrer"
                            href="https://web.facebook.com/imdb?_rdc=1&_rdr"
                        >
                            <a target="_blank">
                                <BsFacebook className="social-icon bg-white text-facebook" />
                            </a>
                        </Link>
                        <Link
                            rel="noreferrer"
                            href="https://www.instagram.com/imdb/"
                        >
                            <a target="_blank">
                                <IoLogoInstagram className="social-icon instagram-icon" />
                            </a>
                        </Link>
                        <Link rel="noreferrer" href="https://twitter.com/imdb">
                            <a target="_blank">
                                <AiFillTwitterCircle className="social-icon bg-white text-twitter" />
                            </a>
                        </Link>
                        <Link
                            rel="noreferrer"
                            href="https://www.youtube.com/imdb"
                        >
                            <a target="_blank">
                                <AiFillYoutube className="social-icon bg-white text-youtube" />
                            </a>
                        </Link>
                    </div>
                    <p className="footer__text w-8/12">
                        copyright &copy; 2022 by Mahmoud Kandel. All rights
                        reserved
                    </p>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <h2 className="font-mono font-bold text-2xl capitalize mb-3">
                        movies
                    </h2>
                    <div className="flex flex-col space-y-1">
                        <Link href="/movie?type=Trending&searchType=all&page=1">
                            <a className="capitalize  hover:scale-105 hover:translate-x-1.5 duration-200">
                                trending
                            </a>
                        </Link>
                        <Link href="/movie?type=TopRated&page=1">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                top rated
                            </a>
                        </Link>
                        <Link href="/movie?type=Popular&page=1">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                popular
                            </a>
                        </Link>
                        <Link href="/movie?type=Upcoming&page=1">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                up coming
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <h2 className="font-mono font-bold text-2xl capitalize mb-3">
                        tv shows
                    </h2>
                    <div className="flex flex-col space-y-1">
                        <Link href="/tv?type=Popular&searchType=all&page=1">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                popular
                            </a>
                        </Link>
                        <Link href="/tv?type=TopRated&page=1">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                top rated
                            </a>
                        </Link>
                        <Link href="/tv?type=Airing%20Today&page=1">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                airing today
                            </a>
                        </Link>
                        <Link href="/tv?type=On%20The%20Air&page=1">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                On the air
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <h2 className="font-mono font-bold text-2xl capitalize mb-3">
                        search for
                    </h2>
                    <div className="flex flex-col space-y-1">
                        <Link href="/movie?type=Trending&searchType=all&page=1">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                movies
                            </a>
                        </Link>
                        <Link href="/tv?type=Popular&searchType=all&page=1">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                tv show
                            </a>
                        </Link>
                        <Link href="/people?type=Popular&searchType=all&page=1">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                actors
                            </a>
                        </Link>
                        <Link href="/search?&searchType=all">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                All categories
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <h2 className="font-mono font-bold text-2xl capitalize mb-3">
                        resources
                    </h2>
                    <div className="flex flex-col space-y-1">
                        <Link href="/">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                help center
                            </a>
                        </Link>

                        <Link href="/">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                recipe directory
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                api
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="capitalize hover:scale-105 hover:translate-x-1.5 duration-200">
                                Privacy & terms
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterContent;
