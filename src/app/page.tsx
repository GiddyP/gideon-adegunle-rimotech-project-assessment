'use client';
import CompLayout from "@src/components/CompLayout";
import TransitionEffect from "@src/components/TransitionEffect";
import TechRing from "@src/components/TechRing";
import HomePageTextAnimation from "@src/components/HomePageTextAnimation";
import Image from "next/image";
import { androidStudio } from "@public/images/background";
import AnimatedText from "@src/components/AnimatedText";

const Home = () => {

  return (
    <>
      {/* <TransitionEffect /> */}
      {/* <main className="flex items-center text-dark w-full min-h-screen dark:text-light"> */}
      <main className="flex min-h-[50vh]">
        <CompLayout className="pt-2 md:pt-2 sm:pt-8 relative sm:px-0">
          <TechRing />
          <HomePageTextAnimation
            text="&nbsp;&nbsp;Made with CSS Only&nbsp;&nbsp;"
          />
          <div className="relative -mt-[30px]">
            <Image
              src={androidStudio}
              alt='world-image'
              className='hidden sm:flex'

              priority
            />
            <>
              <div className="w-[2px] h-4 dark:bg-dark bg-light absolute top-0 right-[10px]" />
              <div className="w-[2px] h-6 dark:bg-dark bg-light absolute top-0 right-[20px]" />
              <div className="w-[2px] h-4 dark:bg-dark bg-light absolute top-0 right-[30px]" />
            </>
            <>
              <div className="w-[2px] h-full dark:bg-dark bg-light absolute top-0 left-[8px]" />
              <div className="w-3 h-3 rounded-full dark:bg-dark bg-light absolute bottom-1 left-[3px]" />
            </>

          </div>
          <AnimatedText
            text='"The best way to predict the future is to invent it." - Alan Kay'
            className="sm:block sm:mt-4 sm:text-2xl px-2 hidden capitalize" />
        </CompLayout>
      </main>
    </>
  );
};

export default Home;