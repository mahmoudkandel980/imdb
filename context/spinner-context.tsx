import { createContext, useState, useEffect } from "react";

import { Props } from "../models/context-interfaces";

const SpinnerContext = createContext({
    showMedia: true,
    showSpinnerHandler: (type: boolean): void => {},
});

export const SpinnerContextProvider = (props: Props): JSX.Element => {
    const { children } = props;
    const [showMedia, setShowMedia] = useState<boolean>(false);

    useEffect(() => {
        if (showMedia) {
            const timer = setTimeout(() => {
                setShowMedia(false);
            }, 2500);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [showMedia]);

    const showSpinnerHandler = (showMedia: boolean) => {
        setShowMedia(showMedia);
    };

    const data = {
        showMedia,
        showSpinnerHandler,
    };
    return (
        <SpinnerContext.Provider value={data}>
            {children}
        </SpinnerContext.Provider>
    );
};

export default SpinnerContext;
