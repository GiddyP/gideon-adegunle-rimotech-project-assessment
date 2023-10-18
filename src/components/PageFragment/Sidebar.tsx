import { homeImageName1 } from "@public/images";
import React from "react";
import { PiMicrophoneStageThin, PiWaveformDuotone } from "react-icons/pi";
import { AiFillStar, AiOutlineCaretDown } from "react-icons/ai";
import { BiSolidHeart } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FiAward } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { MdOutlineQueueMusic } from "react-icons/md";

const Sidebar = () => {
	const menuItems = [
		{
			icon: <PiWaveformDuotone size={20} color='#fff' />,
			text: "Discover",
		},
		{
			icon: <AiFillStar size={20} color='#fff' />,
			text: "Top 50 podcasts",
		},
		{
			icon: <FiAward size={20} color='#fff' />,
			text: "Categories",
		},
		{
			icon: <PiMicrophoneStageThin size={20} color='#fff' />,
			text: "Add your podcast",
		},
	];
	const menuItems02 = [
		{
			icon: <MdOutlineQueueMusic size={20} color='#fff' />,
			text: "Your playlist",
		},
		{
			icon: <AiFillStar size={20} color='#fff' />,
			text: "Recently played",
		},
		{
			icon: <FiAward size={20} color='#fff' />,
			text: "Subscription & Hosts",
		},
		
	];
	// box-shadow: 0px 0px 20px 0px #0000001A;
	return (
		<aside
			className='w-1/5 text-white bg-black-200 h-full'
			style={{
				boxShadow: "0px 0px 20px 0px #0000001A",
			}}
		>
			<div className='fixed text-white bg-black-200 h-full w-full'>
				<div className=''>
					<img
						src={homeImageName1.src}
						alt={homeImageName1.alt}
						className='pl-6 mb-5 pt-2'
					/>
				</div>
				<ul className='flex flex-col gap-2'>
					{menuItems.map((item, index) => (
						<li
							key={index}
							className='flex items-center bg-gradient-to-b hover:from-[#acacac] hover:to-[#666666] transition cursor-pointer gap-3 text-base leading-6 font-extrabold pl-6 py-2'
						>
							<div className='p-1 rounded-md bg-black-300'>{item.icon}</div>
							<span>{item.text}</span>
						</li>
					))}
				</ul>
				<nav className='flex items-center pl-6 mt-4 mb-2 gap-2 text-lg'>
					<h2 className='text-lg font-bold'>Your Library</h2>
					<div>
						<AiOutlineCaretDown size={12} />
					</div>
				</nav>
				<section className='flex items-center gap-6 pl-6'>
					<BiSolidHeart size={26} color='#919191' />
					<CgMenuLeftAlt size={26} color='#919191' />
					<FaPlus size={20} color='#919191' />
				</section>

				<ul className='flex flex-col gap-2 mt-3'>
					{menuItems02.map((item, index) => (
						<li
							key={index}
							className='flex items-center bg-gradient-to-b hover:from-[#acacac] hover:to-[#666666] transition cursor-pointer gap-3 text-base leading-6 font-extrabold pl-6 py-2'
						>
							<div className='p-1 rounded-md bg-black-300'>{item.icon}</div>
							<span>{item.text}</span>
						</li>
					))}
				</ul>
				{/* <hr /> */}
				<ul className='flex flex-col gap-1 pb-4'>
					<li className='flex items-center gap-1 text-base leading-6 font-[500] pl-6 py-2'>
						<div className='p-1 rounded-md bg-black-300'>
							<PiWaveformDuotone size={22} />
						</div>
						<span>Discover</span>
					</li>
					<li className='flex items-center gap-1 text-base leading-6 font-[500] pl-6 py-2'>
						<div className='p-1 rounded-md bg-black-300'>
							<PiWaveformDuotone size={22} />
						</div>
						<span>Discover</span>
					</li>
					<li className='flex items-center gap-1 text-base leading-6 font-[500] pl-6 py-2'>
						<div className='p-1 rounded-md bg-black-300'>
							<PiWaveformDuotone size={22} />
						</div>
						<span>Discover</span>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
