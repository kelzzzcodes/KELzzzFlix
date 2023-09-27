import { useState } from 'react'
import MidNav from './MidNav'
import SearchBar from './SearchBar'
import RightNav from './RightNav'
import SignIn from './SignIn'

const Navbar = ({ onSearch }) => {
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
    <div className={`w-full flex items-center justify-between px-4 py-10 lg:py-12 z-50 fixed border-b-2 border-gray-50/20 ${navBgColor ? 'bg-black/90' : 'bg-transparent'}`}>
      <a href="/">
        <h1 className="text-red-600 text-3xl font-bold cursor-pointer">
          KELzzzFlix
        </h1>
      </a>
      <MidNav />
      <div className="flex items-center justify-center gap-4">
        {/* <SearchBar onSearch={onSearch} /> */}
        <SignIn/>
        <RightNav />
      </div>
    </div>
  )
}

export default Navbar
