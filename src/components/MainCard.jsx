import React from 'react'
import { handleSplit } from '../utils'
import { AiFillStar } from 'react-icons/ai'
const MainCard = ({ item }) => {
  return (
    <>
      <div className="w-full flex mt-8 items-center gap-10  ">
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth  scrollbar-hide  grid grid-flow-col gap-5">
          <div className="opacity-100  hover:opacity-50  w-[280px] cursor-pointer flex flex-col hover:shadow-lg ">
            <img
              className="flex h-full w-full object-cover rounded-t-xl"
              src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
              alt={item?.title}
            />

            <div className=" bg-black/10  rounded-b-xl py-4 px-2 w-full flex flex-col items-start justify-start text-white text-smn border-2 border-t-0 border-gray-300/30">
              <div className="flex flex-wrap w-full">
                <p className="font-bold line-clamp-2">{item?.title}</p>
              </div>

              <ul className="  flex flex-col gap-0 items-start justify-start  lg:flex-row lg:gap-2 lg:items-center lg:justify-center">
                <li>
                  <p>{handleSplit(item?.release_date)}</p>
                </li>
                <li className="flex items-center gap-2 bg-gray-500/50 rounded text-white">
                  <p className="py-[1px] px-2 flex items-center gap-[1px]">
                    {item?.vote_average}
                    <AiFillStar className="text-yellow-300" />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainCard
