import type { AxiosInstance, AxiosResponse } from "axios";
import { getData, type GetDataParams } from "../axios/crud/getData";
import { postData, type PostDataParams } from "../axios/crud/postData";
import { patchData, type PatchDataParams } from "../axios/crud/patchData";
import { putData, type PutDataParams } from "../axios/crud/putData";
import { deleteData, type DeleteDataParams } from "../axios/crud/deleteData";
import { apiRequester } from "../axios/instance/apiRequester";
import { weatherRequester } from "../axios/instance/weatherRequester";
import { kakaoRequester } from "../axios/instance/kakaoRequester";

type HttpClient = {
  get<R, C extends boolean = false>(
    params: GetDataParams<C>
  ): Promise<C extends true ? AxiosResponse<R> : R>;
  post<T, R, C extends boolean = false>(
    params: PostDataParams<T, C>
  ): Promise<C extends true ? AxiosResponse<R> : R>;
  patch<T, R, C extends boolean = false>(
    params: PatchDataParams<T, C>
  ): Promise<C extends true ? AxiosResponse<R> : R>;
  delete<R, C extends boolean = false>(
    params: DeleteDataParams<C>
  ): Promise<C extends true ? AxiosResponse<R> : R>;
  put<T, R, C extends boolean = false>(
    params: PutDataParams<T, C>
  ): Promise<C extends true ? AxiosResponse<R> : R>;
};

function injectAxiosClient(instance: AxiosInstance): HttpClient {
  return {
    get: ({ url, options }) => getData({ instance, url, options }),
    post: ({ url, data, options }) =>
      postData({ instance, url, data, options }),
    patch: ({ url, data, options }) =>
      patchData({
        instance,
        url,
        data,
        options,
      }),
    delete: ({ url, options }) => deleteData({ instance, url, options }),
    put: ({ url, data, options }) => putData({ instance, url, data, options }),
  };
}

export const httpClient = {
  base: injectAxiosClient(apiRequester),
  kakao: injectAxiosClient(kakaoRequester),
  weather: injectAxiosClient(weatherRequester),
} as const;
