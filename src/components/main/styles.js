import { createStyles, makeStyles } from "@mui/styles";
// import { styled, Theme } from "@mui/system";

export const useMainStyles = makeStyles((theme) =>
  createStyles({
    container: {
      flexDirection: "column",
      [theme.breakpoints.up("md")]: {
        height: "86.5vh",
        display: "flex",
        alignItems: "center",
        margin: "0 50px 0 50px",
        justifyContent: "center",
      },
    },
    title: {
      fontSize: "2.5rem !important",
      color: "#28272e",
      fontWeight: "600 !important",
    },
    subTitle: {
      fontSize: "1.5rem !important",
      color: "#4e5a6f",
      fontWeight: "600 !important",
    },
    divider: {
      border: "1px solid #fe675a  !important",
      width: "100% !important",
      margin: "0 0 0 0 !important",
    },
    containerBoxes: {
      display: "flex",
      flexDirection: "row",
      width: "100% ",
      justifyContent: "space-between",
    },
    box: {
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   justifyContent: "center",
      width: "49%",
      margin: "40px 0 0 0 !important",
    },
  })
);
