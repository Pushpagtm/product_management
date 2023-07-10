import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loggedInUser: null,
  status: "idle",
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`http://localhost:8000/users`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const checkUserAsync = createAsyncThunk('product/checkUser', async (data, { rejectWithValue }) => {
//   try {
//     const { data } = await axios.get(`http://localhost:8000/users?email=`);
//     return data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// })
// export const checkUserAsync = createAsyncThunk(
//   'user/checkUser',
//   async (loginInfo) => {
//     const response = await checkUser(loginInfo);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );
// export const updateUserAsync = createAsyncThunk(
//   'user/updateUser',
//   async (update) => {
//     const response = await updateUser(update);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );
// export const signOutAsync = createAsyncThunk(
//   'user/signOut',
//   async (loginInfo) => {
//     const response = await signOut(loginInfo);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const authSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = action.payload;
      })
    // .addCase(checkUserAsync.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(checkUserAsync.fulfilled, (state, action) => {
    //   state.status = 'idle';
    //   state.loggedInUser = action.payload;
    // })
    // .addCase(checkUserAsync.rejected, (state, action) => {
    //   state.status = 'idle';
    //   state.error = action.error;
    // })
    // .addCase(updateUserAsync.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(updateUserAsync.fulfilled, (state, action) => {
    //   state.status = 'idle';
    //   state.loggedInUser = action.payload;
    // })
    // .addCase(signOutAsync.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(signOutAsync.fulfilled, (state, action) => {
    //   state.status = 'idle';
    //   state.loggedInUser = null;
    // })
  },
});

export const { increment, decrement, incrementByAmount } = authSlice.actions;

export const selectLoggedInUser = (state) => state.auth.loggedInUser;

export default authSlice.reducer;