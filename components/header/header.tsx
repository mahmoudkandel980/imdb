import { useEffect, useContext } from "react";
import LargeScreensMenu from "./largeScreensMenu";
import SmallScreensMenu from "./smallScreensMenu";
import ToggleMode from "../../context/darkMode";

const Header = (): JSX.Element => {
    const toggleModeCtx = useContext(ToggleMode);
    const { toggleMode } = toggleModeCtx;

    useEffect(() => {
        if (
            localStorage.getItem("mode") === "dark" ||
            (!localStorage.getItem("mode") &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            toggleMode("dark");
        } else {
            toggleMode("light");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="fixed w-full z-50 ">
            <div className="hidden lg:block ">
                {/* large screens menu */}
                <LargeScreensMenu />
            </div>
            <div className="block lg:hidden ">
                {/* small screens menu */}
                <SmallScreensMenu />
            </div>
        </div>
    );
};

export default Header;
