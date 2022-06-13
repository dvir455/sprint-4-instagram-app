// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpService } from './http.service';
const USER_URL = 'http://127.0.0.1:3030/api/user';

const login = createAsyncThunk('user/login', async (payload) => {
  try {
    const response = await httpService.post(`${USER_URL}/login`, payload);
    return response.data;
  } catch (e) {
    console.log('Error logging in: ', e.message);
    throw new Error(e.message);
  }
});

export const userService = {
  login,
};
