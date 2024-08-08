import React from 'react'
import tag from "../assets/tag.svg"
export default function Offer({title,description}) {
  return (
    <div className='w-3/4  border mt-2 border-0.5 px-[12px] py-[8px] border-[#454545] rounded-md flex items-start gap-1.5 justify-start '>
        <img src={tag}alt="not-found" className='w-4 h-4 text-green-600'/>
      <div className='flex-col items-center'>
        
        <p  className='text-[12px] font-bold gap-2 text-[rgb(38,35,35)]'>{title} </p>
        <p className='text-[12px] font-400'>{description}</p>
      </div>
     
    </div>
  )
}
