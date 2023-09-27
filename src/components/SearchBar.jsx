import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import Fade from 'react-reveal/Fade'

const SearchBar = ({ onSearch }) => {
  const [toggleMenu, setToggleMenu] = useState(false)


    const [query, setQuery] = useState('');

      const handleSearch = () => {
    onSearch(query);
  };

    const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
  handleSearch()

  }, [onSearch,query]);

  return (
    <div>
      {toggleMenu ? (
        <AiOutlineSearch
          onClick={() => setToggleMenu(!toggleMenu)}
          className="flex  text-transparent h-8 w-8 rounded-full"
        />
      ) : (
        <AiOutlineSearch
          onClick={() => setToggleMenu(!toggleMenu)}
          className="cursor-pointer text-white h-8 w-8 rounded-full bg-black/90 hover:ring-2 hover:ring-white"
        />
      )}
      <div className={`${!toggleMenu ? 'hidden' : 'flex'}`}>
        <Fade top>
          <div className="absolute w-full  h-[115px] lg:h-[130px] top-0 right-0 bg-gray-900 ">
            <div className="flex h-full text-white ">
              <AiOutlineClose
                className="cursor-pointer absolute right-6 top-2"
                onClick={() => setToggleMenu(!toggleMenu)}
                size={22}
              />
              <div className="flex mx-auto w-full px-8  md:px-16 lg:px-32  ">
                <form className="flex w-full justify-center items-center m-auto ring-1 h-12 ring-stone-500 rounded-full">
                  <input
                    className="w-full bg-transparent outline-none border-none px-4 placeholder:text-white text-stone-300 "
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <button className="bg-blue-600 h-full px-2 w-24 flex justify-end  items-center rounded-r-full text-lg font-bold "
                   onClick={handleSearch}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default SearchBar
