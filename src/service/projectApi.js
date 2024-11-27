import axiosInstance from './axiosInstance';

const createProject = async (data) => {
  try {
    const response = await axiosInstance.post('/project', data);
    return response;
  } catch (error) {
    return error.response;
  }
}

const getProjectById = async (id) => {
  try {
    const response = await axiosInstance.get(`/project/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
}

const getAllProjects = async () => {
  try {
    const response = await axiosInstance.get(`/project/all`);
    return response;
  } catch (error) {
    return error.response;
  }
}

const updateProject = async (id, data) => {
  try {
    const response = await axiosInstance.put(`/project/${id}`, data);
    return response;
  } catch (error) {
    return error.response;
  }
}

const deleteProject = async (id) => {
  try {
    const response = await axiosInstance.delete(`/project/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
}


export {
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
  getAllProjects
}
