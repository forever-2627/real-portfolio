import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

import { createProject, getProjectById, updateProject } from '../../service/projectApi';
import PrimaryLargeButton from '../../components/buttons/PrimaryLargeButton';
import { calculateCountdown } from '../../utils'
import { INPUT_CLASSES } from '../../constant';
import timezoneData from 'moment-timezone/data/meta/latest.json';
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../../components/Loading';

export default function EditProjectPage() {
  const { id } = useParams();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    jobType: '',
    freelancerType: '',
    title: '',
    description: '',
    projectFee: '',
    currency: 'GBP (£)',
    startIn: 'fewdays',
    deadline: '',
    deductionPercentage: 0,
  });

  useEffect(() => {
    const fetchProjectDetail = async () => {
      const res = await getProjectById(id);
      setFormData(res.data);
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

  const handleBoxChanges = (type, selectedBox) => {
    setFormData({
      ...formData,
      [type]: selectedBox,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const res = await updateProject(id, formData);
    if (res.data) {
      if (res.status !== 200 && res.status !== 201) {
        if (res.status === 401) {
          logout();
          navigate('/login');
        }
        toast.error(res.data.message || 'Error has been occured.');
      } else {
        toast.success('Deadline was created successfully.');
        navigate(`/dashboard`);
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
            Update a project
          </h1>
          <div className='p-8 flex flex-col gap-6 '>
            <div className='flex flex-col'>
              <label className='text-left lg:text-xl mb-2'>What type of freelancer are you seeking for</label>
              <div className='flex flex-col sm:flex-row justify-between gap-6'>
                <div
                  className={`${INPUT_CLASSES} w-full sm:w-1/3 h-12 text-center cursor-pointer content-center`}
                  onClick={(e) => handleBoxChanges('jobType', 'create-content')}
                  style={{ backgroundColor: formData.jobType === 'create-content' ? '#A8FFEA' : '' }}
                >
                  Create & Content
                </div>
                <div
                  className={`${INPUT_CLASSES} w-full sm:w-1/3 h-12 text-center cursor-pointer content-center`}
                  style={{ backgroundColor: formData.jobType === 'technical-development' ? '#A8FFEA' : '' }}
                  onClick={(e) => handleBoxChanges('jobType', 'technical-development')}
                >
                  Technical & Development
                </div>
                <div
                  className={`${INPUT_CLASSES} w-full sm:w-1/3 h-12 text-center cursor-pointer content-center`}
                  style={{ backgroundColor: formData.jobType === 'marketing' ? '#A8FFEA' : '' }}
                  onClick={(e) => handleBoxChanges('jobType', 'marketing')}
                >
                  Marketing & Business Support
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <label className='text-left lg:text-xl mb-2'>What do you need them to do</label>
              <div className='flex flex-col sm:flex-row justify-between gap-6 mb-6'>
                <div
                  className={`${INPUT_CLASSES} w-full sm:w-1/3 h-12 text-center cursor-pointer content-center`}
                  style={{ backgroundColor: formData.freelancerType === 'video-production' ? '#A8FFEA' : '' }}
                  onClick={(e) => handleBoxChanges('freelancerType', 'video-production')}
                >
                  Video production
                </div>
                <div
                  className={`${INPUT_CLASSES} w-full sm:w-1/3 h-12 text-center cursor-pointer content-center`}
                  style={{ backgroundColor: formData.freelancerType === 'ux-design' ? '#A8FFEA' : '' }}
                  onClick={(e) => handleBoxChanges('freelancerType', 'ux-design')}
                >
                  UX Design
                </div>
                <div
                  className={`${INPUT_CLASSES} w-full sm:w-1/3 h-12 text-center cursor-pointer content-center`}
                  style={{ backgroundColor: formData.freelancerType === 'ui-design' ? '#A8FFEA' : '' }}
                  onClick={(e) => handleBoxChanges('freelancerType', 'ui-design')}
                >
                  UI Design
                </div>
              </div>
              <div className='flex flex-col sm:flex-row justify-between gap-6 mb-6'>
                <div
                  className={`${INPUT_CLASSES} w-full sm:w-1/3 h-12 text-center cursor-pointer content-center`}
                  style={{ backgroundColor: formData.freelancerType === 'graphic-design' ? '#A8FFEA' : '' }}
                  onClick={(e) => handleBoxChanges('freelancerType', 'graphic-design')}
                >
                  Graphic Design
                </div>
                <div
                  className={`${INPUT_CLASSES} w-full sm:w-1/3 h-12 text-center cursor-pointer content-center`}
                  style={{ backgroundColor: formData.freelancerType === 'social-media' ? '#A8FFEA' : '' }}
                  onClick={(e) => handleBoxChanges('freelancerType', 'social-media')}
                >
                  Social Media Content
                </div>
                <div
                  className={`${INPUT_CLASSES} w-full sm:w-1/3 h-12 text-center cursor-pointer content-center`}
                  style={{ backgroundColor: formData.freelancerType === 'creative-writing' ? '#A8FFEA' : '' }}
                  onClick={(e) => handleBoxChanges('freelancerType', 'creative-writing')}
                >
                  Creative Writing
                </div>
              </div>
              <div className='flex flex-col sm:flex-row justify-between gap-6'>
                <div
                  className={`${INPUT_CLASSES} w-full sm:w-1/3 h-12 text-center cursor-pointer content-center`}
                  style={{ backgroundColor: formData.freelancerType === 'animation' ? '#A8FFEA' : '' }}
                  onClick={(e) => handleBoxChanges('freelancerType', 'animation')}
                >
                  Animation
                </div>
                <div
                  className={`${INPUT_CLASSES} w-full sm:w-1/3 h-12 text-center cursor-pointer content-center`}
                  style={{ backgroundColor: formData.freelancerType === 'logo-design' ? '#A8FFEA' : '' }}
                  onClick={(e) => handleBoxChanges('freelancerType', 'logo-design')}
                >
                  Logo Design
                </div>
                <div
                  className={`${INPUT_CLASSES} w-full sm:w-1/3 h-12 text-center cursor-pointer content-center`}
                  style={{ backgroundColor: formData.freelancerType === 'video-editing' ? '#A8FFEA' : '' }}
                  onClick={(e) => handleBoxChanges('freelancerType', 'video-editing')}
                >
                  Video Editing
                </div>
              </div>
            </div>
            <hr />
            <div className='flex flex-col justify-center w-100'>
              <label className='text-left lg:text-xl mb-2'>Project Title</label>
              <div className='flex gap-4'>
                <input
                  name="title"
                  value={formData.title}
                  placeholder='Enter a title'
                  className={`${INPUT_CLASSES} w-full h-12`}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='flex flex-col justify-center w-100'>
              <label className='text-left lg:text-xl mb-2'>Project requirements</label>
              <textarea
                name="description"
                value={formData.description}
                className={`${INPUT_CLASSES} w-full p-4`}
                placeholder=''
                rows={5}
                onChange={handleChange}
              />
            </div>
            <hr />
            <div className='flex flex-col md:justify-between md:flex-row mb-2 gap-4'>
              <div className='flex md:w-1/3 flex-col gap-4'>
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
                    <option value="0">0%</option>
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

            <div className='flex flex-col justify-between mb-2 md:flex-row gap-8'>
              <div className='flex flex-col justify-center w-1/2'>
                <label className='text-left lg:text-xl mb-2'>When do you wanna start?</label>
                <select
                  name="excludeWeekends"
                  value={formData.startIn}
                  className={`${INPUT_CLASSES} h-12`}
                  onChange={handleChange}
                >
                  <option value={'fewdays'}>In the next few days</option>
                  <option value={'fewweeks'}>In the next few weeks</option>
                </select>
              </div>
              <div className='flex flex-col w-1/2'>
                <label className='text-left lg:text-xl mb-2'>What deadline would you like to set</label>
                <input
                  name="deadline"
                  type='date'
                  value={formData.deadline}
                  className={`${INPUT_CLASSES} h-12`}
                  onChange={handleChange}
                />
              </div>
            </div>
            <PrimaryLargeButton
              style={`w-full md:w-96 text-xl py-5`}
              onClick={handleSubmit}
            >
              Update Project
            </PrimaryLargeButton>
          </div>
        </form>
      </div>
    </div>
  );
}
