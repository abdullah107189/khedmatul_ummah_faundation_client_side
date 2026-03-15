const qrPattern = [
  "111101101011",
  "100101001001",
  "101101111101",
  "101001000101",
  "111101101111",
  "000010000100",
  "111011110111",
  "100010010001",
  "101110111101",
  "100000100001",
  "111111101111",
  "101001001001",
];

export default function QrCodePreview({ label }: { label: string }) {
  return (
    <div className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm">
      <div className="surface-pattern mx-auto grid w-48 grid-cols-12 gap-1 rounded-3xl p-4">
        {qrPattern.join("").split("").map((cell, index) => (
          <span
            key={`${cell}-${index}`}
            className={`aspect-square rounded-[2px] ${cell === "1" ? "bg-slate-900" : "bg-transparent"}`}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-sm font-medium text-slate-700">{label}</p>
    </div>
  );
}
