import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // 로그인 상태
  isLoggedIn: false,
  // 로그인한 사용자 정보
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = Selection.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
