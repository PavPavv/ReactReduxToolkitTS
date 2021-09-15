import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Notification = {
  status: 'pending' | 'error' | 'success';
  title: string;
  message: string;
};

export interface UIState {
  cartIsVisible: boolean;
  notification: null | Notification;
};

const initialState: UIState = {
  cartIsVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',

  initialState,

  reducers: {
    toggle(state: UIState) {
      state.cartIsVisible = !state.cartIsVisible;
    },

    showNotification(state: UIState, action: PayloadAction<Notification>) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;