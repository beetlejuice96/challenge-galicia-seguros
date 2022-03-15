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
        justifyContent: "space-between",
        flexDirection: "row",
      },
    },
  })
);
