'use client';

import Image from 'next/image';

const ExploreBtn = () => {
  return (

   <button
      className="block mt-7 mx-auto p-10"
      onClick={() => console.log('clicked')}
    > 
    
    
    
    
     <a href="#events">
      
        
        Explore Events

        <Image src="./public/icons/arrow-down.svg" alt="arrow down" width={24} height={24}/>

      </a>
    
    
    
    
    
    </button>
     
  
  );
};

export default ExploreBtn;