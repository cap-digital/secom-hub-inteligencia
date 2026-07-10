import type { CSSProperties } from "react";
import {
  GraduationCap,
  MapPinned,
  Workflow,
  Sunrise,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

type System = {
  title: string;
  href: string;
  Icon: LucideIcon;
  accent: "blue" | "red";
};

const systems: System[] = [
  {
    title: "Educação Digital",
    href: "https://secom-educacaodigital.capdigital.company/",
    Icon: GraduationCap,
    accent: "blue",
  },
  {
    title: "Regionais",
    href: "https://secom-regionais.capdigital.company/",
    Icon: MapPinned,
    accent: "blue",
  },
  {
    title: "Sistematiza-e",
    href: "https://secom-sistematizae.capdigital.company/",
    Icon: Workflow,
    accent: "blue",
  },
  {
    title: "Nova Bahia",
    href: "https://secom-novabahia.capdigital.company/",
    Icon: Sunrise,
    accent: "red",
  },
];

function SystemCard({ system, index }: { system: System; index: number }) {
  const { Icon } = system;
  const isRed = system.accent === "red";
  const style = { animationDelay: `${80 + index * 60}ms` } as CSSProperties;

  return (
    <li className="fade-up" style={style}>
      <a
        href={system.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ${system.title} em nova aba`}
        className="group relative flex h-full flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-navy-800/80 to-navy-850/70 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_8px_24px_-14px_rgba(0,0,0,0.6)] transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_16px_34px_-16px_rgba(0,0,0,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
      >
        <div className="flex items-start justify-between">
          <span
            className={
              isRed
                ? "flex h-11 w-11 items-center justify-center rounded-xl border border-red-600/25 bg-red-600/10 text-red-500 transition-colors duration-200 group-hover:bg-red-600/15"
                : "flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/10 text-blue-400 transition-colors duration-200 group-hover:bg-blue-500/15"
            }
          >
            <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <ArrowUpRight
            className="h-5 w-5 text-slate-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-300"
            aria-hidden="true"
          />
        </div>

        <p className="mt-6 text-xs font-medium text-slate-500">Dashboard</p>
        <h2 className="mt-1 text-lg font-semibold tracking-tight text-white">
          {system.title}
        </h2>

        <div
          className={
            (isRed ? "text-red-500" : "text-blue-400") +
            " mt-auto flex items-center gap-1.5 pt-8 text-sm font-medium transition-all duration-200 group-hover:gap-2.5"
          }
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
    <>
      {/* Fundo discreto */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-navy-950"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(900px 500px at 50% -8%, rgba(0,41,138,0.20), transparent 62%)",
          }}
        />
      </div>

      <a
        href="#sistemas"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Pular para os sistemas
      </a>

      <main className="mx-auto max-w-5xl px-5 pb-16 md:px-8">
        {/* Introdução */}
        <section className="fade-up pt-20 md:pt-28">
          <div className="h-1 w-12 rounded-full tricolor-rule" aria-hidden="true" />
          <p className="mt-6 text-sm text-slate-400">
            Secretaria de Comunicação · Governo do Estado da Bahia
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Hub de Inteligência
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            Acesse em um só ambiente os dashboards de inteligência e comunicação
            da Secom.
          </p>
        </section>

        {/* Dashboards */}
        <ul
          id="sistemas"
          className="mt-12 grid scroll-mt-24 grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14 md:gap-5"
        >
          {systems.map((system, i) => (
            <SystemCard key={system.title} system={system} index={i} />
          ))}
        </ul>
      </main>

      {/* Rodapé */}
      <footer className="mt-4 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-8 md:px-8">
          <p className="text-sm text-slate-400">
            Secretaria de Comunicação · Governo do Estado da Bahia
          </p>
          <p className="text-xs text-slate-500">
            Ambiente interno de acesso aos dashboards da Secom.
          </p>
        </div>
      </footer>
    </>
  );
}
