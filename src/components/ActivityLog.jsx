import React from 'react'
import { convertTimestamp } from '../utils'


export default function AuditLog({ logs }) {
  const logItem = (log, index) => (
    <div className={`flex flex-col gap-2 p-4 rounded-xl ${log.action === 
      'resume' ? 'bg-[#CDFFF3]' : 'bg-[#FFEFE0]' 
    }`} key={index}>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='w-7 h-7 '>
            <img src={log.action == 'resume' ? '/img/resume-icon.png' : '/img/pause-icon.png'} />
          </div>
          <div className='text-xl'>{log.reason ? log.reason : ''}</div>
        </div>
        <div className='flex flex-col'>
          <div className='text-sm'>{convertTimestamp(log.timestamp)[0]}</div>
          <div className='text-sm font-bold'>{convertTimestamp(log.timestamp)[1]}</div>
        </div>
      </div>
      <div className='text-base font-bold'>{log.operator}</div>
      <div className='text-base'>{log.description}</div>
    </div>
  )
  return (
    <div className='container mx-auto w-full md:w-3/5 lg:w-1/2'>
      <h1 className='text-2xl font-bold my-4'>Activity Log</h1>
      <div className='flex flex-col gap-4'>
        {logs?.map(logItem)}
      </div>
    </div>
  )
}
