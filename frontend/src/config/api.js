import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "";

export const SOCKET_URL =
  process.env.REACT_APP_SOCKET_URL || API_URL || "http://127.0.0.1:5000";

if (API_URL) {
  axios.defaults.baseURL = API_URL;
}

export default axios;
