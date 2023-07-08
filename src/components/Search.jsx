import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import Fade from 'react-reveal/Fade';

const Search = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>

    <div>
       

        {toggleMenu ? (
          <AiOutlineSearch
            onClick={() => setToggleMenu(!toggleMenu)}
            className=" cursor-"
            size={32}
          />
        ) : (
          <AiOutlineSearch onClick={() => setToggleMenu(!toggleMenu)}  className="cursor-pointer text-white" size={32} />
        )}
        <div className={`${!toggleMenu ? 'hidden': 'flex'}`}>
        <Fade top>
        <div className='  absolute w-full  h-[130px] top-0 right-0 bg-[#bcdaf9]/95 '>
          <div className='flex h-full'>

         <AiOutlineClose className='cursor-pointer absolute right-8 top-4' onClick={() => setToggleMenu(!toggleMenu)} size={28}/>
          <div className='flex justify-center items-center m-auto border-2 border-gray-700 rounded-full p-2 '>
          <input className='bg-transparent outline-none border-none placeholder:text-black ' type="search" placeholder='Search...' name="" id="" />
          <AiOutlineSearch size={32}/>
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