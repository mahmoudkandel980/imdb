import Image from "next/image";

import { GoCalendar } from "react-icons/go";
import { TbGenderMale } from "react-icons/tb";
import { CgGenderFemale } from "react-icons/cg";

import { SpecificPersonDetailsDataIntrerface } from "../../../models/people-interfaces";

const srcStartWith = "https://image.tmdb.org/t/p/original/";

const SpecificPersonPoster = (
    props: SpecificPersonDetailsDataIntrerface
): JSX.Element => {
    const {
        also_known_as,
        biography,
        birthday,
        deathday,
        gender,
        known_for_department,
        name,
        place_of_birth,
        profile_path,
    } = props.personDetails;

    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="flex flex-col select-none justify-center mx-auto w-[95%] xl:w-[85%] relative top-[12%] md:top-[10%] ">
                <div className="flex justify-start items-start  space-x-2 sm:space-x-5 md:space-x-10">
                    <div className="flex-1 md:flex-[2] lg:flex-[2] xl:flex-[1] 2xl:flex-1 shadow-2xl relative rounded-xl hidden md:block overflow-hidden">
                        <Image
                            src={`${srcStartWith}${profile_path}`}
                            alt={name}
                            width={234}
                            height={300}
                            layout="responsive"
                            className="static text-center object-cover"
                            priority
                        />
                        {/*overlay*/}
                        <div className="absolute flex justify-center items-center top-0 left-0 h-full w-full bg-gradient-to-t from-darkGray/40 to-darkGray/0 duration-1000"></div>

                        {/* Gender and date */}
                        <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 absolute bottom-0 text-gray-200 w-full0">
                            {/* Gender */}
                            <div className="group flex items-center justify-center space-x-1 z-10">
                                {gender === 1 ? (
                                    <CgGenderFemale className="flicker-black h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                                ) : (
                                    <TbGenderMale className="flicker-black h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white cursor-pointer duration-300" />
                                )}
                                <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                    <span className=" font-mono font-medium">
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
                                    <span className="font-mono font-medium">
                                        {birthday}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-[3] lg:flex-[4] w-full lg:w-[70%] xl-flex-[4] 2xl:flex-[4] items-start space-y-2 font-mono font-medium text-white p-0 md:p-5 pt-0">
                        <div className="flex items-center justify-start mb-2 sm:mb-3 md:mb-5 z-10 ">
                            {/* Name */}
                            <h1 className="flicker-text text-xl md:text-2xl lg:text-3xl ">
                                {name}
                            </h1>
                        </div>
                        <div className="ml-2 sm:ml-3 md:ml-5">
                            {/* Others Names*/}
                            <div className="flex flex-col space-y-4 sm:space-y-3 md:space-y-4 lg:space-y-5 mt-12 md:mt-0">
                                {/* <div className="flex justify-center items-start space-x-3">
                                    <div className="flex-1  text-xs sm:text-base">
                                        Others names
                                    </div>
                                    <div className="flex flex-[1.8]  sm:flex-[3]   md:flex-[2] lg:flex-[5] flex-wrap space-x-2 md:space-x-3 lg:space-x-5">
                                        {also_known_as.map((name, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-start space-x-2 md:space-x-3 lg:space-x-5 mb-2 sm:mb-3 md:mb-5"
                                            >
                                                <div className="flicker-white bg-black text-xs sm:text-sm xl:text-base relative cursor-pointer text-white p-1 px-2 rounded-full">
                                                    <span>{name}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div> */}

                                <div className="flex items-end justify-start flex-wrap space-x-2 md:space-x-3 lg:space-x-5 space-y-3 ">
                                    {/* categories */}
                                    <span className="flicker-red  bg-darkRed text-white p-1 px-1.5 rounded-full">
                                        {known_for_department}
                                    </span>
                                </div>

                                {/* Dead or Alive */}
                                <div className="flex items-end justify-start flex-wrap space-x-2 md:space-x-3 lg:space-x-5 space-y-3">
                                    <span
                                        className={`${
                                            deathday
                                                ? "bg-darkRed"
                                                : "bg-success"
                                        } text-white p-1 px-1.5 rounded-full`}
                                    >
                                        {deathday ? "Dead" : "Alive"}
                                    </span>
                                </div>

                                {/* place_of_birth */}
                                {place_of_birth && (
                                    <div className="flex justify-start items-center">
                                        <div className="flicker-white bg-black text-xs sm:text-sm xl:text-base relative text-white p-1 px-2 rounded-full">
                                            <span>{place_of_birth}</span>
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center justify-start">
                                    {/* overview */}
                                    <span className="text-xs line-clamp-[15] sm:line-clamp-[20] ml-4 sm:ml-0 sm:text-sm lg:text-base mt-5 w-[90%] sm:w-[100%] md:[500px] lg:w-[100%] xl:w-[700px]">
                                        {biography}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecificPersonPoster;
