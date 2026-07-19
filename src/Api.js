

import axios from 'axios';

const API_BASE_URL = 'https://family-backend-iwar.onrender.com/api';



export const getPhotos = async (albumName = '') => {
    try {
        
        const url = albumName ? `${API_BASE_URL}/photos?album=${albumName}` : `${API_BASE_URL}/photos`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching photos:", error);
        throw error;
    }
};

export const getAlbumNames = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/photos/albums`);
        return response.data;
    } catch (error) {
        console.error("Error fetching album names:", error);
        return [];
    }
};


export const uploadPhoto = async (photoData) => {
    try {
        const formData = new FormData();
        formData.append('file', photoData.file);
        formData.append('albumName', photoData.albumName);
        formData.append('uploaderName', photoData.uploaderName);
        if (photoData.caption) {
            formData.append('caption', photoData.caption);
        }


        const response = await axios.post(`${API_BASE_URL}/photos`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    } catch (error) {
        console.error("Error uploading photo:", error);
        throw error;
    }
};

export const deletePhoto = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/photos/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting photo:", error);
        throw error;
    }
};

export const photoUrl = (fileName) => {
    if (!fileName) return '';
   return `https://family-backend-iwar.onrender.com/uploads/${fileName}`;
};



export const getEvents = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/events`); 
        return response.data;
    } catch (error) {
        console.error("Error fetching all events:", error);
        throw error;
    }
};

export const getUpcomingEvents = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/events`); 
        return response.data;
    } catch (error) {
        console.error("Error fetching upcoming events:", error);
        throw error;
    }
};

export const createEvent = async (eventData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/events`, eventData);
        return response.data;
    } catch (error) {
        console.error("Error creating new event:", error);
        throw error;
    }
};

export const deleteEvent = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/events/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting event:", error);
        throw error;
    }
};