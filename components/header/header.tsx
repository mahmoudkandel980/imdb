import { useRouter } from "next/router";
import LargeScreensMenu from "./largeScreensMenu";
import SmallScreensMenu from "./smallScreensMenu";

const Header = (): JSX.Element => {
    const router = useRouter();

    return (
        <div className="fixed w-full z-50 ">
            <div className="hidden lg:block ">
                {/* large screens menu */}
                <LargeScreensMenu />
            </div>
            <div className="block lg:hidden ">
                {/* small screens menu */}
                <SmallScreensMenu />
            </div>
        </div>
    );
};

export default Header;
