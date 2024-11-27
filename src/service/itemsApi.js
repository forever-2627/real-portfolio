import axiosInstance from './axiosInstance';

const createDeadline = async (data) => {
  try {
    const response = await axiosInstance.post('/items', data);
    return response;
  } catch (error) {
    return error.response;
  }
}

const getDeadline = async (id) => {
  try {
    const response = await axiosInstance.get(`/items/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
}

const getAllDeadlines = async () => {
  try {
    const response = await axiosInstance.get(`/items`);
    return response;
  } catch (error) {
    return error.response;
  }
}

const updateDeadline = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/items/${id}`, data);
    return response;
  } catch (error) {
    return error.response;
  }
}

const shareItem = async (data) => {
  try {
    const response = await axiosInstance.post('/items/share', data);
    return response;
  } catch (error) {
    return error.response;
  }
}

const updateTimer = async (data) => {
  try {
    const response = await axiosInstance.post('/items/update-timer', data);
    return response;
  } catch (error) {
    return error.response;
  }

}

const deleteItem = async (id) => {
  try {
    const response = await axiosInstance.delete('/items', { data: { id } });
    return response;
  } catch (error) {
    return error.response;
  }
}

const completeItem = async (id) => {
  try {
    const response = await axiosInstance.post('/items/complete', { id });
    return response;
  } catch (error) {
    return error.response;
  }
}

export {
  createDeadline,
  updateDeadline,
  getDeadline,
  getAllDeadlines,
  shareItem,
  updateTimer,
  deleteItem,
  completeItem
}
