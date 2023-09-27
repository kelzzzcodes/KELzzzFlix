import { Link } from 'react-scroll'
import { navData } from '../constant'
import Fade from 'react-reveal/Fade'

const MobileNav = () => {
  return (
    <Fade right>
      <div className="p-6 absolute z-30 top-[6.7rem] right-0 my-2 w-[180px]  min-h-screen flex flex-col items-center justify-center bg-[#1b1b1b] rounded-b-2xl shadow-red-500 shadow-inner">
        <ul className="text-base relative flex flex-col space-y-8 text-white align-center justify-center items-start align-center w-full   ">
          <a
            className="cursor-pointer border-b-2 border-transparent text-white hover:border-red-500"
            href="/"
          >
            <span>Home</span>
          </a>
          {navData.map((item) => (
            <Link
              key={item.label}
              className="cursor-pointer border-b-2 border-transparent text-white hover:border-red-500"
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </ul>
      </div>
    </Fade>
  )
}

export default MobileNav
