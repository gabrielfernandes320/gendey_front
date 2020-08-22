import axios from "axios";
import { getToken } from "./auth";

export const api = axios.create({
  baseURL: `http://localhost:64427/api/v1.0/`,
});

export const authApi = axios.create({
  baseURL: `http://localhost:64427/api/v1.0/`,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
