import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const POSTS_URL = 'http://127.0.0.1:3030/api/posts';

const query = createAsyncThunk('posts/query', async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
});

const addComment = createAsyncThunk(
  'posts/addComment',
  async (payload, comment) => {
    try {
      const response = await axios.post(
        `${POSTS_URL}/${payload.postId}`,
        payload.comment
      );
      return response.data;
    } catch (e) {
      console.log('Error adding comment: ', e.message);
      throw new Error(e.message);
    }
  }
);

const deleteComment = createAsyncThunk(
  'posts/deleteComment',
  async (payload, comment) => {
    try {
      const response = await axios.delete(
        `${POSTS_URL}/${payload.postId}/${payload.commentId}`
      );
      return response.data;
    } catch (e) {
      console.log('Error deleting comment: ', e.message);
      throw new Error(e.message);
    }
  }
);

const likePost = createAsyncThunk(
  'posts/likePost',
  async (payload, comment) => {
    console.log('payload', payload);
    try {
      const response = await axios.post(
        `${POSTS_URL}/${payload.postId}/like`,
        payload
      );
      // console.log(response.data);
      return response.data;
    } catch (e) {
      console.log('Error liking post: ', e.message);
      throw new Error(e.message);
    }
  }
);

export const postsService = {
  query,
  addComment,
  deleteComment,
  likePost,
};
