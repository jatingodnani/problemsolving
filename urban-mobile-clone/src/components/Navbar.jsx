import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaArrowLeft } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white px-4 py-4 shadow-md flex justify-between items-center">
      <div className="flex items-center justify-start gap-4">
       
        <FaArrowLeft size={20} className="text-gray-600" />
        <p className="text-[16px] font-600 text-gray-900">
        Salon Prime for kids & men
      </p>
      </div>
      
      <div className="flex items-center">
        <AiOutlineSearch size={20} className="text-gray-600" />
      </div>
    </nav>
  );
}

export default Navbar;
