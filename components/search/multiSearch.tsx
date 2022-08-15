import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import MovieContext from "../../context/movieData-context";
import SpinnerContext from "../../context/spinner-context";
import ToggleMode from "../../context/darkMode";

import { AiFillStar, AiFillLike } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";
import { TbGenderMale } from "react-icons/tb";
import { CgGenderFemale } from "react-icons/cg";

const srcStartWith = "https://image.tmdb.org/t/p/original/";
import {
    SearchDataWithImageLengthInterface,
    ModifiedSearchMultiInterface,
} from "../../models/search-interfaces";

const MultiSearch = (
    props: SearchDataWithImageLengthInterface & ModifiedSearchMultiInterface
): JSX.Element => {
    const { modifiedSearch, SearchDataWithImageLength } = props;
    console.log(modifiedSearch);

    const router = useRouter();
    const movieCtx = useContext(MovieContext);
    const spinnerCtx = useContext(SpinnerContext);
    const modeCtx = useContext(ToggleMode);

    const { getMovieData } = movieCtx;
    const { showSpinnerHandler } = spinnerCtx;
    const { mode } = modeCtx;

    const searchType = router.query.searchType;
    const onClickMediaHandler = (
        title: string,
        name: string,
        id: number,
        mediahasVideo: boolean,
        movieData: any,
        media_type: string
    ) => {
        if (name) {
            mediahasVideo
                ? router.push(
                      `/${
                          media_type || searchType
                      }/${name}?media=${true}&id=${id}`
                  )
                : router.push(`/${media_type || searchType}/${name}?id=${id}`);
        } else {
            mediahasVideo
                ? router.push(
                      `/${
                          media_type || searchType
                      }/${title}?media=${true}&id=${id}`
                  )
                : router.push(`/${media_type || searchType}/${title}?id=${id}`);
        }

        showSpinnerHandler(true);
        getMovieData(movieData);
    };

    const onClickPersonHandler = (name: string, id: number) => {
        router.push(`/people/${name}?&id=${id}`);
        showSpinnerHandler(true);
    };

    if (
        SearchDataWithImageLength === 0 &&
        router.query.query &&
        router.query.searchType
    ) {
        return (
            <div className="container mx-3 sm:mx-auto">
                <div
                    className={`${
                        mode === "dark" ? "text-white" : "text-smothDark"
                    } flex justify-center items-center my-10 mt-20 text-base sm:text-lg font-mono font-bold`}
                >
                    <div>
                        Sorry we didn`t find any{" "}
                        {router.query.searchType === "all"
                            ? "media or actor"
                            : router.query.searchType}{" "}
                        have{" "}
                        <span className="text-darkRed">
                            {router.query.query}
                        </span>{" "}
                        {router.query.query.length > 1 ? "words" : "word"}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`${
                mode === "dark" ? "bg-smothDark" : "bg-white"
            }   pt-20`}
        >
            <div className="container grid grid-cols-1 mx-auto gap-6 p-6 pt-0 gap-y-12 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {modifiedSearch &&
                    modifiedSearch.map((searchData) =>
                        searchData.media_type === "tv" ||
                        searchData.media_type === "movie" ||
                        router.query.searchType === "tv" ||
                        router.query.searchType === "movie"
                            ? (searchData.backdrop_path ||
                                  searchData.poster_path) && (
                                  <div key={searchData.id}>
                                      <div className="flex flex-col justify-start select-none h-full">
                                          <div className="group flex flex-col justify-center rounded-lg overflow-hidden mx-auto w-full relative hover:scale-105 sm:hover:scale-110 duration-200">
                                              <div>
                                                  <Image
                                                      src={`${srcStartWith}${
                                                          searchData.backdrop_path ||
                                                          searchData.poster_path
                                                      }`}
                                                      alt={
                                                          searchData.title ||
                                                          searchData.original_title ||
                                                          searchData.name ||
                                                          searchData.original_name
                                                      }
                                                      width={234}
                                                      height={300}
                                                      layout="responsive"
                                                      className="absolute text-center object-cover "
                                                      priority
                                                  />
                                              </div>
                                              <div className="absolute w-full h-full bg-gradient-to-b from-darkGray/0 to-darkGray/70"></div>

                                              {/* coming soon */}
                                              {searchData.vote_average === 0 ? (
                                                  <>
                                                      <div className="flex justify-center items-center absolute bg-darkGray opacity-80 w-full h-full">
                                                          <p className="capitalize text-4xl text-white">
                                                              coming soon
                                                          </p>
                                                      </div>
                                                      <div className="vedio-icon--parent group">
                                                          <BsEye
                                                              onClick={() =>
                                                                  onClickMediaHandler(
                                                                      searchData.title,
                                                                      searchData.name,
                                                                      searchData.id,
                                                                      searchData.vote_average ===
                                                                          0
                                                                          ? false
                                                                          : true,
                                                                      searchData,
                                                                      searchData.media_type
                                                                  )
                                                              }
                                                              className="vedio-icon"
                                                          />
                                                      </div>
                                                  </>
                                              ) : (
                                                  <div className="vedio-icon--parent group">
                                                      <BiPlayCircle
                                                          onClick={() =>
                                                              onClickMediaHandler(
                                                                  searchData.title,
                                                                  searchData.name,
                                                                  searchData.id,
                                                                  searchData.vote_average ===
                                                                      0
                                                                      ? false
                                                                      : true,
                                                                  searchData,
                                                                  searchData.media_type
                                                              )
                                                          }
                                                          className="vedio-icon"
                                                      />
                                                  </div>
                                              )}

                                              {/* rate */}
                                              {searchData.vote_average > 0 && (
                                                  <div className="flicker flex items-center justify-center space-x-1 z-10 text-yellow-400 absolute top-4 -left-12 w-36 h-7 -rotate-45 bg-darkRed">
                                                      <AiFillStar className="h-5 w-5 " />
                                                      <span>
                                                          {searchData.vote_average.toFixed(
                                                              1
                                                          )}
                                                      </span>
                                                  </div>
                                              )}

                                              {/* language */}
                                              <div className="flicker absolute top-3 z-10 select-none right-3  bg-darkRed text-white p-1 px-1.5 rounded-full">
                                                  <span>
                                                      {searchData.original_language.toLocaleUpperCase()}
                                                  </span>
                                              </div>
                                              {/* media type */}
                                              <div
                                                  className={`flex justify-center items-center flicker absolute bottom-3 z-10 select-none right-3 flicker-black bg-smothDark text-white w-8 p-1 px-1.5 rounded-full`}
                                              >
                                                  <span className="capitalize">
                                                      {searchData.media_type
                                                          ? searchData.media_type ===
                                                            "tv"
                                                              ? "tv"
                                                              : "mo"
                                                          : searchType ===
                                                            "movie"
                                                          ? "mo"
                                                          : "tv"}
                                                  </span>
                                              </div>

                                              {/* Rating */}
                                              <div className="flex items-center justify-center space-x-1 z-10 text-yellow-400 absolute top-4 -left-12 w-36 h-7 -rotate-45 bg-darkRed">
                                                  <AiFillStar className="h-5 w-5 " />
                                                  {searchData.vote_average ? (
                                                      <span>
                                                          {searchData.vote_average.toFixed(
                                                              1
                                                          )}
                                                      </span>
                                                  ) : (
                                                      <span>0</span>
                                                  )}
                                              </div>

                                              <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 left-3 sm:-left-2 absolute bottom-0.5 sm:bottom-1  sm:scale-[0.85] text-gray-200 w-full">
                                                  {/* like */}
                                                  <div className="group flex items-center justify-center space-x-1 z-10">
                                                      <AiFillLike className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                                      <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                                          <span className=" font-mono font-medium">
                                                              {
                                                                  searchData.vote_count
                                                              }
                                                          </span>
                                                      </div>
                                                  </div>
                                                  {/* date */}
                                                  <div
                                                      className={`${
                                                          !searchData.release_date &&
                                                          !searchData.first_air_date &&
                                                          "hidden"
                                                      } group flex items-center justify-center space-x-1 z-10`}
                                                  >
                                                      <GoCalendar className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                                      <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                                          <span className="font-mono font-medium">
                                                              {searchData.release_date ||
                                                                  searchData.first_air_date}
                                                          </span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div>
                                              <h3
                                                  className={`${
                                                      mode === "dark"
                                                          ? "text-gray-200"
                                                          : "text-smothDark"
                                                  } mt-4 sm:mt-3`}
                                              >
                                                  {searchData.title ||
                                                      searchData.name}
                                              </h3>
                                          </div>
                                      </div>
                                  </div>
                              )
                            : searchData.profile_path && (
                                  <div
                                      key={searchData.id}
                                      className="flex flex-col justify-start select-none h-full"
                                  >
                                      <div className="group flex flex-col justify-center rounded-lg overflow-hidden mx-auto w-full relative hover:scale-105 sm:hover:scale-110 duration-200">
                                          <div>
                                              <Image
                                                  src={`${srcStartWith}${searchData.profile_path}`}
                                                  alt={searchData.name}
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
                                                  onClick={onClickPersonHandler.bind(
                                                      null,
                                                      searchData.name,
                                                      searchData.id
                                                  )}
                                                  className="vedio-icon"
                                              />
                                          </div>

                                          {/* job */}
                                          <div className="flicker absolute top-3 z-10 select-none right-3  bg-darkRed text-white p-1 px-1.5 rounded-full">
                                              <span>
                                                  {
                                                      searchData.known_for_department
                                                  }
                                              </span>
                                          </div>
                                          {/* media type */}
                                          <div className="flex justify-center items-center flicker absolute bottom-3 z-10 select-none right-3 flicker-black bg-smothDark text-white w-8 p-1 px-1.5 rounded-full">
                                              <span className="capitalize">
                                                  ac
                                              </span>
                                          </div>

                                          <div className="flex flex-col items-start justify-between space-y-5 p-2.5 px-2 left-3 sm:-left-2 absolute bottom-0.5 sm:bottom-1 sm:scale-[0.85] text-gray-200 w-full">
                                              {/* Gender */}
                                              <div className="group flex items-center justify-center space-x-1 z-10">
                                                  {searchData.gender === 1 ? (
                                                      <CgGenderFemale className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                                  ) : (
                                                      <TbGenderMale className="flicker-white h-7 w-7 text-gray-300 bg-darkGray p-1 rounded-full bg-opacity-100 group-hover:text-white duration-300" />
                                                  )}
                                                  <div className="absolut opacity-0 left-10 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-3 duration-500">
                                                      <span className=" font-mono font-medium">
                                                          {searchData.gender ===
                                                          1
                                                              ? "Femail"
                                                              : "Mail"}
                                                      </span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div>
                                          <h3 className="mt-4 sm:mt-3 text-smothDark darktext-gray-200">
                                              {searchData.name}
                                          </h3>
                                      </div>
                                  </div>
                              )
                    )}
            </div>
        </div>
    );
};

export default MultiSearch;
