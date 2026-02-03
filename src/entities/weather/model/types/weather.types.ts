export interface Weather {
  cityName: string; // 도시 이름
  currentTemp: number; // 현재 온도 (반올림)
  minTemp: number; // 당일 최저 기온
  maxTemp: number; // 당일 최고 기온
  description: string; // 날씨 설명 (예: "흐림")
  iconUrl: string; // 아이콘 전체 URL
  hourly: HourlyForecast[]; // 시간대별 예보 리스트
}

export interface HourlyForecast {
  time: string; // "18:00"
  temp: number; // 온도
  icon: string; // 아이콘 코드
}
