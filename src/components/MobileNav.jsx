import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

const MobileNav = () => {
  const data = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Movies',
      path: 'movies',
    },
    {
      title: 'Popular',
      path: 'popular',
    },
    { title: 'Upcomings',
     path: 'upcomings',
    },
    {
      title: 'Tv Series',
      path: 'series',
    },
    {
      title: 'About Us',
      path: 'about',
    },
  ]

  const [active, setActive] = useState('')
  const handleActive = () => {
    setActive(data.path)
  }
  useEffect(() => {
    handleActive()
  }, [])

  return (
    <>
    <Fade left>
      <div className="p-6 absolute top-[4.5rem] right-0  my-2 w-full  flex bg-[#1b1b1b]  rounded-b-2xl shadow-md z-10 ">
        <ul className="flex flex-col space-y-8 text-white align-center justify-center items-start align-center w-full   ">
          {data.map((item) => (

<Link         key={item.title}
              onClick={handleActive}
              className={`border-b-2 border-transparent text-white hover:border-red-500 ${
                active == item?.path ? 'text-red-500' : 'text-white'
              }`}
              to={item.path}
            >
              <span>{item.title}</span>
            </Link>

          ))}
        </ul>
      </div>
      </Fade>
    </>
  )
}

export default MobileNav
