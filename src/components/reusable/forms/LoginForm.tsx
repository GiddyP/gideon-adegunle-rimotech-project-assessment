"use client";
import { AUTH_TOKEN_KEY, LoginPayload, LoginResponse } from "@constants";
import { SignupImage } from "@public/images";
import { useLoginMutation } from "@src/components/config/features/api";
import React, { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { RiGoogleLine } from "react-icons/ri";
import { ClipLoader } from "react-spinners";
import FormToast from "../Toast/SigninToast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface LoginFormProps {
	openLoginModal: () => void;
	openSignUpModal: () => void;
	onClose: () => void;
}

const LoginForm = ({
	openLoginModal,
	openSignUpModal,
	onClose,
}: LoginFormProps) => {
	const [login, { isLoading, isError, error, data: loginData }] =
		useLoginMutation();
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Event handlers to update state when input values change
	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleFormSubmit = async () => {
		const payload: LoginPayload = {
			email: email,
			password: password,
		};
		login(payload);
	};

	const handleLoginData = (data: LoginResponse) => {
		console.log(data);
		Cookies.set(AUTH_TOKEN_KEY, data?.data?.token);
		localStorage.setItem(AUTH_TOKEN_KEY, data?.data?.token);
		onClose();
		FormToast({
			message: "Login Successful",
			success: true,
		});
		window.location.reload();
	};

	useEffect(() => {
		if (loginData) {
			handleLoginData(loginData);
		}
	}, [loginData]);

	useEffect(() => {
		if (error) {
			console.log(error);
			if (error) {
				if ("data" in error) {
					const res: any = error.data;
					if ("message" in res) {
						const message = res.message;
						FormToast({
							message: message,
							success: false,
						});
					}
				}
			}
		}
	}, [isError, error]);

	return (
		<div className='flex w-full justify-center gap-5 px-10'>
			<div className='flex w-1/2 flex-col items-center gap-3'>
				<h4 className='text-xl font-extrabold text-white'>
					Log in with your socials below
				</h4>
				<ul className='flex flex-col gap-4'>
					<li className='bg-white rounded-[32px] flex justify-between items-center px-9 w-[351px] h-[59px]'>
						<span className='bg-[#EDE6E5] p-2 rounded-full'>
							<RiGoogleLine size={23} color='#282828' />
						</span>
						<span className='flex-[.8] text-base text-[#282828] font-semibold'>
							Choose account
						</span>
						<span>
							<AiOutlineRight color='#282828' />
						</span>
					</li>
				</ul>
				<h4 className='text-base font-medium text-white'>Log in with email.</h4>
				<div className='flex flex-col gap-4 mt-2'>
					<input
						type='text'
						placeholder='Enter your email'
						className='text-base w-[351px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
						value={email}
						onChange={handleEmailChange}
					/>
					<input
						type='password'
						placeholder='Enter password'
						className='text-base w-[351px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>
				<div className='flex w-full justify-between px-12 mt-3'>
					<button
						onClick={handleFormSubmit}
						className='flex gap-2 bg-[#7B61FF] hover:bg-[#7B61FF]/50 transition items-center px-8 py-2 rounded-[32px] font-bold text-base'
					>
						{isLoading ? <ClipLoader color='#d4d3d3' size={20} /> : "Log in"}
					</button>
					<button
						// onClick={openLoginModal}
						className='flex gap-2 items-center transition text-white px-4 py-2 text-xs'
					>
						Forgot password?
					</button>
				</div>
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

export default LoginForm;
