import {
  Typography,
  Divider,
  Card,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useMainStyles } from "./styles";
import weatherBitService from "../../services/weatherBitService";
import SearchCard from "./searchCard";
const Main = () => {
  const classes = useMainStyles();
  const [response, setResponse] = useState(null);
  return (
    <section className={classes.container}>
      <Typography className={classes.title}>SERVICIO DEL CLIMA</Typography>
      <Divider variant="middle" className={classes.firstDivider} />
      <div className={classes.containerBoxes}>
        <SearchCard setResponse={setResponse} />
        <Card className={classes.box}>
          <Typography className={classes.subTitle}>
            Reporte del clima
          </Typography>
          <Divider variant="middle" className={classes.firstDivider} />
        </Card>
      </div>
    </section>
  );
};

export default Main;
