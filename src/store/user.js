import { createSlice } from '@reduxjs/toolkit';
import { userService } from '../services/user.service';
import { useHistory } from 'react-router-dom';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    status: null,
  },
  reducers: {},
  extraReducers: {
    [userService.login.pending]: (state, action) => {
      state.loadingStatus = 'loading';
    },
    [userService.login.fulfilled]: (state, action) => {
      state.loadingStatus = 'success';
      state.user = action.payload;
      sessionStorage.setItem('user', JSON.stringify(action.payload));
    },
    [userService.login.rejected]: (state, action) => {
      state.loadingStatus = 'failure';
      console.log('Error logging in: ', action.error.message);
    },

    [userService.signup.pending]: (state, action) => {
      state.loadingStatus = 'loading';
    },
    [userService.signup.fulfilled]: (state, action) => {
      state.loadingStatus = 'success';
    },
    [userService.signup.rejected]: (state, action) => {
      state.loadingStatus = 'failure';
      throw new Error(action.error.message);
    },

    [userService.checkLoggon.pending]: (state, action) => {
      state.loadingStatus = 'loading';
    },
    [userService.checkLoggon.fulfilled]: (state, action) => {
      state.loadingStatus = 'success';
      state.user = action.payload;
    },
    [userService.checkLoggon.rejected]: (state, action) => {
      state.loadingStatus = 'failure';
      // console.log('Error logging in: ', action.error.message);
    },

    [userService.logout.pending]: (state, action) => {
      state.loadingStatus = 'loading';
    },
    [userService.logout.fulfilled]: (state, action) => {
      state.loadingStatus = 'success';
      state.user = null;
    },
    [userService.logout.rejected]: (state, action) => {
      state.loadingStatus = 'failure';
      // console.log('Error logging in: ', action.error.message);
    },
  },
});

// export const postsActions = postsSlice.actions;
export default userSlice.reducer;
