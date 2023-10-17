import { homeImageName1 } from "@public/images";
import React from "react";
import { PiWaveformDuotone } from "react-icons/pi";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BiSolidHeart } from "react-icons/bi";

const Sidebar = () => {
	return (
		<aside className='w-1/5 text-white bg-black-200 h-full'>
			<div className='fixed text-white bg-black-200 h-full w-full'>
				<div className=''>
					<img
						src={homeImageName1.src}
						alt={homeImageName1.alt}
						className='pl-6 mb-4 pt-2'
					/>
				</div>
				<ul className='flex flex-col gap-2'>
					<li className='flex items-center gap-2 text-base leading-6 font-extrabold pl-6 py-2'>
						<div className='p-1 rounded-md bg-black-300'>
							<PiWaveformDuotone size={22} />
						</div>
						<span>Discover</span>
					</li>
					<li className='flex items-center gap-2 text-base leading-6 font-extrabold pl-6 py-2'>
						<div className='p-1 rounded-md bg-black-300'>
							<PiWaveformDuotone size={22} />
						</div>
						<span>Discover</span>
					</li>
					<li className='flex items-center gap-2 text-base leading-6 font-extrabold pl-6 py-2'>
						<div className='p-1 rounded-md bg-black-300'>
							<PiWaveformDuotone size={22} />
						</div>
						<span>Discover</span>
					</li>
				</ul>
				<nav className='flex items-center pl-6 mt-4 mb-2 gap-2 text-lg'>
					<h2>Your Library</h2>
					<div>
						<AiOutlineCaretDown size={12} />
					</div>
				</nav>
				<section className='flex gap-4 pl-6'>
					<BiSolidHeart size={26} />
					<BiSolidHeart size={26} />
					<BiSolidHeart size={26} />
				</section>
				<ul className='flex flex-col gap-2'>
					<li className='flex items-center gap-2 text-base leading-6 font-extrabold pl-6 py-2'>
						<div className='p-1 rounded-md bg-black-300'>
							<PiWaveformDuotone size={22} />
						</div>
						<span>Discover</span>
					</li>
					<li className='flex items-center gap-2 text-base leading-6 font-extrabold pl-6 py-2'>
						<div className='p-1 rounded-md bg-black-300'>
							<PiWaveformDuotone size={22} />
						</div>
						<span>Discover</span>
					</li>
					<li className='flex items-center gap-2 text-base leading-6 font-extrabold pl-6 py-2'>
						<div className='p-1 rounded-md bg-black-300'>
							<PiWaveformDuotone size={22} />
						</div>
						<span>Discover</span>
					</li>
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
