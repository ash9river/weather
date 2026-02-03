import { useState } from "react";
import type { Coordinates } from "../types/Coordinates.types";
import { getCurrentLocation } from "./getCurrentLocation";

export const useCurrentLocationTest = () => {
  const [coords, setCoords] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDetect = async () => {
    try {
      setError(null);
      const result = await getCurrentLocation();
      setCoords(result);
      console.log("📍 현재 위치 확보 성공:", result);
    } catch (e: any) {
      setError(e.message || "위치 정보를 가져오는 데 실패했습니다.");
      console.error("❌ 위치 확보 실패:", e);
    }
  };

  return { coords, error, handleDetect };
};
