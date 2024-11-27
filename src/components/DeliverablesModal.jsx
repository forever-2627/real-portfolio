import React from 'react'
import CloseIcon from './modals/close.svg'

export default function DeliveriablesPopup({ onClose, description }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white relative p-4 rounded-lg shadow-lg max-w-md w-full">
        <button onClick={onClose} className="absolute top-2 right-2 text-lg font-bold">
          <div className='w-7 h-7 bg-white p-1 shadow-[0px_0px_2.46px_0px_#000000]'>
            <img src={CloseIcon} />
          </div>
        </button>
        <h2 className="text-xl font-bold mb-4">Deliverables</h2>
        <p className='h-32'>
          {description ? description : "No deliverables have been specified for this project.\n\n Please check with your client for details on what needs to be submitted by the deadline"}
        </p>
      </div>
    </div>
  )
}
