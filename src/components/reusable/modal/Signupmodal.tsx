"use client";
import { useRouter } from "next/navigation";
import { RiGoogleLine } from "react-icons/ri";
import React from "react";
import { SignupImage } from "@public/images";
import { AiOutlineRight } from "react-icons/ai";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	content: React.ReactNode;
	buttonText?: string;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupModal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	content,
	buttonText,
	setIsOpen,
}) => {
	const router = useRouter();
	const handleOpenModalClick = () => {
		onClose();
	};
	const handleCloseModalClick = () => {
		setIsOpen(false);
	};

	return (
		<div
			className={`fixed inset-0 flex items-center justify-center z-40 px-4 xs:px-16 md:px-0 ${
				isOpen ? "" : "hidden"
			}`}
			// box-shadow: 0px 0px 4px 2px #1EAEA380;
		>
			<div className='bg-black-200/50 bg-opacity-75 absolute inset-0' />
			<div
				className='flex flex-col w-[1003px] h-[511px] bg-[#050505] justify-center items-center rounded-lg drop-shadow-lg border border-lemon'
				style={{
					boxShadow: "0px 0px 4px 2px #1EAEA380",
				}}
			>
			{content}

				{/* <div className='flex w-full justify-center gap-4 mt-3'>
					<button
						onClick={handleCloseModalClick}
						className='bg-primaryColor-300 w-fit px-8 md:px-12 py-2 text-white rounded-md hover:bg-primaryColor-100 text-xs md:text-base transition'
					>
						Cancel
					</button>
					<button
						onClick={onClose}
						className='bg-primary px-8 md:px-12 py-2 text-white rounded-md hover:bg-primaryColor-100 text-xs md:text-base transition'
					>
						{buttonText}
					</button>
				</div> */}
			</div>
		</div>
	);
};

export default SignupModal;
