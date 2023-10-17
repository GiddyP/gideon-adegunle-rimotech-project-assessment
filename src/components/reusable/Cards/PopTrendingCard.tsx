import { FranklySpeaking, Subscribers } from "@public/images";
import React from "react";
import { AiFillAppstore } from "react-icons/ai";

const PopTrendingCard = () => {
    // w-[230px] h-[295px] 
	return (
		<div className='p-2 bg-[#30303080] w-fit'>
			<img
				src={FranklySpeaking.src}
				alt={FranklySpeaking.alt}
				className='w-[216px] h-[184px] object-cover'
			/>

			<div className='flex flex-col gap-1 text-white'>
				<span className='text-lg font-bold'>WTF</span>
				<span className='text-sm'>By: Marc Maron</span>
			</div>
			<div className='flex gap-1 mt-2 items-center'>
				<img src={Subscribers.src} alt={Subscribers.alt} />
			</div>
		</div>
	);
};

export default PopTrendingCard;
