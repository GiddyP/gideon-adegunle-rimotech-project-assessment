'use client';
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { agencyWeb, dashboardShowcase, devDreaming, ecommerceshowcase, iforexShowcase, invoiceDisplayImage, invoicePage, leftRightShowcase, netflixShowcase, nftCollection, tickitShowcase, vanillaPortfolioShowcase, vanillaShoeShowcase, youtechShowcase } from "@public/images/projects";

interface DisplayImageProps {
    id?: number;
    subConClassName?: string;
    imgClassName: string;
    img: StaticImageData;
    alt: string;
    width: number;
    x?: number;
}

const DisplayImage = ({ subConClassName, imgClassName, img, alt, width, id, x }: DisplayImageProps) => {
    const router = useRouter();
    const tiltRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tiltElement = tiltRef.current;

        if (tiltElement) {
            const handleMouseMove = (event: MouseEvent) => {
                const rect = tiltElement.getBoundingClientRect();
                const offsetX = event.clientX - rect.left - rect.width / 2;
                const offsetY = event.clientY - rect.top - rect.height / 2;
                const maxTilt = 25;
                const tiltX = (offsetX / rect.width) * maxTilt;
                const tiltY = (offsetY / rect.height) * maxTilt;

                tiltElement.style.transition = 'transform 0.3s ease-out'; // Add transition effect
                tiltElement.style.transform = `perspective(1000px) rotateX(${ -tiltY }deg) rotateY(${ tiltX }deg)`;
            };

            const handleMouseLeave = () => {
                tiltElement.style.transition = 'transform 0.3s ease-out'; // Add transition effect
                tiltElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            };

            tiltElement.addEventListener('mousemove', handleMouseMove);
            tiltElement.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                tiltElement.removeEventListener('mousemove', handleMouseMove);
                tiltElement.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <div>
            <motion.div
                initial={{ x: x }}
                whileInView={{ x: 0, transition: { duration: .8, ease: "easeInOut" } }}
                // viewport={{ once: true }}
                ref={tiltRef}
                className={`${ subConClassName }`}
                onClick={() => {
                    router.push('/projects/works/' + id);
                }}
            >
                <Image
                    src={img}
                    alt={alt}
                    className={`${ imgClassName }`}
                    width={width}
                />
                <span className="text-dark dark:text-light text-[12px]">0{id}</span>
            </motion.div>
        </div>
    );
};




