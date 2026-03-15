import type { TeamMember } from "@/types/site";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-bold text-emerald-700">
        {member.name.slice(0, 1)}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900">{member.name}</h3>
      <p className="mt-2 text-sm font-medium text-amber-700">{member.role}</p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{member.description}</p>
    </article>
  );
}
