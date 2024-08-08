import React from 'react';
import { servicedata } from '../data';
import Service from './Service';

function Modalser() {
  return (
    <div className='w-full bg-white px-2 my-4 py-8 grid grid-cols-4 gap-4'>
      {servicedata.map(each => (
        <Service key={each.name} url={each.img} title={each.name} />
      ))}
    </div>
  );
}

export default Modalser;
