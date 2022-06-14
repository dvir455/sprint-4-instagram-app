import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpService } from './http.service';
const USER_URL = 'http://localhost:3030/api/user';

const login = createAsyncThunk('user/login', async (payload) => {
  try {
    const response = await httpService.post(`${USER_URL}/login`, payload, {
      withCredentials: true,
    });
    return response;
  } catch (e) {
    console.log('Error logging in: ', e.message);
    throw new Error(e.message);
  }
});

const checkLoggon = createAsyncThunk('user/checkLoggon', async () => {
  try {
    const response = await httpService.get(`${USER_URL}/checkLoggon`);
    return response;
  } catch (e) {
    console.log('Error logging in: ', e.message);
    throw new Error(e.message);
  }
});

export const userService = {
  login,
  checkLoggon
};
