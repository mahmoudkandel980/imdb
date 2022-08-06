import { NextPage } from "next";
import { useRouter } from "next/router";

import { IoIosArrowBack } from "react-icons/io";

const NotFoundPage: NextPage = () => {
    const router = useRouter();

    const onClickHandler = () => {
        router.back();
    };

    return (
        <div className="h-screen w-full bg-smothDark text-white">
            <div className="flex flex-col justify-center items-center h-full space-y-10">
                <div className="flex justify-center items-center text-xl sm:text-3xl text-darkRed ">
                    <span className="font-extrabold">404</span>
                    <span className="text-3xl sm:text-6xl font-thin px-3">
                        |
                    </span>
                    <span>Page not found.</span>
                </div>
                <div>
                    <button
                        className="flex justify-center items-center space-x-0.5 flicker-black text-2xl p-2 px-10 rounded-2xl hover:scale-95 duration-300"
                        onClick={onClickHandler}
                    >
                        <IoIosArrowBack className="w-5 h-5 mt-0.5" />
                        <span>Back</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
