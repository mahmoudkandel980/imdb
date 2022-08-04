import classes from "./routerSpinner.module.css";

const RouterSpinner = (): JSX.Element => {
    return (
        <div>
            <div className={classes.powerSwitch}>
                <input type="checkbox" />
                <div className={classes.button}>
                    <svg className={classes.powerOn}>
                        <use xlinkHref="#line" className={classes.line} />
                        <use xlinkHref="#circle" className={classes.circle} />
                    </svg>
                </div>
            </div>

            <svg xlinkHref="http://www.w3.org/2000/svg" className="hidden">
                <symbol
                    xlinkHref="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    id="line"
                >
                    <line x1="75" y1="34" x2="75" y2="58" />
                </symbol>
                <symbol
                    xlinkHref="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    id="circle"
                >
                    <circle cx="75" cy="80" r="35" />
                </symbol>
            </svg>
        </div>
    );
};

export default RouterSpinner;
