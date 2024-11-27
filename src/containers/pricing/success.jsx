import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';

export default function SuccessPage() {
  const navigate = useNavigate()
  const { sessionId } = useParams()
  const { token } = useAuth()

  useEffect(() => {
    const saveSubscription = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/subscription/save-subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ sessionId }),
      });
      if (res) {
        navigate('/create')
      }
    }
    saveSubscription()
  }, [])

  return (
    <div className='text-center mx-auto flex flex-col justify-center items-center h-[calc(90vh-72px)]'>
      <div className='flex flex-col justify-around gap-10 md:w-2/3 lg:w-2/5 bg-white rounded-2xl px-2 md:px-4 py-8 border border-slug-700'>
        <h1 className='text-2xl md:text-3xl lg:text-3xl font-bold'>You subscribed successfully.</h1>
      </div>
    </div>
  )
}
