import React, { useState } from 'react'
import { handleSplit } from '../utils'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const BannerCard = ({ movie }) => {
  return (
    <div className="flex gap-10">
      <div className=" w-[160px] sm:w-[200px] md:w-[280px] lg:w-[400px] inline-block cursor-pointer  text-white p-2">
        <div className="w-full h-full ">
          <Link to={`/movie/${movie.id}`}>
            <img
              className=" w-full h-[200px] object-cover "
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt={movie?.title}
            />
          </Link>
          <div className="w-full mt-4 flex  flex-col gap-2 p-2 items-start md:items-center  justify-start">
            <h2 className="flex text-sm md:text-lg font-bold truncate line-clamp-2">{movie?.title}</h2>
            <ul className=" flex flex-col items-center md:flex-row  gap-2">
              <li>
                <p>{handleSplit(movie?.release_date)}</p>
              </li>
              <li className="flex items-center gap-2 bg-gray-500/50 rounded text-white">
                <p className="py-[1px] px-2 flex items-center gap-[2px]">
                  {movie?.vote_average}
                  <AiFillStar className="text-yellow-300" />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerCard
