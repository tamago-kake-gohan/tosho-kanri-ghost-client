import { Axios } from "axios";

const axios = new Axios({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
  withCredentials: true,
  transformRequest: [
    function (data: unknown) {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    function (data: string) {
      return JSON.parse(data) as unknown;
    },
  ],
});

export default axios;
