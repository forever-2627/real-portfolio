import React from 'react'
import ProgressBar from './ProgressBar'
import { convertSecondsToTimeData, convertTimestampToDate } from '../utils'
import { DATA_CURRENCY } from '../constant'

export default function TimerBox({ project }) {
	const {
		countdown,
		remainingTime,
		currency,
		projectFee,
		deductionPercentage,
		startTime,
		deadline,
		isRunning,
		complete
	} = project;
	const leftDate = convertSecondsToTimeData(remainingTime);
	const fixedPercent = ((countdown - remainingTime) / countdown * 100).toFixed(2);
	const covertedTime = startTime ? convertTimestampToDate(startTime) : 'Not Now';

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

	const statusLabel = () => (
		<div className={`inline-block ${isRunning || complete ? 'bg-[#50f8d0]' : 'bg-[#fac390]'} px-4 py-2 rounded-2xl font-bold shadow-[2px_2px_#160042]`}>
			{startTime ? (complete ? 'completed' : isRunning ? 'In Progress' : 'Paused') : 'Not Started'}
		</div>
	)

	return (
		<div className={`mx-auto w-full md:w-3/5 lg:w-1/2 rounded-3xl ${isRunning || complete ? 'shadow-[0_2px_10px_-3px_#00c292]' : ''}`}>
			<div className='bg-white text-xs p-4 flex justify-around items-center rounded-3xl rounded-b-none'>
				<div className='flex flex-col items-center text-center'>
					<p className='sm:text-base'>Project Fee</p>
					<p className='sm:text-xl font-bold'>{DATA_CURRENCY[currency]} { projectFee }</p>
				</div>
				<div className='h-2 w-2 bg-black rounded'></div>
				<div className='flex flex-col items-center text-center'>
					<p className='sm:text-base'>Deadline Deduction</p>
					<p className='sm:text-xl font-bold'>{deductionPercentage}% per day</p>
				</div>
				<div className='h-2 w-2 bg-black rounded'></div>
				<div className='flex flex-col items-center text-center'>
					<p className='sm:text-base'>Start Date</p>
					<p className='sm:text-xl font-bold'>{covertedTime}</p>
				</div>
			</div>
			<div className={`container mx-auto px-4 py-4 ${isRunning || complete ? 'bg-[#EDFFFB]' : 'bg-[#FFF6EE]'} rounded-3xl rounded-t-none`}>
				<div className='mx-auto my-4 flex justify-center'>
					{statusLabel()}
				</div>
				<div className='flex justify-around mt-8'>
					<div className='flex flex-col items-center'>
						<div className='text-4xl font-bold'>{leftDate[0]}</div>
						<div className='text-base'>Days</div>
					</div>
					<div className='flex flex-col items-center'>
						<div className='text-4xl font-bold'>{leftDate[1]}</div>
						<div className='text-base'>Hours</div>
					</div>
					<div className='flex flex-col items-center'>
						<div className='text-4xl font-bold'>{leftDate[2]}</div>
						<div className='text-base'>Minutes</div>
					</div>
				</div>
				<ProgressBar percent={complete ? 100 : fixedPercent} status={isRunning || complete ? 'Progress' : 'Pause'} />
				<div className='flex justify-between mb-2'>
					<div>{deadline} days</div>
					<div>Deadline</div>
				</div>
			</div>
		</div>
	)
}
