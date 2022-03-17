import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
  box: {
    minWidth: "650px",
    minHeight: "500px",
    margin: "40px 0 0 0 !important",
  },
  containerInputsCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 40px 0 40px ",
  },
  firstDivider: {
    border: "1px solid #fe675a  !important",
    width: "100% !important",
    margin: "0 0 20px 0 !important",
  },
  secondDivider: {
    border: "1px solid #4e5a6f  !important",
    width: "100% !important",
    margin: "0 0 20px 0 !important",
  },
  firstFormControl: {
    margin: "10px 0 10px 0",
    textAlign: "left",
    width: "100% !important",
  },
  subTitleCard: {
    fontSize: "1.5rem !important",
    color: "#4e5a6f",
    fontWeight: "600 !important",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
