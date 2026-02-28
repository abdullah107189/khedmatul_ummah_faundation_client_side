"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <nav className="container-app flex h-16 items-center justify-between">
        <Link href="/" className="text-base font-bold text-primary md:text-lg">
          খেদমাতুল উম্মাহ
        </Link>

        <div className="hidden items-center gap-5 text-sm md:flex">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/donate" className="hidden md:block">
            <Button>দান করুন</Button>
          </Link>
          <Button variant="outline" className="md:hidden" onClick={() => setOpen(true)}>
            মেনু
          </Button>
        </div>
      </nav>

      <Sheet open={open} onClose={() => setOpen(false)}>
        <div className="flex h-full flex-col gap-4">
          <p className="text-lg font-semibold">মেনু</p>
          <div className="flex flex-1 flex-col gap-3 text-sm">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 hover:bg-slate-100">
                {item.label}
              </Link>
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
