import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: number;
  price: number;
  title: string;
  description: string;
};

export type Item = {
  id: number;
  price: number;
  quantity: number;
  totalPrice: number;
  name: string;
};

export interface CartState {
  items: Item[],
  totalQuantity: number;
  totalAmount: number;
  changed: boolean;
};

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    replaceCart(state: CartState, action: PayloadAction<CartState>) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addItemToCart(state: CartState, action: PayloadAction<Product>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item: Item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },

    removeItemFromCart(state: CartState, action: PayloadAction<number>){
      const id = action.payload;
      const existingItem = state.items.find((item: Item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;

      if (existingItem) {
        if (existingItem?.quantity === 1) {
          state.items = state.items.filter((item: Item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;