"use client";
import { Provider } from "react-redux";
import { store } from "../store"; // store'un doğru yolunu yaz

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
