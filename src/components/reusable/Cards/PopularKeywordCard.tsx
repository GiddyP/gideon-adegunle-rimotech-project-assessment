import React from 'react'

interface TopCatCardProps {
	text: string;
}

const PopularKeywordCard = ({text}:TopCatCardProps) => {
  return (
    <div
    className={`flex gap-1 bg-[#575757] rounded-2xl w-fit py-2 px-4 items-center justify-center`}
>
    <span className='text-white'>{text}</span>
</div>
  )
}

export default PopularKeywordCard
