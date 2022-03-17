import { Button, Menu, MenuItem } from "@mui/material";
import React, { Fragment } from "react";
import { useAuth } from "../../providers/authProvider/AuthContext";
import { useMenuStyles } from "./styles";
const MenuUser = () => {
  const classes = useMenuStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user, logout } = useAuth();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={classes.loginButton}
      >
        {user.name}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
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
        <MenuItem
          onClick={() => {
            logout();
            handleClose();
          }}
        >
          CERRAR SESIÓN
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default MenuUser;
