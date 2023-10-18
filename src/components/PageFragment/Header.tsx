"use client";
import React, { useState } from "react";
import { BiMobileAlt, BiUser } from "react-icons/bi";
import { BsApple, BsFacebook, BsSearch } from "react-icons/bs";
import SignupModal from "../reusable/modal/Signupmodal";
import { RiGoogleLine } from "react-icons/ri";
import { AiOutlineAudio, AiOutlineRight } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { SignupImage } from "@public/images";

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

	const SignupContent = () => (
		<div className="signup-content">
		  <div className="signup-options">
			<div className="signup-option">
			  <RiGoogleLine size={23} color="#282828" />
			  <span className="option-text">Continue with Google</span>
			  <AiOutlineRight color="#282828" />
			</div>
			<div className="signup-option">
			  <BsFacebook size={23} color="#282828" />
			  <span className="option-text">Continue with Facebook</span>
			  <AiOutlineRight color="#282828" />
			</div>
			<div className="signup-option">
			  <BsApple size={23} color="#282828" />
			  <span className="option-text">Continue with Apple ID</span>
			  <AiOutlineRight color="#282828" />
			</div>
			<div className="signup-option">
			  <HiMail size={23} color="#282828" />
			  <span className="option-text">Create account with your email</span>
			  <AiOutlineRight color="#282828" />
			</div>
		  </div>
		  <h4 className="login-text">
			Already have an account? Log in
		  </h4>
		</div>
	  );

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
				<button className='flex gap-2 items-center bg-black-100 hover:bg-black-200 transition shadow-md-[#998] px-4 py-2 rounded-lg'>
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
			</div>
		</header>
	);
};

export default Header;
