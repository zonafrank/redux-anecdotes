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

export const setNotification = (message, visibilityTime = 4) => {
  return async (dispatch) => {
    dispatch(displayNotification(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, visibilityTime * 1000)
  }
}

export default notificationSlice.reducer;