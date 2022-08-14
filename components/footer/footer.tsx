import { useRouter } from "next/router";
import Pagination from "./pagination";

import FooterContent from "./footerContent";

import { TotalPagesInterface } from "../../models/interfaces";

const Footer = (props: TotalPagesInterface): JSX.Element => {
    const { total_pages } = props;
    const router = useRouter();
    const page = router.query.page;
    return (
        <div className="">
            <div className=" bg-smothDark ">
                {page && <Pagination total_pages={total_pages} />}
            </div>
            <div className="py-16 bg-black text-white">
                <FooterContent />
            </div>
        </div>
    );
};

export default Footer;
