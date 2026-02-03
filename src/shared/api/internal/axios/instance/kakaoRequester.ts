import axios from "axios";

const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

/**
 * 카카오 로컬 REST API 인스턴스
 */
export const kakaoRequester = axios.create({
  baseURL: "https://dapi.kakao.com/v2/local/search/address.json",
  headers: {
    Authorization: `KakaoAK ${KAKAO_REST_API_KEY}`,
  },
});
