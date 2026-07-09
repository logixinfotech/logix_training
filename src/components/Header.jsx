import { useEffect, useRef, useState } from "react";
import { LuMenu, LuBell, LuMessageSquare, LuChevronDown, LuLogOut, LuUserCog, LuSettings } from "react-icons/lu";
import SearchBar from "./SearchBar";
import Breadcrumb from "./Breadcrumb";
import usePageMeta from "../data/usePageMeta";

const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

export default function Header({ onOpenMobileMenu }) {
  const { pageLabel } = usePageMeta();
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-line-200 bg-base-0/90 px-4 backdrop-blur-md lg:px-7">
      <button
        onClick={onOpenMobileMenu}
        className="rounded-md p-2 text-ink-600 hover:bg-base-50 lg:hidden"
        aria-label="Open menu"
      >
        <LuMenu size={20} />
      </button>

      <div className="hidden flex-col lg:flex">
        <span className="font-display text-[15px] italic leading-tight text-ink-900">{pageLabel}</span>
        <Breadcrumb />
      </div>

      <div className="flex flex-1 items-center justify-end gap-3 lg:justify-between lg:pl-6">
        <SearchBar />

        <div className="flex items-center gap-1.5">
          <span className="mr-2 hidden font-mono text-[11.5px] text-ink-400 xl:inline">{today}</span>

          <button className="relative rounded-full p-2.5 text-ink-600 transition-colors hover:bg-base-50">
            <LuMessageSquare size={18} />
          </button>

          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setNotifOpen((v) => !v)}
              className="relative rounded-full p-2.5 text-ink-600 transition-colors hover:bg-base-50"
            >
              <LuBell size={18} />
              <span className="absolute right-2 top-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping1 rounded-full bg-brass-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brass-500" />
              </span>
            </button>

            {notifOpen && (
              <div className="absolute right-0 top-12 w-80 animate-fadeUp rounded-xl border border-line-200 bg-base-0 p-2 shadow-raised">
                <p className="px-3 py-2 text-[11px] font-medium uppercase tracking-wide text-ink-400">Notifications</p>
                {[
                  { text: "A leave request was submitted for Jul 14–16", time: "9m ago" },
                  { text: "New candidate applied — Product Designer", time: "42m ago" },
                  { text: "Payroll run for June closes tomorrow", time: "3h ago" },
                ].map((n, i) => (
                  <div key={i} className="flex gap-3 rounded-lg px-3 py-2.5 hover:bg-base-50">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass-500" />
                    <div>
                      <p className="text-[12.5px] leading-snug text-ink-900">{n.text}</p>
                      <p className="mt-0.5 font-mono text-[10.5px] text-ink-400">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative ml-1" ref={profileRef}>
            <button
              onClick={() => setProfileOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition-colors hover:bg-base-50"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 font-display text-[13px] italic text-base-0">
                G
              </div>
              <div className="hidden text-left leading-tight sm:block">
                <p className="text-[12.5px] font-medium text-ink-900">Guest</p>
                <p className="text-[10.5px] text-ink-400">Guest Account</p>
              </div>
              <LuChevronDown size={14} className="hidden text-ink-400 sm:block" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-12 w-52 animate-fadeUp rounded-xl border border-line-200 bg-base-0 p-1.5 shadow-raised">
                {[
                  { icon: LuUserCog, label: "My Profile" },
                  { icon: LuSettings, label: "Account Settings" },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[13px] text-ink-700 hover:bg-base-50"
                  >
                    <Icon size={15} className="text-ink-400" />
                    {label}
                  </button>
                ))}
                <div className="my-1 border-t border-line-200" />
                <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[13px] text-coral-500 hover:bg-coral-100">
                  <LuLogOut size={15} />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
