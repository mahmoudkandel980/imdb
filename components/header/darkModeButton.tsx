import React, { useContext, useState, useEffect } from "react";
import classes from "./darkModeButton.module.css";
import ToggleMode from "../../context/darkMode";

const DarkModeButton = (): JSX.Element => {
    const modeCtx = useContext(ToggleMode);
    const { mode, toggleMode } = modeCtx;

    const [isDarkmode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (mode === "dark") {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, [mode, isDarkmode]);

    const changeModeHandler = () => {
        if (mode === "dark") {
            setIsDarkMode(false);
            toggleMode("light");
            localStorage.setItem("mode", "light");
        } else {
            setIsDarkMode(true);
            toggleMode("dark");
            localStorage.setItem("mode", "dark");
        }
    };

    return (
        <div className="rounded-full flicker-black">
            <div className={classes.power_switch}>
                <input
                    type="checkbox"
                    checked={!isDarkmode}
                    onChange={changeModeHandler}
                />
                <div className={classes.button}>
                    <svg className={classes.power_off}>
                        <use xlinkHref="#line" className={classes.line} />
                        <use xlinkHref="#circle" className={classes.circle} />
                    </svg>
                    <svg className={classes.power_on}>
                        <use xlinkHref="#line" className={classes.line} />
                        <use xlinkHref="#circle" className={classes.circle} />
                    </svg>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                <symbol
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    id="line"
                >
                    <line x1="75" y1="34" x2="75" y2="58" />
                </symbol>
                <symbol
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    id="circle"
                >
                    <circle cx="75" cy="80" r="35" />
                </symbol>
            </svg>
        </div>
    );
};

export default DarkModeButton;
