import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const baseURL = `https://api.openweathermap.org/data/2.5/forecast`;
const TIMEOUT = 5 * 1000;

/**
 * @description openWeatherMap API
 */
export const weatherRequester = axios.create({
  baseURL,
  timeout: TIMEOUT,
  params: {
    appid: API_KEY,
    units: "metric",
    lang: "kr",
  },
});
