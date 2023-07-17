import React, { useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../Request'
import BannerCard from './BannerCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

const BannerRow = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(requests.requestUpcoming).then((response) => {
      setMovies(response.data.results)
    })
  }, [requests.requestUpcoming])

  const sliderLeft = () => {
    var slider = document.getElementById('Bannerslider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const sliderRight = () => {
    var slider = document.getElementById('Bannerslider')
    slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <div className="relative  flex items-center  w-full bottom-16  bg-[#2a2f34]/30">
      <MdChevronLeft
        onClick={sliderLeft}
        size={40}
        className="bg-gray-500/50 hover:bg-white rounded-full cursor-pointer absolute left-0 z-10 "
      />

      <div
        id={'Bannerslider'}
        className="w-full grid grid-flow-col h-full overflow-x-scroll whitespace-nowrap scroll-smooth  scrollbar-hide relative"
      >
        {movies.map((item, id) => (
          <BannerCard key={id} item={item} />
        ))}
      </div>

      <MdChevronRight
        onClick={sliderRight}
        size={40}
        className="bg-gray-500/50 hover:bg-white rounded-full cursor-pointer absolute right-0 z-10 "
      />
    </div>
  )
}

export default BannerRow
