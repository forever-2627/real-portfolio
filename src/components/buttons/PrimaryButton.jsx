import React from 'react'

export default function PrimaryButton({ children, onClick, style }) {
  return (
    <button
      className={`text-midnight-blue font-bold bg-[#50f8d0] mx-auto rounded-[30px] flex justify-center items-center py-[10px] font-poppins text-base shadow-[2px_3px_0_2px_#160042] ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
