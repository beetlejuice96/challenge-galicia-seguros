import React, { Fragment, useState } from "react";
import {
  AppBar,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Typography,
  Button,
  Popover,
} from "@mui/material";
import CONSTANTS from "../../constants";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

import { Link } from "react-router-dom";
import { useNavBarStyles } from "./style";
import LoginPopover from "../login";

const { ROUTES } = CONSTANTS;

const NavBar = () => {
  const classes = useNavBarStyles();
  const [opened, setOpened] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDrawer = () => {
    setOpened(!opened);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <div className={classes.drawerLink}>
          <Link to={ROUTES.MAIN} className={classes.notUnderLine}>
            <Typography className={classes.navButton}>Home</Typography>
          </Link>
        </div>
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
              open={open}
              handleClose={handleClose}
              id={id}
              anchorEl={anchorEl}
            />
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
};

export default NavBar;
