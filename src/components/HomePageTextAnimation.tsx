'use client'
import { RootState } from "@config/store";
import { useSelector } from "react-redux";

interface HomePageTextAnimationProps {
    text: string;
}

const HomePageTextAnimation = ({ text }: HomePageTextAnimationProps) => {

    const { data } = useSelector(
        (state:RootState) => state.isCenterPrompt
    );
    // const { data } = useSelector(
    //     (state) => state.blogPostListState
    // );
    return (
        <div className='flex sm:hidden justify-center items-center -mt-12'>
            <h2 className={`text_animation_0 ${ data && 'text_animation'} transition-all`} data-text={text}>{text}</h2>
            <div>{data}</div>
        </div>
    );
};

export default HomePageTextAnimation;