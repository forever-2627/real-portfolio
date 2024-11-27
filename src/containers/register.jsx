import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerApi } from '../service/api';
import FormBox from '../components/FormBox';
import FormInput from '../components/FormInput';
import PrimaryLargeButton from '../components/buttons/PrimaryLargeButton';
import ResponseLogin from '../components/ResponseLogin';
import { toast } from 'react-toastify';

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [login, setLogin] = useState(false);

  const validateEmail = (email) => {
    // Basic email pattern for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async () => {
    if (!acceptTerms) {
      return toast.info('Please accept our terms and conditions');
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      toast.warning(emailError || 'Please enter a valid email address.');
      return;
    } else {
      setEmailError(''); // Clear email error if validation passes
    }

    const response = await registerApi(firstName, lastName, email);
    if (response) {
      if (response.status !== 200) {
        toast.error(response.data.message);
      } else {
        if (!login) {
          localStorage.setItem('action', '/create');
          setLogin(!login);
        } else {
          toast.success('We\'ve sent an email to log in');
        }
      }
    }
  };

  return (
    <div className='container mx-auto py-8 px-4'>
      {
        !login ? (
          <FormBox title={`Create Account`} style={`gap-8 bg-[rgba(255,255,255,.7)] w-full sm:w-2/3 lg:w-1/2`}>
            <div className='flex flex-col sm:flex-row gap-8 justify-between'>
              <div className='flex flex-col justify-center sm:w-1/2'>
                <label className='text-left text-xl mb-2'>First Name</label>
                <input
                  className={`focus:outline-none px-4 text-[#010101] w-full text-left bg-[#ffffffb0] border border-[#000] rounded-lg h-12 font-poppins text-base shadow-[2px_3px_0_2px_#484848]`}
                  onChange={(e) => setFirstName(e.currentTarget.value)}
                />
              </div>
              <div className='flex flex-col justify-center sm:w-1/2'>
                <label className='text-left text-xl mb-2'>Last Name</label>
                <input
                  className={`focus:outline-none px-4 text-[#010101] w-full text-left bg-[#ffffffb0] border border-[#000] rounded-lg h-12 font-poppins text-base shadow-[2px_3px_0_2px_#484848]`}
                  onChange={(e) => setLastName(e.currentTarget.value)}
                />
              </div>
            </div>
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
            <div>
              <div className='container mx-auto flex items-center justify-center mb-5'>
                <input
                  type='checkbox'
                  id='acceptTerms'
                  className='hidden'
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.currentTarget.checked)}
                />
                <label htmlFor='acceptTerms' className='flex items-center cursor-pointer'>
                  <span className='w-8 h-8 mr-2 inline-block border border-[#000] rounded-full shadow-[1px_1px_0_2px_#484848] bg-white flex items-center justify-center'>
                    {acceptTerms && (
                      <svg className='w-5 h-5 text-blue-500' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
                      </svg>
                    )}
                  </span>
                  I accept the terms and conditions
                </label>
              </div>
              <PrimaryLargeButton style={`mb-5 w-full sm:w-2/3 lg:w-96`} onClick={handleSubmit}>
                Create Account
              </PrimaryLargeButton>
              <div className='mt-5'>
                <Link to={`/login`} className='text-blue-500'>if you have an account, back to login...</Link>
              </div>
            </div>
          </FormBox>
        ) : (
          <ResponseLogin handleSubmit={handleSubmit} />
        )
      }
    </div>
  );
}
