import React from 'react'
import { Link } from 'react-router-dom'
import {SiGmail} from 'react-icons/si'
import {BsTelephoneOutbound} from 'react-icons/bs'
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineWhatsApp} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='w-full flex flex-col'>

        <div className='flex'>

            <div className='text-white flex flex-col gap-4'>
                <h2>Contact Info</h2>
              <div className='flex flex-col gap-2'>

              <Link className='flex items-center gap-2' to='https://wa.me/2348039408775' target='_blank'><AiOutlineWhatsApp size={28}/> <span>+2348039408775</span></Link>
               <Link className='flex items-center gap-2' to='mailto:kelzzzcodes@gmail.com' target='_blank'><SiGmail size={24}/><span>kelzzzcodes@gmail.com</span></Link>
              </div>

               <div className='flex gap-2 items-center'>
                <Link to=''><AiOutlineLinkedin size={32}/></Link>
                <Link to=''><AiOutlineInstagram size={32}/></Link>
                <Link to=''><AiOutlineGithub size={32}/></Link>
               </div>

            </div>

        </div>
    </div>
  )
}

export default Footer