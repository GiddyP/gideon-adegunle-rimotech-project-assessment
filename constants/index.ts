import { agencyWeb, dashboardFullImage, dashboardShowcase, devDreaming, ecommerceFullImage, ecommerceshowcase, iforexFullImage, iforexShowcase, invoiceDisplayImage, invoicePage, leftRightFullImage, leftRightShowcase, netflixFullImage, netflixShowcase, nftCollection, tickitFullImage, tickitShowcase, vanillaPortfolioFullImage, vanillaPortfolioShowcase, vanillaShoeFullImage, vanillaShoeShowcase, youtechFullImage, youtechShowcase } from "@public/images/projects";
import { IndividualProject, ProjectWorksProps } from "@typings";

export const NAV_LINKS = [
    { label: 'Home', href: '/', className: 'mr-4' },
    { label: 'About', href: '/about', className: 'mx-4' },
    { label: 'Projects', href: '/projects', className: 'mx-4' },
    { label: 'Articles', href: '/articles', className: 'ml-4' },
];

export const projectWorks: IndividualProject[] = [
    {
        id: 1,
        img: vanillaShoeShowcase,
        pageImg: vanillaShoeFullImage,
        projectTitle: 'Vanilla Shoe responsive website',
        techUsed: '#Pure CSS and JavaScript (Vanilla)',
        description: 'This project was created using the tech stated above.',
        pageLink: 'https://giddyp.github.io/vanilla-ecommerce/',
    },
    {
        id: 2,
        img: leftRightShowcase,
        pageImg: leftRightFullImage,
        projectTitle: 'Left Right Blog',
        techUsed: '#Firebase #Sanity.io #NextJS #Redux #NextAuth #MUI',
        description: 'This project was created using the tech stated above and it is fully optimized',
        pageLink: 'https://left-right.vercel.app/'
    },
    {
        id: 3,
        img: tickitShowcase,
        pageImg: tickitFullImage,
        projectTitle: 'Tickit responsive and multi-route website',
        techUsed: '#CreateReactApp #TailwindCSS #Motion #ChatGPT',
        description: 'This project was created using the tech stated above.',
        pageLink: 'https://tickit-web.vercel.app/'
    },
    {
        id: 4,
        img: dashboardShowcase,
        pageImg: dashboardFullImage,
        projectTitle: 'Dashboard responsive website',
        techUsed: '#Vite #Formik',
        description: 'This project was created using the tech stated above.',
        pageLink: 'https://giddyp.github.io/ireact-dashboard/'
    },
    {
        id: 5,
        img: iforexShowcase,
        pageImg: iforexFullImage,
        projectTitle: 'Iforex landing page responsive website',
        techUsed: '#Vite #Tailwindcss',
        description: 'This project was created using the tech stated above.',
        pageLink: 'https://giddyp.github.io/iforex/'
    },
    {
        id: 6,
        img: invoiceDisplayImage,
        pageImg: invoicePage,
        projectTitle: "Project Ongoing currently",
        techUsed: '#TypeScript #NextJS13 #MotionFramer #Tailwindcss #FigmaMockup',
        description: 'This project was created using the tech stated above and it is fully optimized',
        pageLink: 'https://invoice-plum.vercel.app/'
    },
    {
        id: 7,
        img: vanillaPortfolioShowcase,
        pageImg: vanillaPortfolioFullImage,
        projectTitle: 'My vanilla portofolio responsive website',
        techUsed: '#Pure CSS and JavaScript (Vanilla)',
        description: 'This project was created using the tech stated above.',
        pageLink: 'https://giddyp.github.io/Gideons-vanilla-portfolio/'
    },
    {
        id: 8,
        img: ecommerceshowcase,
        pageImg: ecommerceFullImage,
        projectTitle: 'Ecommerce watch responsive website',
        techUsed: '#Sanity.io #CreateReactApp #Redux #Formik #MUI',
        description: 'This project was created using the tech stated above.',
        pageLink: 'https://ecommerce-watch-website.vercel.app/'
    },
    {
        id: 9,
        img: youtechShowcase,
        pageImg: youtechFullImage,
        projectTitle: 'Youtech Website',
        techUsed: '#php #WordPressAPI #Redux-query #Formik #TailwindCss #NextJs13 #WordPress #Typescript',
        description: 'This project was created using the tech stated above.',
        pageLink: 'https://youtech-website.vercel.app/'
    },
    {
        id: 10,
        img: netflixShowcase,
        pageImg: netflixFullImage,
        projectTitle: 'Netflix Website Clone',
        techUsed: '#Firebase #Typescript #Recoil #TailwindCss #NextJs',
        description: 'This project was created using the tech stated above.',
        pageLink: 'https://netflix-clone-yt-giddyp.vercel.app/'
    },
];

interface FormModalState {
    isOpen: boolean;
    isAliasOpen: boolean;
}

