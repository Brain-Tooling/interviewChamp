import React from 'react'
import chimp from '../assets/chimp.png'
const Logo: React.FunctionComponent = () => {

  return (
    <div className='flex flex-col object-top items-center justify-center mb-4 mt-48'>
      <img  
        src={chimp}
        className='w-24 object-cover object-top drop-shadow-[0_1px_1.2px_rgba(255,255,0,0.8)]'
      />
      <h1 id='logo-font' className='drop-shadow-[0_2px_1.2px_rgba(255,255,0,0.8)]' >
        interviewChimp
      </h1>
    </div>
  );
}

export default Logo