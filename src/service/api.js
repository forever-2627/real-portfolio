import axios from "axios"

const loginApi = async (email) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signin`, { email });
        return response;
    } catch (error) {
        return error.response;
    }
}

const authenticateApi = async (token) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { token });
        return response;
    } catch (error) {
        console.log(error);
    }
}

const registerApi = async (firstName, lastName, email) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
            firstName,
            lastName,
            email
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

const checkAuthApi = async (token) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
            token
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

const createDeadline = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/items`, data);
        return response;
    } catch (error) {
        return error.response;
    }
}

const acceptItemApi = async (data) => {
    return await axios.post(`${process.env.REACT_APP_API_URL}/accept`, data);
};

export {
    loginApi,
    registerApi,
    authenticateApi,
    createDeadline,
    acceptItemApi
}