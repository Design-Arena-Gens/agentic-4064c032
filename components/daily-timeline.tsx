import { ContentDay } from '@/lib/generator';

type DailyTimelineProps = {
  days: ContentDay[];
};

const DailyTimeline = ({ days }: DailyTimelineProps) => (
  <ol className="relative space-y-6 before:absolute before:left-3.5 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-white/10">
    {days.map((day, index) => (
      <li key={day.id} className="relative flex gap-6 pl-12">
        <span className="absolute left-0 top-2 flex h-7 w-7 items-center justify-center rounded-full border border-brand/30 bg-brand/20 text-xs font-semibold text-brand-light">
          {index + 1}
        </span>
        <article className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-card">
          <header className="flex flex-col gap-1 text-white/80 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                {day.weekday}
              </p>
              <h3 className="text-lg font-semibold text-white">
                {day.dateLabel}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-brand-light">
              <div className="h-2 w-2 rounded-full bg-brand" />
              {day.postTime}
            </div>
          </header>
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Hook
                </p>
                <p className="mt-1 text-base font-medium text-white/90">
                  {day.hook}
                </p>
              </div>
              <div className="rounded-xl border border-dashed border-brand/40 p-3 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-light">
                  Visual Prompt
                </p>
                <p className="mt-1">{day.visualPrompt}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Carousel Flow
                </p>
                <ul className="mt-2 space-y-2 text-sm text-white/70">
                  {day.carouselBeats.map((beat) => (
                    <li key={beat} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                      <span>{beat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/70">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Reel Sound
                </p>
                <p className="mt-1 text-white/80">{day.reel.sound}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/40">
                  Collab Slot
                </p>
                <p className="text-white/70">{day.collabIdea}</p>
              </div>
            </div>
          </div>
        </article>
      </li>
    ))}
  </ol>
);

export default DailyTimeline;
