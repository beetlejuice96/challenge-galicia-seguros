import React from "react";
import { Popover } from "@mui/material";

const LoginPopover = ({ id, open, anchorEl, handleClose }) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      The content of the Popover.
    </Popover>
  );
};

export default LoginPopover;
