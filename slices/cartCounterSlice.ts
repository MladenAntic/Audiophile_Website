import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,
};

export const cartCounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value <= 1 ? (state.value = 1) : (state.value -= 1);
    },
  },
});

export const { increment, decrement } = cartCounterSlice.actions;

export default cartCounterSlice.reducer;
