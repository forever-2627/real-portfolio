import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import LockIcon from '../../components/modals/lock.svg'
import TrashIcon from '../../components/modals/trash.svg'

import { useAuth } from '../../contexts/AuthContext'

import { getAllDeadlines, deleteItem, completeItem } from '../../service/itemsApi'
import { getAllProjects, deleteProject } from '../../service/projectApi'
import { convertSecondsToTime, getRemainingTime } from '../../utils'
import SharePopup from '../../components/SharePopup'
import { DEFAULT_BUTTON, JOB_TYPE, FREELANCER_TYPE, FREELANCER_AND_TYPE_DATA } from '../../constant'

import Loading from '../../components/Loading'

export default function ProjectDashboard() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [deadlines, setDeadlines] = useState([]);
  const [projects, setProjects] = useState([]);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);

  const [activeTab, setActiveTab] = useState('horizontal-alignment-1');

  // Function to handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllDeadlines();
      const res_p = await getAllProjects();
      if (res.status === 200) {
        // calculateTimestamp(res.data)
        setDeadlines(res.data.map(deadline => {
          deadline._doc.remainingTime = getRemainingTime(deadline);
          return {
            ...deadline._doc,
            timeLeft: convertSecondsToTime(Math.abs(deadline._doc.remainingTime)),
            status: deadline._doc.remainingTime > 0 ? 'remain' : 'over',
            isStarted: deadline._doc.countdown > deadline._doc.remainingTime ? true : false,
            focus: false,
          }
        }));
        setProjects(res_p.data.map(project => ({
          ...project,
          focus: false,
        })));
        setIsLoading(false);
      }
      else { // logout when token is expired
        if (res.status === 401) {
          logout()
          navigate('/login')
        }
      }
    }
    fetchData();
  }, [logout, navigate]);

  const handleShareClick = (itemId) => {
    setCurrentItemId(itemId);
    setShowSharePopup(true);
  };

  const handleDeleteClick = async (itemId) => {
    const res = await deleteItem(itemId);
    if (res.status === 200) {
      setDeadlines((prevDeadlines) => prevDeadlines.filter((deadline) => deadline._id !== itemId));
      toast.success('Deadline was removed successfully.');
    } else {
      toast.error(res.data.message || 'Server Error.');
    }
  }

  const handleDeleteProject = async (projectId) => {
    const res = await deleteProject(projectId);
    if (res.status === 200) {
      setProjects((prevProjects) => prevProjects.filter((project) => project._id !== projectId));
      toast.success('Deadline was removed successfully.');
    } else {
      toast.error(res.data.message || 'Server Error.');
    }
  }

  const handleCompleteClick = async (itemId) => {
    const res = await completeItem(itemId);
    if (res.status === 200) {
      setDeadlines((prevDeadlines) => prevDeadlines.map((deadline) => deadline._id === itemId ? { ...deadline, complete: true } : deadline));
      toast.success('Deadline was completed.');
    } else {
      toast.error(res.data.message || 'Server Error.');
    }
  }

  const handleDeadlineMenu = async (itemId) => {
    setDeadlines((prevDeadlines) => prevDeadlines.map((deadline) => deadline._id === itemId ? { ...deadline, focus: !deadline.focus } : deadline));
  }

  const handleProjectMenu = async (itemId) => {
    setProjects((prevProjects) => prevProjects.map((project) => project._id === itemId ? { ...project, focus: !project.focus } : project));
  }

  const handleClosePopup = () => {
    setShowSharePopup(false);
    setCurrentItemId(null);
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Extract the month, day, and year
    const month = date.getUTCMonth() + 1; // Months are zero-based
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    // Format the date as "M/D/YYYY"
    return `${month}/${day}/${year}`;
  }

  const deadlineItem = (item, index) => (
    <>
      {
        item._id === 0 ? <div className={`flex flex-col sm:flex-row justify-center items-center bg-white py-4 px-8 rounded-2xl bg-[rgba(0,0,0,.5)] border border-black`} key={`locked-${index}`}>
          <Link to={'/pricing'} className='w-15 h-10'>
            <img src={LockIcon} className='w-15 h-10' alt='Lock Icon' />
          </Link>
        </div> : <div className={`flex flex-col sm:flex-row justify-between sm:items-center bg-white py-4 px-8 rounded-2xl border border-black ${item.complete ? 'bg-blue-100 border border-blue-500' : item.remainingTime < 0 ? 'bg-red-100 border border-red-500' : ''}`} key={index}>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xl font-bold'>{item.title}</h1>
            {<p className='text-base'>{item.complete ? 'Completed' : (item.status === 'remain' ? `Time remaining: ${item.timeLeft}` : `Over Deadline: ${item.timeLeft}`)}</p>}
          </div>
          <div className='actions flex items-center gap-4 sm:mt-0 mt-4'>
            {
              !item.isRunning && !item.isStarted && user._id === item.userId && <>
                <Link to={`/edit/${item._id}`} className={`${DEFAULT_BUTTON} flex items-center bg-white md:px-8`}>Edit</Link>
                <button onClick={() => handleShareClick(item._id)} className={`${DEFAULT_BUTTON} flex items-center bg-white md:px-8`}>Share Link</button>
              </>
            }
            {
              item.isStarted && user._id === item.userId && !item.complete && <>
                <button onClick={() => handleCompleteClick(item._id)} className={`${DEFAULT_BUTTON} flex items-center bg-white md:px-8`}>Complete</button>
              </>
            }
            <Link to={`/detail/${item._id}`} className={`${DEFAULT_BUTTON} md:px-8 flex items-center bg-[#50F8D0] `}>View</Link>
            {
              !item.isRunning && !item.isStarted && user._id === item.userId && <div className='w-7 relative'>
                <img src='/img/menu.png' className='cursor-pointer' onClick={() => handleDeadlineMenu(item._id)} alt='Menu Icon' />
                <button onClick={() => handleDeleteClick(item._id)} className={`${DEFAULT_BUTTON} ${item.focus ? 'flex' : 'hidden'}  px-6 md:px-8 text-center justify-center items-center absolute right-0 top-10 bg-white`}>
                  <img src={TrashIcon} className='w-5 h-5 mr-2' alt='Trash Icon' />
                  Delete
                </button>
              </div>
            }
          </div>
        </div>
      }
    </>
  )

  const projectItem = (item, index) => (
    <>
      {
        item._id === 0 ? <div className={`flex flex-col sm:flex-row justify-center items-center bg-white py-4 px-8 rounded-2xl bg-[rgba(0,0,0,.5)] border border-black`} key={'project-0'}>
          <Link to={'/pricing'} className='w-15 h-10'>
            <img src={LockIcon} className='w-15 h-10' alt='Lock Icon' />
          </Link>
        </div> : <div className={`flex flex-col sm:flex-row justify-between sm:items-center bg-white py-4 px-8 rounded-2xl border border-black ${item.complete ? 'bg-blue-100 border border-blue-500' : item.remainingTime < 0 ? 'bg-red-100 border border-red-500' : ''}`} key={`project-${index}`}>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>{item.title}</h1>
            <div className='flex flex-start gap-6'>
              <p className='text-base text-yellow-600'>{FREELANCER_AND_TYPE_DATA[item.jobType].label}</p>
              <p className='text-base text-blue-500'>{FREELANCER_AND_TYPE_DATA[item.jobType].children[item.freelancerType].label}</p>
            </div>
            <p>{item.description}</p>
            <div className='flex flex-start gap-6'>
              <p className='text-base'>{item.startIn}</p>
              <p className='text-base'>{formatDate(item.deadline)}</p>
            </div>
          </div>
          <div className='actions flex items-center gap-4 sm:mt-0 mt-4'>
            <Link to={`/edit-project/${item._id}`} className={`${DEFAULT_BUTTON} flex items-center bg-white md:px-8`}>Edit</Link>
            {/* <Link to={`/detail/${item._id}`} className={`${DEFAULT_BUTTON} md:px-8 flex items-center bg-[#50F8D0] `}>View</Link> */}
            <div className='w-7 relative'>
              <img src='/img/menu.png' className='cursor-pointer' onClick={() => handleProjectMenu(item._id)} alt='Menu Icon' />
              <button onClick={() => handleDeleteProject(item._id)} className={`${DEFAULT_BUTTON} ${item.focus ? 'flex' : 'hidden'}  px-6 md:px-8 text-center justify-center items-center absolute right-0 top-10 bg-white`}>
                <img src={TrashIcon} className='w-5 h-5 mr-2' alt='Trash Icon' />
                Delete
              </button>
            </div>
          </div>
        </div>
      }
    </>
  )

  return (
    <div className='w-full md:px-16 py-8 bg-[#F1FFFD] min-h-[calc(100vh-72px)] '>
      <div className="border-b border-gray-200">
        <nav className="-mb-0.5 px-8 flex justify-center gap-x-6" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
          <button
            type="button"
            className={`py-4 px-1 text-xl xs:text-2xl sm:text-4xl inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap ${activeTab === 'horizontal-alignment-1' ? 'font-semibold border-blue-600 text-blue-600' : 'text-gray-500 hover:text-blue-600'} focus:outline-none focus:text-blue-600`}
            id="horizontal-alignment-item-1"
            aria-selected={activeTab === 'horizontal-alignment-1'}
            onClick={() => handleTabChange('horizontal-alignment-1')}
            role="tab"
          >
            Deadline
          </button>
          <button
            type="button"
            className={`py-4 px-1 text-xl xs:text-2xl sm:text-4xl inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap ${activeTab === 'horizontal-alignment-2' ? 'font-semibold border-blue-600 text-blue-600' : 'text-gray-500 hover:text-blue-600'} focus:outline-none focus:text-blue-600`}
            id="horizontal-alignment-item-2"
            aria-selected={activeTab === 'horizontal-alignment-2'}
            onClick={() => handleTabChange('horizontal-alignment-2')}
            role="tab"
          >
            Project
          </button>
        </nav>
      </div>

      <div className="mt-3">
        <div
          id="horizontal-alignment-1"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
          className={activeTab === 'horizontal-alignment-1' ? '' : 'hidden'}
          key={'deadline'}
        >
          <div className='px-8 py-4 flex justify-between items-center'>
            <h1 className='text-xl xs:text-2xl sm:text-4xl font-bold'>My Deadlines</h1>
            <Link to={'/create'} className={`${DEFAULT_BUTTON} text-base sm:px-8 md:text-xl bg-[#50F8D0] `}>Create Deadline</Link>
          </div>
          <div className='mt-8 px-8 py-4 flex flex-col gap-8'>
            {isLoading ? <Loading /> :
              deadlines.length === 0 ? <div className='text-center text-2xl'>Your did not create any deadline yet.</div>
                : deadlines.map(deadlineItem)}
          </div>
        </div>
        <div
          id="horizontal-alignment-2"
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-2"
          className={activeTab === 'horizontal-alignment-2' ? '' : 'hidden'}
          key={'project'}
        >
          <div className='px-8 py-4 flex justify-between items-center'>
            <h1 className='text-xl xs:text-2xl sm:text-4xl font-bold'>My Projects</h1>
            <Link to={'/project/create'} className={`${DEFAULT_BUTTON} text-base sm:px-8 md:text-xl bg-[#50F8D0] `}>Post Project</Link>
          </div>
          <div className='mt-8 px-8 py-4 flex flex-col gap-8'>
            {isLoading ? <Loading /> :
              projects.length === 0 ? <div className='text-center text-2xl'>Your did not post any project yet.</div>
                : projects.map(projectItem)}
          </div>
        </div>
      </div>

      {showSharePopup && <SharePopup itemId={currentItemId} onClose={handleClosePopup} />}
    </div>
  )
}
