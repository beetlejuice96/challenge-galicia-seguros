import React, { useEffect, useState } from "react";
import { Popover, InputLabel, Button, TextField } from "@mui/material";
import { useLoginStyles } from "./styles";
import { useAuth } from "../../providers/authProvider/AuthContext";

const LoginPopover = ({ id, open, anchorEl, handleClose, setAnchorEl }) => {
  const classes = useLoginStyles();
  const [user, setUser] = useState({ name: "", password: "" });
  const { login } = useAuth();

  const handleChangeUserName = (params) => {
    setUser({ ...user, name: params.target.value });
  };

  const handleChangePassword = (params) => {
    setUser({ ...user, password: params.target.value });
  };

  const handleClick = () => {
    setAnchorEl(null);
    login(user);
  };

  const isDisabled = () => {
    return user.name === "" && user.password === "";
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
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
    </Popover>
  );
};

export default LoginPopover;
