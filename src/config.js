const CONFIG = {
  /**
   * Services the app uses.
   */
  SERVICES: {
    WEATHERBIT: {
      URL: process.env.REACT_APP_URL_WEATHER_API,
      API_KEY: process.env.REACT_APP_API_KEY,
    },
  },
};

export default CONFIG;
