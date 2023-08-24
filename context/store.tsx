import { createContext, SetStateAction, Dispatch } from "react";

type initialType = {
  startEdit: boolean;
  setStartEdit: Dispatch<SetStateAction<boolean>>;
};

const initial: initialType = {
  startEdit: false,
  setStartEdit: () => null,
};

const theContext = createContext<{
  startEdit: any;
  setStartEdit: any;
}>(initial);

export default theContext;
