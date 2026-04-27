# Site A&B Indústria

Landing page institucional desenvolvida com Next.js para apresentar a operação de envase da A&B Indústria, com foco em estrutura industrial, formatos disponíveis, benefícios, jornada operacional e contato comercial.

## Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `OpenNext + Cloudflare`
- `Lucide React`

## Estrutura

O projeto está organizado em componentes de seção dentro de `src/components`:

- `header.tsx`
- `heroSection.tsx`
- `institutionalSection.tsx`
- `formatSection.tsx`
- `benefitsSection.tsx`
- `targetSection.tsx`
- `processSection.tsx`
- `ctaSection.tsx`
- `footer.tsx`

A composição principal da página fica em `src/app/page.tsx`.

## Como rodar localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra `http://localhost:3000`.

## Scripts

- `npm run dev`: inicia o ambiente local com Next.js
- `npm run build`: gera o build de produção
- `npm run start`: sobe a aplicação já buildada
- `npm run preview`: faz preview local no runtime da Cloudflare
- `npm run deploy`: publica com OpenNext na Cloudflare
- `npm run upload`: gera e envia o bundle
- `npm run cf-typegen`: atualiza os tipos do ambiente Cloudflare

## Deploy

O projeto está preparado para deploy com OpenNext na Cloudflare.

Build de produção:

```bash
npm run build
```

Preview local no ambiente Cloudflare:

```bash
npm run preview
```

Deploy:

```bash
npm run deploy
```

## Estilo e UI

- As variáveis globais de cor e utilidades base ficam em `src/app/globals.css`
- As fontes principais usadas no projeto são `Plus Jakarta Sans` e `Manrope`
- O botão principal reutilizável usa a classe `.button-1`
- A navegação do header possui indicador animado por seção ativa e hover

## Assets

Os arquivos visuais do projeto ficam em `public/Images` e `public/Logo.svg`.

## Observações

- O projeto usa `initOpenNextCloudflareForDev()` em `next.config.ts` para permitir bindings da Cloudflare durante o desenvolvimento
- A navegação entre seções usa âncoras com `scroll-behavior: smooth`
