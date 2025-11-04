import { Persona } from '@/lib/generator';

type PersonaSpotlightProps = {
  persona: Persona;
  onRefresh: () => void;
};

const PersonaSpotlight = ({ persona, onRefresh }: PersonaSpotlightProps) => (
  <section className="glass relative flex flex-1 flex-col justify-between overflow-hidden p-6">
    <div className="absolute right-[-30%] top-[-30%] h-72 w-72 rounded-full bg-gradient-to-br from-brand/40 to-brand-light/20 blur-3xl" />
    <header className="relative flex items-center gap-3">
      <span className="text-4xl">{persona.emoji}</span>
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          Virtual Persona
        </p>
        <h1 className="text-2xl font-semibold text-white">{persona.name}</h1>
      </div>
    </header>
    <div className="relative mt-5 space-y-4">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-white/40">
          Archetype
        </p>
        <p className="text-base text-white/80">{persona.archetype}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-white/40">
          Vibe Description
        </p>
        <p className="text-base text-white/80">{persona.vibe}</p>
      </div>
      <p className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
        “{persona.tagline}”
      </p>
      <div className="flex flex-wrap gap-2">
        {persona.brandPillars.map((pillar) => (
          <span
            key={pillar}
            className="chip bg-white/10 font-medium text-white/70"
          >
            {pillar}
          </span>
        ))}
      </div>
    </div>
    <div className="relative mt-6 rounded-2xl border border-dashed border-white/20 bg-white/[0.06] p-4">
      <p className="text-xs uppercase tracking-[0.35em] text-white/40">
        Voice Notes
      </p>
      <ul className="mt-3 space-y-2 text-sm text-white/70">
        {persona.voice.map((note) => (
          <li key={note} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="relative mt-6 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-white/70">
      <span>Need a different vibe?</span>
      <button
        onClick={onRefresh}
        className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition hover:bg-white/20"
      >
        Shuffle Persona
      </button>
    </div>
  </section>
);

export default PersonaSpotlight;
