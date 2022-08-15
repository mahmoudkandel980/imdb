import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import Header from "../components/header/header";
import SlideUp from "../components/ui/slideUp";

import { MovieContextProvider } from "../context/movieData-context";
import { SpinnerContextProvider } from "../context/spinner-context";
import { FilterMultiSearchContextProvider } from "../context/filterMultiSearch-context";
import { ForbiddenMediaContentContextProvider } from "../context/forbiddenMediaContent-context";
import { ForbiddenHomePageMediaContextProvider } from "../context/forbiddenhomePageMedia-context";
import { ToggleGenesContextProvider } from "../context/toggleGenes-context";
import { ToggleModeProvider } from "../context/darkMode";

import "../styles/globals.css";
import "../styles/trendingMediaPoster.css";
import "aos/dist/aos.css";
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const [mode, setMode] = useState("");

    useEffect(() => {
        if (
            localStorage.getItem("mode") === "dark" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            setMode("dark");
            localStorage.setItem("mode", "dark");
        } else {
            setMode("light");
            localStorage.setItem("mode", "light");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Head>
                <title>IMDB</title>
                <meta name="description" content="movies and seriales series" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <SpinnerContextProvider>
                <ForbiddenMediaContentContextProvider>
                    <MovieContextProvider>
                        <FilterMultiSearchContextProvider>
                            <ForbiddenHomePageMediaContextProvider>
                                <ToggleModeProvider>
                                    <ToggleGenesContextProvider>
                                        <Header />
                                        <SlideUp />
                                        <Component {...pageProps} />
                                    </ToggleGenesContextProvider>
                                </ToggleModeProvider>
                            </ForbiddenHomePageMediaContextProvider>
                        </FilterMultiSearchContextProvider>
                    </MovieContextProvider>
                </ForbiddenMediaContentContextProvider>
            </SpinnerContextProvider>
        </div>
    );
}

export default MyApp;
