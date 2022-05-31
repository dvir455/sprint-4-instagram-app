import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const POSTS_URL = 'http://127.0.0.1:3030/api/posts';

const query = createAsyncThunk('posts/query', async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
});

export const postsService = {
  query,
};


