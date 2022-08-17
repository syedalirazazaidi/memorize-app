import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  CREATE,
  DELETE,
  FETCH_ALL,
  LIKED,
  UPDATE,
} from "../../constants/actionTypes";

import memoryService from "./memoryService";

const initialState = {
  memorys: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
// const getToken = () => {
//   if (localStorage.getItem("user")) {
//     return JSON.parse(localStorage.getItem("user"));
//   }
// };
// const newTokn = getToken().token;

// Get all memorys
export const getPosts = createAsyncThunk(FETCH_ALL, async (_, thunkAPI) => {
  try {
    //   const token = thunkAPI.getState().auth.user.token;
    const datalla = await memoryService.getPosts();

    return datalla;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Create memorys
export const createPosts = createAsyncThunk(
  CREATE,
  async (memoryData, thunkAPI) => {
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

// Update memory

export const updatePost = createAsyncThunk(
  UPDATE,
  async (currentId, postData, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      return await memoryService.updatePosted(postData, currentId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const likePost = createAsyncThunk(LIKED, async (currentId, thunkAPI) => {
  try {
    // const token = thunkAPI.getState().auth.user.token;
    return await memoryService.likedPosted(currentId);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(error);
    return thunkAPI.rejectWithValue(message);
  }
});

export const deletePost = createAsyncThunk(DELETE, async (Id, thunkAPI) => {
  try {
    // const token = thunkAPI.getState().auth.user.token;
    return await memoryService.deletePosted(Id);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(error);
    return thunkAPI.rejectWithValue(message);
  }
});

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
      })
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.memorys = state.memorys.map((memory) =>
          memory._id === payload._id ? payload : memory
        );
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.memorys = state.memorys.filter(
          (memory) => memory._id !== payload._id
        );
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(likePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(likePost.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.memorys = state.memorys.map((memory) =>
          memory._id === payload._id ? payload : memory
        );
      })
      .addCase(likePost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export const { reset } = memorySlice.actions;
export default memorySlice.reducer;
