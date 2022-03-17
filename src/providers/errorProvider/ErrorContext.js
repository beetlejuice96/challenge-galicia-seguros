import React, { useContext, createContext } from "react";

export const INITIAL_STATE = {
  active: false,
  message: null,
};

const ErrorContext = createContext({
  state: INITIAL_STATE,
  openToastError: () => {},
  closeToastError: () => {},
});
export const useError = () => useContext(ErrorContext);
export default ErrorContext;
