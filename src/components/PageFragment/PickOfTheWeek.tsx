import { FranklySpeaking, Navigation1, Navigation2 } from "@public/images";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import TopPodcastCard from "../reusable/Cards/TopPodcastCard";

const PickOfTheWeek = () => {
	return (
		<div className="mt-[75px]">
			<div className='flex px-5 items-center gap-1 pt-5'>
				<div className=''>
					<BsStarFill size={15} color='#7B61FF' />
				</div>
				<h4 className='text-white font-extrabold leading-6 py-0'>
					Pick of the week
				</h4>
			</div>
			<div className='flex'>
				<div className='w-[508px] h-[357px]'>
					<img src={FranklySpeaking.src} alt={FranklySpeaking.alt} className="object-contain" />
				</div>
                <div className='flex flex-col flex-1 px-2'>
                    <div className="flex items-center justify-between w-full">
                        <span className="text-white">Top podcasts</span>
                        <span className="text-lemon">See all</span>
                    </div>
                    <div className="flex mt-3 gap-1">
                        <img src={Navigation1.src} alt={Navigation1.alt} />
                        <img src={Navigation2.src} alt={Navigation2.alt} />
                    </div>
                    <div className="flex gap-3 mt-3 overflow-x-hidden">
                        <TopPodcastCard />
                        <TopPodcastCard />
                        <TopPodcastCard />
                    </div>
                </div>
			</div>
		</div>
	);
};

export default PickOfTheWeek;
