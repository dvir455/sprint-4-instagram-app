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

const signup = createAsyncThunk('user/signup', async (payload) => {
  try {
    const response = await httpService.post(`${USER_URL}/signup`, payload, {
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

const logout = createAsyncThunk('user/logout', async () => {
  try {
    const response = await httpService.get(`${USER_URL}/logout`);
    return response;
  } catch (e) {
    console.log('Error logging out: ', e.message);
    throw new Error(e.message);
  }
});

const query = createAsyncThunk('user/query', async ({userName,searchValue}) => {
  const URL = userName?`${USER_URL}/query/?username=${userName}`:`${USER_URL}/query/?searchValue=${searchValue}`;
  try {
    // const response = await httpService.get(`${USER_URL}/query/?username=${userName}`);
    const response = await httpService.get(URL);
    return response
  } catch (e) {
    throw new Error(e.message);
  }
});

export const userService = {
  login,
  checkLoggon,
  logout,
  signup,
  query,
};
