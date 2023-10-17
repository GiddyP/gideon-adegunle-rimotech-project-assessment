"use client";
import React, { useState } from "react";
import { BiMobileAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import SignupModal from "../reusable/modal/Signupmodal";

const Header = () => {
	const [isModalSignUpOpen, setIsModalSignUpOpen] = useState(false);

	const openSignUpModal = () => {
		setIsModalSignUpOpen(true);
	};

	const closeSignUpModal = () => {
		setIsModalSignUpOpen(false);
	};

	const handleSignUp = () => {
		closeSignUpModal();
	};
	return (
		<header className='h-[77px] bg-black-400 flex w-4/5 gap-24 items-center px-6 fixed top-0'>
			<div className='flex justify-between flex-1'>
				<div className='flex h-10 w-[482px] rounded-lg bg-white items-center px-1'>
					<input
						type='text'
						placeholder='Search by Podcast Name, Host name, Categories, Tags...'
						className='flex-1 text-xs text-black/70 px-4 py-2 border border-[#ccc] outline-none rounded-lg'
					/>
					<div className='py-2 px-4'>
						<BsSearch color='#5A5A5A' />
					</div>
				</div>
				<button className='flex gap-2 items-center bg-black-100 shadow-md-[#998] px-4 rounded-2xl'>
					<BiMobileAlt color='#fff' />
					<span className='text-lemon'>Download the app</span>
				</button>
			</div>
			<div className='flex gap-4'>
				<button
					onClick={openSignUpModal}
					className='flex gap-2 bg-lemon items-center shadow-md-[#998] px-4 py-2 rounded-lg'
				>
					<BiMobileAlt color='#fff' />
					<span className='text-white'>Sign Up</span>
				</button>
				<button className='flex gap-2 items-center bg-black-100 shadow-md-[#998] px-4 py-2 rounded-lg'>
					<BiMobileAlt color='#fff' />
					<span className='text-white'>Sign In</span>
				</button>
				<SignupModal
					isOpen={isModalSignUpOpen}
					onClose={closeSignUpModal}
					content={<p>Put your sign-up form or content here</p>}
					buttonText='Sign Up'
					setIsOpen={setIsModalSignUpOpen}
				/>
			</div>
		</header>
	);
};

export default Header;
