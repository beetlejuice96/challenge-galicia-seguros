import { createStyles, makeStyles } from "@mui/styles";
export const useInformationCardStyles = makeStyles((theme) =>
  createStyles({
    box: {
      ...theme.box,
      [theme.breakpoints.only("lg")]: {
        minWidth: "550px",
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
        minWidth: "100%",
      },
    },
    containerInfo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    subTitleCard: theme.subTitleCard,
    secondDivider: theme.secondDivider,
    firstFormControl: theme.firstFormControl,
    containerTextLocation: {
      width: "100% !important",
      display: "flex",
      flexDirection: "column",
    },
    textLocation: {
      color: "grey",
      fontWeight: "500 !important",
    },
    textDay: {
      fontSize: "4em !important;",
      // lineHeight: "2rem !important",
    },
    textState: {
      fontSize: "1.5em !important",
      lineHeight: "0 !important",
    },
    textTemp: {
      fontSize: "6rem !important",
      fontWeight: "600 !important",
    },
    textLetter: {
      alignSelf: "flex-start",
      marginTop: "15px !important",
      fontSize: "30px !important",
      fontWeight: "600 !important",
    },
    containerTemp: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    containerDayState: {
      width: "100% ",
      display: "flex",
      flexDirection: "column",
      marginTop: "15px !important",
    },
    containerAllInfo: {
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        flexDirection: "column",
      },
      padding: "0 40px 0 40px ",
    },
    img: {
      height: "210px",
    },
    containerSecondaryInfo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
    },
  })
);
