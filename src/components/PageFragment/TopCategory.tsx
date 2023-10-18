import React from "react";
import { SiAirplayaudio } from "react-icons/si";
import { GiGuitar } from "react-icons/gi";
import TopCatCard from "../reusable/Cards/TopCatCard";

const TopCategory = () => {
	const categories = [
		{
			icon: <GiGuitar color='#dbce57' />,
			bgColor: "#575757",
			text: "Comedy",
		},
		{
			icon: <GiGuitar color='#dbce57' />,
			bgColor: "#575757",
			text: "Comedy",
		},
		{
			icon: <GiGuitar color='#dbce57' />,
			bgColor: "#575757",
			text: "Comedy",
		},
		{
			icon: <GiGuitar color='#dbce57' />,
			bgColor: "#575757",
			text: "Comedy",
		},
		{
			icon: <GiGuitar color='#dbce57' />,
			bgColor: "#575757",
			text: "Comedy",
		},
		{
			icon: <GiGuitar color='#dbce57' />,
			bgColor: "#575757",
			text: "Comedy",
		},
		{
			icon: <GiGuitar color='#dbce57' />,
			bgColor: "#575757",
			text: "Comedy",
		},
		{
			icon: <GiGuitar color='#dbce57' />,
			bgColor: "#575757",
			text: "Comedy",
		},
	];

	return (
		<div className='bg-[#30303080] mt-6 w-[98%] mx-auto pb-4 pl-3'>
			<div className='flex items-center gap-1 pt-5'>
				<div className=''>
					<SiAirplayaudio size={15} color='#7B61FF' />
				</div>
				<h4 className='text-white font-extrabold leading-6 py-0'>
					Top categories
				</h4>
			</div>
			<div className='flex w-full'>
				<div className='mt-4 flex gap-4 flex-wrap flex-[.8]'>
					{categories.map((category, index) => (
						<TopCatCard
							key={index}
							icon={category.icon}
							bgColor={category.bgColor}
							text={category.text}
						/>
					))}
				</div>
				<div className='flex flex-[.2] items-center justify-center'>
					<h4 className='text-lemon'>See all categories</h4>
				</div>
			</div>
		</div>
	);
};

export default TopCategory;
