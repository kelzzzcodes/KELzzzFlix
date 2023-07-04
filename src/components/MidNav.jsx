import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const MidNav = () => {

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
  return (
    <>
        <div className='hidden  lg:flex items-center text-white gap-10  font-bold text-lg'>     
        {
          data.map((item)=>(
            <Link onClick={() => setActive(item?.path)} className={`border-b-2 border-transparent text-white hover:border-red-500 ${active==item?.path ? 'text-red-500': 'text-white'  }`} to={item.path}><span>{item.title}</span></Link>
          ))
        }

      </div>

    </>
  )
}

export default MidNav
