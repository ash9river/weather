import districts from "../../api/korea_districts.json";
import type { District } from "../types/District.types";

/**
 * 하이픈(-)이 포함된 주소 데이터에서 하이픈을 무시하고 검색
 */
export function searchDistricts(query: string): District[] {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return [];

  // 검색어에서 공백/하이픈 제거
  const sanitizedQuery = trimmedQuery.replaceAll(/[- ]/g, "");

  return districts
    .filter((item) => {
      const sanitizedItem = item.replaceAll("-", "");
      return sanitizedItem.includes(sanitizedQuery);
    })
    .map((item) => item.replaceAll("-", " "));
}
