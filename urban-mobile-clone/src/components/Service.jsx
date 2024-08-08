import React from 'react';

function Service({ url, title }) {
  return (
    <div className="flex flex-col items-center h-32">
      <img src={url} alt={title} className="cursor-pointer w-16 h-16 object-fill aspect-w-1 aspect-h-1 rounded-md" />
      <p className="text-center mt-2 line-clamp-2 leading-4 font-thin text-[12px] capitalize">{title}</p>
    </div>
  );
}

export default Service;
