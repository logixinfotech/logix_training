import { LuSearch } from "react-icons/lu";

export default function SearchBar() {
  return (
    <div className="group relative hidden w-full max-w-[340px] items-center md:flex">
      <LuSearch size={15} className="pointer-events-none absolute left-3.5 text-ink-400" />
      <input
        type="text"
        placeholder="Search employees, requests, payslips…"
        className="w-full rounded-full border border-line-200 bg-base-50 py-2.5 pl-10 pr-14 text-[13px] text-ink-900 placeholder:text-ink-400 transition-all duration-200 ease-premium focus:border-brass-400 focus:bg-base-0 focus:outline-none focus:ring-4 focus:ring-brass-400/10"
      />
      <kbd className="pointer-events-none absolute right-3 rounded border border-line-300 bg-base-0 px-1.5 py-0.5 font-mono text-[10px] text-ink-400">
        ⌘K
      </kbd>
    </div>
  );
}
