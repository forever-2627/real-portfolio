import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { shareItem } from '../service/itemsApi'; // Make sure you have this function in your itemsApi

const SharePopup = ({ itemId, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await shareItem({ itemId, email, role: 'freelancer' });
      if (response.status === 200) {
        setMessage('Deadline shared successfully');
        toast.success(response.data.message || message)
        onClose()
      } else {
        toast.error(response.data.message);
        setMessage('Failed to share item' || message);
      }
    } catch (error) {
      setMessage('Error sharing Deadline');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4">Share Deadline</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='freelancer@gmail.com'
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Share
          </button>
          <button type="button" onClick={onClose} className="ml-4 bg-red-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </form>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default SharePopup;
