import React from 'react'

export default function DropDownList({ list, setActiveIndex, onClose }) {

  const handleClickItem = (index) => {
    setActiveIndex(index);
    onClose();
  }

  const reasonItem = (item, index) => (
    <div className='p-2 border bg-white border-black rounded-xl shadow-[4px_4px_0px_0px_#000000]' key={index} onClick={() => handleClickItem(index)}>
      {item}
    </div>
  )

  return (
    <div className='flex w-full border rounded-2xl p-4 mt-1 bg-white text-center border-black absolute top-[100%] left-0 flex-col gap-2'>
      {list.map(reasonItem)}  
    </div>
  )
}
