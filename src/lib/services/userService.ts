import { api } from "@/lib/api/axios";
import { ENDPOINTS } from "@/lib/api/endpoints";

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  username?: string;
}

export const userService = {
  async getProfile() {
    const { data } = await api.get<UserProfile>(ENDPOINTS.user.profile);
    return data;
  },

  async getUsers() {
    const { data } = await api.get<UserProfile[]>(ENDPOINTS.user.list);
    return data;
  }
};
