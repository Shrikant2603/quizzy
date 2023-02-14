import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex flex-col items-left ">
      <Link to="/" className=" ml-10 mt-5 lg:text-7xl md:text-5xl text-3xl font-poppins cursor-pointer text-[#426696] font-semibold opacity-80">
        Quizzy
      </Link>
      <hr className="mt-4 lg:mt-8 w-full" />
    </div>
  )
}

export default Header