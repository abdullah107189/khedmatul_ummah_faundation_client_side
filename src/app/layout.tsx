import type { Metadata } from "next";
import "@/app/globals.css";
import "@/styles/dashboard.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/layout/Providers";
import { SITE_META } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: SITE_META.name,
  description: SITE_META.description,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body className="min-h-screen bg-[#f5f8f2] text-slate-900">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              <div className="container-app py-6 md:py-8">{children}</div>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
