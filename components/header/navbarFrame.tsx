import { NavbarFrameInterface } from "../../models/interfaces";

const NavbarFrame = (props: NavbarFrameInterface): JSX.Element => {
    const { children } = props;

    return (
        <div className="flex justify-center items-center space-x-7 select-none pt-40 text-gray-200 p-5 bg-[#212529] pb-10 border-gray-500 border-b-[1px] ">
            {children}
        </div>
    );
};

export default NavbarFrame;
