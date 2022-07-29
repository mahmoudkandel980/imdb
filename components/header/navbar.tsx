import { useRouter } from "next/router.js";
import {
    requestHomePage,
    requestMoviePage,
    requestTvPage,
    requestPeoplePage,
} from "../../libs/requests";

import NavbarFrame from "./navbarFrame";

import { RequestMediaInterface } from "../../models/interfaces";

const Navbar = (props: RequestMediaInterface): JSX.Element => {
    const router = useRouter();
    const { type: queryType, mediaType } = props;

    const onClickHandler = (
        type: string,
        currentPage: string,
        destination: string,
        pages: string
    ) => {
        const modifiedType = type.toLocaleLowerCase();
        const modifiedDestination = destination.toLocaleLowerCase();
        if (currentPage.toLocaleLowerCase().includes("home")) {
            if (modifiedType === "movie") {
                pages === "one page"
                    ? router.push(`/${modifiedDestination}`)
                    : router.push(
                          `/${modifiedDestination}?type=${requestMoviePage[0].type}&page=1`
                      );
            } else if (modifiedType === "tv") {
                pages === "one page"
                    ? router.push(`/${modifiedDestination}`)
                    : router.push(
                          `/${modifiedDestination}?type=${requestTvPage[0].type}&page=1`
                      );
            } else {
                pages === "one page"
                    ? router.push(`/${modifiedDestination}`)
                    : router.push(
                          `/${modifiedDestination}?type=${requestPeoplePage[0].type}&page=1`
                      );
            }

            router.push(`/${modifiedDestination}`);
        } else {
            if (pages === "one page") {
                router.push(`/${currentPage.toLowerCase()}?type=${type}`);
            } else {
                router.push(
                    `/${currentPage.toLowerCase()}?type=${type}&page=1`
                );
            }
        }
    };
    return (
        <NavbarFrame >
            {(router.asPath === "/"
                ? requestHomePage
                : router.asPath.toLocaleLowerCase().includes("movie")
                ? requestMoviePage
                : router.asPath.toLocaleLowerCase().includes("tv")
                ? requestTvPage
                : requestPeoplePage
            ).map((type) => (
                <h3
                    onClick={onClickHandler.bind(
                        null,
                        type.type,
                        type.pageName,
                        type.title,
                        type.pages
                    )}
                    key={type.type}
                    className={`${
                        type.type === queryType &&
                        type.pageName === mediaType &&
                        "border-b-yellow-500 border-t-yellow-500 text-yellow-500"
                    } text-md sm:text-2xl p-2 rounded-lg cursor-pointer border-t-2 border-b-2 border-transparent hover:border-b-white duration-150 hover:text-white  active:border-b-yellow-500  active:text-yellow-500`}
                >
                    {type.title}
                </h3>
            ))}
        </NavbarFrame>
    );
};

export default Navbar;
