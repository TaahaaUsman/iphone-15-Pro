import React from 'react'
import { SectionWrapper } from '../hoc'
import { frame_video, frame, chip } from '../data/index'

function HowItWorks() {
  return (
    <section>
      <div className='flex flex-col justify-center items-center'>
        <img src={chip} alt='image' className='w-48 h-48 my-20' />
        <h2 className='w-full text-center text-7xl font-semibold'>A17 Pro chip.<br />A monster win of gaming.</h2>
        <p className='text-[#86868b] text-2xl font-medium my-12 '>It's here. The biggest redesign in the history of Apple GPUs.</p>
      </div>

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

      <div className='flex justify-between my-16'>
        <p className='text-[#86868b] font-semibold text-xl w-[50%] pr-24 '>A17 Pro is entirely new class of iphone chip that delievers our <span className='text-white '>best graphic performance by far.</span><br />Mobile <span className='text-white'>games will look and feel so immersive</span>, with incredibly detailed environments and characters.</p>
        <p className='text-[#86868b] font-semibold text-xl w-[50%] '>New<br /><span className='text-white text-6xl'>Pro-class GPU</span><br /> with 6 cores.</p>
      </div>

      <div className='my-6 text-[#86868b]'>
        <span className='text-[12px] '>More ways of shop: <span className='text-blue-500 underline '>Find an Apple Store</span> or <span className='text-blue-500 underline'>other retailer</span> near you.</span><br />
        <span className='text-[12px]'>Or call 000800-040-1966</span>
      </div>
      <div className='mt-5 h-[1px] w-full bg-[#404040]'></div>
    </section>
  )
}

export default SectionWrapper(HowItWorks)