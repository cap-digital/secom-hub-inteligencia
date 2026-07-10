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
  index: string;
  kicker: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
  Icon: LucideIcon;
  accent: "azure" | "red";
};

const systems: System[] = [
  {
    index: "01",
    kicker: "Capacitação",
    title: "Educação Digital",
    desc: "Trilhas e conteúdos para a capacitação digital das equipes de comunicação.",
    cta: "Acessar plataforma",
    href: "https://secom-educacaodigital.capdigital.company/",
    Icon: GraduationCap,
    accent: "azure",
  },
  {
    index: "02",
    kicker: "Territórios",
    title: "Regionais",
    desc: "Cobertura e articulação da comunicação nos territórios da Bahia.",
    cta: "Acessar painel",
    href: "https://secom-regionais.capdigital.company/",
    Icon: MapPinned,
    accent: "azure",
  },
  {
    index: "03",
    kicker: "Processos",
    title: "Sistematiza-e",
    desc: "Padronização e automação dos fluxos e processos internos da Secom.",
    cta: "Acessar sistema",
    href: "https://secom-sistematizae.capdigital.company/",
    Icon: Workflow,
    accent: "azure",
  },
  {
    index: "04",
    kicker: "Programa",
    title: "Nova Bahia",
    desc: "Acompanhamento das entregas e dos marcos do programa Nova Bahia.",
    cta: "Acessar programa",
    href: "https://secom-novabahia.capdigital.company/",
    Icon: Sunrise,
    accent: "red",
  },
];

function BahiaMark() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="32" height="32" rx="8" fill="#0B0F20" />
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="7.5"
        stroke="#FFFFFF"
        strokeOpacity="0.1"
      />
      <rect x="6" y="8" width="20" height="2.4" rx="1.2" fill="#4C87FF" />
      <rect
        x="6"
        y="14.8"
        width="20"
        height="2.4"
        rx="1.2"
        fill="#7FA9FF"
        fillOpacity="0.65"
      />
      <rect x="6" y="21.6" width="20" height="2.4" rx="1.2" fill="#4C87FF" />
      <path d="M5 5 L15 5 L5 22 Z" fill="#E30613" />
    </svg>
  );
}

function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-navy-950"
    >
      {/* Depth: royal glow overhead + azure haze lower-left */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(1200px 600px at 50% -10%, rgba(0,41,138,0.35), transparent 60%), radial-gradient(800px 500px at 8% 100%, rgba(46,107,255,0.12), transparent 60%)",
        }}
      />
      {/* Flag hoist-triangle: an ambient red light-beam at the left edge */}
      <div
        className="absolute left-0 top-0 h-full w-[42%] blur-[2px] md:w-[38%]"
        style={{
          clipPath: "polygon(0 0, 0 100%, 100% 0)",
          backgroundImage:
            "linear-gradient(to bottom right, rgba(227,6,19,0.14), rgba(227,6,19,0.04), transparent)",
        }}
      />
      {/* Faint tech grid, dissolving toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(circle at 50% 28%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 28%, black, transparent 75%)",
        }}
      />
      {/* Slow-drifting glow orbs */}
      <div className="orb-a absolute left-[6%] top-[18%] h-96 w-96 rounded-full bg-azure-500/20 blur-3xl" />
      <div className="orb-b absolute bottom-[8%] right-[4%] h-96 w-96 rounded-full bg-royal-800/25 blur-3xl" />
      {/* Bottom vignette to seat the content */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(5,7,15,0) 0%, rgba(5,7,15,0) 55%, #05070f 100%)",
        }}
      />
    </div>
  );
}

