import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { acceptItemApi } from '../service/api';

export default function AcceptDeadline() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const handleAccept = async () => {
      try {
        const res = await acceptItemApi({ id });
        toast.success(res.data.message);
        if(res.status === 200) navigate('/login')
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    handleAccept();
  }, [id]);

  return (
    <div className='text-2xl container mx-auto'>
      <h1 className='text-center'>Accepting Item...</h1>
    </div>
  )
}
