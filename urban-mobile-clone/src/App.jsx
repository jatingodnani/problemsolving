import { useState } from 'react';
import './App.css'; 
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
    <div className='w-screen min-h-screen overflow-x-hidden m-0 flex flex-col'>
      <Navbar/>

      <div className='flex flex-col md:flex-row'>
        {/* Left Section */}
        <div className='flex-none w-full md:w-1/4 bg-white py-8 pt-20 px-6 overflow-x-hidden'>
          <h1 className='text-[24px] font-bold text-gray-900'>
            Salon Prime for Kids & Men
          </h1>
          <div className='flex items-center gap-4 mt-2'>
            <img src={Staricon} alt='Star Icon' className='w-4 h-6' />
            <p className='text-sm text-gray-700 border-b border-dashed border-gray-900'>
              4.87 (5.6 M bookings)
            </p>
          </div>
          <div className='w-full flex flex-wrap gap-2 md:hidden'>
            {
              offerdata.map((each)=><Offer key={each.title} title={each.title} description={each.description}/>)
            }
          </div>
          <Modalser />
        </div>

        {/* Middle Section */}
        <div className='flex-1 md:px-16 py-4 w-full overflow-x-hidden md:rounded-md md:mx-4 md:mt-20  md:border md:border-1 md:border-gray-300'>
          <div className='w-full bg-white pl-4 pt-4'>
            <h1 className='text-[20px] font-bold capitalize'>BestSellers</h1>
          </div>
          {
            alldata.map((each)=><Bestseller
              key={each.title}
              title={each.title}
              time={each.time}
              discount={each.discount}
              actual={each?.actual}
              star={each.star}
              functionpac={each.functionspac}
            />)
          }
        </div>

        {/* Right Section */}
        <div className='hidden md:flex flex-none w-1/4 flex-col mt-32 gap-2'>
          {
            offerdata.map((each)=><Offer key={each.title} title={each.title} description={each.description}/>)
          }
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsModalOpen(prev => !prev)}
        className={`md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-4 rounded-full shadow-lg z-50 flex items-center gap-2 ${isModalOpen ? 'bg-transparent' : 'bg-black text-white'}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: isModalOpen ? 0.6 : 1 }}
        transition={{ opacity: { duration: 0.3 } }}
      >
        {isModalOpen ? <MdCancel className='text-white opacity-100' size={40} /> : <IoMenu size={20} />}
        {!isModalOpen && "Menu"}
      </motion.button>
    </div>
  );
}

export default App;