function SystemCard({
  system,
  position,
}: {
  system: System;
  position: number;
}) {
  const { Icon } = system;
  const isRed = system.accent === "red";

  const cardStyle = {
    animationDelay: `${90 * position}ms`,
    "--glow": isRed ? "rgba(227,6,19,0.30)" : "rgba(46,135,255,0.35)",
    "--wash": isRed ? "rgba(227,6,19,0.20)" : "rgba(46,107,245,0.20)",
    "--brd": isRed ? "rgba(255,42,60,0.42)" : "rgba(76,135,255,0.42)",
  } as CSSProperties;

  return (
    <li className="card-in" style={cardStyle}>
      <a
        href={system.href}
        aria-label={`Abrir ${system.title}`}
        className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 ease-out before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:content-[''] after:pointer-events-none after:absolute after:-right-16 after:-top-16 after:z-0 after:h-40 after:w-40 after:rounded-full after:bg-[var(--wash)] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-300 after:content-[''] hover:-translate-y-1 hover:border-[var(--brd)] hover:shadow-[0_20px_60px_-15px_var(--glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 group-hover:after:opacity-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-7"
      >
        {/* Ghosted oversized index numeral */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-2 z-0 font-display text-6xl font-bold text-white/[0.05]"
        >
          {system.index}
        </span>

        {/* Nova Bahia — the single card carrying the flag's hoist geometry */}
        {isRed && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-0 h-12 w-12 bg-red-600/70 transition-all duration-300 group-hover:h-14 group-hover:w-14"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
          />
        )}

        <div className="relative z-10 flex h-full flex-col">
          {/* Top row: index + icon tile */}
          <div className="flex items-start justify-between">
            <span className="font-mono text-xs tracking-widest text-slate-500">
              {system.index} / 04
            </span>
            <span
              className={
                isRed
                  ? "flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/25 bg-red-600/[0.12] text-red-300 transition-colors duration-300 group-hover:bg-red-600/20 group-hover:text-red-200"
                  : "flex h-11 w-11 items-center justify-center rounded-xl border border-azure-400/20 bg-azure-500/10 text-azure-300 transition-colors duration-300 group-hover:bg-azure-500/20 group-hover:text-azure-200"
              }
            >
              <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
            </span>
          </div>

          {/* Middle: kicker + title + description */}
          <div className="mt-8">
            <p
              className={
                isRed
                  ? "font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-red-300/80"
                  : "font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-azure-300/80"
              }
            >
              {system.kicker}
            </p>
            <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
              {system.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {system.desc}
            </p>
          </div>

          {/* CTA row, pinned to the bottom */}
          <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
            <span>{system.cta}</span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </div>
        </div>
      </a>
    </li>
  );
}

export default function Home() {
  return (
    <>
      <AmbientBackground />

      <a
        href="#sistemas"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-azure-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Pular para os sistemas
      </a>

      {/* Sticky top bar */}
      <header className="sticky top-0 z-40 h-14 border-b border-white/5 bg-navy-950/60 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-3">
            <BahiaMark />
            <span className="font-display text-base font-bold tracking-tight text-white">
              SECOM
            </span>
            <span className="hidden h-5 w-px bg-white/20 sm:block" />
            <span className="hidden font-sans text-sm text-slate-400 sm:inline">
              Hub de Inteligência
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azure-400/60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-azure-400" />
            </span>
            <span className="hidden sm:inline">Sistemas operacionais</span>
            <span className="sm:hidden">Online</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-8 md:px-8">
        {/* Hero */}
        <section className="pt-20 text-center md:pt-28 md:text-left">
          <div className="max-w-3xl">
            <p
              className="fade-up font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.18em] text-azure-300 sm:text-xs sm:tracking-[0.28em]"
              style={{ animationDelay: "0ms" }}
            >
              <span
                aria-hidden="true"
                className="mr-2 hidden h-px w-6 bg-gradient-to-r from-azure-400 to-transparent align-middle sm:inline-block"
              />
              Governo da Bahia · Secretaria de Comunicação
            </p>

            <h1
              className="fade-up mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              Hub de
              <br />
              <span className="text-gradient-azure">Inteligência</span>
            </h1>

            <p
              className="fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:mx-0 md:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              Acesse em um só ambiente os sistemas de inteligência e comunicação
              da Secretaria de Comunicação do Estado da Bahia.
            </p>

            <p
              className="fade-up mt-6 font-mono text-xs tracking-widest text-slate-500"
              style={{ animationDelay: "240ms" }}
            >
              4 SISTEMAS · ACESSO INTERNO · AMBIENTE SEGURO
            </p>
          </div>
        </section>

        {/* Tricolor signal bar — the hero -> directory seam */}
        <div
          aria-hidden="true"
          className="signal-draw tricolor-rule mb-12 mt-10 h-[3px] w-full rounded-full opacity-70"
        />

        {/* Systems matrix (2x2 on md+) */}
        <ul
          id="sistemas"
          className="grid scroll-mt-20 grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6"
        >
          {systems.map((system, i) => (
            <SystemCard key={system.title} system={system} position={i + 1} />
          ))}
        </ul>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-24">
        <div
          aria-hidden="true"
          className="tricolor-rule h-[2px] w-full opacity-60"
        />
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-sm text-slate-300">
              Secretaria de Comunicação · Governo do Estado da Bahia
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Ambiente interno de acesso aos sistemas da Secom.
            </p>
          </div>
          <p className="font-mono text-xs tracking-widest text-slate-500">
            HUB DE INTELIGÊNCIA · v1.0
          </p>
        </div>
      </footer>
    </>
  );
}
