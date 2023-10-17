import React from "react";
import { SiAirplayaudio } from "react-icons/si";

interface TopCatCardProps {
	icon?: React.ReactNode;
	text: string;
	bgColor: string;
}

const TopCatCard = ({ text, bgColor, icon }: TopCatCardProps) => {
	return (
		<div
			className={`flex gap-1 bg-[${bgColor}] rounded-2xl w-fit py-2 px-4 items-center justify-center`}
		>
			<div className=''>{icon && <div className=''>{icon}</div>}</div>
			<span className='text-white'>{text}</span>
		</div>
	);
};

export default TopCatCard;
