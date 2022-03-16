import { createStyles, makeStyles } from "@mui/styles";

export const useFooterStyles = makeStyles((theme) =>
  createStyles({
    container: {
      flexDirection: "row",
      backgroundColor: "#131313",
      position: "fixed",
      bottom: "0",
      width: "100%",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        alignItems: "center",
        height: "7.5vh",
        padding: "0 50px 0 50px",
        justifyContent: "space-between",
        flexDirection: "row",
      },
    },
    firstTextFooter: {
      color: "#4c4c4c !important",
      lineHeight: "55px !important",
    },
    secondTextFooter: {
      color: "white",
      lineHeight: "55px !important",
    },
  })
);
