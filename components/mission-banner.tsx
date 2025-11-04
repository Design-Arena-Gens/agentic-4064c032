import { ContentDay, ContentPlan } from '@/lib/generator';

type MissionBannerProps = {
  plan: ContentPlan;
  heroDay: ContentDay;
};

const MissionBanner = ({ plan, heroDay }: MissionBannerProps) => (
  <section className="glass flex flex-1 flex-col justify-between gap-6 p-6">
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
        Weekly Arc
      </p>
      <h2 className="mt-1 text-xl font-semibold text-white/90">
        {plan.weeklyTheme}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-white/75">
        {plan.narrativeArc}
      </p>
    </div>
    <div className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          First Drop
        </p>
        <p className="mt-1 text-lg font-semibold text-white">
          {heroDay.weekday} • {heroDay.dateLabel}
        </p>
        <p className="text-sm text-white/60">{heroDay.postTime}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          Collab Cue
        </p>
        <p className="mt-1 text-sm text-white/80">{heroDay.collabIdea}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-2">
      {plan.trendingHooks.map((hook) => (
        <span key={hook} className="chip bg-brand/20 text-brand-light">
          {hook}
        </span>
      ))}
    </div>
  </section>
);

export default MissionBanner;
