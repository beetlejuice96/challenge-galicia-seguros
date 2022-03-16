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
        margin: "0 100px 0 100px",
        justifyContent: "center",
      },
    },
    title: {
      fontSize: "2.5rem !important",
      color: "#28272e",
      fontWeight: "600 !important",
    },
    subTitleCard: theme.subTitleCard,
    firstDivider: theme.firstDivider,
    containerBoxes: {
      display: "flex",
      flexDirection: "row",
      width: "100% ",
      justifyContent: "space-between",
    },
    box: theme.box,
    containerInputsCard: theme.containerInputsCard,
    searchButton: {
      width: "100% !important",
      backgroundColor: "#fe675a !important",

      margin: "10px 0 30px 0 !important",
    },
    firstFormControl: theme.firstFormControl,
    input: {
      width: "inherit",
    },
  })
);
