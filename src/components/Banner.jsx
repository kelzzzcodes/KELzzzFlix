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
  console.log(movies)
  return (
    <div className="w-full h-[800px] text-white">
      <div className="w-full h-full">
        <div className="w-full h-[800px] absolute bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute flex flex-col gap-8 w-full top-[20%] p-4 md:px-32  lg:px-56 md:py-16">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>

          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 text-xl">
            {truncateString(movie?.overview, 150)}
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-2 ">
            <p className="text-gray-400 text-xl">
              Released: {movie?.release_date}
            </p>
            <p className="text-gray-400 text-xl md:border-l-2  md:border-[#E50916]">
              <span className="md:ml-2">Rating: {movie?.vote_average}</span>
            </p>
            <p className="text-gray-400 text-xl md:border-l-2  md:border-[#E50916]">
              <span className="md:ml-2">Popularity: {movie?.popularity}</span>
            </p>
          </div>
          <p>
            <Link
              to=""
              className="bg-[#E50916] px-16 py-6 rounded cursor-pointer text-white"
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
