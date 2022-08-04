import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import PeopleMediaCard from "./models/peopleMediaCard";
import SpinnerContext from "../../context/spinner-context";

import { PeopleDataInterface } from "../../models/people-interfaces";

// swiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Autoplay]);
const srcStartWith = "https://image.tmdb.org/t/p/original/";

const PeoplePosterHeader = (props: PeopleDataInterface): JSX.Element => {
    const { peopleData } = props;
    const router = useRouter();

    const spinnerCtx = useContext(SpinnerContext);
    const { showSpinnerHandler } = spinnerCtx;

    const onClickHandler = (name: string, id: number) => {
        showSpinnerHandler(true);

        const type = router.query.type || "Trending";
        const page = router.pathname.toString().substring(1);

        router.push(`/${page}/${name}?type=${type}&id=${id}`);
    };

    return (
        <div className="bg-[#212529]">
            <div className="w-full h-screen relative mx-auto shadow-xl overflow-hidden">
                <Swiper
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation
                    slidesPerGroup={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    speed={1500}
                    grabCursor={true}
                    mousewheel={true}
                    loop={true}
                    parallax={true}
                    className="z-50"
                >
                    {peopleData.map(
                        (person) =>
                            person.profile_path && (
                                <SwiperSlide key={person.id}>
                                    <div className="hidden md:block relative w-full h-screen">
                                        <Image
                                            src={`${srcStartWith}${person.profile_path}`}
                                            alt={person.name}
                                            layout="fill"
                                            className="absolute text-center object-fill sm:object-cover opacity-95  bg-center bg-no-repeat"
                                            priority
                                        />
                                    </div>
                                    <div className="relative w-full h-screen  md:hidden">
                                        <Image
                                            src={`${srcStartWith}${person.profile_path}`}
                                            alt={person.name}
                                            layout="fill"
                                            className="static text-center object-fill sm:object-cover opacity-95  bg-center bg-no-repeat"
                                            priority
                                        />
                                    </div>

                                    {/*overlay*/}
                                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#212529]/30 to-[#212529]/90 "></div>

                                    {/* Poster Data */}
                                    {/* Works List */}
                                    <PeopleMediaCard
                                        known_for={person.known_for}
                                        onClickHandler={onClickHandler}
                                        gender={person.gender}
                                        name={person.name}
                                        id={person.id}
                                    />
                                </SwiperSlide>
                            )
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default PeoplePosterHeader;
