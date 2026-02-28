"use client";

import { useMemo } from "react";
import { api } from "@/lib/api/axios";

// Hook returns shared axios instance for client components.
export const useAxios = () => {
  return useMemo(() => api, []);
};
