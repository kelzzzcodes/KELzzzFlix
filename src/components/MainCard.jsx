import React from 'react'
import Image from '../assets/backgroundImage.jpg'
const MainCard = () => {
  return (
    <>
      <div className="w-full flex flex-col  ">
      

        <div className=' mt-12 p-2 grid grid-cols-3 gap-10 '>
          <div className=" bg-green-500  h-[300px] w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative">
            <img  className='flex h-full w-full object-cover' src={Image}/>
          
           <div className='absolute  bottom-0 bg-black/80 w-full'>
         <div className='flex flex-col items-start justify-start text-white text-sm p-2'>
         <p className=' font-bold'>Miramax</p>
      
        <ul className="  flex flex-col gap-0 items-start justify-start  lg:flex-row lg:gap-2 lg:items-center lg:justify-center">
              <li>
              <p>2018</p>
              </li>
              <li className="flex items-center gap-2">
                <span className= " hidden lg:border-red-500 lg:border-r-2 lg:flex h-4"></span>
                <p>action</p>
              </li>
              <li className="flex items-center gap-2">
                <span className= " hidden lg:border-red-500 lg:border-r-2 lg:flex h-4"></span>
                <p>2 hours 15 mnts</p>
              </li>
            </ul>
           
            <p>4.5</p>
         </div>

           </div>
          </div>
          <div className=" bg-green-500  h-[300px] w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative">
            <img  className='flex h-full w-full object-cover' src={Image}/>
          
           <div className='absolute  bottom-0 bg-black/80 w-full'>
         <div className='flex flex-col items-start justify-start text-white text-sm p-2'>
         <p className=' font-bold'>Miramax</p>
      
        <ul className="  flex flex-col gap-0 items-start justify-start  lg:flex-row lg:gap-2 lg:items-center lg:justify-center">
              <li>
              <p>2018</p>
              </li>
              <li className="flex items-center gap-2">
                <span className= " hidden lg:border-red-500 lg:border-r-2 lg:flex h-4"></span>
                <p>action</p>
              </li>
              <li className="flex items-center gap-2">
                <span className= " hidden lg:border-red-500 lg:border-r-2 lg:flex h-4"></span>
                <p>2 hours 15 mnts</p>
              </li>
            </ul>
           
            <p>4.5</p>
         </div>

           </div>
          </div>
          <div className=" bg-green-500  h-[300px] w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative">
            <img  className='flex h-full w-full object-cover' src={Image}/>
          
           <div className='absolute  bottom-0 bg-black/80 w-full'>
         <div className='flex flex-col items-start justify-start text-white text-sm p-2'>
         <p className=' font-bold'>Miramax</p>
      
        <ul className="  flex flex-col gap-0 items-start justify-start  lg:flex-row lg:gap-2 lg:items-center lg:justify-center">
              <li>
              <p>2018</p>
              </li>
              <li className="flex items-center gap-2">
                <span className= " hidden lg:border-red-500 lg:border-r-2 lg:flex h-4"></span>
                <p>action</p>
              </li>
              <li className="flex items-center gap-2">
                <span className= " hidden lg:border-red-500 lg:border-r-2 lg:flex h-4"></span>
                <p>2 hours 15 mnts</p>
              </li>
            </ul>
           
            <p>4.5</p>
         </div>

           </div>
          </div>
      
        </div>
      </div>
    </>
  )
}

export default MainCard