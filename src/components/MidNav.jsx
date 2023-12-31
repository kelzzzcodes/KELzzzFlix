import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { navData } from '../constant'
const MidNav = () => {
  const [active, setActive] = useState('')
  return (
    <div className="hidden lg:flex items-center text-white gap-6 font-bold text-base">
      <a
        className="cursor-pointer border-b-2 border-transparent text-white hover:border-red-500"
        href="/"
      >
        <span>Home</span>
      </a>
      {navData.map((item) => (
        <Link
          key={item.label}
          className="cursor-pointer border-b-2 border-transparent text-white hover:border-red-500"
          to={item.id}
          spy={true}
          smooth={true}
          offset={-130}
          duration={700}
        >
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  )
}

export default MidNav
