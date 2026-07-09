import {
  LuUsers,
  LuCalendarCheck,
  LuUserPlus,
  LuBanknote,
  LuPlaneTakeoff,
  LuFilePlus2,
  LuArrowRight,
} from "react-icons/lu";
import PageHeader from "../../components/PageHeader";
import WelcomeCard from "../../components/WelcomeCard";
import StatsCard from "../../components/StatsCard";
import NotificationPanel from "../../components/NotificationPanel";
import TaskPanel from "../../components/TaskPanel";

const STATS = [
  { icon: LuUsers, label: "Total headcount", value: "214", delta: "+6 this month", trend: "up", spark: [12, 14, 13, 16, 18, 19, 21], accent: "brass" },
  { icon: LuCalendarCheck, label: "Attendance rate", value: "96.2%", delta: "+1.4%", trend: "up", spark: [90, 92, 91, 94, 93, 95, 96], accent: "teal" },
  { icon: LuUserPlus, label: "Open positions", value: "07", delta: "2 closing soon", trend: "flat", spark: [9, 8, 9, 7, 8, 7, 7], accent: "brass" },
  { icon: LuPlaneTakeoff, label: "On leave today", value: "05", delta: "−2 vs last week", trend: "down", spark: [8, 7, 9, 6, 7, 5, 5], accent: "coral" },
];

const EVENTS = [
  { day: "11", month: "JUL", title: "Quarterly town hall", meta: "10:00 AM · Auditorium" },
  { day: "14", month: "JUL", title: "New hire orientation", meta: "9:30 AM · Batch of 6" },
  { day: "18", month: "JUL", title: "Performance review cycle opens", meta: "All departments" },
];

const QUICK_ACTIONS = [
  { icon: LuUserPlus, label: "Add employee" },
  { icon: LuBanknote, label: "Run payroll" },
  { icon: LuFilePlus2, label: "Post a job" },
  { icon: LuPlaneTakeoff, label: "Approve leave" },
];

const DEPARTMENTS = [
  { name: "Engineering", count: 68, color: "bg-brass-500" },
  { name: "Sales", count: 42, color: "bg-teal-500" },
  { name: "Design", count: 21, color: "bg-brass-300" },
  { name: "Support", count: 34, color: "bg-teal-100 border border-teal-500" },
  { name: "Operations", count: 49, color: "bg-ink-200" },
];
const totalHeadcount = DEPARTMENTS.reduce((s, d) => s + d.count, 0);

const ACTIVITY = [
  { initials: "TA", name: "Team Member A", action: "submitted this week's timesheet", time: "12m ago" },
  { initials: "TB", name: "Team Member B", action: "updated their emergency contact", time: "48m ago" },
  { initials: "TC", name: "Team Member C", action: "uploaded revised offer letter", time: "1h ago" },
  { initials: "TD", name: "Team Member D", action: "completed onboarding checklist", time: "2h ago" },
];

export default function Dashboard() {
  return (
    <>
      <PageHeader
        title="Overview"
        description="A daily read on your people, their time, and what needs your attention."
      />

      {/* Hero + quick stats */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <WelcomeCard />
        <div className="grid grid-cols-2 gap-5 lg:col-span-2 lg:grid-cols-2">
          {STATS.map((s) => (
            <StatsCard key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <NotificationPanel />

          {/* Employee summary */}
          <div className="rounded-xl2 border border-line-200 bg-base-0 p-6 shadow-card">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-[17px] italic text-ink-900">Employee summary</h3>
              <span className="font-mono text-[11px] text-ink-400">{totalHeadcount} people</span>
            </div>

            <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-base-50">
              {DEPARTMENTS.map((d) => (
                <div
                  key={d.name}
                  className={`h-full ${d.color} transition-all duration-500 ease-premium`}
                  style={{ width: `${(d.count / totalHeadcount) * 100}%` }}
                />
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {DEPARTMENTS.map((d) => (
                <div key={d.name}>
                  <div className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${d.color}`} />
                    <span className="text-[11.5px] text-ink-600">{d.name}</span>
                  </div>
                  <p className="mt-1 font-mono text-[15px] tabular text-ink-900">{d.count}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="rounded-xl2 border border-line-200 bg-base-0 p-6 shadow-card">
            <h3 className="mb-5 font-display text-[17px] italic text-ink-900">Recent activity</h3>
            <ul className="flex flex-col gap-4">
              {ACTIVITY.map((a, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-base-50 font-mono text-[11px] font-medium text-ink-600">
                    {a.initials}
                  </div>
                  <p className="flex-1 text-[13px] text-ink-700">
                    <span className="font-medium text-ink-900">{a.name}</span> {a.action}
                  </p>
                  <span className="whitespace-nowrap font-mono text-[10.5px] text-ink-400">{a.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right rail */}
        <div className="flex flex-col gap-5">
          <TaskPanel />

          {/* Quick actions */}
          <div className="rounded-xl2 border border-line-200 bg-base-0 p-6 shadow-card">
            <h3 className="mb-4 font-display text-[17px] italic text-ink-900">Quick actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {QUICK_ACTIONS.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="group flex flex-col items-start gap-3 rounded-xl border border-line-200 p-3.5 text-left transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-brass-400/60 hover:shadow-soft"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-base-50 text-ink-600 transition-colors group-hover:bg-amber-100 group-hover:text-brass-600">
                    <Icon size={15} />
                  </span>
                  <span className="text-[12px] font-medium leading-tight text-ink-900">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Upcoming events */}
          <div className="rounded-xl2 border border-line-200 bg-base-0 p-6 shadow-card">
            <h3 className="mb-4 font-display text-[17px] italic text-ink-900">Upcoming events</h3>
            <ul className="flex flex-col gap-3">
              {EVENTS.map((e, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-base-50">
                    <span className="font-mono text-[13px] font-semibold leading-none text-ink-900">{e.day}</span>
                    <span className="mt-0.5 font-mono text-[9px] uppercase tracking-wide text-ink-400">{e.month}</span>
                  </div>
                  <div>
                    <p className="text-[12.5px] font-medium leading-snug text-ink-900">{e.title}</p>
                    <p className="text-[11.5px] text-ink-500">{e.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* HR insight */}
          <div className="rounded-xl2 border border-teal-500/20 bg-teal-100/50 p-6">
            <p className="font-mono text-[10.5px] uppercase tracking-wide text-teal-600">HR insight</p>
            <p className="mt-2 font-display text-[16px] italic leading-snug text-ink-900">
              Time-to-hire dropped to 18 days this quarter.
            </p>
            <p className="mt-2 text-[12.5px] leading-relaxed text-ink-600">
              Down from 26 days last quarter, driven by faster interview scheduling.
            </p>
            <button className="mt-4 flex items-center gap-1.5 text-[12px] font-medium text-teal-600 hover:text-teal-500">
              View recruitment analytics <LuArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
