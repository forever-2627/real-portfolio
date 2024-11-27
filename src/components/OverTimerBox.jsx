import React from 'react'
import ExpiredProgressBar from './ExpiredProgressBar'
import { convertTimestampToDate, convertSecondsToTimeData } from '../utils'
import { DATA_CURRENCY } from '../constant'

export default function OverTimerBox({
  project
}) {
  const { currency, projectFee, remainingTime, deductionPercentage, startTime, complete } = project;
  const covertedTime = startTime ? convertTimestampToDate(startTime) : 'Not Now';
  const overTime = convertSecondsToTimeData(Math.abs(remainingTime));
  const leftTime = convertSecondsToTimeData(86400 - Math.abs(remainingTime) % 86400);

  const calcTrunc = () => {
    let trunc = Math.trunc(Math.abs(remainingTime) / 86400) + 1;
    return trunc;
  }

  const newTotal = () => {
    let newTotal = projectFee * (((100 - deductionPercentage) / 100) ** calcTrunc());
    return newTotal.toFixed(2);
  }

  const totalReduction = () => (projectFee - newTotal()).toFixed(2);

  const reduction = () => {
    const total = newTotal();
    if (total === projectFee) return total * deductionPercentage / 100;
    return (total * deductionPercentage / (100 - deductionPercentage)).toFixed(2);
  }

  return (
    <div className='container mx-auto md:w-3/5 lg:w-1/2'>
      <div className='container text-xs sm:text-base flex justify-between sm:justify-around items-center my-4'>
        <div className='flex flex-col lg:flex-row items-center md:gap-2 text-center'>
          <p className='text-xs sm:text-base '>Project Fee</p>
          <p className='font-bold'>{DATA_CURRENCY[currency]} {projectFee}</p>
        </div>
        <div className='h-2 w-2 bg-black rounded'></div>
        <div className='flex flex-col lg:flex-row items-center md:gap-2 text-center'>
          <p className=' text-xs sm:text-base '>Deadline Deduction</p>
          <p className='font-bold'>{deductionPercentage}% per day</p>
        </div>
        <div className='h-2 w-2 bg-black rounded'></div>
        <div className='flex flex-col lg:flex-row items-center md:gap-2 text-center'>
          <p className=' text-xs sm:text-base '>Start Date</p>
          <p className='font-bold'>{covertedTime}</p>
        </div>
      </div>
      <div className='flex flex-col gap-4 p-4 md:px-8 md:px-4 rounded-2xl border border-[#FF5347] bg-[#FFE5E6]'>
        <ExpiredProgressBar deadline={project.deadline} />
        <div className='my-5 text-center flex items-baseline justify-center'>
          <div className=' text-xl md:text-2xl'>
            <span className='text-2xl font-bold md:text-4xl'>{overTime[0]}</span> days
            <span className='text-2xl font-bold md:text-4xl ml-2'>{overTime[1]}</span> hours
            <span className='text-2xl font-bold md:text-4xl ml-2'>{overTime[2]}</span> minutes over deadline
          </div>
        </div>
        <div className='flex flex-col sm:flex-row mx-auto justify-around w-full gap-2'>
          <div className='flex flex-col items-center sm:w-1/2'>
            <label className='text-xl font-bold mb-2'>Total Reductions</label>
            <div className='shadow-[4px_4px_0px_0px_#000000] flex text-xl justify-between px-8 py-4 rounded-xl bg-white w-4/5 sm:w-2/3 border border-black'>
              <span>£</span>
              <span>{totalReduction()}</span>
              <span></span>
            </div>
          </div>
          <div className='flex flex-col items-center sm:w-1/2'>
            <label className='text-xl font-bold mb-2'>New Total</label>
            <div className='shadow-[4px_4px_0px_0px_#000000] flex text-xl justify-between px-8 py-4 rounded-xl bg-white w-4/5 sm:w-2/3 border border-black'>
              <span>£</span>
              <span>{newTotal()}</span>
              <span></span>
            </div>
          </div>
        </div>
        {
          complete ? <div className='my-5 text-center font-bold'></div> : <div className='my-5 text-center'>
            A reduction of
            <span className='mx-2 font-bold'>£ {reduction()}</span>
            will be added in
            <span className='font-bold pl-1'>
              {leftTime[1] > 0 ? `${leftTime[1]} hours` : ''} {`${leftTime[2]}`} minutes
            </span>
          </div>
        }
      </div>
    </div>
  )
}
