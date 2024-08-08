import React from 'react';
import pack from "../assets/package2.svg";
import Staricon from "../assets/star2.svg";
import dot from "../assets/dot.svg";

function Bestseller({ title, time, discount, actual, functionpac, star }) {
    console.log(functionpac);
  return (
    <div className='flex-col p-4 w-full bg-white gap-2'>
      <div className='flex justify-start items-center gap-2 leading-8'>
        <img src={pack} className='w-4 h-6' alt="not-found" />
        <p className='text-[10px] text-green-500 font-bold uppercase'>package</p>
      </div>
      <div className='w-full flex justify-between items-center'>
        <div className='w-[70%] border-b border-dashed border-black pb-2 '>
          <h1 className='text-[16px] font-bold capitalize'>{title}</h1>
          <div className='flex items-center gap-2'>
            <img src={Staricon} alt='Star Icon' className='w-3 h-3' />
            <p className='text-sm text-gray-700 border-b border-dashed border-gray-900'>
              {star}(518k reviews)
            </p>
          </div>
          <div className='flex items-center gap-2 mt-1'>
            <p className="text-[12px] text-[#0f0f0f] font-bold">₹{discount}</p>
            <p className="text-[12px] line-through text-[#545454] font-bold">₹{actual}</p>
            <p className='text-[12px] text-[#545454] flex items-center'><img src={dot} alt="not-found" className='w-4 h-4' />{time}</p>
          </div>
        </div>
        <button className='rounded-md bg-transparent border border-1 px-6 py-1 border-gray-300 cursor-pointer text-purple-500'>
          Add
        </button>
      </div>
      <div className="py-2">
        {functionpac && Object.entries(functionpac).map(([key, value]) => (
          <div key={key} className="flex mb-2 items-center">
            <img src={dot} alt="not-found" className='w-4 h-4' />
            <p className="font-bold text-[#33333] capitalize text-[12px]">{key}:</p>
            <p className="text-[#545454] text-[12px] ml-1 font-400 capitalize">{value}</p>
          </div>
        ))}
      </div>
      <button className='rounded-md bg-transparent border border-1 px-6 py-1 border-gray-300 cursor-pointer text-black'>
        Edit Your Package
      </button>
      <div className='w-[90%] mt-4 h-0.5 rounded-md text-center bg-gray-300'></div>
    </div>
  );
}

export default Bestseller;
