import { useRouter } from "next/router";
import Pagination from "./pagination";
const Footer = (): JSX.Element => {
    const router = useRouter();
    const page = router.query.page;
    return (
        <div className="">
            <div className=" bg-[#1f2224] ">{page && <Pagination />}</div>
            <div className="pt-10 bg-black">Footer</div>
        </div>
    );
};

export default Footer;
