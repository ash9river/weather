import type { AxiosRequestOptions, ContextResponse } from "./data.types";
import { setAxiosDefaultRequestHeader } from "../config/setAxiosDefaultRequestHeader";
import type { AxiosInstance, AxiosResponse } from "axios";

export type PatchDataParams<T, C> = {
  url: string;
  data?: T;
  options?: AxiosRequestOptions &
    (C extends true
      ? {
          context: true;
        }
      : {
          context?: false;
        });
};

type InternalPatchParams<T, C> = {
  instance: AxiosInstance;
} & PatchDataParams<T, C>;

export async function patchData<T, R, C extends boolean = false>({
  instance,
  url,
  data,
  options,
}: InternalPatchParams<T, C>): Promise<C extends true ? AxiosResponse<R> : R> {
  const modifiedConfig = setAxiosDefaultRequestHeader(
    options?.config,
    options?.signal
  );
  const response = await instance.patch<R>(url, data ?? {}, modifiedConfig);

  return (options?.context ? response : response.data) as ContextResponse<R, C>;
}
