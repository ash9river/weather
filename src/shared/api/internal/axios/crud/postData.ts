import type { AxiosRequestOptions, ContextResponse } from "./data.types";
import { setAxiosDefaultRequestHeader } from "../config/setAxiosDefaultRequestHeader";
import type { AxiosInstance, AxiosResponse } from "axios";

export type PostDataParams<T, C> = {
  url: string;
  data: T;
  options?: AxiosRequestOptions &
    (C extends true
      ? {
          context: true;
        }
      : {
          context?: false;
        });
};

type InternalPostDataParams<T, C> = {
  instance: AxiosInstance;
} & PostDataParams<T, C>;

export async function postData<T, R, C extends boolean = false>({
  instance,
  url,
  data,
  options,
}: InternalPostDataParams<T, C>): Promise<
  C extends true ? AxiosResponse<R> : R
> {
  const modifiedConfig = setAxiosDefaultRequestHeader(
    options?.config,
    options?.signal
  );
  const response = await instance.post<R>(url, data, modifiedConfig);

  return (options?.context ? response : response.data) as ContextResponse<R, C>;
}
