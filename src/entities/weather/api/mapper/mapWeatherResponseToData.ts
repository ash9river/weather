import type { Weather } from "../../model/types/weather.types";
import type { WeatherResponse } from "../../model/types/weatherResponse.types";

export function mapWeatherResponseToData(data: WeatherResponse): Weather {
  const { list, city } = data;
  const current = list[0];

  // 당일(오늘) 데이터만 필터링
  const todayDate = current.dt_txt.split(" ")[0];
  const todayList = list.filter((item) => item.dt_txt.startsWith(todayDate));

  // 당일 최저/최고 기온 계산
  const minTemp = Math.round(
    Math.min(...todayList.map((i) => i.main.temp_min))
  );
  const maxTemp = Math.round(
    Math.max(...todayList.map((i) => i.main.temp_max))
  );

  // 무료플랜이라 3시간 간격밖에 없어서 1시간 간격으로 조정
  const hourly = [];

  for (let h = 0; h < 24; h++) {
    const hourStr = h.toString().padStart(2, "0");
    const closestMatch = todayList.reduce((prev, curr) => {
      const prevHour = parseInt(prev.dt_txt.split(" ")[1].slice(0, 2));
      const currHour = parseInt(curr.dt_txt.split(" ")[1].slice(0, 2));
      return Math.abs(currHour - h) < Math.abs(prevHour - h) ? curr : prev;
    });

    hourly.push({
      time: `${hourStr}:00`,
      temp: Math.round(closestMatch.main.temp),
      icon: closestMatch.weather[0].icon,
    });
  }

  return {
    cityName: city.name,
    currentTemp: Math.round(current.main.temp),
    minTemp,
    maxTemp,
    description: current.weather[0].description,
    iconUrl: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
    hourly,
  };
}
