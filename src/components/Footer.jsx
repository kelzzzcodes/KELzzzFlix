import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SiGmail } from 'react-icons/si'
import { BsTelephoneOutbound } from 'react-icons/bs'
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from 'react-icons/ai'

const Footer = () => {
  const data = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Movies',
      path: 'movies',
    },
    {
      title: 'Popular',
      path: 'popular',
    },
    { title: 'Upcomings', path: 'upcomings' },
    {
      title: 'Tv Series',
      path: 'series',
    },
    {
      title: 'About Us',
      path: 'about',
    },
  ]
  const [active, setActive] = useState('')
  return (
    <div className="w-full flex flex-col bg-[#000000]">
      <div className="flex  border-b-2  border-gray-50/20  ">
        <div className=" flex flex-col gap-10 lg:flex-row   mx-auto lg:gap-28  py-8  mb-6">
          <div className="text-white flex flex-col gap-4 ">
            <h2 className=" font-bold text-2xl">Contact Info</h2>
            <div className="flex flex-col gap-2">
              <Link
                className="flex items-center gap-2"
                to="https://wa.me/2348039408775"
                target="_blank"
              >
                <AiOutlineWhatsApp size={28} /> <span>+2348039408775</span>
              </Link>
              <Link
                className="flex items-center gap-2"
                to="mailto:kelzzzcodes@gmail.com"
                target="_blank"
              >
                <SiGmail size={24} />
                <span>kelzzzcodes@gmail.com</span>
              </Link>

            </div>

            <div className="flex gap-2 items-center">
              <Link to="">
                <AiOutlineLinkedin size={32} />
              </Link>
              <Link to="">
                <AiOutlineInstagram size={32} />
              </Link>
              <Link to="">
                <AiOutlineGithub size={32} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start md:flex-row md:items-center text-white gap-5 lg:gap-10  font-bold text-lg">
            {data.map((item) => (
              <Link
                onClick={() => setActive(item?.path)}
                className={`border-b-2 border-transparent text-white hover:border-red-500 ${
                  active == item?.path ? 'text-red-500' : 'text-white'
                }`}
                to={item.path}
              >
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="text-white p-4 flex justify-center">
        <p>copyright @ 2023 All rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer
