import { createSlice } from '@reduxjs/toolkit';
import { postsService } from '../services/posts.service.js';
import { Posts } from '../data/posts.js';

const initialPostsState = { posts: Posts };

const findPostIdx = (posts, postId) => {
  return posts.findIndex((currPost) => currPost._id === postId);
};

// const initialState = {
//   posts: [],
//   status: 'idle',
//   error: null,
// };

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: null,
  },
  reducers: {
    addComment(state, action) {
      const postIdx = findPostIdx(state.posts.posts, action.payload.postId);
      state.posts[postIdx].comments.push(action.payload.comment);
    },

    //TODO LET USER ONLY REMOVE HIS COMMENTS
    removeComment(state, action) {
      const postIdx = findPostIdx(state.posts, action.payload.postId);
      const commentIdx = state.posts[postIdx].comments.findIndex(
        (currComment) => currComment.id === action.payload.commentId
      );
      state.posts[postIdx].comments.splice(commentIdx, 1);
    },

    //TODO CHECK IF USE ALREADY LIKES THE PHOTO AND ADD INDICATION
    addLike(state, action) {
      const postIdx = findPostIdx(state.posts, action.payload.postId);
      const isLiked = state.posts[postIdx].likedBy.find(
        //TODO CHANGE TO ===
        (like) => like._id == action.payload.likeInfo._id
      );
      if (isLiked != undefined) {
        const likeIdx = state.posts[postIdx].likedBy.findIndex(
          //TODO CHANGE TO ===
          (like) => like._id == action.payload.likeInfo._id
        );
        state.posts[postIdx].likedBy.splice(likeIdx, 1);
      } else {
        state.posts[postIdx].likedBy.push(action.payload.likeInfo);
      }
    },
  },
  extraReducers: {
    [postsService.query.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postsService.query.fulfilled]: (state, action) => {
      state.status = 'success';
      state.posts = action.payload;
    },
    [postsService.query.rejected]: (state, action) => {
      state.status = 'failure';
    },
  },
});

// TODO time

export const postsActions = postsSlice.actions;
export default postsSlice.reducer;
