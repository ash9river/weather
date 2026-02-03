export interface kakaoCoordinatesResponseByDistrict {
  documents: Array<{
    x: string; // 경도 (lng)
    y: string; // 위도 (lat)
    address_name: string;
  }>;
}
