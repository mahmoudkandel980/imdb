import { useContext } from "react";
import { useRouter } from "next/router.js";
import Image from "next/image";

import { BsEye } from "react-icons/bs";
import { TbGenderMale } from "react-icons/tb";
import { CgGenderFemale } from "react-icons/cg";
import { PeopleSwiperInterface } from "../../../models/home-interfaces";

import SpinnerContext from "../../../context/spinner-context";

const srcStartWith = "https://image.tmdb.org/t/p/original/";

const SwiperPeopleContent = (props: PeopleSwiperInterface): JSX.Element => {
    const { person } = props;
    const router = useRouter();

    const spinnerCtx = useContext(SpinnerContext);
    const { showSpinnerHandler } = spinnerCtx;

    const onClickHandler = (name: string, id: number) => {
        router.push(`/people/${name}?id=${id}`);
        showSpinnerHandler(true);
    };

    return (
        <div className="flex flex-col justify-start">
            <div className="h-60 w-52 group flex flex-col justify-center rounded-lg overflow-hidden mx-auto relative hover:scale-105 sm:hover:scale-110 hover:-translate-y-1 duration-200">
                <div>
                    <Image
                        src={`${srcStartWith}${person.profile_path}`}
                        alt={person.name}
                        width={234}
                        height={300}
                        layout="responsive"
                        className="absolute text-center object-cover"
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
                <div className="flicker absolute top-3 z-10 select-none right-3 bg-darkRed text-white p-1 px-1.5 rounded-full">
                    <span>{person.known_for_department}</span>
                </div>

                {/* media type */}
                <div className="flex justify-center items-center flicker absolute bottom-3 z-10 select-none right-3 flicker-black bg-smothDark text-white w-8 p-1 px-1.5 rounded-full">
                    <span className="capitalize">ac</span>
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
                                {person.gender === 1 ? "Femail" : "Mail"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-center sm:self-start">
                <h3 className="mt-1 sm:mt-3 text-gray-200">{person.name}</h3>
            </div>
        </div>
    );
};

export default SwiperPeopleContent;
