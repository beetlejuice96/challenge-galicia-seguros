import { Card, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import weatherBitService from "../../../services/weatherBitService";
import csvHelper from "../../../utils/csvHelper";
import { useInformationCardStyles } from "./styles";
const InformationCard = ({ weather }) => {
  const classes = useInformationCardStyles();
  const [countries, setCountries] = useState(null);
  const [country, setcountry] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      let response = await weatherBitService.getCountries();
      let arrayCountries = csvHelper.csvToArray(response.payload);
      setCountries(arrayCountries);
    };
    getCountries();
  }, []);

  useEffect(() => {
    getCountry();
  }, [weather]);

  const getDay = () => {
    let numeroDia = new Date().getDay();
    let dias = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ];
    return dias[numeroDia];
  };

  const cToF = (celsius) => {
    let fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
  };

  const getCountry = async () => {
    if (weather) {
      let response = await csvHelper.getCountry(
        weather.country_code,
        countries
      );
      setcountry(response.country_name);
    }
  };

  return (
    <Card className={classes.box}>
      <Typography className={classes.subTitleCard}>
        Reporte del clima
      </Typography>
      <Divider variant="middle" className={classes.secondDivider} />
      {!weather ? (
        <Typography className={classes.textLocation}>
          realice una busqueda.
        </Typography>
      ) : (
        <div className={classes.containerAllInfo}>
          <div className={classes.containerInfo}>
            {country !== "" && (
              <Typography className={classes.textLocation}>
                {country}
              </Typography>
            )}
            <Typography className={classes.textLocation}>
              {weather.city_name}
            </Typography>

            <Typography className={classes.textDay}>
              {getDay().toUpperCase()}
            </Typography>
            <Typography className={classes.textState}>
              {weather.weather?.description.toUpperCase()}
            </Typography>
            <div className={classes.containerTemp}>
              <Typography className={classes.textTemp}>
                {weather.temp}
              </Typography>
              <Typography className={classes.textLetter}>°C</Typography>
            </div>
            <Typography className={classes.textState}>
              {cToF(weather.temp).toFixed(2)}°F
            </Typography>
          </div>
          <div>
            <img
              // src={`./icons/${weather.weather?.icon}.png`}
              src={`https://www.weatherbit.io/static/img/icons/${weather.weather?.icon}.png`}
              alt="icon"
              className={classes.img}
            />
            <div className={classes.containerSecondaryInfo}>
              <Typography>
                Prob de precipitaciones:{" "}
                {weather.precip ? `${weather.precip}%` : "-"}
              </Typography>
              <Typography>Humedad: {weather.rh}% </Typography>
              <Typography>
                Viento: {(weather.wind_spd * 3.6).toFixed(2)} km/h
              </Typography>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default InformationCard;
