import React from 'react'
import { handleSplit } from '../utils'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const MainCard = ({ movie }) => {
  return (
      <div className="w-full flex mt-6 items-center gap-10  ">
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth  scrollbar-hide  grid grid-flow-col gap-5">
        <Link to={`/movie/${movie.id}`}>
        <div className="opacity-100 bg-stone-100 rounded-b-lg overflow-hidden hover:opacity-50 w-[200px] md:w-[280px] cursor-pointer flex flex-col hover:shadow-lg ">
            <img
              className="flex h-72 w-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt={movie?.title}
            />
            <div className=" bg-black/10  rounded-b-xl py-4 px-2 w-full flex flex-col items-start justify-start text-smn border-2 border-t-0 border-gray-300/30 ">
                <div className='flex h-full w-[200px] md:w-[280px]'>
                <h2 className="font-bold">{movie?.title}</h2>
                </div>
              <div className="mt-2 flex flex-col gap-0 items-start justify-start lg:flex-row lg:gap-2 lg:items-center lg:justify-center">
                  <p>{handleSplit(movie?.release_date)}</p>
                <div className="flex items-center text-black">
                  <p className="py-[1px] flex items-center gap-[1px]">
                    {movie?.vote_average}
                    <AiFillStar className="text-yellow-900" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
        </div>
      </div>
  )
}

export default MainCard
