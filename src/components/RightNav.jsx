import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BsPerson } from 'react-icons/bs'
import MobileNav from './MobileNav';

const RightNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <div className="flex p-4 items-center gap-4 text-white">
        <div className="flex items-center">
          <Link to="signin">
            <BsPerson className="bg-gray-500 rounded-full" size={32} />
          </Link>
       
        </div>

      <div>
      {toggleMenu ? (
          <AiOutlineClose
            onClick={() => setToggleMenu(!toggleMenu)}
            className=" bg-white rounded-md text-black  flex cursor-pointer"
            size={28}
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggleMenu(!toggleMenu)}
            className="bg-white rounded-md text-black cursor-pointer  flex lg:hidden"
            size={32}
          />
        )}
      </div>
        <div className={`${!toggleMenu ? 'hidden': 'flex'}`}>
            <MobileNav/>
        </div>

        
      </div>
    </>
  )
}

export default RightNav
