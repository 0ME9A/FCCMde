"use client";
import { Provider } from "react-redux";
import { store } from "@/RTK/store";

function ChildLayout({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ChildLayout;
