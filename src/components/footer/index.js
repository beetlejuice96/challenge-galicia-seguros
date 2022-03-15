import React, { Fragment } from "react";
import { useFooterStyles } from "./styles";
import { Typography } from "@mui/material";

const Footer = () => {
  const classes = useFooterStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.firstTextFooter}>
        Copyright 2022 All rights Reserved |
      </Typography>
      <Typography className={classes.secondTextFooter}>
        Squad Arquitectura Empresarial
      </Typography>
    </div>
  );
};

export default Footer;
