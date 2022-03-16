import axiosHelper from "../utils/axiosHelper";
import CONFIG from "../config";

import { APIClient } from "./commonService";
class WeatherBitService {
  async getCurrentWeather({ city, country }) {
    const url = `/current`;
    let response;
    let result;
    try {
      response = await APIClient.get(url, {
        params: {
          city: city,
          country: country,
          key: CONFIG.SERVICES.WEATHERBIT.API_KEY,
        },
      });
      result = axiosHelper.handleResponse(response);
    } catch (error) {
      result = axiosHelper.handleError(error);
    }
    return result;
  }
}
export default new WeatherBitService();
