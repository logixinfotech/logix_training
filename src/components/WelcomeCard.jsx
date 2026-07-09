import Constellation from "./Constellation";

const now = new Date();
const hour = now.getHours();
const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
const heroDate = now.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

export default function WelcomeCard() {
  return (
    <div className="relative col-span-1 overflow-hidden rounded-xl2 bg-ink-900 p-7 shadow-raised lg:col-span-2">
      <Constellation className="absolute inset-0 h-full w-full opacity-90" tone="light" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ink-900/70 via-ink-900/30 to-transparent" />

      <div className="relative">
        <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wide text-brass-300">
          {heroDate}
        </span>
        <h1 className="mt-4 max-w-md font-display text-[30px] italic leading-tight text-base-0">
          {greeting}, Guest.
        </h1>
        <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-ink-200/70">
          214 people across 12 departments are checked in today. Three approvals are
          waiting on you.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-white/10 pt-5">
          {[
            { value: "96%", label: "Attendance today" },
            { value: "07", label: "Open positions" },
            { value: "03", label: "Pending approvals" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-mono text-[19px] font-medium tabular text-base-0">{s.value}</p>
              <p className="text-[11.5px] text-ink-200/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
