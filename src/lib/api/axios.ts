import axios from "axios";

// Shared axios instance with base URL from environment.
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use((config) => {
  // You can attach auth token here if stored in localStorage/cookies.
  return config;
});
