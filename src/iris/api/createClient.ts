import axios, { AxiosInstance } from "axios";

export function createIrisHttpClient(irisServerUrl?: string): AxiosInstance {
  if (!irisServerUrl) {
    return axios;
  }

  return axios.create({ baseURL: irisServerUrl });
}
