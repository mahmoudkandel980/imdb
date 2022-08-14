import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HiChevronDoubleUp } from "react-icons/hi";

const SlideUp = (): JSX.Element => {
    const [showSlideupButton, setShowSlideupButton] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.pageYOffset >= window.innerHeight / 2) {
                setShowSlideupButton(true);
            } else {
                setShowSlideupButton(false);
            }
        };
    }, []);

    const slideupHandler = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            {showSlideupButton && (
                <div
                    className={`fixed w-10 h-10 bg-transparent flicker-white bottom-10 right-5 sm:right-16  z-[1000] flex justify-center items-center rounded-full hover:-translate-y-1 hover:scale-110 duration-200`}
                >
                    <div className="flex justify-center items-center ">
                        <button onClick={slideupHandler}>
                            <HiChevronDoubleUp className="h-7 w-7 text-white" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SlideUp;
