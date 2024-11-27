import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function HomePage() {
  const navigate = useNavigate();
  const { token } = useAuth();
  if (token) navigate('/dashboard')
  else navigate('/login')

  return null;
}
