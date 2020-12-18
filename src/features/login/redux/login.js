import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loadign: false,
  hasError: false,
  user: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getUser: (state) => {
      state.loadign = true;
    },
    loginSuccess: (state, { payload }) => {
      state.user = payload;
      state.loadign = false;
    },
    loginFailure: (state) => {
      state.loadign = false;
      state.hasError = true;
    },
  },
});

export default loginSlice.reducer;

// A selector
export const loginSelector = (state) => state.user;
