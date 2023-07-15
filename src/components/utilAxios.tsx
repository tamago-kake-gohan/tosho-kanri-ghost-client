import { Axios } from "axios";

const axios = new Axios({
  baseURL: "https://localhost:5000",
  headers: {
    "Content-Type": "application/json"
  },
  responseType: "json",
  transformRequest: [function (data) {
    return JSON.stringify(data);
  }],
  transformResponse: [function (data) {
    return JSON.parse(data);
  }]
});

export default axios;