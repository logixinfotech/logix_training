import PageHeader from "./PageHeader";
import Constellation from "./Constellation";

/**
 * Every module page besides the Dashboard renders this component.
 * It signals scope clearly to teammates: layout + routing is done,
 * business logic is intentionally left for the assigned owner.
 */
export default function PlaceholderPage({ title, description, owner = "another team member" }) {
  return (
    <>
      <PageHeader title={title} description={description} />

      <div className="relative overflow-hidden rounded-xl2 border border-dashed border-line-300 bg-base-0">
        <div className="relative flex min-h-[420px] flex-col items-center justify-center gap-5 px-6 py-16 text-center">
          <div className="relative h-24 w-full max-w-[280px]">
            <Constellation className="h-full w-full opacity-80" tone="dark" />
          </div>
          <div className="max-w-sm">
            <p className="font-display text-[19px] italic text-ink-900">Ready for build-out</p>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-600">
              This module will be implemented by {owner}. The route, breadcrumb, and page
              frame are already wired up — drop the table, form, or workflow in here.
            </p>
          </div>
          <span className="rounded-full border border-line-300 bg-base-50 px-3 py-1 font-mono text-[10.5px] uppercase tracking-wide text-ink-400">
            Pending implementation
          </span>
        </div>
      </div>
    </>
  );
}
