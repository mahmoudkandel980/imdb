import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import SpinnerContext from "../../context/spinner-context";

import { TbGenderMale } from "react-icons/tb";
import { CgGenderFemale } from "react-icons/cg";
import { BsEye } from "react-icons/bs";

import { PeopleDataInterface } from "../../models/people-interfaces";

const srcStartWith = "https://image.tmdb.org/t/p/original/";

const People = (props: PeopleDataInterface): JSX.Element => {
    const { peopleData } = props;
    const router = useRouter();

    const spinnerCtx = useContext(SpinnerContext);
    const { showSpinnerHandler } = spinnerCtx;

    const onClickHandler = (name: string, id: number) => {
        const type = router.query.type || "Popular";
        const page = router.pathname.toString().substring(1);
        router.push(`/${page}/${name}?type=${type}&id=${id}`);

        showSpinnerHandler(true);
    };

    return (
        <div className="bg-smothDark pt-20">
            <div className="container grid grid-cols-1 mx-auto gap-6 p-6 pt-6 gap-y-12 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {peopleData.map((person, index) => (
                    <div
                        key={person.id}
                        className="flex flex-col justify-start select-none h-full"
                        data-aos={
                            window?.innerWidth >= 1280
                                ? (index + 1) % 5 === 2
                                    ? "fade-up-right"
                                    : (index + 1) % 5 === 3
                                    ? "fade-up"
                                    : (index + 1) % 5 === 4
                                    ? "fade-up-left"
                                    : (index + 1) % 5 === 1
                                    ? "fade-up-right"
                                    : "fade-up-left"
                                : window?.innerWidth >= 1024
                                ? (index + 1) % 4 === 1
                                    ? "fade-up-right"
                                    : (index + 1) % 4 === 2
                                    ? "fade-up"
                                    : (index + 1) % 4 === 3
                                    ? "fade-up"
                                    : "fade-up-left"
                                : window?.innerWidth >= 768
                                ? (index + 1) % 3 === 1
                                    ? "fade-up-right"
                                    : (index + 1) % 3 === 2
                                    ? "fade-up"
                                    : "fade-up-left"
                                : window?.innerWidth >= 640
                                ? (index + 1) % 2 === 1
                                    ? "fade-up-right"
                                    : "fade-up-left"
                                : "fade-up"
                        }
                        data-aos-offset="50"
                        data-aos-delay={
                            window?.innerWidth >= 1280
                                ? (index + 1) % 5 === 2
                                    ? "50"
                                    : (index + 1) % 5 === 3
                                    ? "100"
                                    : (index + 1) % 5 === 4
                                    ? "50"
                                    : (index + 1) % 5 === 1
                                    ? "100"
                                    : "100"
                                : window?.innerWidth >= 1024
                                ? (index + 1) % 4 === 1
                                    ? "100"
                                    : (index + 1) % 4 === 2
                                    ? "50"
                                    : (index + 1) % 4 === 3
                                    ? "50"
                                    : "100"
                                : window?.innerWidth >= 768
                                ? (index + 1) % 3 === 1
                                    ? "100"
                                    : (index + 1) % 3 === 2
                                    ? "50"
                                    : "100"
                                : window?.innerWidth >= 640
                                ? (index + 1) % 2 === 1
                                    ? "100"
                                    : "100"
                                : "50"
                        }
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center"
                    >
                        <div className="group flex flex-col justify-center rounded-lg overflow-hidden mx-auto w-full relative hover:scale-105 sm:hover:scale-110 duration-200">
                            <div>
                                <Image
                                    src={`${srcStartWith}${person.profile_path}`}
                                    alt={person.name}
                                    width={234}
                                    height={300}
                                    layout="responsive"
                                    className="absolute text-center object-cover "
                                    priority
                                />
                            </div>
                            <div className="absolute w-full h-full bg-gradient-to-b from-darkGray/0 to-darkGray/70"></div>

                            <div className="vedio-icon--parent group">
                                <BsEye
                                    onClick={onClickHandler.bind(
                                        null,
                                        person.name,
                                        person.id
                                    )}
                                    className="vedio-icon"
                                />
                            </div>

                            {/* language */}
                            <div className="flicker absolute top-3 z-10 select-none right-3  bg-darkRed text-white p-1 px-1.5 rounded-full">
                                <span>{person.known_for_department}</span>
                            </div>

                            <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 left-3 sm:-left-2 absolute bottom-0.5 sm:bottom-1 sm:scale-[0.85] text-gray-200 w-full">
                                {/* Gender */}
                                <div className="group flex items-center justify-center space-x-1 z-10">
                                    {person.gender === 1 ? (
                                        <CgGenderFemale className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                    ) : (
                                        <TbGenderMale className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                    )}
                                    <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                        <span className=" font-mono font-medium">
                                            {person.gender === 1
                                                ? "Femail"
                                                : "Mail"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mt-4 sm:mt-3 text-gray-200">
                                {person.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default People;
