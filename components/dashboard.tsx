'use client';

import { useMemo, useState } from 'react';
import {
  ContentPlan,
  ContentDay,
  generateContentPlan,
  MetricPulse
} from '@/lib/generator';
import PersonaSpotlight from './persona-spotlight';
import MissionBanner from './mission-banner';
import DailyTimeline from './daily-timeline';
import ReelBlueprint from './reel-blueprint';
import MetricPulseBoard from './metric-pulse-board';
import TrendingHookList from './trending-hook-list';

const Dashboard = () => {
  const [planVersion, setPlanVersion] = useState(0);
  const plan: ContentPlan = useMemo(
    () => generateContentPlan(new Date(Date.now() + planVersion * 1000)),
    [planVersion]
  );

  const heroDay: ContentDay = plan.dailyContent[0];
  const metrics: MetricPulse[] = plan.metrics;

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-6 py-12 lg:px-12">
      <header className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
        <PersonaSpotlight persona={plan.persona} onRefresh={() => setPlanVersion((v) => v + 1)} />
        <MissionBanner plan={plan} heroDay={heroDay} />
      </header>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article className="glass col-span-2 space-y-6 p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.12em] text-white/70">
            Daily Storyboard
            <span className="badge bg-brand/20 text-brand-light">
              {plan.weeklyTheme}
            </span>
          </h2>
          <DailyTimeline days={plan.dailyContent} />
        </article>

        <aside className="glass flex flex-col gap-5 p-6">
          <h2 className="text-lg font-semibold uppercase tracking-[0.12em] text-white/70">
            Strategy Pulse
          </h2>
          <MetricPulseBoard metrics={metrics} />
          <TrendingHookList hooks={plan.trendingHooks} />
        </aside>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ReelBlueprint day={heroDay} />
        <article className="glass flex flex-col gap-5 p-6">
          <h2 className="text-lg font-semibold uppercase tracking-[0.12em] text-white/70">
            Post Blueprint
          </h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/60">Hook of the Day</p>
            <p className="mt-1 text-lg font-semibold text-white">
              {heroDay.hook}
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              Caption
            </p>
            <p className="mt-2 text-base leading-relaxed text-white/80">
              {heroDay.caption}
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              Hashtag Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {heroDay.hashtags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-dashed border-brand/40 p-4">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-light">
              Visual Prompt
            </p>
            <p className="mt-2 text-white/80">{heroDay.visualPrompt}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40">
              Slot
            </p>
            <p className="text-sm text-white/70">{heroDay.postTime}</p>
          </div>
        </article>
      </section>

      <footer className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-brand/40 bg-brand/10 px-6 py-5 text-center lg:flex-row lg:text-left">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            North Star
          </p>
          <p className="mt-1 text-base text-white/80">{plan.northStar}</p>
        </div>
        <button
          onClick={() => setPlanVersion((v) => v + 1)}
          className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-brand-dark"
        >
          Refresh Blueprint
        </button>
      </footer>
    </main>
  );
};

export default Dashboard;
