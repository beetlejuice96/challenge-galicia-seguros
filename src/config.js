const envError = (varName) => {
  throw new Error(`Environment variable ${varName} is not defined.`);
};
const CONFIG = {
  /**
   * Services the app uses.
   */
  SERVICES: {
    WEATHERBIT: {
      URL: "https://api.weatherbit.io/v2.0",
      API_KEY: "11690a6178ab48cb858bec3c95026967",
    },
  },
};

export default CONFIG;
