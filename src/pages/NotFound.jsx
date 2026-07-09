import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import Constellation from "../components/Constellation";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-6 h-28 w-72">
        <Constellation className="h-full w-full opacity-90" tone="dark" />
      </div>
      <p className="font-mono text-[12px] uppercase tracking-wide text-ink-400">Error 404</p>
      <h1 className="mt-2 font-display text-[28px] italic text-ink-900">This page isn't linked up.</h1>
      <p className="mt-2 max-w-sm text-[13.5px] text-ink-600">
        The route you followed doesn't match anything in the system yet.
      </p>
      <Link
        to="/dashboard/overview"
        className="mt-6 flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2.5 text-[13px] font-medium text-base-0 transition-transform duration-200 ease-premium hover:-translate-y-0.5"
      >
        <LuArrowLeft size={15} /> Back to dashboard
      </Link>
    </div>
  );
}
