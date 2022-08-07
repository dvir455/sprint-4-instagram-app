import { createSlice } from '@reduxjs/toolkit';
import { postsService } from '../services/posts.service.js';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: null,
    loadingStatus: null,
  },
  reducers: {},
  extraReducers: {
    [postsService.query.pending]: (state, action) => {
      state.loadingStatus = 'loading';
    },
    [postsService.query.fulfilled]: (state, action) => {
      state.loadingStatus = 'success';
      action.payload.isPopUp ? (state.popUpPost = action.payload.response) : (state.posts = action.payload.response);
      // state.posts = action.payload.response;
    },
    [postsService.query.rejected]: (state, action) => {
      state.loadingStatus = 'failure';
    },

    [postsService.addComment.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postsService.addComment.fulfilled]: (state, action) => {
      state.status = 'success';
      state.posts[action.payload.postId].comments = action.payload.postComments;
    },
    [postsService.addComment.rejected]: (state, action) => {
      state.status = 'failure';
    },
    [postsService.deleteComment.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postsService.deleteComment.fulfilled]: (state, action) => {
      state.status = 'success';
      state.posts[action.payload.postId].comments = action.payload.postComments;
    
    },
    [postsService.deleteComment.rejected]: (state, action) => {
      state.status = 'failure';
    },
    [postsService.likePost.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postsService.likePost.fulfilled]: (state, action) => {
      state.status = 'success';
     const postIdx = state.posts.findIndex((post) => post._id === action.payload.postId)
      state.posts[postIdx].likedBy = action.payload.likedBy;
    },
    [postsService.likePost.rejected]: (state, action) => {
      state.status = 'failure';
    },

    [postsService.newPost.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postsService.newPost.fulfilled]: (state, action) => {
      state.status = 'success';
    },
    [postsService.newPost.rejected]: (state, action) => {
      state.status = 'failure';
    },
  },
});

// TODO time

export const postsActions = postsSlice.actions;
export default postsSlice.reducer;
