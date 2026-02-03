import type { AxiosRequestOptions, ContextResponse } from "./data.types";
import { setAxiosDefaultRequestHeader } from "../config/setAxiosDefaultRequestHeader";
import type { AxiosInstance, AxiosResponse } from "axios";

export type PutDataParams<T, C> = {
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

type InternalPutDataParams<T, C> = {
  instance: AxiosInstance;
} & PutDataParams<T, C>;

export async function putData<T, R, C extends boolean = false>({
  instance,
  url,
  data,
  options,
}: InternalPutDataParams<T, C>): Promise<
  C extends true ? AxiosResponse<R> : R
> {
  const modifiedConfig = setAxiosDefaultRequestHeader(
    options?.config,
    options?.signal
  );
  const response = await instance.put<R>(url, data, modifiedConfig);

  return (options?.context ? response : response.data) as ContextResponse<R, C>;
}
