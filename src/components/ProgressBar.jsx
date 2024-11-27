import React, { useMemo } from 'react'

export default function ProgressBar({ percent, status }) {
  const percentage = useMemo(() => {
    return percent !== NaN ? percent : 0;
  }, [percent]);  

  return (
    <div className='w-full rounded-2xl shadow-[0_2px_0_3px_#000] my-2 bg-white h-12 p-1.5'>
      <div style={{
        width: `${percentage}%`
      }}
      className={`w-[${percentage}%] h-full border-r-0 rounded-2xl ${percentage < 99 ? 'rounded-r-none' : ''} ${status === 'Pause' ? 'bg-[#fac390]' : 'bg-[#50f8d0]'}`}></div>
    </div>
  )
}
