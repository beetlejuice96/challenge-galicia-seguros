import React, { useContext, createContext } from "react";

export const INITIAL_STATE = {
  name: "",
  password: "",
};

const AuthContext = createContext({
  user: INITIAL_STATE,
  login: (user) => {},
  logout: () => {},
});
export const useAuth = () => useContext(AuthContext);
export default AuthContext;
