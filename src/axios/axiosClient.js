import axios from "axios";
import { getAccessToken } from "@/utils/localStorage";

const axiosClient = axios.create({
  baseURL: "https://api.ezfrontend.com/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
axiosClient.interceptors.request.use((request) => {
  const accessToken = getAccessToken();
  const accessHeader = `Bearer ${accessToken}`;
  if (request.headers) {
    request.headers["Authorization"] = accessHeader;
  }
  return request;
});
export default axiosClient;
