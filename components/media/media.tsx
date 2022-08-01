import { useContext } from "react";
import { useRouter } from "next/router";

import MediaCard from "../models/mediaCard";
import MovieContext from "../../context/movieData-context";

import { MediaDataInterface } from "../../models/media-interfaces";
import { movieDataInterface } from "../../models/context-interfaces";

const Media = (props: MediaDataInterface): JSX.Element => {
    const { mediaData } = props;
    const router = useRouter();
    const movieCtx = useContext(MovieContext);
    const { getMovieData } = movieCtx;

    const onClickHandler = (
        title: string,
        name: string,
        id: string,
        mediahasVideo: boolean,
        movieData: movieDataInterface
    ) => {
        getMovieData(movieData);

        const type = router.query.type || "Trending";
        const page = router.pathname.toString().substring(1);
        // Name has the first role
        // Explain : you will get one of name and title undefined
        if (name) {
            mediahasVideo
                ? router.push(
                      `/${page}/${name}?type=${type}&media=${true}&id=${id}`
                  )
                : router.push(`/${page}/${name}?type=${type}&id=${id}`);
        } else {
            mediahasVideo
                ? router.push(
                      `/${page}/${title}?type=${type}&media=${true}&id=${id}`
                  )
                : router.push(`/${page}/${title}?type=${type}&id=${id}`);
        }
    };

    return (
        <div className="bg-[#212529] pt-20">
            <div className="container grid grid-cols-1 mx-auto gap-6 p-6 pt-6 gap-y-12 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {mediaData.map((media) => (
                    <MediaCard
                        media={media}
                        key={media.id}
                        onClickHandler={onClickHandler}
                    />
                ))}
            </div>
        </div>
    );
};

export default Media;
