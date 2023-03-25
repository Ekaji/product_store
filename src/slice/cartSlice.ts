import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  numOfCartItems: number;
  cart: {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
  }[];
}

const initialState: CartState = {
  numOfCartItems: 0,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<typeof initialState.cart[0]>) => {
      state.numOfCartItems = state.cart.length +1; 
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.numOfCartItems = state.cart.length;
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;