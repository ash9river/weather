import type { Coordinates } from "../types/Coordinates.types";

export async function getCurrentLocation(): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject(new Error("이 브라우저는 위치 정보를 지원하지 않습니다."));
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
      }
    );
  });
}
