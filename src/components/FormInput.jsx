import React from 'react'

export default function FormInput({ onChange, label, style }) {
  return (
    <div className='flex flex-col justify-center w-100'>
      <label className='text-left text-xl mb-2'>{label}</label>
      <input
        className={`focus:outline-none px-4 text-[#010101] w-full text-left bg-[#ffffffb0] border border-[#000] rounded-lg h-12 font-poppins text-base shadow-[2px_3px_0_2px_#484848] ${style}`}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  )
}
