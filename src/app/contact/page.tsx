'use client';
import AnimatedText from "@src/components/AnimatedText";
import CompLayout from "@src/components/CompLayout";
import { MotionProps, motion } from "framer-motion";
import React, { ReactNode } from "react";
import TransitionEffect from "@src/components/TransitionEffect";
import { FacebookIcon, GithubIcon, GmailIcon, LinkedInIcon, TwitterIcon, WWWIcon } from "@src/components/Icons";
import ColorButton from "@src/components/reusable/ColoredButton";
import { useDispatch } from "react-redux";
import { toggleFormModal } from "@config/features/formModal";
import FormModal from "@src/components/global/FormModal";

interface SocialMediaLinkProps {
    icon: ReactNode;
    text: string;
    motionProps?: MotionProps;
    href?: string;
}

const motionProps: {
    whileHover: { y: number; };
    whileTap: { scale: number; };
} = {
    whileHover: { y: -3 },
    whileTap: { scale: 0.9 },
};

const socialMediaLinks: SocialMediaLinkProps[] = [
    {
        icon: <GithubIcon />,
        text: "github.com/GiddyP",
        motionProps: motionProps,
        href: "https://github.com/GiddyP",
    },
    {
        icon: <FacebookIcon />,
        text: "facebook.com",
        motionProps: motionProps,
        href: "https://facebook.com/gbenga.gideon.54/",
    },
    {
        icon: <GmailIcon />,
        text: "mail.google.com",
        motionProps: motionProps,
        href: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
        icon: <TwitterIcon />,
        text: "@GideonAdegunle",
        motionProps: motionProps,
        href: "https://twitter.com/GideonAdegunle",
    },
    {
        icon: <LinkedInIcon />,
        text: "www.linkedin.com",
        motionProps: motionProps,
        href: "https://linkedin.com/in/gideon-adegunle",
    },
    {
        icon: <WWWIcon />,
        text: "Giddy P_wild",
        motionProps: motionProps,
        href: "https://giddypwild-nextjs-portfolio.vercel.app/projects",
    },
];

const Page = () => {
    const dispatch = useDispatch();

    const handleModalClick = () => {
        dispatch(toggleFormModal({ isOpen: true }));
    };

    return (
        <>
            <TransitionEffect />
            <FormModal />
            <main className="w-full mb-16 md:mb-4 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <CompLayout className="-mt-8 md:-mt-20 md:px-16 xs:px-10 xss:px-14">
                    <div className={`absolute z-[-50] w-[50%] h-[55%] rounded-full top-[83px] left-[343px] md:left-0 dark:bg-gradient-to-r from-[#c08a3a] to-[#252019] dark:from-[#252019] dark:to-[#c08a3a] blur-[300px]`}
                    />
                    <AnimatedText text="Let Your Mind Create Positive Change!" className="mb-6 slg:pt-0 text-[2.5rem] md:text-[1.5rem] md:mb-1" />

                    <section className="flex flex-col items-center w-[60%] slg:w-full mx-auto">
                        <h3 className="mt-4 mb-5 md:mb-2 font-semibold text-xl text-center w-full">Connect with me on</h3>

                        <div className="flex w-full flex-wrap md:flex-col">
                            {socialMediaLinks.map(({ href, icon, text, motionProps }, index) => (
                                <div key={index} className="flex justify-center items-center w-1/3 py-1 my-2 md:my-1 md:w-full">
                                    <a
                                        href={href}
                                        target="_blank"
                                        className="flex items-center"
                                    >
                                        <motion.div
                                            className="!w-10 md:!w-6 mr-3"
                                            {...motionProps}
                                        >
                                            {icon}
                                        </motion.div>
                                        <span className="text-xs">{text}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                        <ColorButton
                            className="bg-dark rounded-[100px] my-10 md:my-3 pb-3 pt-2 px-6 w-fit text-light text-xl md:text-lg md:px-4 md:pt-1 md:pb-2 md:mx-auto flex items-center justify-center font-bold border border-solid border-transparent dark:border-light"
                            handleClick={handleModalClick}
                            text="Get In Touch"
                        />

                    </section>
                </CompLayout>
            </main>
        </>
    );
};

export default Page;