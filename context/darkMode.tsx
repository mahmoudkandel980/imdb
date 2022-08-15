import { createContext, useEffect, useState } from "react";

import { Props } from "../models/context-interfaces";

const initailMode: string = "";

const ToggleMode = createContext({
    mode: initailMode,
    toggleMode: (modeType: string): void => {},
});

export const ToggleModeProvider = (props: Props): JSX.Element => {
    const { children } = props;
    const [mode, setMode] = useState<string>(initailMode);

    const toggleMode = (modeType: string) => {
        setMode(modeType);
    };

    const data = {
        mode,
        toggleMode,
    };
    return <ToggleMode.Provider value={data}>{children}</ToggleMode.Provider>;
};

export default ToggleMode;
