import React from 'react'

export default function FormBox({ title, children, style }) {
  return (
    <div className='flex flex-col gap-2 text-center w-full'>
      <h1 className='text text-4xl font-bold'>{title}</h1>
      <div className={`p-8 mt-10 bg-white w-full md:w-2/3 mx-auto rounded-xl flex flex-col justify-center border-2 border-black ${style}`}>
        {children}
      </div>
    </div>
  )
}
