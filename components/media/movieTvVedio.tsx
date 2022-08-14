import { useRouter } from "next/router";

const MovieTvVedio = (): JSX.Element => {
    const router = useRouter();
    const mediaName = router.query.slug;
    const id = router.query.id;

    return (
        <div className="p-0 2xl:p-20 py-14 sm:py-14 ">
            <div className="flex">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center ">
                        <h2 className="self-start text-white lg:ml-15 text-sm md:text-xl mb-5 font-bold font-mono">
                            {mediaName}
                        </h2>
                        <div>
                            <iframe
                                className="sm:w-[560px] sm:h-[315px] md:w-[768px] md:h-[432px] lg:w-[1024px] lg:h-[576px] xl:w-[1024px] xl:h-[576px] rounded-md"
                                src={`https://2embed.org/embed/${id}`}
                                sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieTvVedio;
