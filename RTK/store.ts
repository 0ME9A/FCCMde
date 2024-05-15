import { configureStore } from "@reduxjs/toolkit";
import mdxfileReducer from "@/RTK/slice/mdxfilesSlice";
import activeTabReducer from "@/RTK/slice/activeTabSlice";

export const store = configureStore({
  reducer: {
    mdxfiles: mdxfileReducer,
    activeTab: activeTabReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
