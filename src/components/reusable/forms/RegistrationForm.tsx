"use client	";
import { RegisterPayload, RegisterResponse } from "@constants";
import { useRegisterMutation } from "@src/components/config/features/api";
import Cookies from "js-cookie";
import React, { ChangeEvent, useEffect, useState } from "react";
import FormToast from "../Toast/SigninToast";
import { ClipLoader } from "react-spinners";

interface RegistrationFormProps {
	onClose: () => void;
}

const RegistrationForm = ({ onClose }: RegistrationFormProps) => {
	const [register, { isLoading, isError, error, data: registerData }] =
		useRegisterMutation();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		country: "",
		state: "",
		gender: "",
		address: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleFormSubmit = async () => {
		const payload: RegisterPayload = {
			first_name: formData.firstName,
			last_name: formData.lastName,
			email: formData.email,
			phone: formData.phone,
			country: formData.country,
			state: formData.state,
			gender: formData.gender,
			address: formData.address,
			password: formData.password,
			password_confirmation: formData.confirmPassword,
		};
		register(payload);
	};

	const handleRegisterData = (data: RegisterResponse) => {
		console.log(data);
		// Cookies.set(AUTH_TOKEN_KEY, data?.data?.token);
		// localStorage.setItem(AUTH_TOKEN_KEY, data?.data?.token);
		onClose();
		FormToast({
			message: data.massage,
			success: true,
		});
		window.location.reload();
	};

	useEffect(() => {
		if (registerData) {
			handleRegisterData(registerData);
		}
	}, [registerData]);

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
		<div className='flex w-full justify-center gap-5'>
			<div className='flex flex-col items-center gap-3'>
				<h4 className='text-xl font-extrabold text-white mt-2'>
					Register your Account
				</h4>

				<div className='grid grid-cols-2 gap-4 mt-3'>
					<input
						type='text'
						name='firstName'
						placeholder='Enter your first name'
						value={formData.firstName}
						onChange={handleChange}
						className='text-base w-[451px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						name='lastName'
						placeholder='Enter your last name'
						value={formData.lastName}
						onChange={handleChange}
						className='text-base w-[451px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						name='email'
						placeholder='Enter your email'
						value={formData.email}
						onChange={handleChange}
						className='text-base w-[451px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						name='phone'
						placeholder='Enter your phone'
						value={formData.phone}
						onChange={handleChange}
						className='text-base w-[451px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						name='country'
						placeholder='Enter your country'
						value={formData.country}
						onChange={handleChange}
						className='text-base w-[451px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						name='state'
						placeholder='Enter your state'
						value={formData.state}
						onChange={handleChange}
						className='text-base w-[451px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						name='gender'
						placeholder='Enter your gender'
						value={formData.gender}
						onChange={handleChange}
						className='text-base w-[451px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						name='address'
						placeholder='Enter your address'
						value={formData.address}
						onChange={handleChange}
						className='text-base w-[451px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						name='password'
						placeholder='Enter your password'
						value={formData.password}
						onChange={handleChange}
						className='text-base w-[451px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						name='confirmPassword'
						placeholder='Enter your confirmPassword'
						value={formData.confirmPassword}
						onChange={handleChange}
						className='text-base w-[451px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
				</div>
				<button
					onClick={handleFormSubmit}
					className='flex gap-2 bg-[#7B61FF] hover:bg-[#7B61FF]/50 hover:text-white transition items-center px-8 py-2 rounded-[32px] font-bold text-lg mt-3'
				>
					{isLoading ? <ClipLoader color='#d4d3d3' size={20} /> : "Register"}
				</button>
			</div>
		</div>
	);
};

export default RegistrationForm;
