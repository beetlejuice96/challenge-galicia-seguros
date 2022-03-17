import React, { useState } from "react";

import {
  Button,
  Card,
  Divider,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import weatherBitService from "../../../services/weatherBitService";
import { useSearchCardStyles } from "./styles";
import { useError } from "../../../providers/errorProvider/ErrorContext";
const SearchCard = ({ setResponse }) => {
  const classes = useSearchCardStyles();
  const [request, setRequest] = useState({ city: "", country: "" });
  const { openToastError } = useError();

  const handleChangeCity = (params) => {
    setRequest({ ...request, city: params.target.value });
  };

  const handleChangeCountry = (params) => {
    setRequest({ ...request, country: params.target.value });
  };

  const handleClick = async () => {
    let response = await weatherBitService.getCurrentWeather(request);
    if (response.success) {
      setResponse(response);
    } else {
      openToastError("ups! hubo un error al realizar la consulta!");
      setResponse(null);
    }
  };
  return (
    <Card className={classes.box}>
      <Typography className={classes.subTitleCard}>
        Selecciona la zona
      </Typography>
      <Divider variant="middle" className={classes.secondDivider} />
      <div className={classes.containerInputsCard}>
        <div className={classes.firstFormControl}>
          <InputLabel>Ciudad</InputLabel>
          <TextField
            name="textmask"
            id="Ciudad"
            size="small"
            className={classes.input}
            onChange={handleChangeCity}
          />
        </div>
        <div className={classes.firstFormControl}>
          <InputLabel htmlFor="Pais">Pais</InputLabel>
          <TextField
            name="textmask"
            id="password"
            size="small"
            type={"Pais"}
            className={classes.input}
            onChange={handleChangeCountry}
          />
        </div>
        <Button
          variant="contained"
          className={classes.searchButton}
          disabled={request.city === "" || request.country === ""}
          onClick={handleClick}
        >
          BUSCAR
        </Button>
      </div>
    </Card>
  );
};

export default SearchCard;
