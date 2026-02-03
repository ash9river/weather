import type { AxiosRequestOptions, ContextResponse } from "./data.types";
import { setAxiosDefaultRequestHeader } from "../config/setAxiosDefaultRequestHeader";
import type { AxiosInstance, AxiosResponse } from "axios";

export type GetDataParams<C> = {
  url: string;
  options?: AxiosRequestOptions &
    (C extends true ? { context: true } : { context?: false });
};

type InternalGetDataParams<C> = {
  instance: AxiosInstance;
} & GetDataParams<C>;

export async function getData<R, C extends boolean = false>({
  instance,
  url,
  options,
}: InternalGetDataParams<C>): Promise<C extends true ? AxiosResponse<R> : R> {
  const modifiedConfig = setAxiosDefaultRequestHeader(
    options?.config,
    options?.signal
  );
  const response = await instance.get<R>(url, modifiedConfig);

  return (options?.context ? response : response.data) as ContextResponse<R, C>;
}
