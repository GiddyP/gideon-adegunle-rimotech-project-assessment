import React from "react";
import { SiAirplayaudio } from "react-icons/si";
import PopTrendingCard from "../reusable/Cards/PopTrendingCard";

const PopularAndTrending = () => {
	return (
		<div>
			<div className='flex items-center gap-1 pt-5'>
				<div className=''>
					<SiAirplayaudio size={15} color='#7B61FF' />
				</div>
				<h4 className='text-white font-extrabold leading-6 py-0'>
					Popular & Trending Podcasts
				</h4>
			</div>
			<h4 className='text-white font-extrabold leading-6 py-0'>
				#Community&rsquo;s choice
            </h4>
            <div className="flex gap-3">
                <PopTrendingCard />
                <PopTrendingCard />
                <PopTrendingCard />
                <PopTrendingCard />
                <PopTrendingCard />
            </div>
		</div>
	);
};

export default PopularAndTrending;
