import React from 'react';
import { motion } from 'framer-motion';
import { servicedata } from '../data';
import Service from './Service';

const PopupModal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="fixed inset-0 bg-black bg-opacity-90"
          onClick={onClose} 
        ></div>
        <motion.div
          className="bg-white p-4 sm:p-8 rounded-lg shadow-lg z-10 w-[90%] sm:w-[75%] max-w-[800px]"
          initial={{ opacity: 0, y: 200, scale: 0.9 }}
          animate={{ opacity: 1, y: 100, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <div className='bg-white px-2 grid grid-cols-3 gap-4'>
            {servicedata.map(each => (
              <Service key={each.name} url={each.img} title={each.name} />
            ))}
          </div>
        </motion.div>
      </div>
    )
  );
};

export default PopupModal;
