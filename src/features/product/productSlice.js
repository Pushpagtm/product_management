import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  status: 'idle',

 
};
// export const fetchAllProductsAsync = createAsyncThunk(
//   'product/fetchAllProducts',
//   async () => {
//     const response = await fetchAllProducts();
   
//     return response.data;
//   }
// );
export const postProductsAsync = createAsyncThunk('product/postProduct', async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`http://localhost:8000/products`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  })
export const fetchAllProductsAsync = createAsyncThunk('product/fetchAllProducts', async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:8000/products`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  })
// export const fetchAllProductByIdAsync = createAsyncThunk(
//   'product/fetchProductId',
//   async (id) => {
//     const response = await fetchProductId(id);
   
//     return response.data;
//   }
// );



export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(postProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      
  },
});

export const selectAllProducts = (state) => state.product.products;
export default productSlice.reducer;