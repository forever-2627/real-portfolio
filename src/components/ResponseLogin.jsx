import React from 'react'
import { DEFAULT_BUTTON } from '../constant'

export default function ResponseLogin({
  handleSubmit
}) {
  return (
    <div className='text-center mx-auto flex flex-col justify-center items-center h-[calc(90vh-72px)]'>
      <div className='flex flex-col justify-around gap-10 md:w-2/3 lg:w-2/5 bg-white rounded-2xl px-2 md:px-4 py-8 border border-slug-700'>
        <div className='w-16 h-16 md:w-20 md:h-20 mx-auto'>
          <img src='/img/inbox.png' />
        </div>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>CHECK YOUR INBOX</h1>
        <div className='text-base w-3/4 mx-auto'>We've sent a link that will log you in. This can only be used once and will expire in one hour</div>
        <button 
          onClick={handleSubmit}
          className={`${DEFAULT_BUTTON} inline-block mx-auto text-base md:text-xl `}>
            I didn't receive my email
        </button>
      </div>
    </div>
  )
}
