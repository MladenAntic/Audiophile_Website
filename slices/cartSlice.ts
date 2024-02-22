import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

interface CartState {
  cartItems: Array<{
    id: string;
    name: string;
    price: number;
    number: number;
    image: StaticImageData;
  }>;
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        price: number;
        number: number;
        image: StaticImageData;
      }>
    ) => {
      state.cartItems.push(action.payload);
    },
    incrementItemQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.number++;
      }
    },
    decrementItemQuantity: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item && item.number > 0) {
        item.number--;
      }
    },
    removeCartItem(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    removeAllFromCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  incrementItemQuantity,
  decrementItemQuantity,
  removeCartItem,
  removeAllFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
