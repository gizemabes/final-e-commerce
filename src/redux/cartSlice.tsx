import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  products: Product[];
  quantity: number;
  total: number;
}

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  } as CartState,
  reducers: {
  
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      state.quantity += action.payload.quantity;
      state.total += action.payload.price;
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
      state.quantity -= action.payload.quantity;
      state.total -= action.payload.price;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
