import React from 'react'

const MainButton = () => {
  return (
    <>
      <div className="flex justify-end">
        <div className="flex gap-4  md:gap-8  lg:gap-12 text-white  ">
          <p className="hover:text-red-500">All</p>
          <p>Today</p>
          <p>Last7Days</p>
          <p>Last30Days</p>
        </div>
      </div>
    </>
  )
}

export default MainButton
