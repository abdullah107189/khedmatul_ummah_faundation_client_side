"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/90 backdrop-blur">
      <nav className="container-app flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-100">
            <Image src="/ummah_logo.svg" alt="খিদমাতুল উম্মাহ ফাউন্ডেশন" width={34} height={34} />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">খিদমাতুল উম্মাহ</p>
            <p className="text-xs text-slate-500">মানবিক ও দ্বীনি সেবার প্ল্যাটফর্ম</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((item) =>
            item.children?.length ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive(pathname, item.href) ? "bg-emerald-50 text-emerald-700" : "text-slate-700 hover:bg-emerald-50"
                  }`}
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-0 top-full mt-3 min-w-52 translate-y-2 rounded-3xl border border-emerald-100 bg-white p-3 opacity-0 shadow-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive(pathname, item.href) ? "bg-emerald-50 text-emerald-700" : "text-slate-700 hover:bg-emerald-50"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/donate" className="hidden sm:block">
            <Button>দান করুন</Button>
          </Link>
          <Button variant="outline" className="lg:hidden" onClick={() => setOpen(true)}>
            মেনু
          </Button>
        </div>
      </nav>

      <Sheet open={open} onClose={() => setOpen(false)}>
        <div className="flex h-full flex-col gap-4">
          <div className="border-b border-emerald-100 pb-4">
            <p className="text-lg font-semibold text-slate-900">মেনু</p>
            <p className="text-sm text-slate-500">সাইটের প্রধান বিভাগগুলো</p>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto">
            {NAV_LINKS.map((item) => (
              <div key={item.href} className="rounded-2xl border border-emerald-100 bg-white/80 p-2">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-800"
                >
                  {item.label}
                </Link>
                {item.children?.length ? (
                  <div className="space-y-1 px-2 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <Link href="/donate" onClick={() => setOpen(false)}>
            <Button className="w-full">এখনই দান করুন</Button>
          </Link>
        </div>
      </Sheet>
    </header>
  );
}
