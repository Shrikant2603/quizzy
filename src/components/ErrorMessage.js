import React from 'react'

const ErrorMessage = ({ children }) => {
  return (
    <div className="w-full p-4 mb-10  rounded-md bg-[#ff4500] text-white text-center capitalize">
        { children }
    </div>
  )
}

export default ErrorMessage