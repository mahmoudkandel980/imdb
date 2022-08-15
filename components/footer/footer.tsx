import { useContext } from "react";
import { useRouter } from "next/router";
import Pagination from "./pagination";
import ToggleMode from "../../context/darkMode";

import FooterContent from "./footerContent";

import { TotalPagesInterface } from "../../models/interfaces";

const Footer = (props: TotalPagesInterface): JSX.Element => {
    const { total_pages } = props;
    const router = useRouter();
    const page = router.query.page;

    const modeCtx = useContext(ToggleMode);
    const { mode } = modeCtx;
    return (
        <div className="">
            <div className={mode === "dark" ? "bg-smothDark" : "bg-white"}>
                {page && <Pagination total_pages={total_pages} />}
            </div>
            <div
                className={`${
                    mode === "dark" ? "bg-black" : "bg-smothDark "
                } py-16 text-white`}
            >
                <FooterContent />
            </div>
        </div>
    );
};

export default Footer;
