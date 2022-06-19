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
      state.posts = action.payload;
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
      // state.posts[action.payload.postId].comments.splice(
      //   action.payload.commentIdx,
      //   1
      // );
    },
    [postsService.deleteComment.rejected]: (state, action) => {
      state.status = 'failure';
    },
    [postsService.likePost.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postsService.likePost.fulfilled]: (state, action) => {
      state.status = 'success';
      state.posts[action.payload.postId].likedBy = action.payload.likedBy;
    },
    [postsService.likePost.rejected]: (state, action) => {
      state.status = 'failure';
    },
  },
});

// TODO time

export const postsActions = postsSlice.actions;
export default postsSlice.reducer;
