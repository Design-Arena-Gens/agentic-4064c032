import { ContentDay } from '@/lib/generator';

type ReelBlueprintProps = {
  day: ContentDay;
};

const ReelBlueprint = ({ day }: ReelBlueprintProps) => (
  <article className="glass flex flex-col gap-5 p-6">
    <header>
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
        Spotlight Reel
      </p>
      <h2 className="mt-1 text-lg font-semibold text-white">
        {day.reel.title}
      </h2>
      <p className="text-sm text-brand-light">{day.reel.sound}</p>
    </header>
    <div className="space-y-3">
      {day.reel.beats.map((beat, index) => (
        <div
          key={beat.id}
          className="rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Beat {index + 1} • {beat.label}
          </p>
          <p className="mt-2 text-sm text-white/75">{beat.prompt}</p>
          <div className="mt-3 grid grid-cols-1 gap-3 text-sm text-white/70 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Script
              </p>
              <p className="mt-1">{beat.script}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Shot Note
              </p>
              <p className="mt-1">{beat.shot}</p>
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-dashed border-brand/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light">
            CTA: {beat.cta}
          </div>
        </div>
      ))}
    </div>
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
        Editing Notes
      </p>
      <p className="mt-2">{day.reel.editingNotes}</p>
    </div>
  </article>
);

export default ReelBlueprint;
