import { NavbarFrameInterface } from "../../models/interfaces";

const NavbarFrame = (props: NavbarFrameInterface): JSX.Element => {
    const { children } = props;

    return (
        <div className="flex justify-center items-center space-x-7 select-none  text-gray-200 p-5  pb-10">
            {children}
        </div>
    );
};

export default NavbarFrame;
