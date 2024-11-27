import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../../components/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_PK_STRIPE_KEY); // Your Stripe publishable key

export default function Pricing() {
  const { token, user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const activatedPriceId = localStorage.getItem('activatedPriceId');
  const activatedTrial = localStorage.getItem('activatedTrial');
  
  useEffect(() => {
    if(activatedPriceId && !user.subscriptionId) {
      handleCheckout(activatedPriceId, activatedTrial);
    } else {
      localStorage.removeItem('activatedPriceId');
      localStorage.removeItem('activatedTrial');
    }
  }, []);

  const handleCheckout = async (priceId, trialPeriodDays) => {
    if(!token && !user.subscriptionId) {
      localStorage.setItem('activatedPriceId', priceId);
      localStorage.setItem('activatedTrial', trialPeriodDays);
      navigate('/login');
      return
    }
    setIsLoading(true);

    /**
     * 
     * Remove Stroage for Subscription
     */
    localStorage.removeItem('activatedPriceId');
    localStorage.removeItem('activatedTrial');

    const response = await fetch(`${process.env.REACT_APP_API_URL}/subscription/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ priceId, trialPeriodDays }),
    });

    const sessionId = await response.json();
    const stripe = await stripePromise;

    await stripe.redirectToCheckout({ sessionId: sessionId.id });
  };

  const handleCancelSubscription = async (subscriptionId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/subscription/cancel`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ subscriptionId }),
      });

      const result = await response.json();

      if (response.ok) {
        // Handle successful cancellation
        toast.success('Subscription cancelled successfully!');
        navigate('/cancel');
        // Optionally, you can update user state or refetch user data here
      } else {
        // Handle errors from the backend
        toast.error(`Error cancelling subscription: ${result.message}`);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error cancelling subscription:', error);
      toast.error('An error occurred while cancelling the subscription.');
    } finally {
      setIsLoading(false); // Hide loading spinner
    }
  }

  return (
    <div className='w-full'>
      {isLoading && <Loading />}
      <h1 className='text-2xl sm:text-3xl py-5 md:py-10 md:text-4xl text-center font-bold'>Unlimited usage with all plans</h1>
      <div className='flex flex-col md:flex-row mx-auto px-4 lg:px-16 w-full mb-5'>
        <div className={`border border-slate-300 md:w-1/3 p-8 bg-white flex flex-col gap-8 ${user.membershipType === 'monthly' ? 'border-4 border-[#48C23A]' : ''}`}>
          <div className='text-2xl font-semibold'>Monthly</div>
          <div className='flex flex-col gap-2'>
            <div className='text-3xl'><strong className='text-6xl'>£8</strong>/mo</div>
            <p className='text-xl'>Build monthly</p>
          </div>
          <div>
            {
              user.membershipType === 'monthly' ? <button
                className='rounded-full bg-[#5B9BFF] text-white px-12 py-6'
                onClick={() => handleCancelSubscription(user.subscriptionId)}
              >
                Cancel Anytime
              </button> : <button
                className='rounded-full bg-[#ff715b] text-white px-12 py-6'
                onClick={() => handleCheckout('price_1Pt2oQJbTxPJGYXMYW2vpXk4', 7)}
              >
                Subscribe
              </button>
            }
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div className={`border border-slate-300 md:w-1/3 p-8 border-y-0 bg-[#e7f1f1] md:border-y md:border-x-0 flex flex-col gap-8 ${user.membershipType === 'yearly' ? 'border-4 md:border-x-4 border-y-4 md:border-y-4 border-[#48C23A]' : ''}`}>
          <div className='text-2xl font-semibold'>
            Annual
            <label className='font-normal text-base ml-4 rounded-full px-4 p-2 text-white bg-[#a271ff]'>Save 59%</label>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-3xl'><strong className='text-6xl'>£39</strong>/yr</div>
            <p className='text-xl'>Billed annually</p>
          </div>
          <div>
            {
              user.membershipType === 'yearly' ? <button
                className='rounded-full bg-[#5B9BFF] text-white px-12 py-6'
                onClick={() => handleCancelSubscription(user.subscriptionId)}
              >
                Cancel Anytime
              </button> : <button
                className='rounded-full bg-[#ff715b] text-white px-12 py-6'
                onClick={() => handleCheckout('price_1Pt2p3JbTxPJGYXM6OmEIxq6', 7)}
              >
                Subscribe
              </button>
            }
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

        </div>
        <div className={`border border-slate-300 md:w-1/3 p-8 bg-white flex flex-col gap-8 ${user.membershipType === 'lifetime' ? 'border-4 border-[#48C23A]' : ''}`}>
          <div className='text-2xl font-semibold'>Lifetime</div>
          <div className='flex flex-col gap-2'>
            <div className='text-3xl'><strong className='text-6xl'>£59</strong></div>
            <p className='text-xl'>Pay once and never again</p>
          </div>
          <div>
            {
              user.membershipType === 'lifetime' ? <button
                className='rounded-full bg-[#5B9BFF] text-white px-12 py-6'
              >
                Subscribed
              </button> : <button
                className='rounded-full bg-[#ff715b] text-white px-12 py-6'
                onClick={() => handleCheckout('price_1Pt2p3JbTxPJGYXM6OmEIxq6', 0)}
              >
                Subscribe
              </button>
            }
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
      </div>
    </div>
  )
}