import React from "react";
import DiscoverCard from "../reusable/Cards/DiscoverCard";

const DiscoverOtherListeners = () => {
	return (
		<div className="mt-5">
			<div className='flex items-center gap-1 pt-5'>
				<h4 className='text-white font-extrabold leading-6 py-0'>
					Discover other listners
				</h4>
			</div>
			<h4 className='text-white font-extrabold leading-6 py-0'>
				We are building a community of podcast lovers
			</h4>
			<h4 className='text-white font-extrabold leading-6 py-0'>
				#suggested for you
            </h4>
            <div className="grid grid-cols-4 gap-2 mt-4">
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
                <DiscoverCard />
            </div>
		</div>
	);
};

export default DiscoverOtherListeners;
