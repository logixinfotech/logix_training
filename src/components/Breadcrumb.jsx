import usePageMeta from "../data/usePageMeta";

export default function Breadcrumb() {
  const { moduleLabel, pageLabel } = usePageMeta();

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[11.5px] text-ink-400">
      <span className="text-ink-400/70">HR</span>
      <span className="text-line-300">/</span>
      <span className="text-ink-600">{moduleLabel}</span>
      <span className="text-line-300">/</span>
      <span className="font-medium text-brass-500">{pageLabel}</span>
    </nav>
  );
}
