import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    updateFilterValue(state, action) {
      return action.payload;
    }
  }
})

export const { updateFilterValue } = filterSlice.actions;
export default filterSlice.reducer;