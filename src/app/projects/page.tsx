'use client';
import CompLayout from "@src/components/CompLayout";
import React, { useEffect, useRef } from "react";
import TransitionEffect from "@src/components/TransitionEffect";
import AboutImages from "@src/components/PageFragments/AboutImages";
import AnimatedText from "@src/components/AnimatedText";

const page = () => {
    return (
        <>
            <TransitionEffect />
            <main className="w-full flex flex-col items-center justify-center dark:text-light">
                <CompLayout className="pt-6 px-0 pb-0 overflow-hidden">
                    <div className={`absolute z-[-50] w-[50%] h-[55%] rounded-full top-[83px] left-[343px] md:left-0 dark:bg-gradient-to-r from-[#c08a3a] to-[#252019] dark:from-[#252019] dark:to-[#c08a3a] blur-[300px]`}
                    />
                    <AnimatedText text="Click on the cards to view Project!" className="mb-1 xs:mb-1 text-[2.5rem] xl:text-[2rem] lg:text-[2.5rem] md:text-[2rem] xs:text-[1.6rem] capitalize" />
                    <AboutImages />
                </CompLayout>
            </main>
        </>
    );
};

export default page;