const trendColor = { up: "text-teal-500", down: "text-coral-500", flat: "text-ink-400" };

function Sparkline({ points, tone }) {
  const stroke = tone === "up" ? "#1F6F6B" : tone === "down" ? "#C85C5C" : "#8A90A0";
  const max = Math.max(...points);
  const min = Math.min(...points);
  const norm = points.map((p, i) => {
    const x = (i / (points.length - 1)) * 100;
    const y = 28 - ((p - min) / (max - min || 1)) * 24 - 2;
    return `${x},${y}`;
  });

  return (
    <svg viewBox="0 0 100 28" className="h-7 w-20" preserveAspectRatio="none">
      <polyline points={norm.join(" ")} fill="none" stroke={stroke} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function StatsCard({ icon: Icon, label, value, delta, trend = "flat", spark, accent = "brass" }) {
  const accentBg = {
    brass: "bg-amber-100 text-brass-600",
    teal: "bg-teal-100 text-teal-600",
    coral: "bg-coral-100 text-coral-500",
  }[accent] ?? "bg-brass-100/60 text-brass-600";

  return (
    <div className="group rounded-xl2 border border-line-200 bg-base-0 p-5 shadow-card transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-raised">
      <div className="flex items-start justify-between">
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${accentBg}`}>
          <Icon size={17} />
        </div>
        {spark && <Sparkline points={spark} tone={trend} />}
      </div>
      <p className="mt-4 font-mono text-[26px] font-medium tabular text-ink-900">{value}</p>
      <div className="mt-1.5 flex items-center gap-1.5">
        <span className="text-[12.5px] text-ink-600">{label}</span>
        {delta && <span className={`text-[11.5px] font-medium ${trendColor[trend]}`}>{delta}</span>}
      </div>
    </div>
  );
}
