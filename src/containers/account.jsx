import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateAccount, deleteAccount } from '../service/accountApi';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

export default function MyAccountPage() {
	const { logout, user } = useAuth();
	const navigate = useNavigate();
	const [firstName, setFirstname] = useState(user.firstName || '');
	const [lastName, setLastname] = useState(user.lastName || '');
	const [email, setEmail] = useState(user.email || '');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const data = {
				firstName,
				lastName,
				email
			};
			const res = await updateAccount(data);
			if (res.status === 200) {
				toast.success("Your account info was updated");
			}
			else {
				toast.warning('There is some problem to save')
			}
		} catch (error) {
			toast.error('The error was occured')
		}
	}

	const handleDeleteAccount = async () => {
		try {
			await deleteAccount();
			logout();
		} catch (error) {
			toast.error('The error was occured.')
		}
	}


  return (
		<div className='w-full md:px-16 py-8 bg-[#F1FFFD] min-h-[calc(100vh-72px)] '>
			<div className='container mx-auto'>
				<h1 className='text-2xl text-center my-4'>Account</h1>
				<div className='flex flex-col md:flex-row px-2 w-full justify-around'>
					<form onSubmit={handleSubmit} className='flex flex-col justify-center basis-2/5 lg:basis-1/3 gap-4 sm:gap-8'>
						<h2 className='text-xl font-bold'>Your Details</h2>
						<div className='flex flex-col sm:flex-row sm:items-center'>
							<label className='text-left text-xl mb-2 basis-1/4'>First name</label>
							<input
								className={`focus:outline-none px-4 text-[#010101] w-full sm:basis-3/4  text-left bg-[#ffffffb0] border border-[#000] h-12 font-poppins text-base`}
								type='text'
								value={firstName}
								onChange={(e) => setFirstname(e.currentTarget.value)}
								required
							/>
						</div>
						<div className='flex flex-col sm:flex-row sm:items-center'>
							<label className='text-left text-xl mb-2 basis-1/4'>Last name</label>
							<input
								className={`focus:outline-none px-4 text-[#010101] w-full sm:basis-3/4  text-left bg-[#ffffffb0] border border-[#000] h-12 font-poppins text-base`}
								type='text'
								value={lastName}
								onChange={(e) => setLastname(e.currentTarget.value)}
								required
							/>
						</div>
						<div className='flex flex-col sm:flex-row sm:items-center'>
							<label className='text-left text-xl mb-2 basis-1/4'>Email</label>
							<input
								className={`focus:outline-none px-4 text-[#010101] w-full sm:basis-3/4  text-left bg-[#ffffffb0] border border-[#000] h-12 font-poppins text-base`}
								type='email'
								value={email}
								onChange={(e) => setEmail(e.currentTarget.value)}
								required
							/>
						</div>
						<div className='flex flex-col sm:flex-row justify-end'>
							<label className='text-left text-xl mb-2 '></label>
							<button
								type="submit" 
								className="basis-3/4 bg-blue-500 text-white px-4 py-4 border border-[#000] rounded-2xl"
							>
								Save
							</button>
						</div>
					</form>
					<div className='mt-8 basis-2/5 md:mt-0 lg:basis-1/3'>
						<div className='container mx-auto'>
							<div className='flex flex-col gap-4 md:gap-8'>
								<h2 className='text-xl font-bold'>Account Actions</h2>
								<button
									type="button" 
									className="w-full md:w-2/3 bg-green-500 text-white px-4 py-4 border border-[#000] rounded-2xl"
									onClick={() => navigate('/pricing')}
								>
									Subscribe
								</button>
								<button
									type="button" 
									className="w-full md:w-2/3 bg-red-500 text-white px-4 py-4 border border-[#000] rounded-2xl"
									onClick={handleDeleteAccount}
								>
									Delete Account
								</button>
							</div>
							<div className='flex flex-col gap-4 mt-8'>
								<h2 className='text-xl font-bold'>Help</h2>
								<a
									type="button" 
									className="w-full md:w-2/3 bg-white text-center px-4 py-4 border border-[#000] rounded-2xl"
									href="https://www.hideadline.com/support"
								>
									Contact Us
								</a>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
  )
}
