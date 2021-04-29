import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
});

export default class ApiService {
  static fetcher = axiosInstance;

  get<T>(url: string, config?: AxiosRequestConfig) {
    return ApiService.fetcher.get<T>(url, config);
  }
  post<T>(url: string, config?: AxiosRequestConfig) {
    return ApiService.fetcher.post<T>(url, config);
  }

  put<T>(url: string, config?: AxiosRequestConfig) {
    return ApiService.fetcher.put<T>(url, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig) {
    return ApiService.fetcher.delete<T>(url, config);
  }

  // setHeader(headers: { [x: string]: any }) {
  //   Object.keys(headers).forEach((key) => {
  //     ApiService.fetcher.defaults.headers[key] = headers[key];
  //   });
  // }
}
