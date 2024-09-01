import React from 'react';
// assets
import { apple, bag, search, nav_list } from '../data';

// Wrapper
import { SectionWrapper } from '../hoc';

function Navbar({ Mobile }) {
  return (
    <div className="text-white flex items-center justify-between h-[70px]">
      <div>
        <img src={apple} alt="Apple" className="w-6 h-6 cursor-pointer" />
      </div>
      <div
        className={`w-[500px] ${
          Mobile ? 'hidden' : 'flex'
        } items-center justify-evenly`}
      >
        {nav_list.map((data) => (
          <span className='text-sm cursor-pointer text-[#ccc] hover:text-white'>{data}</span>
        ))}
      </div>
      <div className="w-[80px] flex items-center justify-between">
        <img src={search} alt="Search" className="w-6 h-6 cursor-pointer" />
        <img src={bag} alt="Bag" className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
}

export default SectionWrapper(Navbar);
