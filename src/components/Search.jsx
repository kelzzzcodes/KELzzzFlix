import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import Fade from 'react-reveal/Fade'

const Search = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
      <div>
        {toggleMenu ? (
          <AiOutlineSearch
            onClick={() => setToggleMenu(!toggleMenu)}
            className="hidden"
            size={32}
          />
        ) : (
          <AiOutlineSearch
            onClick={() => setToggleMenu(!toggleMenu)}
            className="cursor-pointer text-white"
            size={32}
          />
        )}
        <div className={`${!toggleMenu ? 'hidden' : 'flex'}`}>
          <Fade top>
            <div className="  absolute w-full  h-[130px] top-0 right-0 bg-[#9A8174] ">
              <div className="flex h-full text-white ">
                <AiOutlineClose
                  className="cursor-pointer absolute right-4 top-2"
                  onClick={() => setToggleMenu(!toggleMenu)}
                  size={28}
                />
<div className='flex mx-auto w-full px-8  md:px-16 lg:px-32 '>
<div className="flex w-full justify-center items-center m-auto border-2 border-gray-200 rounded-full p-2 ">
                  <input
                    className="w-full bg-transparent outline-none border-none placeholder:text-white text-black "
                    type="search"
                    placeholder="Search..."
                    name=""
                    id=""
                  />
                  <AiOutlineSearch size={32} />
                </div>
</div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Search
