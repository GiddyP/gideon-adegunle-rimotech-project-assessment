'use client';
import { projectWorks } from "@constants";
import { GlobeIcon, LeftArrow, NextIcon, PrevIcon } from "@src/components/Icons";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

// router.push('/projects/works/' + id);
const Page = () => {
    const param = useParams();
    const router = useRouter();

    const totalItems = projectWorks.length;
    const usableParam = parseInt(param.id);
    const next = usableParam + 1;
    const prev = usableParam - 1;



    const nextRoute = () => {
        if (usableParam < totalItems) {
            router.push('/projects/works/' + next);
        } else {
            router.push('/projects/works/' + usableParam);
        }
    };
    const prevRoute = () => {
        if (usableParam <= totalItems) {
            router.push('/projects/works/' + prev);
        } else {
            router.push('/projects/works/' + usableParam);
        }
    };

    const projectWork = projectWorks?.filter(
        (item) => item.id === usableParam
    );
    // console.log(totalItems);

    return (
        <>
            {projectWork ? (
                projectWork.map(({ id, description, projectTitle, techUsed, pageImg, pageLink }) => (
                    <div key={id} className="flex w-full min-h-[80vh] relative flex-col md:flex-col-reverse">
                        <Image
                            src={pageImg}
                            alt="invoice-page"
                            priority
                            // objectFit="cover"
                            className="flex w-2/3 md:w-full"
                        />

                        <div className="fixed md:relative bg-dark text-white w-1/3 md:w-full h-full right-0 p-2 flex flex-col items-center justify-between font-mono">
                            <div className="flex w-[85%] h-[400px] flex-col mt-14 md:m-5">
                                <div className="flex justify-between items-center p-2 mb-9">
                                    <button
                                        className="bg-white rounded-[100px] p-2 hover:translate-x-[-5px] transition-transform duration-200"
                                        onClick={() => router.push('/projects')}
                                        data-tip="Home"
                                        data-tooltip-content="button-tooltip"
                                    >
                                        <LeftArrow className="w-[20px] h-[20px]" />
                                    </button>
                                    <div className="flex gap-3">
                                        {
                                            usableParam > 1 ? (
                                                <button
                                                    className="bg-white rounded-[100px] p-2 hover:translate-x-[-5px] transition-transform duration-200"
                                                    onClick={prevRoute}
                                                    data-tip="Prev"
                                                    data-tooltip-content="button-tooltip"
                                                >
                                                    <PrevIcon className="w-[15px] h-[15px]" />
                                                </button>
                                            ) : (
                                                <button
                                                    disabled
                                                    className="bg-dark rounded-[100px] p-2 hover:translate-x-[-5px] transition-transform duration-200">
                                                    <PrevIcon className="!w-[15px] !h-[15px]" />
                                                </button>
                                            )
                                        }
                                        {
                                            usableParam != totalItems ? (
                                                <button
                                                    className="bg-white rounded-[100px] p-2 hover:translate-x-[5px] transition-transform duration-200"
                                                    onClick={nextRoute}
                                                    data-tip="Next"
                                                    data-tooltip-content="button-tooltip"
                                                >
                                                    <NextIcon className="w-[15px] h-[15px]" />
                                                </button>
                                            ) : (
                                                <button
                                                    disabled
                                                    className="bg-dark rounded-[100px] p-2 hover:translate-x-[5px] transition-transform duration-200">
                                                    <NextIcon className="w-[15px] h-[15px]" />
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                                <span className="text-sm mb-5">{techUsed}</span>
                                <h3 className="text-4xl font-semibold mb-8">{projectTitle}</h3>
                                <p className="mb-16 md:mb-9 xs:mb-4">{description}</p>

                                <Link
                                    href={pageLink}
                                    className="bg-white rounded-[100px] py-2 px-6 w-fit text-black text-2xl flex items-center justify-center mx-auto group hover:bg-[#353535] hover:text-slate-100 hover:scale-205 transition-all delay-100"
                                    target="_blank"
                                >
                                    <span>Visit</span>
                                    <GlobeIcon className="w-[20px] h-[20px] ml-2" style={{ fill: 'currentColor' }} />
                                </Link>
                            </div>
                            <span className="flex items-center justify-center">-{usableParam}-</span>
                        </div>
                    </div>
                ))
            ) : router.back()
            }
        </>
    );
};

export default Page;