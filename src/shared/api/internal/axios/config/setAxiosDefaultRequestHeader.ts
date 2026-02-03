import type { AxiosRequestConfig } from "axios";

export const setAxiosDefaultRequestHeader = (
  requestConfig?: AxiosRequestConfig,
  signal?: AbortSignal
) => {
  const config = requestConfig ?? {};
  config.headers = {
    ...config.headers,
    "Content-Type":
      config.headers?.["Content-Type"] ?? "application/json;charset=utf-8",
  };

  if (signal) {
    config.signal = signal;
  }

  return config;
};
