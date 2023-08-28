import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MidNav from './MidNav'
import Search from './Search'
import RightNav from './RightNav'

const Navbar = () => {
  const [navBgColor,setNavBgColor] = useState(false)
  const handleBgColor =()=>{
    if(window.scrollY >= 70){
      setNavBgColor(true)
    }else{
      setNavBgColor(false)
    }

  }
  window.addEventListener('scroll',handleBgColor)

  return (
    <div className={`w-full flex items-center justify-between px-4 py-10 lg:py-12 z-[100] fixed border-b-2 border-gray-50/20 ${navBgColor ? 'bg-black/90' : ' bg-transparent'}`}>
      <Link to="/">
        <h1 className="text-red-600 text-3xl font-bold cursor-pointer">
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
