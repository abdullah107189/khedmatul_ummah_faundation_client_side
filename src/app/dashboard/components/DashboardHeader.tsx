"use client";

import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/redux/features/ui/uiSlice";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  const dispatch = useDispatch();

  return (
    <div className="mb-4 flex items-center justify-between rounded-xl border bg-white p-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <Button variant="outline" onClick={() => dispatch(toggleSidebar())}>
        Toggle Sidebar
      </Button>
    </div>
  );
}
