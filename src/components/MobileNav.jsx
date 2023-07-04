import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'


const MobileNav = () => {

    const data=[
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'Movies',
          path: 'movies'
        },
        {
          title: 'Popular',
          path: 'popular'
        },
       { title: 'Upcomings',
        path: 'upcomings'
      },
        {
          title: 'Tv Series',
          path: 'series'
        },
        {
          title: 'About Us',
          path: 'about'
        },
      ]

      const [active, setActive] = useState('')
      const handleActive=()=>{
        setActive(data.path)
    }
      useEffect(() => {
      
        handleActive()
      }, [])
      
  return (
    <>
      <div className="p-6 absolute top-20 right-0 mx-4 my-2 min-w-[240px] flex bg-[#1b1b1b] rounded-xl tilt-in-fwd-tr shadow-md z-10 ">
      <ul className="flex flex-col space-y-8 text-white align-center justify-center items-start align-center    ">
      {
          data.map((item)=>(
            <Link onClick={handleActive } className={`border-b-2 border-transparent text-white hover:border-red-500 ${active==item?.path ? 'text-red-500': 'text-white'  }`} to={item.path}><span>{item.title}</span></Link>
          ))
        }

      </ul>
   

    </div>

    </>
  )
}

export default MobileNav