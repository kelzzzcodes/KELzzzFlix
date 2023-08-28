import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { navData } from '../constant'
import Fade from 'react-reveal/Fade'

const MobileNav = () => {
  const [active, setActive] = useState('')
  const handleActive = () => {
    setActive(navData.path)
  }
  useEffect(() => {
    handleActive()
  }, [])
  return (
    <Fade right>
      <div className="p-6 absolute  z-auto top-[6.7rem] right-0  my-2 w-[180px]  min-h-screen flex flex-col items-center justify-center bg-[#1b1b1b]  rounded-b-2xl  shadow-red-500  shadow-inner">
        <ul className="text-base relative flex flex-col space-y-8 text-white align-center justify-center items-start align-center w-full   ">
          <a
            className="cursor-pointer border-b-2 border-transparent text-white hover:border-red-500"
            href="/"
          >
            <span>Home</span>
          </a>
          {navData.map((item) => (
            <Link
              key={item.title}
              onClick={handleActive}
              className={`cursor-pointer border-b-2 border-transparent text-white hover:border-red-500 ${
                active == item?.id ? 'text-red-500' : 'text-white'
              }`}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </ul>
      </div>
    </Fade>
  )
}

export default MobileNav
