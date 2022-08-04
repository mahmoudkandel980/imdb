import { useContext } from "react";
import { NextPage } from "next";

import SpinnerContext from "../context/spinner-context";
import RouterSpinner from "../components/ui/routerSpinner";
import Footer from "../components/footer/footer";

const Home: NextPage = () => {
    const spinnerCtx = useContext(SpinnerContext);
    const { showMedia } = spinnerCtx;
    return (
        <div className="bg-[#141516] h-screen">
            {showMedia ? (
                <div className="h-screen w-full flex justify-center items-center">
                    <RouterSpinner />
                </div>
            ) : (
                <div>{showMedia ? <></> : <Footer total_pages={1} />}</div>
            )}
        </div>
    );
};

export default Home;
