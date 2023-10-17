"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./PageFragment/Sidebar";
import Header from "./PageFragment/Header";
import Footer from "./PageFragment/Footer";

interface AppLayoutProps {
	children: ReactNode;
	className?: string;
}

const AppLayout = ({ children, className }: AppLayoutProps) => {
	const pathname = usePathname();

	return (
		<main className={`relative w-full flex`}>
			<Sidebar />
			<div className='relative w-4/5'>{children}</div>
			<Footer />
		</main>
	);
};

export default AppLayout;
