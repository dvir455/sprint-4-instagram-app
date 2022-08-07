import { httpService } from './http.service';
import { createAsyncThunk } from '@reduxjs/toolkit';
const POSTS_URL = 'http://localhost:3030/api/posts';

const query = createAsyncThunk('posts/query', async (postId) => {
  // const response = await httpService.get(`${POSTS_URL}`);
  const URL = postId? `${POSTS_URL}/${postId}` : `${POSTS_URL}`;
  // console.log(`${POSTS_URL}?${filterBy}`);
  // const response = await httpService.get(POSTS_URL);
  const response = await httpService.get(URL);
  return {response, isPopUp: postId ? true : false};
});



const addComment = createAsyncThunk(
  'posts/addComment',
  async (payload, comment) => {
    try {
      const response = await httpService.post(
        `${POSTS_URL}`,
        payload
      );
      return response;
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
      const response = await httpService.delete(
        `${POSTS_URL}/${payload.postId}/${payload.commentId}`
      );
      return response;
    } catch (e) {
      console.log('Error deleting comment: ', e.message);
      throw new Error(e.message);
    }
  }
);

const likePost = createAsyncThunk(
  'posts/likePost',
  async (payload, comment) => {
    try {
      const response = await httpService.post(
        `${POSTS_URL}/${payload.postId}/like`,
        payload
      );
      return response;
    } catch (e) {
      console.log('Error liking post: ', e.message);
      throw new Error(e.message);
    }
  }
);

const newPost = createAsyncThunk(
  'posts/newPost',
  async (payload, comment) => {
    try {
      const response = await httpService.post(
        `${POSTS_URL}/newPost`,
        payload
      );
      return response;
    } catch (e) {
      console.log('Error adding comment: ', e.message);
      throw new Error(e.message);
    }
  }
);




export const postsService = {
  query,
  addComment,
  deleteComment,
  likePost,
  newPost
};
