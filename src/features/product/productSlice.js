import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  status: 'idle',
};
export const postProductsAsync=createAsyncThunk('product/postProduct',async(data,{rejectWithValue})=>{
  try{
    let formData = new FormData();
        formData.append('title',data.title);
        formData.append('price',data.price);
        formData.append('description',data.description);
        formData.append('image',data.image[0]);
        const config = {     
          headers: { 'content-type': 'multipart/form-data' }
          
      }
      const response = await axios.post('http://localhost:8000/products', formData,config);

  }catch (error) {
                 return rejectWithValue(error.message);}
})


export const deleteProductAsync=createAsyncThunk('product/delete/',async(id,{rejectWithValue})=>{
  try{
    console.log(id,"==================================================api id")
     const apiId=await axios.delete(`http://localhost:8000/product/${id}`);
    return apiId.data;
  }catch (error) {
                 return rejectWithValue(error.message);}
})







export const fetchAllProductsAsync = createAsyncThunk('product/fetchAllProducts', async (data, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:8000/`);
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
      .addCase(deleteProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.products.findIndex(
          (product) => product.id === parseInt(action.payload.data)
        );
        state.products.splice(index, 1);
      })
      
  },
});

export const selectAllProducts = (state) => state.product.products;
export default productSlice.reducer;