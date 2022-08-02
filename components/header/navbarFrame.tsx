import { NavbarFrameInterface } from "../../models/interfaces";

const NavbarFrame = (props: NavbarFrameInterface): JSX.Element => {
    const { children } = props;

    return (
        <div className="flicker-black select-none bg-transparent text-gray-200 p-2 px-0 rounded-full mb-3">
            {children}
        </div>
    );
};

export default NavbarFrame;
