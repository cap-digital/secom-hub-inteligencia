"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import {
  GraduationCap,
  MapPinned,
  Workflow,
  Sunrise,
  ArrowUpRight,
  ArrowRight,
  Search,
  type LucideIcon,
} from "lucide-react";

type Tone = "indigo" | "emerald" | "amber" | "rose";

const tones: Record<Tone, { chip: string; cta: string; chart: string }> = {
  indigo: {
    chip: "bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-100",
    cta: "text-indigo-600",
    chart: "text-indigo-500",
  },
  emerald: {
    chip: "bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-100",
    cta: "text-emerald-600",
    chart: "text-emerald-500",
  },
  amber: {
    chip: "bg-amber-50 text-amber-600 ring-1 ring-inset ring-amber-100",
    cta: "text-amber-600",
    chart: "text-amber-500",
  },
  rose: {
    chip: "bg-rose-50 text-rose-600 ring-1 ring-inset ring-rose-100",
    cta: "text-rose-600",
    chart: "text-rose-500",
  },
};

const series: Record<Tone, number[]> = {
  indigo: [0.3, 0.4, 0.36, 0.5, 0.56, 0.6, 0.7, 0.68, 0.82],
  emerald: [0.4, 0.44, 0.5, 0.47, 0.58, 0.7, 0.66, 0.78, 0.84],
  amber: [0.5, 0.46, 0.56, 0.6, 0.52, 0.62, 0.57, 0.64, 0.6],
  rose: [0.28, 0.36, 0.34, 0.46, 0.54, 0.58, 0.66, 0.74, 0.9],
};

type System = {
  title: string;
  desc: string;
  href: string;
  Icon: LucideIcon;
  tone: Tone;
};

const systems: System[] = [
  {
    title: "Educação Digital",
    desc: "Indicadores de alcance, engajamento e desempenho das ações de educação digital.",
    href: "https://secom-educacaodigital.capdigital.company/",
    Icon: GraduationCap,
    tone: "indigo",
  },
  {
    title: "Regionais",
    desc: "Cobertura e presença da comunicação do Governo nos territórios de identidade da Bahia.",
    href: "https://secom-regionais.capdigital.company/",
    Icon: MapPinned,
    tone: "emerald",
  },
  {
    title: "Sistematiza-e",
    desc: "Acompanhamento sistematizado das demandas, fluxos e entregas de comunicação.",
    href: "https://secom-sistematizae.capdigital.company/",
    Icon: Workflow,
    tone: "amber",
  },
  {
    title: "Nova Bahia",
    desc: "Resultados e repercussão do programa Nova Bahia nos canais e na imprensa.",
    href: "https://secom-novabahia.capdigital.company/",
    Icon: Sunrise,
    tone: "rose",
  },
];

// ---- mini-gráfico de área (linha suavizada + preenchimento em gradiente) ----
const CW = 320;
const CH = 80;

function points(vals: number[]) {
  const n = vals.length;
  return vals.map((v, i) => ({
    x: (i / (n - 1)) * CW,
    y: CH - 6 - v * (CH - 12),
  }));
}

function linePath(vals: number[]) {
  const p = points(vals);
  let d = `M ${p[0].x.toFixed(1)} ${p[0].y.toFixed(1)}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] ?? p[i + 1];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

function Sparkline({ tone }: { tone: Tone }) {
  const vals = series[tone];
  const line = linePath(vals);
  const area = `${line} L ${CW} ${CH} L 0 ${CH} Z`;
  const gradId = `spark-${tone}`;
  return (
    <svg
      viewBox={`0 0 ${CW} ${CH}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`h-full w-full ${tones[tone].chart}`}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gradId})`} />
      <path
        d={line}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function SystemCard({ system, index }: { system: System; index: number }) {
  const { Icon } = system;
  const tone = tones[system.tone];
  const style = { animationDelay: `${60 + index * 60}ms` } as CSSProperties;

  return (
    <li className="fade-up" style={style}>
      <a
        href={system.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ${system.title} em nova aba`}
        className="group flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_1px_3px_rgba(16,24,40,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_12px_28px_-10px_rgba(16,24,40,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f6f8]"
      >
        <div className="flex items-start justify-between">
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone.chip}`}
          >
            <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <ArrowUpRight
            className="h-5 w-5 text-gray-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-500"
            aria-hidden="true"
          />
        </div>

        <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-wider text-gray-400">
          Dashboard
        </p>
        <h2 className="mt-1 text-lg font-semibold tracking-tight text-gray-900">
          {system.title}
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
          {system.desc}
        </p>

        <div className="mt-4 h-16 w-full">
          <Sparkline tone={system.tone} />
        </div>

        <div className="mt-auto flex items-center justify-end border-t border-gray-100 pt-3.5">
          <span
            className={`${tone.cta} flex items-center gap-1 text-sm font-semibold transition-all duration-200 group-hover:gap-1.5`}
          >
            Acessar
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </a>
    </li>
  );
}

export default function Dashboards() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return systems;
    return systems.filter(
      (s) =>
        s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      {/* Busca */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-full max-w-sm">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar dashboard..."
            aria-label="Buscar dashboard"
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
        </div>
        <span className="shrink-0 text-sm text-gray-400">
          {filtered.length} {filtered.length === 1 ? "dashboard" : "dashboards"}
        </span>
      </div>

      {/* Grade */}
      {filtered.length > 0 ? (
        <ul
          id="dashboards"
          className="mt-6 grid scroll-mt-8 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5"
        >
          {filtered.map((system, i) => (
            <SystemCard key={system.title} system={system} index={i} />
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-center text-sm text-gray-400">
          Nenhum dashboard encontrado para “{query}”.
        </p>
      )}
    </>
  );
}
