import CompLayout from './CompLayout';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons';
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
    weight: "400",
    style: 'normal',
    subsets: ["latin", "latin-ext"]
});

const Footer = () => {
    return (
        <footer className='w-full border-t-[2px] dark:border-t-[1px] font-medium text-lg dark:text-light dark:border-[#ffffff22] sm:text-base'>
            <CompLayout className='flex flex-row px-3 gap-2 items-center justify-between sm:py-2 lg:flex-col lg:py-1 lg:px-2 xl:py-4 2xl:py-4'>
                <span className={`text-sm ${inconsolata.className}`}>
                    ©{new Date().getFullYear()} P_Wild - All rights reserved.
                </span>

                <div className="flex gap-3">
                    <motion.a
                        href="http://github.com"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: .9 }}
                        className="w-6"
                    >
                        <GithubIcon />
                    </motion.a>

                    <motion.a
                        href="http://linkedin.com"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: .9 }}
                        className="w-6"
                    >
                        <LinkedInIcon />
                    </motion.a>

                    <motion.a
                        href="http://twitter.com"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: .9 }}
                        className="w-6"
                    >
                        <TwitterIcon />
                    </motion.a>
                </div>
            </CompLayout>
        </footer>
    );
};

export default Footer;