"use client";
import AppProvider from "@config/AppProvider";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import FormModal from "@src/components/global/FormModal";
import "@styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Script from "next/script";

const poppins = Poppins({
	subsets: ["latin-ext"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
});

interface PageData {
	title: string;
	description: string;
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const [isLoading, setIsLoading] = useState(false);

	const getPageData = (pathname: string): PageData => {
		const defaultData = {
			title: "P_Wild",
			description: "P_Wild",
		};

		const pageData: Record<string, PageData> = {
			"/": {
				title: "Home Page",
				description: "This is Home Page",
			},
			"/about": {
				title: "About Page",
				description: "This is About Page",
			},
			"/projects": {
				title: "Projects Page",
				description: "This is Projects Page",
			},
			"/contact": {
				title: "Contact Page",
				description: "This is Contact Page",
			},
		};

		if (pathname.includes("/projects/works")) {
			// Additional logic for '/projects/works' path
			// Example: Override the title and description
			return {
				title: "Projects Works Page",
				description: "This is Projects Works Page",
			};
		}

		return pageData[pathname] || defaultData;
	};

	// useEffect(() => {
	//   const handleStart = () => {
	//     setIsLoading(true);
	//   };

	//   const handleComplete = () => {
	//     setIsLoading(true);
	//   };

	//   Router.events.on("routeChangeStart", () => {
	//     NProgress.start();
	//     handleStart;
	//   });

	//   Router.events.on("routeChangeComplete", () => {
	//     NProgress.done();
	//     handleComplete
	//   });

	//   Router.events.on('routeChangeError', () => {
	//     NProgress.done();
	//     handleComplete
	//   });
	//   return () => {
	//     Router.events.off('routeChangeStart', handleStart);
	//     Router.events.off('routeChangeComplete', handleComplete);
	//     Router.events.off('routeChangeError', handleComplete);
	//   };
	// }, []);

	console.log(isLoading);
	// console.log(pathname.includes('/projects/works'));

	const { title, description } = getPageData(pathname);

	const metadata = {
		title: `P_Wild | ${title}`,
		description,
		icon: "/pwild-logo.png",
	};

	return (
		<html lang='en'>
			<head>
				<title>{metadata.title}</title>
				<meta name='description' content={metadata.description} />
				<link rel='icon' href={metadata.icon} />
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</head>
			<body
				className={`${poppins.className} font-mont bg-light dark:bg-dark w-full min-h-screen`}
			>
				<Script id='theme-switcher' strategy='beforeInteractive'>
					{`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
				</Script>
				{!pathname.includes("/projects/works") && !isLoading && <Navbar />}
				<AnimatePresence mode='wait' key={pathname}>
					<AppProvider>{children}</AppProvider>
				</AnimatePresence>
				{!pathname.includes("/projects/works") && !isLoading && <Footer />}
			</body>
		</html>
	);
}
