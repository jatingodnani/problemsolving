import React from 'react';
import { servicedata } from '../data';
import Service from './Service';

function Modalser() {
  return (
    <div className='flex md:mt-2 flex-col md:border md:border-1 md:rounded md:border-gray-300'>
      <div className='hidden md:flex md:justify-center md:items-center md:w-[80%] ml-8 mt-2.5 gap-0.5'>
      <p className='hidden  md:block text-[16px] text-[#757575]'>Select a service</p>
      <div className='h-[0.5px] flex-1 bg-[#757575] mt-2'></div>
      </div>
    <div className='w-full bg-white px-2 my-4 py-8 grid grid-cols-4  md:grid-cols-3 gap-4'>
     
      {servicedata.map(each => (
        <Service key={each.name} url={each.img} title={each.name} />
      ))}
    </div>
    </div>
  );
}

export default Modalser;
