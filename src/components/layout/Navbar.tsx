"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
  DrawerClose
} from "@/components/ui/drawer";

import { NAV_LINKS } from "@/lib/constants";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
      <div className="container-app flex h-16 items-center justify-between">

        {/* Logo */}
       {/* Logo */}
                  <Link href="/" className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
                      <Image
                        src="/ummah_logo.svg"
                        alt="খিদমাতুল উম্মাহ"
                        width={26}
                        height={26}
                      />
                    </div>
                    <div className="leading-tight text-start">
                      <p className="text-sm font-semibold text-slate-900">
                        খিদমাতুল উম্মাহ
                      </p>
                      <p className="text-xs text-muted-foreground">
                        মানবিক ও দ্বীনি সেবার প্ল্যাটফর্ম
                      </p>
                    </div>
                  </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2">
          {NAV_LINKS.map((item) =>
            item.children?.length ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${isActive(pathname, item.href)
                      ? "bg-emerald-100 text-emerald-700"
                      : "text-slate-700 hover:bg-emerald-50"
                    }`}
                >
                  {item.label}
                </Link>

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border bg-white shadow-lg opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${isActive(pathname, item.href)
                    ? "bg-emerald-100 text-emerald-700"
                    : "text-slate-700 hover:bg-emerald-50"
                  }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">

          {/* Donate */}
          <Link href="/donate" className="hidden sm:block">
            <Button className="rounded-full px-5">
              দান করুন
            </Button>
          </Link>

          {/* Mobile Drawer Trigger */}
          <Drawer open={open} onOpenChange={setOpen} direction="left">
            <DrawerTrigger asChild>
              <Button variant="outline" className="lg:hidden">
                <Menu size={20} />
              </Button>
            </DrawerTrigger>

            {/* Drawer Content */}
            <DrawerContent className="h-full max-w-[300px]">

              <div className="flex flex-col h-full">

                {/* Header */}
                <DrawerHeader className="border-b">
                  {/* Logo */}
                  <Link href="/" className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
                      <Image
                        src="/ummah_logo.svg"
                        alt="খিদমাতুল উম্মাহ"
                        width={26}
                        height={26}
                      />
                    </div>
                    <div className="leading-tight text-start">
                      <p className="text-sm font-semibold text-slate-900">
                        খিদমাতুল উম্মাহ
                      </p>
                      <p className="text-xs text-muted-foreground">
                        মানবিক ও দ্বীনি সেবার প্ল্যাটফর্ম
                      </p>
                    </div>
                  </Link>
                </DrawerHeader>

                {/* Scrollable Links */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2">

                  {NAV_LINKS.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block px-3 py-2 rounded-md text-sm font-medium transition
                        ${isActive(pathname, item.href)
                            ? "bg-emerald-100 text-emerald-700"
                            : "text-slate-800 hover:bg-emerald-50"
                          }`}
                      >
                        {item.label}
                      </Link>

                      {item.children?.length && (
                        <div className="ml-3 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className={`block px-3 py-1.5 text-sm rounded-md
                              ${isActive(pathname, child.href)
                                  ? "text-emerald-700"
                                  : "text-muted-foreground hover:text-emerald-700"
                                }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                </div>

                {/* Footer CTA */}
                <DrawerFooter className="border-t flex flex-col gap-2">
                  <Link href="/donate" onClick={() => setOpen(false)}>
                    <Button className="w-full rounded-full">
                      এখনই দান করুন
                    </Button>
                  </Link>

                  <DrawerClose asChild>
                    <Button variant="outline">বন্ধ করুন</Button>
                  </DrawerClose>
                </DrawerFooter>

              </div>

            </DrawerContent>
          </Drawer>

        </div>
      </div>
    </header>
  );
}