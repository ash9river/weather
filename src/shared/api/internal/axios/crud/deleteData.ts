import type { AxiosRequestOptions, ContextResponse } from "./data.types";
import { setAxiosDefaultRequestHeader } from "../config/setAxiosDefaultRequestHeader";
import type { AxiosInstance, AxiosResponse } from "axios";

export type DeleteDataParams<C> = {
  url: string;
  options?: AxiosRequestOptions &
    (C extends true ? { context: true } : { context?: false });
};

type InternalDeleteParams<C> = {
  instance: AxiosInstance;
} & DeleteDataParams<C>;

export async function deleteData<R, C extends boolean = false>({
  instance,
  url,
  options,
}: InternalDeleteParams<C>): Promise<C extends true ? AxiosResponse<R> : R> {
  const modifiedConfig = setAxiosDefaultRequestHeader(
    options?.config,
    options?.signal
  );
  const response = await instance.delete<R>(url, modifiedConfig);

  return (options?.context ? response : response.data) as ContextResponse<R, C>;
}
