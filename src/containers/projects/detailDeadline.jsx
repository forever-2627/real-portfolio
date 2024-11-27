import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

import { getDeadline, updateTimer } from '../../service/itemsApi';

import ResumeModal from '../../components/modals/ResumeModal';
import PauseModal from '../../components/modals/PauseModal';
import DeliverablesModal from '../../components/DeliverablesModal';
import DropDownList from '../../components/DropDownList';
import { PAUSE_REASON, RESUME_REASON, BUTTON_CLASSES } from '../../constant';

import { getRemainingTime } from '../../utils';

import TimerBox from '../../components/TimerBox';
import OverTimerBox from '../../components/OverTimerBox';
import SharePopup from '../../components/SharePopup';

import ActivityLog from '../../components/ActivityLog';
import Loading from '../../components/Loading';


export default function DetailDeadlinePage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [project, setProject] = useState({});
  // Share Popup
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(null);

  const [resumeReasonIndex, setResumeReasonIndex] = useState(0);
  const [pauseReasonIndex, setPauseReasonIndex] = useState(0);

  // Popup for resume/pause
  const [isResumePopup, setIsResumePopup] = useState(false);
  const [isPausePopup, setIsPausePopup] = useState(false);
  // Dropdown of poup
  const [isResumeDropdown, setIsResumeDropdown] = useState(false);
  const [isPauseDropdown, setIsPauseDropdown] = useState(false);

  const [showDeliverablesModal, setShowDeliverablesModal] = useState(false);

  const handleViewDeliverables = () => {
    setShowDeliverablesModal(true);
  };

  const fetchProjectDetail = async () => {
    const res = await getDeadline(id);
    setIsLoading(false);
    res.data._doc.remainingTime = getRemainingTime(res.data);
    setProject(res.data._doc);
  }

  useEffect(() => {
    fetchProjectDetail();

    const intervalId = setInterval(() => {
      fetchProjectDetail();
    }, 60000); // 60,000 milliseconds = 1 minute

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handlePauseTimer = async (description) => {
    const data = {
      itemId: project._id,
      action: 'pause',
      reason: PAUSE_REASON[pauseReasonIndex],
      description
    }
    const res = await updateTimer(data);
    if (res.status === 200) {
      toast.success('Paused Timer!')
      closePausePopup();
      fetchProjectDetail()
    } else {
      toast.error(res.data.message)
    }
  }
  const handleResumeTimer = async (description) => {
    const data = {
      itemId: project._id,
      action: 'resume',
      reason: RESUME_REASON[resumeReasonIndex],
      description
    }
    const res = await updateTimer(data);
    if (res.status === 200) {
      toast.success('Resumed Timer!')
      closeResumePopup()
      fetchProjectDetail()
    } else {
      if (res.status === 401 || res.status === 403) {
        logout();
        navigate('/login');
      }
      toast.error(res.data.message)
    }
  }

  // Popup for resume/pause Timer
  const onOpenPausePopup = () => setIsPausePopup(true);
  const onOpenResumePopup = () => setIsResumePopup(true);
  // Close Popup
  const closePausePopup = () => setIsPausePopup(false);
  const closeResumePopup = () => setIsResumePopup(false);

  // Dropdown for resume/pause Timer
  const onClosePauseDropdown = () => setIsPauseDropdown(false);
  const onCloseResumeDropdown = () => setIsResumeDropdown(false);

  // Share Link for users
  const handleShareClick = () => {
    setCurrentItemId(project.id);
    setShowSharePopup(true);
  };

  const handleClosePopup = () => {
    setShowSharePopup(false);
    setCurrentItemId(null);
  };

  return (
    <div className={`pt-0`}>
      {isLoading && <Loading />}
      <div className={`p-8 ${project.complete || project.isRunning && project.remainingTime > 0 ? 'bg-[#dbfff6]' : (project.remainingTime <= 0 ? 'bg-[#FFE1E1]' : 'bg-[#ffeddc]')}`}>
        <h1 className='text-2xl md:text-4xl text-center my-4 font-bold'>{project.title}</h1>
        {
          project.complete || project.remainingTime > 0 ? <>
            <div className='flex justify-center my-2'>
              <div className='text-blue-500 text-xl cursor-pointer' onClick={handleViewDeliverables}>View Deliverables</div>
            </div>
            <TimerBox project={project} />
          </> : <OverTimerBox project={project} />
        }
        {
          !project.complete && <div className='container mx-auto my-8'>
            {
              project.startTime ? (
                project.isRunning ? <button className={`${BUTTON_CLASSES} bg-[#fac390] w-32`} onClick={onOpenPausePopup}>Pause</button>
                  : <button className={`${BUTTON_CLASSES} w-32`} onClick={onOpenResumePopup}>Resume</button>
              )
                : <button className={`${BUTTON_CLASSES} w-32`} onClick={handleShareClick}>Share Link</button>
            }
          </div>
        }

      </div>
      <div className='w-full py-4 px-8 bg-white'>
        <p className='text-sm text-center my-4'>
          {project.excludeWeekends ? 'This project automatically pauses at weekends' : 'This project is working at weekends'}
        </p>
        <ActivityLog logs={project?.activityLog?.filter((item) => item.action !== 'start').reverse()} />
      </div>
      {
        isResumePopup && <ResumeModal onClose={closeResumePopup} onResume={handleResumeTimer}>
          <div className='relative w-full border bg-white border-black rounded-2xl shadow-[4px_4px_0px_0px_#000000]' >
            <div
              className='p-4 '
              onClick={() => setIsResumeDropdown(!isResumeDropdown)}
            >
              {RESUME_REASON[resumeReasonIndex]}
            </div>
            {
              isResumeDropdown && <DropDownList list={RESUME_REASON} setActiveIndex={setResumeReasonIndex} onClose={onCloseResumeDropdown} />
            }
          </div>
        </ResumeModal>
      }
      {
        isPausePopup && <PauseModal onClose={closePausePopup} onPause={handlePauseTimer}>
          <div className='relative w-full border bg-white border-black rounded-2xl shadow-[4px_4px_0px_0px_#000000]' >
            <div
              className='p-4 '
              onClick={() => setIsPauseDropdown(!isPauseDropdown)}
            >
              {PAUSE_REASON[pauseReasonIndex]}
            </div>
            {
              isPauseDropdown && <DropDownList list={PAUSE_REASON} setActiveIndex={setPauseReasonIndex} onClose={onClosePauseDropdown} />
            }
          </div>
        </PauseModal>
      }
      {showSharePopup && <SharePopup itemId={id} onClose={handleClosePopup} />}
      {showDeliverablesModal && <DeliverablesModal onClose={() => setShowDeliverablesModal(false)} description={project.description} />}
    </div>
  )
}
