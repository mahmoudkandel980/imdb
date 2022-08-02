import { useContext } from "react";
import { NextPage } from "next";

import SpinnerContext from "../context/spinner-context";
import RouterSpinner from "../components/ui/routerSpinner";
import Footer from "../components/footer/footer";

const Home: NextPage = () => {
    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;
    return (
        <div className="bg-[#141516]">
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    {/* <Spinner className="" /> */}
                    <RouterSpinner />
                </div>
            ) : (
                <div>{showMedia ? <></> : <Footer />}</div>
            )}
        </div>
    );
};

export default Home;
