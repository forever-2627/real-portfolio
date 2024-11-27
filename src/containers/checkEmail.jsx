import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { authenticateApi } from '../service/api'
import { createProject } from '../service/projectApi'
import { useAuth } from '../contexts/AuthContext'
import { toast } from 'react-toastify'

export default function CheckEmail() {
  const { login } = useAuth();
  const { token } = useParams();
  const navigate = useNavigate();
  const activatedPriceId = localStorage.getItem('activatedPriceId');
  const createdProject = localStorage.getItem('project-data');

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const res = await authenticateApi(token);
        if(res) {
          if (res.status !== 200) {
            toast.error(res.data.message);
          } else {
            login(res.data)
            const action = localStorage.getItem('action');
            setTimeout(async () => {
              if(activatedPriceId) {
                navigate('/pricing')                
              } else {
                /**
                 * 
                 * check created project before login/register
                 */
                if(createdProject) {
                  const data = JSON.parse(createdProject);
                  const p_res = await createProject(data);
                  if(p_res) {
                    localStorage.removeItem('project-data');
                  }
                }

                if(action) {
                  navigate(action);
                } else {
                  navigate('/create');
                }
              }
            }, 500)
          }
        }
      } catch (error) {
        navigate('/login');
      }
    }
    sendRequest();
  }, [])

  return (
    <div className='text-4xl font-bold text-center mx-auto min-h-[calc(100vh-72px)] flex justify-center items-center'>Checking Your Authentication... </div>
  )
}
