import React, { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";

const SelectType = (): JSX.Element => {
    const router = useRouter();

    const [options] = useState(["all", "movie", "tv", "people"]);
    const [searchType, setSearchType] = useState(options[0]);
    useEffect(() => {
        router.push(
            `/search?searchType=${searchType}${
                router.query.query ? `&query=${router.query.query}` : ""
            }`,
            undefined,
            {
                scroll: false,
            }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchType]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSearchType(e.target.value);
    };
    return (
        <div className="flex justify-end mx-auto container">
            <select
                name="Types"
                id="Types"
                className="w-48 sm:w-52 p-1 mr-5 sm:mr-0 rounded-md focus:outline-none"
                defaultValue={searchType}
                onChange={onChangeHandler}
            >
                {options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectType;
