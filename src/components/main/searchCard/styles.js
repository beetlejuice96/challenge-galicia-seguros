import { createStyles, makeStyles } from "@mui/styles";
export const useSearchCardStyles = makeStyles((theme) =>
  createStyles({
    box: {
      ...theme.box,
      [theme.breakpoints.down("lg")]: {
        // maxWidth: "800px",
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        minWidth: "100%",
      },
    },
    containerInputsCard: theme.containerInputsCard,
    subTitleCard: theme.subTitleCard,
    secondDivider: theme.secondDivider,
    firstFormControl: theme.firstFormControl,
    input: {
      width: "inherit",
    },
    searchButton: {
      width: "100% !important",
      backgroundColor: "#fe675a !important",

      margin: "10px 0 30px 0 !important",
    },
  })
);
