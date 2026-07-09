export default function PageHeader({ title, description, actions }) {
  return (
    <div className="mb-7 flex flex-wrap items-end justify-between gap-4 animate-fadeUp">
      <div>
        <h1 className="font-display text-[28px] italic leading-none text-ink-900">{title}</h1>
        {description && <p className="mt-2 max-w-xl text-[13.5px] text-ink-600">{description}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
