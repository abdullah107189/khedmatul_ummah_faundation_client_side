"use client";

import Link from "next/link";
import { RootState } from "@/redux/store";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";

export default function DashboardSidebar() {
  const sidebarOpen = useSelector((state: RootState) => state.ui.sidebarOpen);

  return (
    <aside
      className={cn(
        "rounded-xl border bg-white p-4 transition-all",
        sidebarOpen ? "block w-full md:w-64" : "hidden md:block md:w-20",
      )}
    >
      <ul className="space-y-2 text-sm">
        <li>
          <Link href="/" className="hover:text-primary">
            হোম
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="hover:text-primary">
            ওভারভিউ
          </Link>
        </li>
        <li>
          <Link href="/login" className="hover:text-primary">
            লগইন
          </Link>
        </li>
      </ul>
    </aside>
  );
}
