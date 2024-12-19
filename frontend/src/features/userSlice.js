import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.status = 'loading';
    },
    loginSuccess: (state, action) => {
      state.status = 'success';
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.status = 'idle';
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;
