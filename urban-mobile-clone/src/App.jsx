import { useState } from 'react';
import './App.css'; // Ensure Tailwind is imported here
import Staricon from "./assets/starsvg.svg";
import Offer from './components/Offer';
import Modalser from './components/Modalser';
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { AnimatePresence, motion } from 'framer-motion';
import PopupModal from './components/Popup';
import Bestseller from './components/Bestseller';
import { alldata, offerdata } from './data';
import Navbar from './components/Navbar';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='bg-[#f5f5f5] w-screen min-h-screen overflow-auto m-0 relative'>
      <Navbar/>
      <div className='w-full bg-white py-8 pt-16 px-4'>
        <h1 className='text-[24px] font-bold text-gray-900'>
          Salon Prime for Kids & Men
        </h1>
        <div className='flex items-center gap-4 mt-2'>
          <img src={Staricon} alt='Star Icon' className='w-4 h-6' />
          <p className='text-sm text-gray-700 border-b border-dashed border-gray-900'>
            4.87 (5.6 M bookings)
          </p>
        </div>
        <div className='w-full flex  flex-wrap gap-2'>
         {
          offerdata.map((each)=><Offer title={each.title} description={each.description}/>)
         }
      </div>
      </div>
      <Modalser />
      <AnimatePresence>
        {isModalOpen && (
          <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setIsModalOpen(prev => !prev)}
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-4 rounded-full shadow-lg z-50 flex items-center gap-2 ${isModalOpen ? 'bg-transparent' : 'bg-black text-white'}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: isModalOpen ? 0.6 : 1 }}
        transition={{ opacity: { duration: 0.3 } }}
      >
        {isModalOpen ? <MdCancel className='text-white opacity-100' size={40} /> : <IoMenu size={20} />}
        {!isModalOpen && "Menu"}
      </motion.button>
      
    <div className='flex flex-col py-4 w-full'>
      <div className='w-full bg-white pl-4 pt-4'>
      <h1 className='text-[20px]   font-bold capitalize'>BestSellers</h1>
      </div>
      {
        alldata.map((each)=><Bestseller
        title={each.title}
        time={each.time}
         discount={each.discount}
          actual={each?.actual}
          star={each.star}
          functionpac={each.functionspac}
          />)
      }
    </div>
    </div>
  );
}

export default App;
