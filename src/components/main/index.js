import { Typography, Divider, Card } from "@mui/material";
import React, { Fragment } from "react";
import { useMainStyles } from "./styles";

const Main = () => {
  const classes = useMainStyles();

  return (
    <section className={classes.container}>
      <Typography className={classes.title}>SERVICIO DEL CLIMA</Typography>
      <Divider variant="middle" className={classes.divider} />
      <div className={classes.containerBoxes}>
        <Card className={classes.box}>
          <Typography className={classes.subTitle}>
            Selecciona la zona
          </Typography>
          <Divider variant="middle" className={classes.divider} />
        </Card>
        <Card className={classes.box}>
          <Typography className={classes.subTitle}>
            Reporte del clima
          </Typography>
          <Divider variant="middle" className={classes.divider} />
        </Card>
      </div>
    </section>
  );
};

export default Main;
