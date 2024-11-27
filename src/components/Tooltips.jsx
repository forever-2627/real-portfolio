import React from 'react'

const LeftToolTip = ({ top, left, children }) => {
  return (
    <div
      className="absolute flex items-center group"
      style={{ left, top }}
    >
      <div className="relative px-3 py-2 text-white bg-gray-800 rounded-lg group-hover:block">
        {children}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full w-0 h-0 border-[5px] border-transparent border-r-gray-800"></div>
      </div>
    </div>
  )
}

const RightToolTip = ({ top, right, children }) => {
  return (
    <div
      className="absolute flex items-center group"
      style={{ right, top }}
    >
      <div className="relative px-3 py-2 text-white bg-gray-800 rounded-lg group-hover:block">
        {children}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full w-0 h-0 border-[5px] border-transparent border-l-gray-800"></div>
      </div>
    </div>
  )
}

export {
  LeftToolTip,
  RightToolTip
}