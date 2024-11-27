import React from 'react'

export default function PrimaryLargeButton({ children, onClick, style }) {
  return (
    <button
      className={`text-midnight-blue font-bold bg-[#50f8d0] rounded-3xl flex justify-center items-center font-poppins text-base shadow-[4px_5px_0_4px_#160042] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_2px_#160042] text-xl py-4 mx-auto ${style}`}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  )
}
