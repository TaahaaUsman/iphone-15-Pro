import React from 'react'
import { SectionWrapper } from '../hoc'

function Footer() {
  return (
    <footer className='flex justify-between items-center text-[#86868b] text-[12px] my-5'>
      <div>Copyright @ 2024 Apple Inc. All rights reserved.</div>
      <div>
        <span className='mr-2'>Private Policy</span>
        <span className='mx-2'>|</span>
        <span className='mx-2'>Terms of Use</span>
        <span className='mx-2'>|</span>
        <span className='mx-2'>Sales Policy</span>
        <span className='mx-2'>|</span>
        <span className='mx-2'>Legal</span>
        <span className='mx-2'>|</span>
        <span className='ml-2'>Site Map</span>
      </div>
    </footer>
  )
}

export default SectionWrapper(Footer)