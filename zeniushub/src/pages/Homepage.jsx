import React, { useState } from 'react';
import PromoModal from '../component/PromoModal';

const Homepage = () => {
  const [showPromo, setShowPromo] = useState(true);
  return (
    <>
    
    
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <h1 className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-bold 
        text-center 
        text-orange-400 
        mt-10 mb-10 
        hover:text-white 
        transition-all 
        duration-300 
        hover:scale-110
      ">
        Welcome to Zeniushub
      </h1>
    </div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <h1 className="
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-bold 
        text-center 
        text-orange-400 
        mt-10 mb-10 
        hover:text-white 
        transition-all 
        duration-300 
        hover:scale-110
      ">
        Welcome to Zeniushub
      </h1>
    </div>
      {showPromo && (
        <PromoModal onClose={() => setShowPromo(false)} />
      )}
    </>
  );
};

export default Homepage;
