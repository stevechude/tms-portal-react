import { Provider } from "react-redux";
import { store } from "../redux/store";
import { ReactNode } from "react";

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}