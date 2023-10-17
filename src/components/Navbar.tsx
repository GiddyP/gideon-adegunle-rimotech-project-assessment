'use client';
import Link from "next/link";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import { DribbbleIcon, GithubIcon, GmailIcon, LandPhoneIcon, LinkedInIcon, MoonIcon, PhoneIcon, PinterestIcon, SunIcon, TwitterIcon } from "./Icons";
import { motion } from 'framer-motion';
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";
import Image from "next/image";
import { pwildLogo } from "@public/images/icons";
import { Lancelot, Poppins, Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
    weight: "400",
    style: 'normal',
    subsets: ["latin", "latin-ext"]
});

const lancelot = Lancelot({
    weight: "400",
    style: 'normal',
    subsets: ["latin", "latin-ext"]
});

type ThemeMode = "dark" | "light" | "";

interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
}

interface CustomMobileLinkProps {
    href: string;
    title: string;
    className?: string;
    toggle: () => void;
}

const CustomLink = ({ href, title, className }: CustomLinkProps) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={`${ className } relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-[#e99d2c] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${ pathname === href ? 'w-full' : 'w-0' } dark:bg-[#e2a54a]`}>&nbsp;
            </span>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className, toggle }: CustomMobileLinkProps) => {
    const pathname = usePathname();
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return (
        <button className={`${ className } group text-white my-2 text-start`} >
            <Link
                href={href}
                onClick={handleClick}
                className="relative"
            >
                {title}
                <span className={`h-[1px] inline-block bg-[#e99d2c] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${ pathname === href ? 'w-full' : 'w-0' } dark:bg-[#e2a54a]`}>&nbsp;
                </span>
            </Link>
        </button>
    );
};

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = '+2347067174101';
    const emailAddress = 'giddygbenga4@gmail.com';

    const handleEmailClick = () => {
        window.location.href = `mailto:${ emailAddress }`;
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:${ phoneNumber }`;
    };
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex w-full flex-col pb-0 dark:text-light relative">
            {/* Mobile Side Menu */}
            {
                isOpen && (
                    <div className={`flex flex-col z-50 gap-1 p-4 fixed top-0 right-0 h-full w-[75vw] bg-dark dark:backdrop-blur-xl text-white transform transition-transform duration-700 ease-in-out border-l-[1px] border-l-[#ffffff1e] ${ isOpen ? 'translate-x-0' : 'translate-x-full' }
            `}>
                        {/* Menu items */}
                        <div className="flex justify-between w-full">
                            <button
                                onClick={() => setMode((prevMode: ThemeMode) => (prevMode === "light" ? "dark" : "light"))}
                                className={`flex items-center justify-center rounded-full p-1 ${ mode === "light" ? "text-white" : "text-light" }`}
                            >
                                {
                                    mode === "dark" ? <SunIcon /> : <MoonIcon />
                                }
                            </button>

                            <button className="text-sm z-50" onClick={handleClick}>
                                <span className={`bg-primary dark:bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${ isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`} />
                                <span className={`bg-primary dark:bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${ isOpen ? 'opacity-0' : 'opacity-100' }`} />
                                <span className={`bg-primary dark:bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${ isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5' }`} />
                            </button>
                        </div>

                        <div className="flex p-2 mt-4 flex-col gap-3 w-full">
                            <CustomMobileLink href='/' title="Home" className="" toggle={handleClick} />
                            <CustomMobileLink href='/about' title="About" className="" toggle={handleClick} />
                            <CustomMobileLink href='/projects' title="Projects" className="" toggle={handleClick} />
                            <CustomMobileLink href='/contact' title="Contact" className="" toggle={handleClick} />
                        </div>

                        {/* <div className="flex justify-center mt-[310px] px-2 text-xs">
                            <nav className={`text-xs text-white ${ inconsolata.className }`}>Powered by P_Wild</nav>
                        </div> */}
                    </div>
                )
            }

            <section className="flex w-full py-[1px] justify-center items-center lg:hidden">
                <div className={`flex w-5/6 py-1 justify-between text-xs ${ inconsolata.className }`}>
                    <nav
                        onClick={handlePhoneClick}
                        className="flex items-center justify-center gap-1 cursor-pointer" >
                        <motion.a
                            href="#"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-4"
                        >
                            <PhoneIcon />
                        </motion.a>
                        <span>{phoneNumber}</span>
                    </nav>
                    <nav
                        className="flex items-center justify-center gap-1 cursor-pointer xl:hidden"
                        onClick={handleEmailClick}
                    >
                        <motion.a
                            href="#"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-4"
                        >
                            <GmailIcon />
                        </motion.a>
                        <span>{emailAddress}</span>
                    </nav>
                    <nav className="text-xs">- Powered by <i>P_Wild</i></nav>
                </div>
            </section>

            <section className="flex w-full py-3 justify-center items-center border-y-[2px] dark:border-[#ffffff22]">
                <div className="flex w-4/5 py-1 justify-between items-center">
                    <nav className="flex items-center justify-center gap-2">
                        <motion.a
                            href="/"
                            whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: "easeIn" } }}
                            className="flex mr-8 xl:mr-16 flex-col"
                        >
                            <span className={`${ lancelot.className } text-4xl lg:text-3xl xl:text-4xl 2xl:text-4xl uppercase text-[#857449] font-bold -mt-3`}>Passion</span>
                            <span className={`${ lancelot.className } text-end uppercase text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl text-[#FFBD59] -mt-4 -mb-4`}>Wild</span>
                        </motion.a>

                        <nav className="flex gap-9 lg:hidden">
                            <CustomLink href='/' title="Home" />
                            <CustomLink href='/about' title="About" />
                            <CustomLink href='/projects' title="Projects" />
                            <CustomLink href='/contact' title="Contact" />
                        </nav>
                    </nav>

                    <nav className="justify-center items-center flex lg:hidden">
                        <button
                            onClick={() => setMode((prevMode: ThemeMode) => (prevMode === "light" ? "dark" : "light"))}
                            className={`flex items-center justify-center rounded-full p-1 ${ mode === "light" ? "text-dark" : "text-light" }`}
                        >
                            {
                                mode === "dark" ? <SunIcon /> : <MoonIcon />
                            }
                        </button>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                        <span className={`bg-primary dark:bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${ isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5' }`} />
                        <span className={`bg-primary dark:bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${ isOpen ? 'opacity-0' : 'opacity-100' }`} />
                        <span className={`bg-primary dark:bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${ isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5' }`} />
                    </button>
                </div>
            </section>
        </header>
    );
};

export default Navbar;