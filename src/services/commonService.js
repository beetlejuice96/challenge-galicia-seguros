import axios from "axios";
import CONFIG from "../config";

/**
 * API Client to interact with the service.
 */
export const APIClient = axios.create({
  baseURL: CONFIG.SERVICES.WEATHERBIT.URL,
  //   timeout: 10000,
});
