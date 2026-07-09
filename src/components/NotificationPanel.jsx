const FEED = [
  {
    title: "Payroll for June closes tomorrow",
    detail: "Finance needs final attendance corrections by 6 PM.",
    time: "2h ago",
    tone: "brass",
  },
  {
    title: "A leave request needs review",
    detail: "Jul 14–16 · Annual leave · Awaiting your approval",
    time: "3h ago",
    tone: "teal",
  },
  {
    title: "New candidate applied",
    detail: "Product Designer role · Round 1",
    time: "5h ago",
    tone: "teal",
  },
  {
    title: "Policy update published",
    detail: "Revised WFH guidelines are now live on the wiki.",
    time: "Yesterday",
    tone: "ink",
  },
];

const dotTone = {
  brass: "bg-brass-500",
  teal: "bg-teal-500",
  ink: "bg-ink-400",
};

export default function NotificationPanel() {
  return (
    <div className="rounded-xl2 border border-line-200 bg-base-0 p-6 shadow-card">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-display text-[17px] italic text-ink-900">Company feed</h3>
        <button className="text-[11.5px] font-medium text-brass-500 hover:text-brass-600">View all</button>
      </div>

      <ul className="relative flex flex-col gap-5 pl-1">
        <div className="absolute bottom-2 left-[5px] top-2 w-px bg-line-200" />
        {FEED.map((item, i) => (
          <li key={i} className="relative flex gap-4 pl-6">
            <span className={`absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-base-0 ${dotTone[item.tone]}`} />
            <div>
              <p className="text-[13px] font-medium leading-snug text-ink-900">{item.title}</p>
              <p className="mt-0.5 text-[12.5px] leading-snug text-ink-600">{item.detail}</p>
              <p className="mt-1 font-mono text-[10.5px] text-ink-400">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
