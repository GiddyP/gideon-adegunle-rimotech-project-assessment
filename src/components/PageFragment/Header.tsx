"use client";
import React, { useState } from "react";
import { BiMobileAlt, BiUser } from "react-icons/bi";
import { BsApple, BsFacebook, BsSearch } from "react-icons/bs";
import SignupModal from "../reusable/modal/Signupmodal";
import { RiGoogleLine } from "react-icons/ri";
import { AiOutlineAudio, AiOutlineRight } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { SignupImage } from "@public/images";
import RegistrationForm from "../reusable/forms/RegistrationForm";
import { useLoginMutation } from "../config/features/api";
import LoginForm from "../reusable/forms/LoginForm";

const Header = () => {
	const [isModalSignUpOpen, setIsModalSignUpOpen] = useState(false);
	const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
	const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);


	const openSignUpModal = () => {
		setIsModalSignUpOpen(true);
	};

	const closeSignUpModal = () => {
		setIsModalSignUpOpen(false);
	};
	const openLoginModal = () => {
		setIsModalLoginOpen(true);
	};

	const closeLoginModal = () => {
		setIsModalLoginOpen(false);
	};
	const openRegisterModal = () => {
		setIsRegisterFormOpen(true);
	};

	const closeRegisterModal = () => {
		setIsRegisterFormOpen(false);
	};

	const handleSignUp = () => {
		closeSignUpModal();
	};
	const handleLogin = () => {
		closeLoginModal();
	};
	const handleRegister = () => {
		closeRegisterModal();
	};

	const SignupContent = () => {
		const signupOptions = [
			{
				icon: <RiGoogleLine size={23} color='#282828' />,
				text: "Continue with Google",
			},
			{
				icon: <BsFacebook size={23} color='#282828' />,
				text: "Continue with Facebook",
			},
			{
				icon: <BsApple size={23} color='#282828' />,
				text: "Continue with Apple ID",
			},
			{
				icon: <HiMail size={23} color='#282828' />,
				text: "Create account with your email",
				onClick: openRegisterModal,
			},
		];
		return (
			<div className='flex w-full justify-center gap-5 px-10'>
				<div className='flex w-1/2 flex-col items-center gap-3'>
					<h4 className='text-2xl font-extrabold text-white'>
						Create an account
					</h4>
					<ul className='flex flex-col gap-4'>
						{signupOptions.map((option, index) => (
							<li
								key={index}
								className='bg-white rounded-[32px] flex justify-between items-center px-6 w-[351px] h-[59px] cursor-pointer'
								onClick={option.onClick}
							>
								<span className='bg-[#EDE6E5] p-2 rounded-full'>
									{option.icon}
								</span>
								<span className='flex-[.9] text-base text-[#282828] font-semibold'>
									{option.text}
								</span>
								<span>
									<AiOutlineRight color='#282828' />
								</span>
							</li>
						))}
					</ul>
					<h4 className='text-base text-[#CDCDCD] leading-8'>
						Already have an account?{" "}
						<span
							onClick={openLoginModal}
							className='hover:underline hover:text-lemon transition cursor-pointer'
						>
							Log in
						</span>
					</h4>
				</div>
				<div className='w-1/2 flex flex-col items-center'>
					<img src={SignupImage.src} alt={SignupImage.alt} />
					<h4 className='text-[#7B61FF] text-2xl leading-8 text-center font-extrabold'>
						Join a community of podcast lovers and creators
					</h4>
				</div>
			</div>
		);
	};


	return (
		<header className='h-[77px] bg-black-400 flex w-4/5 gap-24 items-center px-6 fixed top-0'>
			<div className='flex justify-between flex-1'>
				<div className='flex h-10 w-[482px] rounded-lg bg-white items-center px-1'>
					<input
						type='text'
						placeholder='Search by Podcast Name, Host name, Categories, Tags...'
						className='flex-1 text-xs text-black/70 px-4 py-2 border-none outline-none rounded-lg'
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
					className='flex gap-2 bg-lemon hover:bg-lemon/50 transition items-center shadow-md-[#998] px-4 py-2 rounded-lg'
				>
					<AiOutlineAudio color='#fff' />
					<span className='text-white'>Sign Up</span>
				</button>
				<button
					onClick={openLoginModal}
					className='flex gap-2 items-center bg-black-100 hover:bg-black-200 transition shadow-md-[#998] px-4 py-2 rounded-lg'
				>
					<BiUser color='#fff' />
					<span className='text-white'>Log In</span>
				</button>
				<SignupModal
					isOpen={isModalSignUpOpen}
					onClose={closeSignUpModal}
					content={<SignupContent />}
					buttonText='Sign Up'
					setIsOpen={setIsModalSignUpOpen}
				/>
				<SignupModal
					isOpen={isModalLoginOpen}
					onClose={closeLoginModal}
					content={<LoginForm openSignUpModal={openSignUpModal} openLoginModal={openLoginModal} />}
					buttonText='Login'
					setIsOpen={setIsModalLoginOpen}
				/>
				<SignupModal
					isOpen={isRegisterFormOpen}
					onClose={closeRegisterModal}
					content={<RegistrationForm />}
					buttonText='Register'
					setIsOpen={setIsRegisterFormOpen}
				/>
			</div>
		</header>
	);
};

export default Header;
