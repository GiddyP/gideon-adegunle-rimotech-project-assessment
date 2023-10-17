import React from "react";
import EditorsChoiceCard from "../reusable/Cards/EditorsChoiceCard";

const PodcastHostSuggestions = () => {
	return (
		<div>
			<div className='flex items-center gap-1 pt-5'>
				<h4 className='text-white font-extrabold leading-6 py-0'>
					Podcast host suggestions
				</h4>
			</div>
			<h4 className='text-white font-extrabold leading-6 py-0'>
				#Editor&rsquo;s choice
            </h4>
            <div className="flex gap-2">
                <EditorsChoiceCard />
            </div>
		</div>
	);
};

export default PodcastHostSuggestions;
