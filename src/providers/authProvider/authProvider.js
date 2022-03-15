import { useState } from "react";
import AuthContext, { INITIAL_STATE } from "./AuthContext";

const AuthProvider = (props) => {
  const [auth, setAuth] = useState(INITIAL_STATE);
  const login = (user) => {
    setAuth(user);
  };
  const logout = () => {
    setAuth(INITIAL_STATE);
  };

  const actions = { user: auth, login, logout };
  return (
    <AuthContext.Provider value={{ ...actions }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
