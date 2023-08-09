import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], amount: 0, changed: false },
  reducers: {
    replaceCart(state, action) {
      state.amount = action.payload.amount;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.total = existingItem.price * existingItem.quantity;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: newItem.quantity,
          total: newItem.price,
        });
      }

      state.amount++;
    },
    reduceItem(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      state.changed = true;

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.total = existingItem.price * existingItem.quantity;
      } else {
        state.items = state.items.filter((item) => item.id !== itemId);
      }
      state.amount--;
    },
    increaseItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      state.changed = true;

      item.quantity++;
      item.total = item.price * item.quantity;
      state.amount++;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
