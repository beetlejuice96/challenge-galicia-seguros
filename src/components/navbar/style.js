import { createStyles, makeStyles } from "@mui/styles";

export const useNavBarStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    drawerLink: {
      alignItems: "center",
      display: "flex !important",
      flexDirection: "column",
      justifyContent: "center",
      margin: "10px 10px 10px 10px ",
    },
    notUnderLine: {
      textDecoration: "none !important",
    },
    navButton: {
      margin: "10px 5px !important",
      textDecoration: " none !important",
      textAlign: "center",
      [theme.breakpoints.up("sm")]: {
        margin: "0 10px !important",
        fontSize: "1.4rem!important",
        fontWeight: "100!important",
        textTransform: "capitalize",
        color: "black",
      },
    },
    bar: {
      height: "7vh",
      width: "100%",
      zIndex: "100",
      position: "fixed",
    },
    toolbar: {
      padding: "0 50px 0 50px !important",
      justifyContent: "space-between",
    },
    appBar: {
      backgroundColor: "#fe675a !important",
    },
    menuButton: {
      color: "white !important",

      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    mainLink: {
      alignItems: "center",
      display: "flex",
      textDecoration: "none !important",
    },
    title: {
      fontSize: "1.5rem !important",
      color: "white",
      fontWeight: "600 !important",
    },
    navLinks: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        flexDirection: "row",
      },
    },
    loginButton: {
      display: "none !important",
      [theme.breakpoints.up("sm")]: {
        display: "flex !important",
        border: "1px solid white !important",
        color: "white !important",
      },
    },
    loginButtonDrawer: {
      border: "1px solid white !important",
      color: "white !important",
      backgroundColor: "#fe675a !important",
    },
  })
);
