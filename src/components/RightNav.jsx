import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import MobileNav from './MobileNav'

const RightNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="flex items-center text-white">
      <div>
        {toggleMenu ? (
           <div className=' ring-2 ring-white flex  p-1 rounded-sm'>
               <AiOutlineClose
            onClick={() => setToggleMenu(!toggleMenu)}
            className=" text-stone-200 flex cursor-pointer"
            size={24}
          />
       </div>
        ) : (
          <div className=' lg:hidden ring-2 ring-white flex  p-1 rounded-sm'>
            <AiOutlineMenu
              onClick={() => setToggleMenu(!toggleMenu)}
              className=" text-stone-200 cursor-pointer flex "
              size={24}
            />
          </div>
        )}

        <div className={`${!toggleMenu ? 'hidden' : 'flex'}`}>
          <MobileNav />
        </div>
      </div>
    </div>
  )
}

export default RightNav
