import type { CSSProperties } from "react";
import Image from "next/image";
import {
  GraduationCap,
  MapPinned,
  Workflow,
  Sunrise,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type Tone = "indigo" | "emerald" | "amber" | "rose";

const tones: Record<
  Tone,
  { chip: string; cta: string; bar: string; soft: string }
> = {
  indigo: {
    chip: "bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-100",
    cta: "text-indigo-600",
    bar: "bg-indigo-400",
    soft: "bg-indigo-100",
  },
  emerald: {
    chip: "bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-100",
    cta: "text-emerald-600",
    bar: "bg-emerald-400",
    soft: "bg-emerald-100",
  },
  amber: {
    chip: "bg-amber-50 text-amber-600 ring-1 ring-inset ring-amber-100",
    cta: "text-amber-600",
    bar: "bg-amber-400",
    soft: "bg-amber-100",
  },
  rose: {
    chip: "bg-rose-50 text-rose-600 ring-1 ring-inset ring-rose-100",
    cta: "text-rose-600",
    bar: "bg-rose-400",
    soft: "bg-rose-100",
  },
};

type System = {
  title: string;
  href: string;
  Icon: LucideIcon;
  tone: Tone;
};

const systems: System[] = [
  {
    title: "Educação Digital",
    href: "https://secom-educacaodigital.capdigital.company/",
    Icon: GraduationCap,
    tone: "indigo",
  },
  {
    title: "Regionais",
    href: "https://secom-regionais.capdigital.company/",
    Icon: MapPinned,
    tone: "emerald",
  },
  {
    title: "Sistematiza-e",
    href: "https://secom-sistematizae.capdigital.company/",
    Icon: Workflow,
    tone: "amber",
  },
  {
    title: "Nova Bahia",
    href: "https://secom-novabahia.capdigital.company/",
    Icon: Sunrise,
    tone: "rose",
  },
];

// Alturas (%) das barras do mini-gráfico — variadas por card.
const previewBars = [
  [45, 70, 55, 85, 62, 95],
  [60, 42, 78, 52, 90, 68],
  [38, 58, 46, 68, 82, 60],
  [52, 74, 60, 88, 70, 100],
];

function MiniPreview({
  tone,
  bars,
}: {
  tone: (typeof tones)[Tone];
  bars: number[];
}) {
  return (
    <div
      aria-hidden="true"
      className="rounded-xl border border-gray-100 bg-gray-50 p-2.5"
    >
      {/* Mini KPIs */}
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((k) => (
          <div
            key={k}
            className="rounded-md bg-white px-2 py-1.5 ring-1 ring-gray-100"
          >
            <div className="h-1 w-5 rounded-full bg-gray-200" />
            <div className={`mt-1 h-1.5 w-7 rounded-full ${tone.soft}`} />
          </div>
        ))}
      </div>
      {/* Mini gráfico */}
      <div className="mt-1.5 flex h-14 items-end gap-1 rounded-md bg-white px-2 pb-1.5 pt-1 ring-1 ring-gray-100">
        {bars.map((h, k) => (
          <div
            key={k}
            className={`flex-1 rounded-sm ${tone.bar}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function SystemCard({ system, index }: { system: System; index: number }) {
  const { Icon } = system;
  const tone = tones[system.tone];
  const bars = previewBars[index % previewBars.length];
  const style = { animationDelay: `${80 + index * 60}ms` } as CSSProperties;

  return (
    <li className="fade-up" style={style}>
      <a
        href={system.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ${system.title} em nova aba`}
        className="group flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_1px_3px_rgba(16,24,40,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_12px_28px_-10px_rgba(16,24,40,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f6f8]"
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

        <p className="mt-5 text-xs font-medium text-gray-400">Dashboard</p>
        <h2 className="mt-1 text-lg font-semibold tracking-tight text-gray-900">
          {system.title}
        </h2>

        <div className="mt-4">
          <MiniPreview tone={tone} bars={bars} />
        </div>

        <div
          className={`${tone.cta} mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5`}
        >
          <span>Acessar dashboard</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </a>
    </li>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <a
        href="#dashboards"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Pular para os dashboards
      </a>

      <main className="mx-auto w-full max-w-5xl flex-1 px-5 pb-16 md:px-8">
        {/* Marca */}
        <div className="fade-up flex items-center gap-3 pt-10 md:pt-14">
          <Image
            src="/logo-bahia.png"
            alt="Governo da Bahia · Do lado da gente"
            width={569}
            height={328}
            priority
            className="h-14 w-auto shrink-0"
          />
          <div className="border-l border-gray-200 pl-3">
            <p className="text-sm font-semibold tracking-tight text-gray-900">
              SECOM
            </p>
            <p className="text-xs text-gray-500">
              Secretaria de Comunicação Social
            </p>
          </div>
        </div>

        {/* Cabeçalho */}
        <section className="fade-up pt-12 md:pt-16">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Hub de Inteligência
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
            Acesse em um só ambiente os dashboards de inteligência e comunicação
            da Secom.
          </p>
        </section>

        {/* Dashboards */}
        <ul
          id="dashboards"
          className="mt-10 grid scroll-mt-8 grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5"
        >
          {systems.map((system, i) => (
            <SystemCard key={system.title} system={system} index={i} />
          ))}
        </ul>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-5 py-8 text-center md:px-8">
          <p className="text-sm text-gray-500">
            Desenvolvido pelo time de inteligência da CAP Digital
          </p>
          <Image
            src="/capco.png"
            alt="CAP.CO"
            width={2001}
            height={761}
            className="h-5 w-auto"
          />
        </div>
      </footer>
    </div>
  );
}
