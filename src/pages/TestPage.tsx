import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCurrentLocation } from "entities/location/coordinate/internal/model/services/getCurrentLocation";
import type { Coordinates } from "@entities/location/coordinate";
import { weather } from "@entities/weather";

export function TestPage() {
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  // 1. TanStack Query: 좌표가 있을 때만 날씨를 불러옵니다.
  const { data, isLoading, isError, error } = useQuery(
    weather.queryOptions.findByCoordinates({
      lat: coords?.lat ?? 0,
      lng: coords?.lng ?? 0,
    })
  );

  // 2. 현재 위치 가져오기 핸들러
  const handleGetLocation = async () => {
    try {
      setIsLocating(true);
      const result = await getCurrentLocation();
      console.log(result);

      setCoords(result); // 좌표가 업데이트되면 useQuery가 자동으로 실행됨
    } catch (err: any) {
      console.log("fuxk");

      alert(err.message || "위치 정보를 가져오지 못했습니다.");
    } finally {
      setIsLocating(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📍 날씨 정보 테스트</h1>

      <button
        onClick={handleGetLocation}
        disabled={isLocating || isLoading}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        {isLocating ? "위치 찾는 중..." : "현재 위치 날씨 가져오기"}
      </button>

      <hr style={{ margin: "20px 0" }} />

      {/* 상태별 UI 처리 */}
      {!coords && !isLocating && <p>버튼을 눌러 위치 정보를 허용해 주세요.</p>}

      {isLoading && <p>☀️ 날씨 데이터를 불러오는 중...</p>}

      {isError && (
        <div style={{ color: "red" }}>
          <p>에러 발생: {(error as Error).message}</p>
        </div>
      )}

      {/* 성공 시 데이터 출력 */}
      {weather && (
        <div
          style={{
            background: "#f0f4f8",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>현재 위치 결과</h2>
          <p>
            <strong>위도:</strong> {coords?.lat}
          </p>
          <p>
            <strong>경도:</strong> {coords?.lng}
          </p>

          <div
            style={{
              marginTop: "20px",
              borderTop: "1px solid #ccc",
              paddingTop: "10px",
            }}
          >
            <h3>🌡 {data?.currentTemp}°C</h3>
            <p>날씨 상태: {data?.description}</p>
            <p>
              오늘 최저: {data?.minTemp}° / 최고: {data?.maxTemp}°
            </p>
          </div>

          <h4>시간대별 예보 (오늘)</h4>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              gap: "10px",
              overflowX: "auto",
            }}
          >
            {data?.hourly.map((h, idx) => (
              <li
                key={idx}
                style={{
                  background: "#fff",
                  padding: "10px",
                  borderRadius: "8px",
                  minWidth: "60px",
                  textAlign: "center",
                }}
              >
                <div>{h.time}</div>
                <div style={{ fontWeight: "bold" }}>{h.temp}°</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
