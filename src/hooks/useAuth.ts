"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService, LoginPayload, RegisterPayload } from "@/lib/services/authService";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { setUser } from "@/redux/features/users/userSlice";

export const useAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);

  const login = async (payload: LoginPayload) => {
    setLoading(true);
    try {
      await authService.login(payload);
      dispatch(setUser({ id: 1, name: "Authenticated User", email: payload.email }));
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const signup = async (payload: RegisterPayload) => {
    setLoading(true);
    try {
      await authService.register(payload);
      dispatch(setUser({ id: 2, name: payload.name, email: payload.email }));
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await authService.logout();
    dispatch(setUser(null));
    router.push("/login");
  };

  return { login, signup, logout, loading };
};
