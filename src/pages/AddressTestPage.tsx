import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchDistricts } from "entities/location/district/internal/model/services/searchDisctricts";
import { weather } from "@entities/weather";
import { findLocationByAddressQueryOptions } from "entities/location/coordinate/internal/api/queries/findCoordinatesByDistrictQueryOptions";
import type { District } from "@entities/location/district";

export const AddressSearchTestPage = () => {
  const [keyword, setKeyword] = useState("");
  const [selectedAddress, setSelectedAddress] = useState<District | null>(null);

  // 1. 입력값에 따른 지역 리스트 필터링 (비즈니스 로직 호출)
  const searchResults = searchDistricts(keyword);

  const { data: selectDisctrictCoors } = useQuery(
    findLocationByAddressQueryOptions(selectedAddress ?? "")
  );

  // 2. 선택된 주소가 있을 때만 날씨 쿼리 활성화
  const {
    data: weatherData,
    isLoading,
    isError,
    error,
  } = useQuery(
    weather.queryOptions.findByCoordinates({
      lat: selectDisctrictCoors?.lat ?? 0,
      lng: selectDisctrictCoors?.lng ?? 0,
    })
  );

  const handleSelect = (address: District) => {
    setSelectedAddress(address);
    setKeyword(""); // 선택 후 목록 초기화 (선택 사항)
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>🔍 주소 검색 날씨 테스트</h1>

      {/* 검색 영역 */}
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="지역명을 입력하세요 (예: 석구동)"
          style={{ width: "100%", padding: "12px", boxSizing: "border-box" }}
        />

        {/* 자동완성 목록 */}
        {keyword && searchResults.length > 0 && (
          <ul
            style={{
              position: "absolute",
              width: "100%",
              background: "white",
              border: "1px solid #ccc",
              zIndex: 10,
              maxHeight: "200px",
              overflowY: "auto",
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            {searchResults.map((result) => (
              <li
                key={result}
                onClick={() => handleSelect(result)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
              >
                {result}
              </li>
            ))}
          </ul>
        )}
      </div>

      <hr />

      {/* 날씨 결과 영역 */}
      {!selectedAddress && (
        <p>검색창에 지역명을 입력하고 주소를 선택해 주세요.</p>
      )}

      {selectedAddress && (
        <div style={{ marginTop: "20px" }}>
          <h3>📍 선택된 주소: {selectedAddress}</h3>

          {isLoading && <p>🌤 날씨 데이터를 가져오는 중...</p>}

          {isError && (
            <div
              style={{ color: "red", padding: "10px", background: "#fff0f0" }}
            >
              <strong>오류 발생:</strong> {error.message}
              <p style={{ fontSize: "12px" }}>
                * OpenWeather API에 해당 세부 지역이 없을 수 있습니다.
              </p>
            </div>
          )}

          {weatherData && (
            <div
              style={{
                background: "#e3f2fd",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={weatherData.iconUrl} alt="weather icon" />
                <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  {weatherData.currentTemp}°C
                </span>
              </div>
              <p>날씨: {weatherData.description}</p>
              <p>
                최저 {weatherData.minTemp}° / 최고 {weatherData.maxTemp}°
              </p>

              <h4>시간대별 예보</h4>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  overflowX: "auto",
                  paddingBottom: "10px",
                }}
              >
                {weatherData.hourly.map((h, i) => (
                  <div
                    key={i}
                    style={{ textAlign: "center", minWidth: "50px" }}
                  >
                    <div style={{ fontSize: "12px" }}>{h.time}</div>
                    <div style={{ fontWeight: "bold" }}>{h.temp}°</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
