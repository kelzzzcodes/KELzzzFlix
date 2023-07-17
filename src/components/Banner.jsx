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

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  }

  return (
    <div className="w-full h-[700px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[700px] absolute bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute flex flex-col gap-8 w-full top-[15%] lg:top-[20%] p-4 md:px-16 lg:px-32 ">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">{movie?.title}</h1>

          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200  text-lg md:text-xl">
            {truncateString(movie?.overview, 150)}
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-2 text- md:text-xl   ">
            <p className="text-gray-400 ">
              Released: {movie?.release_date}
            </p>
            <p className="text-gray-400  md:border-l-2  md:border-[#E50916]">
              <span className="md:ml-2">Rating: {movie?.vote_average}</span>
            </p>
            <p className="text-gray-400  md:border-l-2  md:border-[#E50916]">
              <span className="md:ml-2">Popularity: {movie?.popularity}</span>
            </p>
          </div>
          <p>
            <Link
              to=""
              className="bg-transparent border-2 border-gray-500 px-8 py-4  md:px-10 md:py-4 lg:px-16 lg:py-6  cursor-pointer text-white hover:bg-red-500 hover:transition hover:duration-700 hover:translate-x-full hover:ease-in rounded-md "
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
