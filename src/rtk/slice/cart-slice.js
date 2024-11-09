import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const FindProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (FindProduct) {
        // alert(`Product quantity is ${FindProduct.quantity}`);
        FindProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },

    removeCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    restCarts: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, removeCart, restCarts } = cartSlice.actions;
export default cartSlice.reducer;
