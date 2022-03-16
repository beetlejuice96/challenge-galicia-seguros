import { Card, Divider, Typography } from "@mui/material";
import { useInformationCardStyles } from "./styles";
const InformationCard = ({ weather }) => {
  const classes = useInformationCardStyles();

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
            <Typography className={classes.textLocation}>
              {weather.country_code}
            </Typography>
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
                Prob de precipitaciones: {weather.precip}%{" "}
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
