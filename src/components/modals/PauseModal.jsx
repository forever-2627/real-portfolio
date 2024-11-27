import React, {useState} from 'react'
import PauseIcon from './pause.svg'
import CloseIcon from './close.svg'
import { INPUT_CLASSES, LARGE_BUTTON_CLASSES, MODAL_CLASSES } from '../../constant'

export default function ResumeModal({ onClose, onPause, children }) {
  const [message, setMessage] = useState('');
  const handleButtonClick = () => {
    onPause(message);
  }

  return (
    <div className='fixed inset-0 flex z-10 items-center justify-center bg-black bg-opacity-50 py-8'>
      <div className={`bg-[#FFEEDF] ${MODAL_CLASSES} border-[#FAC390]`}>
        <div className='flex justify-between items-center'>
          <div className='w-5 h-5 bg-[#FAC390] p-1 shadow-[0px_0px_2.46px_0px_#000000]'>
            <img src={PauseIcon} />
          </div>
          <div className='text-2xl font-bold mb-1'>Pause Project Timer</div>
          <div className='w-5 h-5 border border-black' onClick={onClose}>
            <img src={CloseIcon} />
          </div>
        </div>
        <div className='flex flex-col mt-5 gap-2'>
          <label className='text-base font-bold'>Select Reason</label>
          {children}
        </div>
        <div className='flex flex-col mt-5 gap-2'>
          <label className='text-base font-bold'>Message / more information</label>
          <textarea
            name="description"
            className={`${INPUT_CLASSES} bg-white rounded-xl w-full p-4`}
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
        </div>
        <div className='flex flex-col gap-2 mt-5'>
          <button onClick={handleButtonClick} className={`${LARGE_BUTTON_CLASSES} flex gap-2 bg-[#FAC390] shadow-[0px_4px_0px_5px_#1F1F1F]`}>
            Pause Timer
            <img src={PauseIcon} className='w-5 h-5' />
          </button>
        </div>
      </div>
    </div>
  )
}
