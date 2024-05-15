import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import randomId from "@/utils/randomId";

type t_mdxfile = {
  id: string;
  index: number;
  title: string;
  content: string;
};

const initialState: t_mdxfile[] = [
  { id: randomId(6), index: 0, title: "new file", content: `` },
];

export const mdxfilesSlice = createSlice({
  name: "mdxfiles",
  initialState,
  reducers: {
    createFile: (state, action: PayloadAction<t_mdxfile>) => {
      state.push(action.payload);
    },
    deleteFile: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editFile: (state, action: PayloadAction<t_mdxfile>) => {
      const index = state.findIndex((file) => file.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { createFile, deleteFile, editFile } = mdxfilesSlice.actions;

export default mdxfilesSlice.reducer;
