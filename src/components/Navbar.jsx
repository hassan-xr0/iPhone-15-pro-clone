import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'

const Navbar = () => {
    const navList = ['Mac','iPad','iPhone','Watch','Airpods','Entertainment','Support','Where to Buy']
  return (
    <header className='w-full py-5 px-5 sm:px-10 flex justify-center items-center'>
        <nav className='flex w-full max-sm:px4 max-sm:justify-between screen-max-width'>
            <img  src={appleImg} alt="Apple" height={18} width={14} />

            <div className='flex flex-1 justify-center items-center max-lg:space-x-5 space-x-14 text-sm max-sm:hidden'>
                {navList.map((nav)=>(
                    <div className='px4 cursor-pointer text-gray hover:text-white transition-all duration-500'>{nav}</div>
                ))}
            </div>

            <div className='flex justify-center items-center space-x-7'>
                <img src={searchImg} alt="Search" width={15} height={15} />
                <img src={bagImg} alt="Search" width={15} height={15} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar