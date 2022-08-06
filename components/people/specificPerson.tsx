import Image from "next/image";

import SpecificPersonPoster from "./models/specificPersonPoster";

import { GoCalendar } from "react-icons/go";
import { TbGenderMale } from "react-icons/tb";
import { CgGenderFemale } from "react-icons/cg";

import { SpecificPersonDetailsDataIntrerface } from "../../models/people-interfaces";

const srcStartWith = "https://image.tmdb.org/t/p/original/";

const SpecificPerson = (
    props: SpecificPersonDetailsDataIntrerface
): JSX.Element => {
    const { birthday, gender, name, profile_path } = props.personDetails;

    return (
        <div className="bg-darkGray">
            <div className="w-full h-screen  relative  mx-auto shadow-xl overflow-hidden">
                <div className="hidden md:block  relative w-full h-screen">
                    <Image
                        src={`${srcStartWith}${profile_path}`}
                        alt={name}
                        layout="fill"
                        className="absolute text-center object-fill sm:object-cover opacity-95  bg-center bg-no-repeat"
                        priority
                    />
                </div>
                <div className="relative w-full h-screen  md:hidden">
                    <Image
                        src={`${srcStartWith}${profile_path}`}
                        alt={name}
                        layout="fill"
                        className="static text-center object-fill sm:object-cover opacity-95  bg-center bg-no-repeat"
                        priority
                    />
                </div>
                {/* small screens */}
                <div className="block md:hidden">
                    <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 absolute left-0 bottom-0 text-gray-200 w-full0">
                        {/* Gender */}
                        <div className="group flex items-center justify-center space-x-1 z-10">
                            {gender === 1 ? (
                                <CgGenderFemale className="flicker-black h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                            ) : (
                                <TbGenderMale className="flicker-black h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                            )}
                            <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                <span className="flicker-black font-mono font-medium bg-darkGray p-4 py-0.5 rounded-md bg-opacity-95">
                                    {gender === 1 ? "Femail" : "Mail"}
                                </span>
                            </div>
                        </div>

                        {/* date */}
                        <div
                            className={`${
                                !birthday && "hidden"
                            } group flex items-center justify-center space-x-1 z-10`}
                        >
                            <GoCalendar className="flicker-black h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                            <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                <span className="flicker-black font-mono font-medium bg-darkGray p-4 py-0.5 rounded-md bg-opacity-95">
                                    {birthday}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/*overlay*/}
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-darkGray/30 to-darkGray/90 "></div>
                <SpecificPersonPoster personDetails={props.personDetails} />
            </div>
        </div>
    );
};

export default SpecificPerson;
