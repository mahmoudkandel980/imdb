import { createContext, useState } from "react";

import { Props } from "../models/context-interfaces";

const ToggleGenesContext = createContext({
    popularType: "movies",
    togglePopular: (type: string): void => {},
    topRatedType: "movies",
    toggleTopRated: (type: string): void => {},
    upComingType: "movies",
    toggleUpComing: (type: string): void => {},
});

export const ToggleGenesContextProvider = (props: Props): JSX.Element => {
    const { children } = props;
    const [popularType, setPopularType] = useState<string>("movies");
    const [topRatedType, setTopRatedType] = useState<string>("movies");
    const [upComingType, setUpComingType] = useState<string>("movies");

    const togglePopular = (type: string) => {
        setPopularType(type);
    };
    const toggleTopRated = (type: string) => {
        setTopRatedType(type);
    };
    const toggleUpComing = (type: string) => {
        setUpComingType(type);
    };

    const data = {
        popularType,
        togglePopular,
        topRatedType,
        toggleTopRated,
        upComingType,
        toggleUpComing,
    };
    return (
        <ToggleGenesContext.Provider value={data}>
            {children}
        </ToggleGenesContext.Provider>
    );
};

export default ToggleGenesContext;
