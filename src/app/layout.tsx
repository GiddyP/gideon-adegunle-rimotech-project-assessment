"use client";
import AppProvider from "@src/components/config/AppProvider";
import "@styles/globals.css";
import { Jost } from "next/font/google";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const jost = Jost({
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

	const getPageData = (pathname: string): PageData => {
		const defaultData = {
			title: "Workpa",
			description: "This is Workpa Webpage",
		};

		const pageData: Record<string, PageData> = {
			"/": {
				title: "Workpa | Home Page",
				description: "This is Workpa Home Page",
			},
		};
		return pageData[pathname] || defaultData;
	};

	const { title, description } = getPageData(pathname);

	const metadata = {
		title: `${title}`,
		description,
		icon: "/images/youtech-logo2.png",
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
				className={`${jost.className} font-mont bg-white dark:bg-dark w-full min-h-screen`}
			>
				<AppProvider>
					<ToastContainer />
					{children}
				</AppProvider>
			</body>
		</html>
	);
}
