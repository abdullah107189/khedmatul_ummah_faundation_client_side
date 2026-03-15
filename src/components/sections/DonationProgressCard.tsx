import { Progress } from "@/components/ui/progress";
import type { DonationCampaign } from "@/types/site";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("bn-BD").format(value);
}

export default function DonationProgressCard({ campaign }: { campaign: DonationCampaign }) {
  const progress = Math.round((campaign.raised / campaign.target) * 100);

  return (
    <div className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{campaign.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{campaign.description}</p>
        </div>
        <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
          {progress}%
        </div>
      </div>
      <div className="mt-5 space-y-3">
        <Progress value={progress} />
        <div className="grid gap-2 text-sm text-slate-700 md:grid-cols-2">
          <p>লক্ষ্য: {formatCurrency(campaign.target)} টাকা</p>
          <p>সংগ্রহ: {formatCurrency(campaign.raised)} টাকা</p>
        </div>
      </div>
    </div>
  );
}
