import React, { useState } from "react";
import { InputLabel, Button, TextField } from "@mui/material";
import { useLoginStyles } from "../styles";
import { useAuth } from "../../../providers/authProvider/AuthContext";
import { useNavigate } from "react-router-dom";
import constants from "../../../constants";
const { ROUTES } = constants;

const LoginMobileComponent = () => {
  const classes = useLoginStyles();
  const [user, setUser] = useState({ name: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChangeUserName = (params) => {
    setUser({ ...user, name: params.target.value });
  };

  const handleChangePassword = (params) => {
    setUser({ ...user, password: params.target.value });
  };

  const handleClick = () => {
    login(user);
    navigate(ROUTES.MAIN);
  };

  return (
    <div className={classes.container}>
      <div className={classes.formControl}>
        <InputLabel>Usuario</InputLabel>
        <TextField
          name="textmask"
          id="user"
          size="small"
          onChange={handleChangeUserName}
        />
      </div>
      <div className={classes.formControl}>
        <InputLabel htmlFor="password">Contraseña</InputLabel>
        <TextField
          name="textmask"
          id="password"
          size="small"
          type={"password"}
          onChange={handleChangePassword}
        />
      </div>
      <Button
        variant="contained"
        className={classes.loginButton}
        onClick={handleClick}
        disabled={user.name === "" || user.password === ""}
      >
        INICIAR SESIÓN
      </Button>
    </div>
  );
};
export default LoginMobileComponent;
