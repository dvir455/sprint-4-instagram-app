import { createSlice } from '@reduxjs/toolkit';
import { userService } from '../services/user.service';


const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    status: null,
  },
  reducers: {
  },
  extraReducers: {
  
    [userService.login.pending]: (state, action) => {
      state.loadingStatus = 'loading';
    },
    [userService.login.fulfilled]: (state, action) => {
      state.loadingStatus = 'success';
      // console.log(action.payload);
      state.user = action.payload;
    },
    [userService.login.rejected]: (state, action) => {
      state.loadingStatus = 'failure';
      console.log('Error logging in: ', action.error.message);
    },
  },
});


// export const postsActions = postsSlice.actions;
export default userSlice.reducer;
