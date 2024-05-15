import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string = "";

export const activeTabSlice = createSlice({
  name: "activeTab",
  initialState,
  reducers: {
    focusTab: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { focusTab } = activeTabSlice.actions;
export default activeTabSlice.reducer;
