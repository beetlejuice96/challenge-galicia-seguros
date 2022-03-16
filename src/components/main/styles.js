import { createStyles, makeStyles } from "@mui/styles";
// import { styled, Theme } from "@mui/system";

export const useMainStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontSize: "2.5rem !important",
      color: "#28272e",
      fontWeight: "600 !important",
    },
    firstDivider: theme.firstDivider,
    containerBoxes: {
      display: "flex !important",
      flexDirection: "row",
      justifyContent: "space-between",

      [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        alignItems: "center",
      },
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
