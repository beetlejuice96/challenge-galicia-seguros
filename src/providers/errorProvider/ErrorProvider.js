import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import ErrorContext, { INITIAL_STATE } from "./ErrorContext";

const ErrorProvider = (props) => {
  const [stateError, setStateError] = useState(INITIAL_STATE);
  const openToastError = (message) => {
    setStateError({
      ...stateError,
      message: message,
      active: !stateError.active,
    });
  };

  const closeToastError = () => {
    setStateError(INITIAL_STATE);
  };

  const button = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={closeToastError}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  let actions = { state: stateError, openToastError, closeToastError };
  return (
    <ErrorContext.Provider value={{ ...actions }}>
      {props.children}
      <Snackbar
        open={stateError.active}
        autoHideDuration={6000}
        onClose={closeToastError}
        message={stateError.message}
        action={button}
      />
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
