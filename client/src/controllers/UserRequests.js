import axios from "axios";



axios.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getUser = (userId) => axios.get(`/users/${userId}`);
export const updateUser = (id, formData) =>  axios.put(`/users/${id}`, formData);
export const getAllUser = ()=> axios.get('/users')
