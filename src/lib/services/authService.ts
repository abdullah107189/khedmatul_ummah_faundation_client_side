import { api } from "@/lib/api/axios";
import { ENDPOINTS } from "@/lib/api/endpoints";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  name: string;
}

export const authService = {
  async login(payload: LoginPayload) {
    const { data } = await api.post(ENDPOINTS.auth.login, payload);
    return data;
  },

  async register(payload: RegisterPayload) {
    const { data } = await api.post(ENDPOINTS.auth.register, payload);
    return data;
  },

  async logout() {
    const { data } = await api.delete(ENDPOINTS.auth.logout);
    return data;
  }
};
