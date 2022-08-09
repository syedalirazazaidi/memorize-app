import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import memoryService from "./memoryService";

const initialState = {
  memorys: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get all memorys
export const getPosts = createAsyncThunk(
  "memorys/getAll",
  async (_, thunkAPI) => {
    try {
      //   const token = thunkAPI.getState().auth.user.token;
      return await memoryService.getPosts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Create memorys
export const createPosts = createAsyncThunk(
  "memorys/create",
  async (memoryData, thunkAPI) => {
    console.log(memoryData, "memoryData");
    try {
      // const token = thunkAPI.getState().auth.user.token;
      return await memoryService.createPosts(memoryData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const memorySlice = createSlice({
  name: "memory",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPosts.fulfilled, (state, action) => {
        console.log("PAYLOAD", action.payload);
        state.isLoading = false;
        state.isSuccess = true;
        state.memorys.push(action.payload);
      })
      .addCase(createPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.memorys = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export const { reset } = memorySlice.actions;
export default memorySlice.reducer;
