import React from 'react'

export default function CancelPage() {
  return (
    <div className='text-center mx-auto flex flex-col justify-center items-center h-[calc(90vh-72px)]'>
      <div className='flex flex-col justify-around gap-10 md:w-2/3 lg:w-2/5 bg-white rounded-2xl px-2 md:px-4 py-8 border border-slug-700'>
        <h1 className='text-2xl md:text-3xl lg:text-3xl font-bold'>Subscription has been canceled.</h1>
      </div>
    </div>
  )
}
