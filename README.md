# Secom · Hub de Inteligência

Portal de acesso (one page) aos **dashboards** de inteligência e comunicação da
**Secretaria de Comunicação do Estado da Bahia**. Segue o padrão visual dos
dashboards da Secom: tema claro, fundo cinza-claro, cards brancos com sombra
suave e chips de ícone em tons pastel.

## Dashboards

| Dashboard         | Destino                                             |
|-------------------|-----------------------------------------------------|
| Educação Digital  | https://secom-educacaodigital.capdigital.company/   |
| Regionais         | https://secom-regionais.capdigital.company/         |
| Sistematiza-e     | https://secom-sistematizae.capdigital.company/      |
| Nova Bahia        | https://secom-novabahia.capdigital.company/         |

Todos os links abrem em nova aba. Para editar títulos, ícones, cores ou links,
altere o array `systems` no topo de [`app/page.tsx`](app/page.tsx).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **lucide-react** (ícones)
- Tipografia **Inter** (self-hosted via `next/font`)

## Como rodar

```bash
npm install        # instala as dependências
npm run dev        # desenvolvimento em http://localhost:3000
npm run build      # build de produção
npm run start      # serve o build de produção
npm run lint       # ESLint
```

## Características

- **One page**, totalmente **responsivo** (2×2 no desktop, coluna única no mobile).
- Tema claro alinhado ao padrão dos dashboards da Secom.
- Branding: logo do Governo do Estado da Bahia + SECOM.
- Acessibilidade: `focus-visible`, skip-link, semântica e `prefers-reduced-motion`.
- Rodapé: "Desenvolvido pelo time de inteligência da CAP Digital" + logo CAP.CO.
