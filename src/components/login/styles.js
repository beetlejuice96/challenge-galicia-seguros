import { createStyles, makeStyles } from "@mui/styles";

export const useLoginStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: "250px !important",
      height: "250px !important",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    formControl: {
      margin: "10px 0 10px 0",
    },
    loginButton: {
      width: "85% !important",
      backgroundColor: "#fe675a !important",
    },
  })
);
