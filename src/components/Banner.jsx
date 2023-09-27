import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import requests from '../Request'

const Banner = () => {
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results)
     
    })

  }, [])

  return (
    <div id='/' className="w-full h-[800px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-full absolute bottom-32 bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover "
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute flex flex-col gap-8 w-[70%] md:w-full top-[20%] p-4 md:px-16 lg:px-32 ">
          <h1 className="text-xl mt-8 md:text-3xl lg:text-5xl font-bold">{movie?.title}</h1>
          <p className="w-full line-clamp-3 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200  text-lg md:text-xl">
            {movie?.overview}
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-2 text-stone-400 text-sm md:text-xl">
            <p>
              Released: {movie?.release_date}
            </p>
            <p className="md:border-l-2  md:border-[#E50916]">
              <span className="md:ml-2">Rating: {movie?.vote_average}</span>
            </p>
            <p className="md:border-l-2  md:border-[#E50916]">
              <span className="md:ml-2">Popularity: {movie?.popularity}</span>
            </p>
          </div>
          <p>
            <Link
              to=""
              className="bg-transparent ring-1 ring-stone-500 hover:ring-0 outline-none px-8 py-4  md:px-10 md:py-4 lg:px-14 lg:py-6 cursor-pointer text-white hover:bg-red-800 hover:transition hover:duration-700 hover:translate-x-full hover:ease-in  rounded-lg"
            >
              Watch Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
