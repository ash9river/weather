import type { AxiosRequestConfig, AxiosResponse } from "axios";

export type ContextResponse<R, C extends boolean | undefined> = C extends true
  ? AxiosResponse<R>
  : R;

export type AxiosRequestOptions = {
  config?: AxiosRequestConfig;
  signal?: AbortSignal;
};
