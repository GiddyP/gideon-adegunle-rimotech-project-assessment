'use client';
import { setIsCenterPrompt } from "@config/features/centerPrompt";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import '@styles/TechRing.module.css';

interface RingTextProps {
    title: string;
    description: string;
    state: boolean;
    line_className?: string;
    container_className?: string;
    title_className?: string;
}

const TechRing = () => {
    const [purplePrompt, setPurplePrompt] = useState(false);
    const [goldPrompt, setGoldPrompt] = useState(false);
    const [deepBluePrompt, setDeepBluePrompt] = useState(false);
    const [centerPrompt, setCenterPrompt] = useState(false);
    const [isCenterPromptState, setIsCenterPromptState] = useState<boolean>(false);
    const dispatch = useDispatch();

    const RingText = ({ title, description, state, line_className, container_className, title_className }: RingTextProps) => {
        if (!state) {
            return null; // Early return if `state` is false
        }

        const ringElement = (
            <div className={`${ container_className }`}>
                <div className={`${ line_className } border-dashed slg:hidden`} />

                <h2 className={`text-lg ${ title_className }`}>{title}</h2>
                <p className="text-sm">{description}</p>
            </div>
        );

        return ringElement;
    };

    const handleCenterPromptClick = () => {
        setIsCenterPromptState(!isCenterPromptState);
        dispatch(setIsCenterPrompt({ data: isCenterPromptState }));
    };


    return (
        <div className="flex relative flex-col sm:hidden justify-center items-center sm:pt-[-15px]">
            <svg width="500" height="500">
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="20%" stopColor="#B8860B" />
                        <stop offset="40%" stopColor="#FF1493" />
                        <stop offset="60%" stopColor="#4169E1" />
                        <stop offset="100%" stopColor="#00BFFF" />
                    </linearGradient>
                </defs>
                <circle r="160" cx="250" cy="250" className="circle_0" stroke="url(#gradient)" />


                <circle r="160" cx="250" cy="250" className="circle_0-1" />
                <circle r="130" cx="250" cy="250" className="circle_1-0" />
                <circle r="130" cx="250" cy="250" className="circle_1" />
                <circle r="120" cx="250" cy="250" className="circle_2" />
                <circle r="100" cx="250" cy="250" className="circle_3" />
                <circle r="75" cx="250" cy="250" className="circle_4" />
                <circle r="45" cx="250" cy="250" className="circle_5" />

                <circle r="45" cx="250" cy="250" className="circle_5_1" stroke="url(#gradient)" />
                <circle r="45" cx="250" cy="250" className="circle_5_2" stroke="url(#gradient)" />
                <circle r="45" cx="250" cy="250" className="circle_5_3" stroke="url(#gradient)" />
                <circle r="45" cx="250" cy="250" className="circle_5_4" stroke="url(#gradient)" />

                <circle r="45" cx="250" cy="250" className="circle_5_5" stroke="url(#gradient)" />
                <circle r="45" cx="250" cy="250" className="circle_5_6" stroke="url(#gradient)" />
                <circle r="45" cx="250" cy="250" className="circle_5_7" stroke="url(#gradient)" />



                <circle r="10" cx="250" cy="250" className="circle_6" />
            </svg>

            <div
                className="ring_1"
                onMouseOver={() => setPurplePrompt(true)}
                onMouseLeave={() => setPurplePrompt(false)}
            >
                <RingText
                    title="Advanced CSS"
                    description="This is made of svg circles tweaked with css. "
                    state={purplePrompt}
                    line_className="absolute h-[185px] w-[125px] top-[60px] left-[180px] -rotate-[0deg] border-r-2 border-t-2 border-r-[#ff149196] border-t-[#ff149197] -z-10 transform bg-transparent"
                    container_className="w-[260px] h-[120px] rounded-sm p-2 transition-all duration-3000 ease-in-out absolute top-[-74px] left-[-308px] slg:left-7 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 text-light"
                />
            </div>

            <div
                className="ring_2"
                onMouseOver={() => setDeepBluePrompt(true)}
                onMouseLeave={() => setDeepBluePrompt(false)}
            >
                <RingText
                    title="Advanced CSS"
                    description="Create your world of possibilities"
                    state={deepBluePrompt}
                    line_className="absolute h-[85px] w-[155px] top-[-21px] left-[-139px] -rotate-[0deg] border-l-2 border-b-2 border-l-[#3f6df567] border-b-[#3f6df567] -z-10 transform bg-transparent"
                    container_className="w-[260px] h-[120px] rounded-sm p-2 transition-all duration-3000 ease-in-out absolute top-[258px] slg:top-[-128px] left-[270px] slg:-left-3 bg-gradient-to-br from-[#85a1f7] to-[#132457e1] text-light"
                />
            </div>

            <div
                className="ring_3"
                onMouseOver={() => setCenterPrompt(true)}
                onMouseLeave={() => setCenterPrompt(false)}
                onClick={handleCenterPromptClick}
            >
                <RingText
                    title="Click"
                    description=""
                    state={centerPrompt}
                    line_className=""
                    container_className="w-[100px] rounded-xl transition-all duration-3000 ease-in-out absolute top-[195px] left-[-42px] bg-gradient-to-br from-yellow-900 to-[#B8860B]"
                    title_className="text-center text-sm"
                />
            </div>

            <div
                className="ring_4"
                onMouseOver={() => setGoldPrompt(true)}
                onMouseLeave={() => setGoldPrompt(false)}
            >
                <RingText
                    title="Advanced CSS"
                    description="No assumptions in perfection only excellence and critical procedure is involved..."
                    state={goldPrompt}
                    line_className="absolute h-[125px] w-[125px] top-[60px] left-[-50px] -rotate-[0deg] border-l-2 border-t-2 border-l-[#b8870bb3] border-t-[#b8870bc5] -z-10 transform bg-transparent"
                    container_className="w-[260px] h-[120px] rounded-sm p-2 transition-all duration-3000 ease-in-out absolute top-[-124px] left-[290px] slg:left-0 bg-gradient-to-br from-yellow-900 to-yellow-500 text-light"
                />
            </div>

            <div className="cover" />
        </div>
    );
};

export default TechRing;