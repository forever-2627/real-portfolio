import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginApi } from '../service/api';
import FormBox from '../components/FormBox';
import PrimaryLargeButton from '../components/buttons/PrimaryLargeButton';
import ResponseLogin from '../components/ResponseLogin';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [login, setLogin] = useState(false);

  const validateEmail = (email) => {
    // Basic email pattern for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async () => {
    // Validate email before making API call
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      toast.warning(emailError || 'Please enter a valid email address.');
      return;
    } else {
      setEmailError(''); // Clear email error if validation passes
    }

    try {
      const response = await loginApi(email);
      if (response.data) {
        // 404 error when user doesn't exist
        if (response.status !== 200) {
          toast.error(response.data.message);
        } else {
          if (!login) {
            localStorage.setItem('action', '/dashboard');
            setLogin(!login);
          } else {
            toast.success('We\'ve sent Email to log in');
          }
        }
      }
    } catch (error) {
      console.error(error, "error");
      toast.error('An unexpected error occurred.');
    }
  };

  return (
    <div className='container mx-auto py-8 px-4'>
      {!login ? (
        <FormBox title={`Sign in`} style={`gap-10 bg-[rgba(255,255,255,.7)] w-full sm:w-2/3 lg:w-1/2`}>
          <div className='flex flex-col justify-center w-100'>
            <label className='text-left text-xl mb-2'>Email</label>
            <input
              className={`focus:outline-none px-4 text-[#010101] w-full text-left bg-[#ffffffb0] border border-[#000] rounded-lg h-12 font-poppins text-base shadow-[2px_3px_0_2px_#484848]`}
              type='email'
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
          </div>
          <div className=''>
            <PrimaryLargeButton
              style={`w-full sm:w-2/3 lg:w-96`}
              onClick={handleSubmit}
            >
              Dashboard
            </PrimaryLargeButton>
            <div className='mt-5'>
              <Link to={`/register`} className='text-blue-500'>To register, click here...</Link>
            </div>
          </div>
        </FormBox>
      ) : (
        <ResponseLogin handleSubmit={handleSubmit} />
      )}
    </div>
  );
}
