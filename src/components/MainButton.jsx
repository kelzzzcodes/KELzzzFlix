import React from 'react'
import { Link } from 'react-router-dom'
const MainButton = () => {

  return (
    <>
      <div className="flex justify-end">
        <div className="flex gap-2 text-white  ">
          <Link to='/' className="bg-transparent border-2 border-gray-700 py-2 px-4  cursor-pointer text-white  rounded-full ">All</Link>
          <Link to='/' className="bg-transparent border-2 border-gray-700 py-2 px-4  cursor-pointer text-white  rounded-full ">Today</Link>
          <Link to='/' className="bg-transparent border-2 border-gray-700 py-2 px-4  cursor-pointer text-white  rounded-full ">Last7Days</Link>
          <Link to='/' className="bg-transparent border-2 border-gray-700 py-2 px-4  cursor-pointer text-white  rounded-full " >Last30Days</Link>
        </div>


      </div>
    </>
  )
}

export default MainButton
