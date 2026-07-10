import Image from "next/image";
import Dashboards from "./dashboards";

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
        <div className="flex items-center gap-3 pt-10 md:pt-14">
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
        <section className="pt-12 md:pt-16">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Hub de Inteligência
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-500 md:text-lg">
            Acesse em um só ambiente os dashboards de inteligência e comunicação
            da Secom.
          </p>
        </section>

        {/* Busca + dashboards */}
        <div className="mt-10">
          <Dashboards />
        </div>
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
