import React, { useState } from 'react'
import FormInput from '../components/FormInput'
import PrimaryButton from '../components/buttons/PrimaryButton'
import PrimaryLargeButton from '../components/buttons/PrimaryLargeButton';

export default function CreateProject() {
  const inputClasses = `focus:outline-none px-4 text-[#010101] text-left bg-[#ffffffb0] border border-black rounded-lg font-poppins text-base shadow-input-custom`;

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChangeBudget = () => {

  }

  const handleChangeCurrency = () => {

  }

  return (
    <div className='container mx-auto px-4'>
      <form onSubmit={handleSubmit} className='flex flex-col bg-[rgba(255,255,255,.7)] border rounded-2xl border-2 border-black gap-6 mx-auto w-full sm:w-2/3 lg:w-1/2 mt-4 mb-8 p-8'>
        <h1 className='text-4xl font-bold text-center'>
          Create a Deadline ⏱️
        </h1>
        <div className='flex flex-col justify-center w-100'>
          <label className='text-left lg:text-xl mb-2'>Project Title</label>
          <div className='flex gap-4'>
            <input
              className={`${inputClasses} w-full h-12`}
              onChange={handleChangeBudget}
            />
          </div>
        </div>
        <div className='flex flex-col justify-center w-100'>
          <label className='text-left lg:text-xl mb-2'>Project Fee</label>
          <div className='flex gap-4'>
            <select
              className={`${inputClasses} w-1/3 h-12`}
              onChange={handleChangeCurrency}
            >
              <option>GBP (£)</option>
              <option>EUR (€)</option>
              <option>USD ($)</option>
            </select>
            <input
              className={`${inputClasses} w-2/3 h-12`}
              onChange={handleChangeBudget}
            />
          </div>
        </div>
        <div className='flex flex-col justify-center w-100'>
          <label className='text-left lg:text-xl mb-2'>Deadline</label>
          <div className='flex gap-4 items-center'>
            <input
              className={`${inputClasses} w-2/5 h-12`}
              onChange={handleChangeBudget}
            />
            Days
            <select
              className={`${inputClasses} w-3/5 h-12`}
              onChange={handleChangeCurrency}
            >
              <option>Excluding Weekends</option>
              <option>Including Weekends</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col justify-center w-100'>
          <label className='text-left lg:text-xl mb-2'>Deduction for everyday over deadline</label>
          <select
            className={`${inputClasses} sm:w-2/5 h-12`}
            onChange={handleChangeCurrency}
          >
            <option>Select one...</option>
            <option>1%</option>
            <option>2%</option>
            <option>3%</option>
          </select>
        </div>
        <div className='flex flex-col justify-center w-100'>
          <label className='text-left lg:text-xl mb-2'>Deliverables Description</label>
          <textarea
            className={`${inputClasses} w-full p-4`}
            rows={5}
          >
          </textarea>
        </div>
        <PrimaryLargeButton
          style={`w-full text-xl py-5`}
        >
          Create Timer
        </PrimaryLargeButton>
      </form>
    </div>
  )
}
