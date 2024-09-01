import React from 'react'
// wrapper
import { SectionWrapper } from '../hoc'
// data
import { lazy, Suspense } from 'react'

const VideoComp = lazy(() => import('./VideoComp'))

function Hero() {
  return (
    <div className='flex flex-col justify-center w-full h-[90vh]'>
        <h1 className='text-[#94928d] text-center text-[30px] font-bold '>iPhone 15 Pro</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <VideoComp />
        </Suspense>
        <div className='flex flex-col items-center mt-10'>
            <button className='bg-[#2997ff] border-2 border-[#2997ff] rounded-full py-[8px] px-[20px] cursor-pointer hover:text-[#2997ff] hover:bg-black'>Buy</button>
            <p className='text-xl mt-3'>From $199/month or $999</p>
        </div>
    </div>
  )
}
export default SectionWrapper(Hero)
