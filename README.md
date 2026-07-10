# Secom · Hub de Inteligência

Portal de acesso (one page) aos sistemas de inteligência e comunicação da
**Secretaria de Comunicação do Estado da Bahia**. Design "centro de comando":
deck escuro de vidro, brilho azul royal e o vermelho da bandeira da Bahia
reservado como acento — as três cores da bandeira decodificadas em luz e
geometria (o triângulo do mastro vira um feixe de luz à esquerda e a régua
tricolor costura a página).

## Sistemas

| # | Sistema           | Destino                                             |
|---|-------------------|-----------------------------------------------------|
| 01| Educação Digital  | https://secom-educacaodigital.capdigital.company/   |
| 02| Regionais         | https://secom-regionais.capdigital.company/         |
| 03| Sistematiza-e     | https://secom-sistematizae.capdigital.company/      |
| 04| Nova Bahia        | https://secom-novabahia.capdigital.company/         |

Para editar títulos, descrições, ícones ou links, altere o array `systems` no
topo de [`app/page.tsx`](app/page.tsx).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tokens da paleta em `@theme`, dentro de [`app/globals.css`](app/globals.css))
- **lucide-react** (ícones)
- Fontes self-hosted via `next/font`: Space Grotesk (display), Inter (texto), IBM Plex Mono (dados)

## Como rodar

```bash
npm install        # instala as dependências
npm run dev        # desenvolvimento em http://localhost:3000
npm run build      # build de produção
npm run start      # serve o build de produção
npm run lint       # ESLint
```

## Características

- **One page**, totalmente **responsivo** (mobile-first; matriz 2×2 no desktop, coluna única no mobile).
- Tema escuro dedicado, cores da **bandeira da Bahia** (azul royal, branco, vermelho).
- Acessibilidade: contraste AA, `focus-visible` em todos os cartões, skip-link,
  semântica com `header`/`main`/`footer` e respeito a `prefers-reduced-motion`.
- Animações sutis em CSS puro (entrada com stagger, órbitas de brilho, régua tricolor).
