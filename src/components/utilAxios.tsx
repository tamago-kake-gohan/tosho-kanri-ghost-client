import { Axios } from "axios";

const axios = new Axios({
  baseURL: "https://localhost:5000",
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
