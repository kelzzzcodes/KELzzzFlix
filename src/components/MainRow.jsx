import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainCard from './MainCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const MainRow = ({ cardID, title, fetchURL, RowID }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results)
    })
  }, [fetchURL])

  const sliderLeft = () => {
    var slider = document.getElementById('Mainslider' + RowID)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const sliderRight = () => {
    var slider = document.getElementById('Mainslider' + RowID)
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <div id={cardID} className="flex flex-col items-center mt-4 ">
      <div className=" mt-8 flex flex-col text-white gap-4 items-center">
        <div>
          <p className="text-2xl">{title}</p>
        </div>
        <div className="flex justify-around  gap-5">
          <MdChevronLeft
            onClick={sliderLeft}
            size={32}
            className=" rounded-full ring-2 ring-stone-300 hover:text-white opacity-50  hover:opacity-100 cursor-pointer"
          />
          <MdChevronRight
            onClick={sliderRight}
            size={32}
            className=" rounded-full ring-2 ring-stone-300 hover:text-white opacity-50  hover:opacity-100 cursor-pointer"
          />
        </div>
      </div>
      <div
        id={'Mainslider' + RowID}
        className="w-full grid grid-flow-col gap-5 h-full overflow-x-scroll whitespace-nowrap scroll-smooth  scrollbar-hide relative"
      >
        {movies.map((movie, id) => (
          <MainCard key={id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MainRow
