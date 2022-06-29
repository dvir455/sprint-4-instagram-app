import { createSlice } from '@reduxjs/toolkit';
import { userService } from '../services/user.service';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    status: null,
    loadingStatus: null,
  },
  reducers: {},
  extraReducers: {
    [userService.login.pending]: (state, action) => {
      state.status = 'loading';
    },
    [userService.login.fulfilled]: (state, action) => {
      state.status = 'success';
      state.user = action.payload;
      sessionStorage.setItem('user', JSON.stringify(action.payload));
    },
    [userService.login.rejected]: (state, action) => {
      state.status = 'failure';
      console.log('Error logging in: ', action.error.message);
    },

    [userService.signup.pending]: (state, action) => {
      state.status = 'loading';
    },
    [userService.signup.fulfilled]: (state, action) => {
      state.status = 'success';
    },
    [userService.signup.rejected]: (state, action) => {
      state.status = 'failure';
      throw new Error(action.error.message);
    },

    [userService.checkLoggon.pending]: (state, action) => {
      state.status = 'loading';
    },
    [userService.checkLoggon.fulfilled]: (state, action) => {
      state.status = 'success';
      state.user = action.payload;
      if (!sessionStorage.getItem('user'))
        sessionStorage.setItem('user', JSON.stringify(action.payload));
    },
    [userService.checkLoggon.rejected]: (state, action) => {
      state.status = 'failure';
      // console.log('Error logging in: ', action.error.message);
    },

    [userService.logout.pending]: (state, action) => {
      state.status = 'loading';
    },
    [userService.logout.fulfilled]: (state, action) => {
      state.status = 'success';
      state.user = null;
    },
    [userService.logout.rejected]: (state, action) => {
      state.status = 'failure';
      // console.log('Error logging in: ', action.error.message);
    },

    [userService.query.pending]: (state, action) => {
      state.loadingStatus = 'loading';
    },
    [userService.query.fulfilled]: (state, action) => {
      state.loadingStatus = 'success';
    },
    [userService.query.rejected]: (state, action) => {
      state.loadingStatus = 'failure';
    },
  },
});

// export const postsActions = postsSlice.actions;
export default userSlice.reducer;
