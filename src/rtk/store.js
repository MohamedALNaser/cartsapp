import { configureStore } from "@reduxjs/toolkit";

import ProductsReducer from "./slice/Products-slice";
import cartSliceReducer from "./slice/cart-slice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    carts: cartSliceReducer,
  },
});
