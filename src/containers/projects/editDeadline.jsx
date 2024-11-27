import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

import PrimaryLargeButton from '../../components/buttons/PrimaryLargeButton';
import { getDeadline, updateDeadline } from '../../service/itemsApi';
import { calculateCountdown } from '../../utils';
import { INPUT_CLASSES } from '../../constant';
import timezoneData from 'moment-timezone/data/meta/latest.json';
import Loading from '../../components/Loading';

export default function EditDeadlinePage() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: '',
    projectFee: '',
    currency: 'GBP (£)',
    deadline: 0,
    excludeWeekends: 'true',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    deductionPercentage: 0,
    description: '',
  });

  useEffect(() => {
    const fetchProjectDetail = async () => {
      const res = await getDeadline(id);
      setFormData(res.data._doc);
      setIsLoading(false);
    }
    fetchProjectDetail();
  }, []);

  const newTotal = (days) => {
    let newTotal = formData.projectFee * (((100 - formData.deductionPercentage) / 100) ** days);
    return newTotal.toFixed(2);
  }

  const reduction = (days) => {
    const total = newTotal(days);
    if (total === formData.projectFee) return total * formData.deductionPercentage / 100;
    return (total * formData.deductionPercentage / (100 - formData.deductionPercentage)).toFixed(2);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const countdown = calculateCountdown(formData.deadline, formData.excludeWeekends);
    const dataToSubmit = {
      ...formData,
      countdown,
    };
    const res = await updateDeadline(id, dataToSubmit);
    if (res.data) {
      if (res.status !== 200 && res.status !== 201) {
        if (res.status === 401 || res.status === 403) {
          logout();
          navigate('/login');
        }
        toast.error(res.data.message || 'Error has been occured.');
      } else {
        navigate(`/detail/${res.data._id}`);
        toast.success('Deadline was updated successfully.');
      }
      setIsLoading(false);
    }
    // Here you can make an API call to save the project
  };

  return (
    <div className='w-full py-8 px-2 sm:px-8 bg-[#F1FFFD]'>
      {isLoading && <Loading />}
      <div className='lg:w-4/5 xl:w-3/5 mx-auto'>
        <form onSubmit={handleSubmit} className='flex flex-col bg-white border rounded-2xl border-2 border-black gap-6 mx-auto mt-4 mb-8'>
          <h1 className='text-2xl sm:text-4xl font-bold text-center rounded-t-2xl p-6 bg-[#A8FFEA]'>
            Edit a Deadline ⏱️
          </h1>
          <div className='p-8 flex flex-col gap-6 '>
            <div className='flex flex-col md:justify-between md:flex-row mb-2 gap-4'>
              <div className='flex flex-col gap-4 md:w-1/3'>
                <div className='flex flex-col justify-center w-100'>
                  <label className='text-left lg:text-xl mb-2'>Project Fee</label>
                  <div className='flex gap-4 sm:flex-row'>
                    <select
                      name="currency"
                      value={formData.currency}
                      className={`${INPUT_CLASSES} w-1/2 sm:w-1/3 h-12`}
                      onChange={handleChange}
                    >
                      <option value='GBP (£)'>GBP (£)</option>
                      <option value='EUR (€)'>EUR (€)</option>
                      <option value='USD ($)'>USD ($)</option>
                    </select>
                    <input
                      name="projectFee"
                      value={formData.projectFee}
                      className={`${INPUT_CLASSES} w-1/2 sm:w-2/3 h-12`}
                      placeholder='1,500'
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className='flex flex-col justify-center w-100'>
                  <label className='text-left lg:text-xl mb-2'>Deduction for everyday over deadline</label>
                  <select
                    name="deductionPercentage"
                    value={formData.deductionPercentage}
                    className={`${INPUT_CLASSES} sm:w-2/5 h-12`}
                    onChange={handleChange}
                  >
                    <option value="">Select one...</option>
                    <option value="1">1%</option>
                    <option value="2">2%</option>
                    <option value="3">3%</option>
                  </select>
                </div>
              </div>
              <div className='mt-4 md:mt-0 md:w-1/2 border-2 border-[#FF5348] rounded-lg xl:rounded-2xl'>
                <div className='text-center py-2 rounded-t-lg xl:rounded-t-2xl border-b-2 border-[#FF5348] font-semibold bg-[#FFE4E3]'>
                  If the project goes over Deadline
                </div>
                <div className='flex justify-around py-4'>
                  <div className='flex flex-col font-semibold text-sm sm:text-base'>
                    <h1>Over Deadline</h1>
                    <p>1 day</p>
                    <p>2 day</p>
                    <p>3 day</p>
                    <p>4 day</p>
                    <p>5 day</p>
                  </div>
                  <div className='flex flex-col text-sm sm:text-base'>
                    <h1 className='font-semibold'>Reduction</h1>
                    <p>£ {reduction(1)}</p>
                    <p>£ {reduction(2)}</p>
                    <p>£ {reduction(3)}</p>
                    <p>£ {reduction(4)}</p>
                    <p>£ {reduction(5)}</p>
                  </div>
                  <div className='flex flex-col text-sm sm:text-base'>
                    <h1 className='font-semibold'>New Total</h1>
                    <p>£ {newTotal(1)}</p>
                    <p>£ {newTotal(2)}</p>
                    <p>£ {newTotal(3)}</p>
                    <p>£ {newTotal(4)}</p>
                    <p>£ {newTotal(5)}</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className='flex flex-col justify-between mb-2 md:flex-row'>
              <div className='flex flex-col justify-center w-100'>
                <label className='text-left lg:text-xl mb-2'>Deadline</label>
                <div className='flex flex-col gap-4 items-start md:items-center md:flex-row'>
                  <div className='flex justify-start gap-4 md:gap-6 items-center'>
                    <input
                      name="deadline"
                      value={formData.deadline}
                      className={`${INPUT_CLASSES} w-1/2 md:w-2/5 h-12`}
                      onChange={handleChange}
                    />
                    <label className='text-base'>
                      Days
                    </label>
                  </div>
                  <select
                    name="excludeWeekends"
                    value={formData.excludeWeekends}
                    className={`${INPUT_CLASSES} w-4/5 md:w-3/5 h-12`}
                    onChange={handleChange}
                  >
                    <option value={'true'}>Excluding Weekends</option>
                    <option value={'false'}>Including Weekends</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col mt-4 md:mt-0 md:ml-4'>
                <label className='text-left lg:text-xl mb-2'>Timezone</label>
                <select
                  name="timezone"
                  className={`${INPUT_CLASSES} w-4/5 sm:w-3/5 md:w-full h-12`}
                  value={formData.timezone}
                  onChange={handleChange}
                >
                  {Object.keys(timezoneData.zones).map((zone) => (
                    <option key={zone} value={zone}>
                      {zone}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <hr />
            <div className='flex flex-col justify-center w-100'>
              <label className='text-left lg:text-xl mb-2'>Project Title</label>
              <div className='flex gap-4'>
                <input
                  name="title"
                  value={formData.title}
                  placeholder='i.e. Website design stage 1'
                  className={`${INPUT_CLASSES} w-full h-12`}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='flex flex-col justify-center w-100'>
              <label className='text-left lg:text-xl'>Deliverables Description</label>
              <span className='text-xs my-2'>(optional) It's helpful to include a description to keep everyone aligned.</span>
              <textarea
                name="description"
                value={formData.description}
                className={`${INPUT_CLASSES} w-full p-4`}
                rows={5}
                onChange={handleChange}
              />
            </div>
            <PrimaryLargeButton
              style={`w-full text-xl py-5`}
              onClick={handleSubmit}
            >
              Update Timer
            </PrimaryLargeButton>
          </div>
        </form>
      </div>
    </div>
  );
}
