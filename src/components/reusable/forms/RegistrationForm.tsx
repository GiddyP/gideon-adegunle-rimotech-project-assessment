import React from "react";

const RegistrationForm = () => {
	return (
		<div className='flex w-full justify-center gap-5 px-5'>
			<div className='flex flex-col items-center gap-3'>
				<h4 className='text-xl font-extrabold text-white'>
					Register your Account
				</h4>

				<div className='grid grid-cols-2 gap-4 mt-2'>
					<input
						type='text'
						placeholder='Enter your first name'
						className='text-base w-[351px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						placeholder='Enter your last name'
						className='text-base w-[351px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						placeholder='Enter your email'
						className='text-base w-[351px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						placeholder='Enter your phone'
						className='text-base w-[351px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						placeholder='Enter your country'
						className='text-base w-[351px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						placeholder='Enter your state'
						className='text-base w-[351px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						placeholder='Enter your gender'
						className='text-base w-[351px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						placeholder='Enter your address'
						className='text-base w-[351px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						placeholder='Enter your password'
						className='text-base w-[351px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
					<input
						type='text'
						placeholder='confirm email'
						className='text-base w-[351px] h-[59px] leading-5 text-white bg-transparent rounded-[32px] px-4 py-2 border-2 border-white outline-none'
					/>
				</div>
			</div>
		</div>
	);
};

export default RegistrationForm;
