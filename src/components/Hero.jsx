import React from 'react'
// wrapper
import { SectionWrapper } from '../hoc'
// data
import { hero_video } from '../data'

function Hero() {
  return (
    <div className='flex flex-col justify-center w-full h-[90vh]'>
        <h1 className='text-[#94928d] text-center text-[30px] font-bold '>iPhone 15 Pro</h1>
        <video
        src={hero_video}
        autoPlay
        playsInline
        muted
        className="w-full h-auto"
        style={{ objectFit: 'cover' }} // Ensures video covers the div
      />
        <div className='flex flex-col items-center mt-10'>
            <button className='bg-[#2997ff] border-2 border-[#2997ff] rounded-full py-[8px] px-[20px] cursor-pointer hover:text-[#2997ff] hover:bg-black'>Buy</button>
            <p className='text-xl mt-3'>From $199/month or $999</p>
        </div>
    </div>
  )
}
export default SectionWrapper(Hero)
