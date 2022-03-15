import { createStyles, makeStyles } from "@mui/styles";

export const useMenuStyles = makeStyles((theme) =>
  createStyles({
    loginButton: {
      display: "none !important",
      [theme.breakpoints.up("sm")]: {
        display: "flex !important",
        border: "1px solid white !important",
        color: "white !important",
      },
    },
  })
);
