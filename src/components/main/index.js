import { Typography, Divider, Box } from "@mui/material";
import React, { useState } from "react";
import { useMainStyles } from "./styles";
import SearchCard from "./searchCard";
import InformationCard from "./informationCard";
const Main = () => {
  const classes = useMainStyles();
  const [response, setResponse] = useState(null);

  return (
    <section>
      <Typography className={classes.title}>SERVICIO DEL CLIMA</Typography>
      <Divider variant="middle" className={classes.firstDivider} />
      <Box className={classes.containerBoxes}>
        <SearchCard setResponse={setResponse} />
        <InformationCard
          weather={response !== null && response.payload.data[0]}
        />
      </Box>
    </section>
  );
};

export default Main;
