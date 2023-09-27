import React from 'react'
import {AiOutlineUserAdd} from 'react-icons/ai'

const SignIn = () => {
  return (
    <div>
        <button className='flex items-center justify-center object-cover text-yellow-300 cursor-pointer bg-black/50 rounded-full w-14 h-14 hover:text-white hover:ring-2 hover:ring-white  '>
            <AiOutlineUserAdd size={32}/>
        </button>
    </div>
  )
}

export default SignIn