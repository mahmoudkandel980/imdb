import classes from "./routerSpinner.module.css";
import { useRouter } from "next/router";

import { AiFillHome } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { CgScreen } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const RouterSpinner = (): JSX.Element => {
    const router = useRouter();
    const pathname = router.pathname.toLowerCase();

    return (
        <div className={classes.no_freeze_spinner}>
            <div className={classes.no_freeze_spinner_id}>
                <div>
                    <span className={classes.material_icons}>
                        {pathname.includes("search") ? (
                            <BiSearch />
                        ) : pathname.includes("movie") ? (
                            <RiMovie2Fill />
                        ) : pathname.includes("tv") ? (
                            <CgScreen />
                        ) : pathname.includes("people") ? (
                            <BsPeopleFill />
                        ) : (
                            <AiFillHome />
                        )}
                    </span>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default RouterSpinner;
