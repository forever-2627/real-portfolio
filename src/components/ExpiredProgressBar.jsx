import React from 'react'

export default function ExpiredProgressBar({ deadline }) {
  return (
    <div className='w-full rounded-2xl bg-white h-12 p-1.5'>
      <div className={`w-[100%] h-full border-r-0 rounded-2xl flex justify-center items-center sm:text-xl text-white bg-[#FF5347]`}>
        {deadline} day project time expired
      </div>
    </div>
  )
}
