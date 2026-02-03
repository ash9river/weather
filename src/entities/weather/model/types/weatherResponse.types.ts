export interface WeatherResponse {
  list: Array<{
    dt: number; // 타임스탬프
    main: {
      temp: number; // 현재 온도
      temp_min: number; // 최저 온도
      temp_max: number; // 최고 온도
      humidity: number; // 습도
    };
    weather: Array<{
      id: number;
      main: string;
      description: string; // 날씨 상태 (예: '맑음')
      icon: string; // 날씨 아이콘 코드 (예: '01d')
    }>;
    dt_txt: string; // "2026-02-06 15:00:00"
  }>;
  city: {
    name: string;
    coord: { lat: number; lon: number };
  };
}
