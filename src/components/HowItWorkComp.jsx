import React from 'react'
import { frame, frame_video } from '../data'

function HowItWorkComp() {
  return (
    <>
        <div className='relative flex flex-col justify-center items-center'>
        <img src={frame} alt='frame' className='w-full z-10' />
        <video
          src={frame_video}
          autoPlay
          playsInline
          muted
          className='absolute inset-0 w-[99%] h-[90%] object-cover z-0 rounded-[130px]'
          style={{ clipPath: 'inset(3% 1% 0% 2%)' }} // Adjust as necessary
        />
        <p className='text-[#86868b] mt-4'>Honkoi: Star Rail</p>
      </div>
    </>
  )
}

export default HowItWorkComp