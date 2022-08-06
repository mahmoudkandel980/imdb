import { useRouter } from "next/router";
import Pagination from "./pagination";

import { TotalPagesInterface } from "../../models/interfaces";

const Footer = (props: TotalPagesInterface): JSX.Element => {
    const { total_pages } = props;
    const router = useRouter();
    const page = router.query.page;
    return (
        <div className="">
            <div className=" bg-darkFooter ">
                {page && <Pagination total_pages={total_pages} />}
            </div>
            <div className="pt-10 bg-black">Footer</div>
        </div>
    );
};

export default Footer;
