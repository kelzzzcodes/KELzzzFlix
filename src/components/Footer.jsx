import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import { navData } from '../constant'
import { SiGmail } from 'react-icons/si'
import { socialsData } from '../constant'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    AOS.init() // Initialize AOS
  }, [])
  return (
    <div className="w-full flex flex-col bg-[#000000]">
      <div className="flex border-b-2 mt-4  border-gray-50/20  ">
        <div className=" flex flex-col gap-10 lg:flex-row   mx-auto lg:gap-28  py-8  mb-6">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="text-stone-400 flex flex-col items-center"
          >
            <h2 className=" font-bold text-2xl text-white">Contact Info</h2>
            <div className="flex flex-col gap-2 mt-2 text-lg">
              <a
                className="flex items-center gap-2  hover:text-stone-300"
                href="mailto:kelzzzcodes@gmail.com"
                target="_blank"
              >
                <SiGmail size={18} />
                <span>kelzzzcodes@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center mt-2 gap-2">
              {socialsData.map((item)=>(
                  <a href={item.path} target='_blank'>
                 <span className="hover:text-stone-300 cursor-pointer text-2xl">{item.icons }</span>
                </a>
              ))}
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" flex flex-col items-center"
          >
            <h2 className=" font-bold text-2xl text-white">Navigation</h2>
            <div className="flex flex-col items-center  gap-2 text-base mt-2">
              {navData.map((item) => (
                <Link
                  className="cursor-pointer border-b-2 border-transparent text-stone-400 hover:text-stone-300 hover:border-red-500"
                  to={item.id}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-white p-4 flex justify-center">
        <p className='py-2'>
          @ <span className="text-yellow-400">Kelzzzcodes</span> 2023{' '}
        </p>
      </div>
    </div>
  )
}

export default Footer
