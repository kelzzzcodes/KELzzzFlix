import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MidNav from './MidNav'
import Search from './Search'
import RightNav from './RightNav'

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-16 z-[100]  fixed h-[70px]  border-b-2  border-gray-50/20">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          KELzzzFlix
        </h1>
      </Link>
      <MidNav />
      <div className="flex items-center gap-2">
        <Search />
        <RightNav />
      </div>
    </div>
  )
}

export default Navbar
