import axiosInstance from './axiosInstance';

const updateAccount = async (data) => {
  try {
    const response = await axiosInstance.put('/account/update', data);
    return response;
  } catch (error) {
    return error.response;
  }
}

const deleteAccount = async () => {
  try {
    const response = await axiosInstance.delete(`/account/delete`);
    return response;
  } catch (error) {
    return error.response;
  }
}

export {
  deleteAccount,
  updateAccount,
}
