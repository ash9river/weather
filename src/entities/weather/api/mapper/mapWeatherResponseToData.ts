import type { Weather } from "../../model/types/weather.types";
import type { WeatherResponse } from "../../model/types/weatherResponse.types";

export function mapWeatherResponseToData(data: WeatherResponse): Weather {
  const { list, city } = data;
  const current = list[0];

  // 1. 당일(오늘) 데이터만 필터링
  const todayDate = current.dt_txt.split(" ")[0];
  const todayList = list.filter((item) => item.dt_txt.startsWith(todayDate));

  // 2. 당일 최저/최고 기온 계산
  const minTemp = Math.round(
    Math.min(...todayList.map((i) => i.main.temp_min))
  );
  const maxTemp = Math.round(
    Math.max(...todayList.map((i) => i.main.temp_max))
  );

  return {
    cityName: city.name,
    currentTemp: Math.round(current.main.temp),
    minTemp,
    maxTemp,
    description: current.weather[0].description,
    iconUrl: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
    hourly: todayList.map((item) => ({
      time: item.dt_txt.split(" ")[1].slice(0, 5), // "15:00"
      temp: Math.round(item.main.temp),
      icon: item.weather[0].icon,
    })),
  };
}
