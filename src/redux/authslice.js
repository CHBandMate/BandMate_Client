import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
// 비동기 토큰 요청 액션
export const fetchToken = createAsyncThunk(
  "auth/fetchToken",
  async ({ authTempCode, identifier }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/token", {
        authTempCode,
        identifier,
      });
      const jwtToken = response.headers.get("authorization");
      localStorage.setItem("token", jwtToken);
      return jwtToken;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data || "토큰 요청 실패");
    }
  }
);

// 초기 상태 정의
const initialState = {
  token: localStorage.getItem("token") || null,
  error: null,
};

// 슬라이스 정의
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removetItem("token");
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.token = action.payload;
        state.error = null;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
