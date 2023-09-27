import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [currentMovieDetail, setMovie] = useState()
  const { movieId } = useParams()

  useEffect(() => {
    getData()
    window.scrollTo(0, 0)
  }, [])


  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`,
    )
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }
  const backgroundURL = {
    backgroundImage: `url('https://image.tmdb.org/t/p/original${
      currentMovieDetail ? currentMovieDetail.backdrop_path : ''
    }')`
  }
  const PosterUrl = {
    backgroundImage: `url('https://image.tmdb.org/t/p/original${
      currentMovieDetail ? currentMovieDetail.poster_path : ''
    }')`,
  }
  return (
    <div className="w-full flex flex-col pt-[7.5rem] lg:pt-[8.5rem] text-white">
      <div className="flex relative h-auto  p-6 lg:p-10  bg-cover bg-no-repeat  bg-center " style={backgroundURL}>
        <div className="absolute h-auto inset-0 bg-black opacity-50"></div>

        <div className="relative flex flex-col gap-4 md:gap-10 lg:flex-row">
          <div className="flex bg-cover bg-no-repeat bg-center rounded-lg w-[100%] lg:w-[50%] h-[24.5rem] md:h-[32.5rem]" style={PosterUrl}>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <p className="flex font-bold text-xl md:text-3xl">
              {currentMovieDetail ? currentMovieDetail.original_title : ''}
            </p>
            <p className='flex w-[90%] md:w-[70%]  line-clamp-4 md:line-clamp-0'>
            {currentMovieDetail ? currentMovieDetail.overview : ''}

            </p>
            <div>
                <div className='flex flex-col'>
                  <p >Release Date</p>
              <span>  {currentMovieDetail ? currentMovieDetail.release_date : ''}</span>

                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white h-[700px] bg-yellow-900">
        <p>hello muhfuckers</p>
      </div>
    </div>
  )
}

export default MovieDetails
