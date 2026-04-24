import Link from "next/link";
import { CONTACT_INFO, DONATE_INFO, NAV_ITEMS, SITE_META } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(240,253,244,0.96))]">
      <div className="container-app grid gap-8 py-14 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900">{SITE_META.name}</h3>
          <p className="text-sm leading-7 text-slate-600">{SITE_META.description}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">নেভিগেশন</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="block transition hover:text-emerald-700">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-600">
          <h3 className="text-lg font-semibold text-slate-900">যোগাযোগ</h3>
          <p>মোবাইল: {CONTACT_INFO.mobile}</p>
          <p>হোয়াটসঅ্যাপ: {CONTACT_INFO.whatsapp}</p>
          <p className="leading-7">অফিস: {CONTACT_INFO.officeAddress}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">দান তথ্য</h3>
          <div className="rounded-[1.5rem] border border-emerald-100 bg-white p-4 text-sm text-slate-600 shadow-sm">
            <p>বিকাশ: {DONATE_INFO.bkash}</p>
            <p className="mt-2">নগদ: {DONATE_INFO.nagad}</p>
            <p className="mt-4 text-xs text-amber-700">{DONATE_INFO.note}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-emerald-100 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE_META.name}
      </div>
    </footer>
  );
}
