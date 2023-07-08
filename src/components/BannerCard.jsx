import React from 'react'
import Image from '../assets/backgroundImage.jpg'

const BannerCard = () => {
  return (
    <div className="flex gap-10">
      <div className=" w-[160px] sm:w-[200px] md:w-[280px] lg:w-[400px] inline-block cursor-pointer  text-white">
        <div className="w-full h-full ">
          <img className=" w-full h-[200px] object-cover " src={Image} />
          <div className="mt-4 flex flex-col gap-2 items-center ">
            <h2 className="text-lg font-bold">Iron Man</h2>
            <ul className=" flex flex-col  md:flex-row gap-2 items-center">
              <li>
                <p>2018</p>
              </li>
              <li className="flex items-center gap-2">
                <span className="md:border-red-500 md:border-r-2 flex h-4"></span>
                <p>action</p>
              </li>
              <li className="flex items-center gap-2">
                <span className="md:border-red-500 md:border-r-2 flex h-4"></span>
                <p>2 hours 15 mnts</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerCard
