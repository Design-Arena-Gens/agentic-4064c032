import { MetricPulse } from '@/lib/generator';

type MetricPulseBoardProps = {
  metrics: MetricPulse[];
};

const sentimentColor: Record<MetricPulse['sentiment'], string> = {
  up: 'text-emerald-400',
  down: 'text-rose-400',
  steady: 'text-slate-300'
};

const MetricPulseBoard = ({ metrics }: MetricPulseBoardProps) => (
  <ul className="space-y-3">
    {metrics.map((metric) => (
      <li
        key={metric.metric}
        className="rounded-2xl border border-white/10 bg-white/5 p-4"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">
          {metric.metric}
        </p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-white/90">
            {metric.value}
          </span>
          <span className={`text-xs uppercase ${sentimentColor[metric.sentiment]}`}>
            {metric.delta}
          </span>
        </div>
      </li>
    ))}
  </ul>
);

export default MetricPulseBoard;
