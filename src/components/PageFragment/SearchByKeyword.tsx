import React from "react";
import { SiAirplayaudio } from "react-icons/si";
import TopCatCard from "../reusable/Cards/TopCatCard";
import PopularKeywordCard from "../reusable/Cards/PopularKeywordCard";

const SearchByKeyword = () => {
	return (
		<div>
			<div className='flex flex-col gap-1 py-5'>
				<div className='flex items-center'>
					<SiAirplayaudio size={15} color='#7B61FF' />
					<h4 className='text-white font-extrabold leading-6 py-0'>
						Search by popular keywords
					</h4>
				</div>
				<div className="flex gap-3">
					<PopularKeywordCard text='#relationship' />
					<PopularKeywordCard text='#relationship' />
					<PopularKeywordCard text='#relationship' />
					<PopularKeywordCard text='#relationship' />
					<PopularKeywordCard text='#relationship' />
				</div>
			</div>
		</div>
	);
};

export default SearchByKeyword;
