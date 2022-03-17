import React, { Fragment, useState } from "react";
import {
  AppBar,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import CONSTANTS from "../../constants";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

import { Link, useNavigate } from "react-router-dom";
import { useNavBarStyles } from "./style";
import LoginPopover from "../login";
import { useAuth } from "../../providers/authProvider/AuthContext";
import MenuUser from "../menuUser";

const { ROUTES } = CONSTANTS;

const NavBar = () => {
  const classes = useNavBarStyles();
  const [opened, setOpened] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const toggleDrawer = () => {
    setOpened(!opened);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickLoginMobile = () => {
    navigate(ROUTES.LOGINMOBILE);
  };

  const isAuth = () => {
    return user.name !== "" && user.password !== "";
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Fragment>
      <SwipeableDrawer
        anchor="left"
        open={opened}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        className={classes.drawer}
      >
        <Container className={classes.drawerLink}>
          {user.name !== "" && user.password !== "" ? (
            <Typography className={classes.navButton}>
              {user.name.toUpperCase()}
            </Typography>
          ) : (
            <Button
              variant="outlined"
              className={classes.loginButtonDrawer}
              onClick={handleClickLoginMobile}
            >
              INICIAR SESIÓN
            </Button>
          )}

          <Link to={ROUTES.MAIN} className={classes.notUnderLine}>
            <Button variant="text" className={classes.navButton}>
              Home
            </Button>
          </Link>
          {isAuth && (
            <Button variant="text" onClick={logout}>
              CERRAR SESIÓN
            </Button>
          )}
        </Container>
      </SwipeableDrawer>
      <div className={classes.bar}>
        <AppBar className={classes.appBar} color="transparent">
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              className={classes.menuButton}
            >
              <MenuIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <Link to={ROUTES.MAIN} className={classes.notUnderLine}>
              <div className={classes.mainLink}>
                <Typography className={classes.title}>
                  Galicia Seguros
                </Typography>
              </div>
            </Link>
            {user.name !== "" && user.password !== "" ? (
              <MenuUser />
            ) : (
              <Fragment>
                <Button
                  variant="outlined"
                  className={classes.loginButton}
                  endIcon={<PersonIcon />}
                  aria-describedby={id}
                  onClick={handleClick}
                >
                  INICIAR SESIÓN
                </Button>
                <LoginPopover
                  setAnchorEl={setAnchorEl}
                  open={open}
                  handleClose={handleClose}
                  id={id}
                  anchorEl={anchorEl}
                />
              </Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
};

export default NavBar;
