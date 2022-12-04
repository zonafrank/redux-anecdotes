import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    displayNotification: (state, action) => {
      return { type: action.payload.type, text: action.payload.text }
    },
    clearNotification: (state) => {
      return null
    }
  }
})

export const { displayNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;