import type { Metadata } from "next";
import "@/app/globals.css";
import "@/styles/dashboard.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/layout/Providers";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: APP_NAME,
  description: "স্বচ্ছ, মানবসেবামূলক ও দান-কেন্দ্রিক বাংলা ওয়েব প্ল্যাটফর্ম"
};

// Root layout is a server component by default.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
