import { createStyles, makeStyles } from "@mui/styles";
export const useSearchCardStyles = makeStyles((theme) =>
  createStyles({
    box: theme.box,
    containerInputsCard: theme.containerInputsCard,
    subTitleCard: theme.subTitleCard,
    firstDivider: theme.firstDivider,
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
