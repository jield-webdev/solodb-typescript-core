import axios from "axios";

export const configureAxiosHeaders = (token: string, server_uri: string) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  axios.defaults.headers.common["Accept"] = "application/json";
  axios.defaults.headers.common["Content-Type"] = "application/json";

  axios.defaults.baseURL = server_uri + "/api";
};
