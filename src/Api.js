
import axios from 'axios';

const BACKEND_URL = 'https://family-backend-iwar.onrender.com';
const API_BASE = `${BACKEND_URL}/api`;
const FILE_BASE = `${BACKEND_URL}/uploads`;


const api = axios.create({ baseURL: API_BASE });

api.interceptors.request.use((config) => {
  const email = localStorage.getItem('familyEmail');
  const pw = localStorage.getItem('familyPassword');
  if (email) config.headers['X-Family-Email'] = email;
  if (pw) config.headers['X-Family-Password'] = pw;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.status === 401) {
      localStorage.removeItem('familyEmail');
      localStorage.removeItem('familyPassword');
      window.location.reload();
    }
    return Promise.reject(err);
  }
);


export const photoUrl = (fileName) => {
  const email = encodeURIComponent(localStorage.getItem('familyEmail') || '');
  const pw = encodeURIComponent(localStorage.getItem('familyPassword') || '');
  return `${FILE_BASE}/${fileName}?email=${email}&password=${pw}`;
};

export const getPhotos = (album) =>
  api.get('/photos', { params: album ? { album } : {} }).then(r => r.data);

export const getAlbumNames = () =>
  api.get('/photos/albums').then(r => r.data);

export const uploadPhoto = ({ file, albumName, uploaderName, caption }) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('albumName', albumName);
  formData.append('uploaderName', uploaderName);
  if (caption) formData.append('caption', caption);
  return api.post('/photos', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }).then(r => r.data);
};

export const deletePhoto = (id) => api.delete(`/photos/${id}`);

export const getEvents = () => api.get('/events').then(r => r.data);
export const getUpcomingEvents = () => api.get('/events/upcoming').then(r => r.data);
export const createEvent = (event) => api.post('/events', event).then(r => r.data);
export const deleteEvent = (id) => api.delete(`/events/${id}`);

export default api;