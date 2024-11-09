import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", //prefix type
  async () => {
    const res = await fetch("/.netlify/functions/db/products");
    const data = await res.json();
    console.log(data);
    return data; // after the builder if fullfiled , the data will be pass as action payload
  } // action payload will be pass to the reducer function
); // this will be pass to the reducer function using dispatch(fetchProducts())
const initialState = [{}];
const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    // getProducts: (state, action) => {
    //   //   return state;
    // },
  },
  //inside the extraReducers we can add the Reducer of the async function inside builder
  extraReducers: (builder) => {
    // builder.addCase(fetchProducts.rejected, (state, action) => {
    //   return state;
    // }); // this will run after the builder is rejected (if the promise is rejected)
    // builder.addCase(fetchProducts.pending, (state, action) => {
    //   state.push("loading");
    // }); // this will run after the builder is pending (if the promise is pending)
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // console.log(action);
      return action.payload; // this make a reassign on the intialcase
    }); // this will run after the builder is fullfiled (if the promise is fullfiled)
  }, // this will be pass to the reducer function using dispatch(fetchProducts())
});

export const { addProduct, getProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
