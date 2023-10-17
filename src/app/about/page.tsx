'use client';
import AnimatedText from '@src/components/AnimatedText';
import CompLayout from '@src/components/CompLayout';
import Image from 'next/image';
import ProfilePic from '@public/images/profile/developer-pic-2.jpg';
import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@src/components/Skills';
import Experience from '@src/components/Experience';
import Education from '@src/components/Education';
import TransitionEffect from '@src/components/TransitionEffect';
import MinionCss from '@src/components/MinionCss';
import AboutMe from '@src/components/AboutMe';
import CodeText from '@src/components/PageFragments/CodeText';

interface AnimatedNumbersProps {
    value: number;
}

const AnimatedNumbers = ({ value }: AnimatedNumbersProps) => {
    const ref = useRef<any>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: 3000
    });
    const isInview = useInView(ref, { once: true });

    useEffect(() => {
        if (isInview) {
            motionValue.set(value);
        }
    }, [isInview, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return (
        <span ref={ref}></span>
    );
};


const page = () => {
    return (
        <>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <CompLayout className='pt-16 sm:pt-0 relative px-0 pb-0'>
                    <div className={`absolute xs:hidden z-[-50] w-[15%] h-[15%] rounded-full top-0 left-[343px] dark:bg-gradient-to-r from-[#c08a3a] to-[#252019] dark:from-[#252019] dark:to-[#c08a3a] blur-[300px]`}
                    />
                    <MinionCss />
                    <AnimatedText className='absolute sm:hidden block top-[120px] xl:top-[10px] sm:top-[12px] !text-[#104eab] text-end mr-16 xl:text-center xl:mr-0 text-[85px] mb-16 xs:!text-4xl sm:!text-5xl lg:!text-6xl xl:text-7xl sm:mb-8' text='I develop websites' />
                    <CodeText />
                </CompLayout>
            </main>
        </>
    );
};

export default page;