const AboutImages = () => {

    const projectWorks: DisplayImageProps[] = [
        {
            id: 1,
            subConClassName: `absolute top-8 left-[128px] xl:left-[50px] xmd:left-[23%] md:left-[22%] sm:left-[16%] xs:left-[2.3rem] xss:left-[1.5rem]`,
            img: vanillaShoeShowcase,
            alt: 'project1',
            imgClassName: 'cursor-pointer',
            // imgClassName: 'h-[15.62rem] w-[28.1rem] lg:h-[15.6rem] lg:w-[25rem] md:h-[16rem] md:w-[24rem] xs:h-[14rem] xs:w-[22rem] xss:h-[12rem] xss:w-[20rem] cursor-pointer',
            width: 430,
            x: -200
        },
        {
            id: 2,
            subConClassName: 'absolute top-10 xl:top-8 left-[792px] xmd:top-[312px] xs:top-[16rem] xmd:left-[23%] xl:left-[600px] lg:left-[500px] md:left-[22%] sm:left-[16%] xs:left-[2.3rem] xss:left-[1rem]',
            img: leftRightShowcase,
            alt: 'project1',
            imgClassName: 'cursor-pointer',
            // imgClassName: 'h-[15.62rem] w-[28.1rem] lg:h-[15.6rem] lg:w-[25rem] md:h-[16rem] md:w-[24rem] xs:h-[14rem] xs:w-[22rem] xss:h-[12rem] xss:w-[20rem] cursor-pointer',
            width: 430,
            x: 200
        },
        {
            id: 3,
            subConClassName: 'absolute top-[312px] left-[382px] xmd:left-[23%] xs:top-[30rem] xmd:top-[600px] md:left-[22%] sm:left-[16%] xs:left-[2.3rem] xss:left-[1.5rem]',
            img: tickitShowcase,
            alt: 'project1',
            imgClassName: 'cursor-pointer',
            // imgClassName: 'h-[15.62rem] w-[28.1rem] lg:h-[15.6rem] lg:w-[25rem] md:h-[16rem] md:w-[24rem] xs:h-[14rem] xs:w-[22rem] xss:h-[12rem] xss:w-[20rem] cursor-pointer',
            width: 430,
            x: 200
        },
        {
            id: 4,
            subConClassName: 'absolute top-[600px] xmd:top-[900px] left-[128px] xmd:left-[23%] xs:top-[44rem] xl:left-[50px] md:left-[22%] sm:left-[16%] xs:left-[2.3rem] xss:left-[1rem]',
            img: dashboardShowcase,
            alt: 'project1',
            imgClassName: 'cursor-pointer',
            // imgClassName: 'h-[15.62rem] w-[28.1rem] lg:h-[15.6rem] lg:w-[25rem] md:h-[16rem] md:w-[24rem] xs:h-[14rem] xs:w-[22rem] xss:h-[12rem] xss:w-[20rem] cursor-pointer',
            width: 430,
            x: -200
        },
        {
            id: 5,
            subConClassName: 'absolute top-[600px] left-[832px] xmd:top-[1200px] xmd:left-[23%] xs:top-[58rem] xl:left-[600px] md:left-[22%] sm:left-[16%] xs:left-[2.3rem] xss:left-[1.5rem]',
            img: iforexShowcase,
            alt: 'project1',
            imgClassName: 'cursor-pointer',
            // imgClassName: 'h-[15.62rem] w-[28.1rem] lg:h-[15.6rem] lg:w-[25rem] md:h-[16rem] md:w-[24rem] xs:h-[14rem] xs:w-[22rem] xss:h-[12rem] xss:w-[20rem] cursor-pointer',
            width: 430,
            x: 200
        },
        {
            id: 6,
            subConClassName: 'absolute top-[900px] xmd:top-[1500px] left-[128px] xmd:left-[23%] xs:top-[72rem] xl:left-[50px] md:left-[22%] sm:left-[16%] xs:left-[2.3rem] xss:left-[1rem]',
            img: invoiceDisplayImage,
            alt: 'project1',
            imgClassName: 'cursor-pointer',
            // imgClassName: 'h-[15.62rem] w-[28.1rem] lg:h-[15.6rem] lg:w-[25rem] md:h-[16rem] md:w-[24rem] xs:h-[14rem] xs:w-[22rem] xss:h-[12rem] xss:w-[20rem] cursor-pointer',
            width: 430,
            x: -200
        },
        {
            id: 7,
            subConClassName: 'absolute top-[900px] left-[832px] xmd:top-[1800px] xmd:left-[23%] xs:top-[86rem] xl:left-[600px] md:left-[22%] sm:left-[16%] xs:left-[2.3rem] xss:left-[1.5rem]',
            img: vanillaPortfolioShowcase,
            alt: 'project1',
            imgClassName: 'cursor-pointer',
            // imgClassName: 'h-[15.62rem] w-[28.1rem] lg:h-[15.6rem] lg:w-[25rem] md:h-[16rem] md:w-[24rem] xs:h-[14rem] xs:w-[22rem] xss:h-[12rem] xss:w-[20rem] cursor-pointer',
            width: 430,
            x: 200
        },
        {
            id: 8,
            subConClassName: 'absolute top-[1200px] left-[382px] xmd:left-[23%] xs:top-[100rem] xmd:top-[2100px] md:left-[22%] sm:left-[16%] xs:left-[2.3rem] xss:left-[1.5rem]',
            img: ecommerceshowcase,
            alt: 'project8',
            imgClassName: 'cursor-pointer',
            // imgClassName: 'h-[15.62rem] w-[28.1rem] lg:h-[15.6rem] lg:w-[25rem] md:h-[16rem] md:w-[24rem] xs:h-[14rem] xs:w-[22rem] xss:h-[12rem] xss:w-[20rem] cursor-pointer',
            width: 430,
            x: 200
        },
        {
            id: 9,
            subConClassName: 'absolute top-[1500px] xmd:top-[2400px] left-[128px] xmd:left-[23%] xs:top-[114rem] xl:left-[50px] md:left-[22%] sm:left-[16%] xs:left-[2.3rem] xss:left-[1rem]',
            img: youtechShowcase,
            alt: 'project9',
            imgClassName: 'cursor-pointer',
            // imgClassName: 'h-[15.62rem] w-[28.1rem] lg:h-[15.6rem] lg:w-[25rem] md:h-[16rem] md:w-[24rem] xs:h-[14rem] xs:w-[22rem] xss:h-[12rem] xss:w-[20rem] cursor-pointer',
            width: 430,
            x: -200
        },
        {
            id: 10,
            subConClassName: 'absolute top-[1500px] left-[832px] xmd:top-[2400px] xmd:left-[23%] xs:top-[114rem] xl:left-[600px] md:left-[22%] sm:left-[16%] xs:left-[2.3rem] xss:left-[1.5rem]',
            img: netflixShowcase,
            alt: 'project10',
            imgClassName: 'cursor-pointer',
            // imgClassName: 'h-[15.62rem] w-[28.1rem] lg:h-[15.6rem] lg:w-[25rem] md:h-[16rem] md:w-[24rem] xs:h-[14rem] xs:w-[22rem] xss:h-[12rem] xss:w-[20rem] cursor-pointer',
            width: 430,
            x: 200
        },
    ];

    return (
        <div className="w-full h-[340vh] xmd:h-[490vh] sm:h-[380vh] flex relative">
            {projectWorks.map((props) => {
                return (
                    <DisplayImage key={props.id} {...props} />
                );
            })}
        </div>
    );
};

export default AboutImages;