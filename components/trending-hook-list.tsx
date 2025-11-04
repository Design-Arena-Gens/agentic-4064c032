type TrendingHookListProps = {
  hooks: string[];
};

const TrendingHookList = ({ hooks }: TrendingHookListProps) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
    <p className="text-xs uppercase tracking-[0.3em] text-white/40">
      Hook Starters
    </p>
    <ul className="mt-3 space-y-2 text-sm text-white/70">
      {hooks.map((hook) => (
        <li
          key={hook}
          className="rounded-xl border border-dashed border-white/10 px-3 py-2"
        >
          {hook}
        </li>
      ))}
    </ul>
  </div>
);

export default TrendingHookList;
