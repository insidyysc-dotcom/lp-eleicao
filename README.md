# Juliane Vieira 15777 — Landing Page

Site oficial de campanha da candidata a Deputada Estadual Juliane Vieira.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- CSS puro (sem framework), com variáveis de design em `src/index.css`
- Sem backend — o formulário de contato está pronto para ser conectado a uma API (ver `src/lib/leads.ts`)

## Estrutura

```
src/
  data/candidate.ts     # todo o conteúdo textual, centralizado (fonte: JULIANE VIEIRA - HISTÓRIA.docx)
  components/           # uma seção por componente (Header, Hero, About, Story, BurnCause, ...)
  styles/                # um CSS por componente
  hooks/useReveal.ts     # animação de entrada ao rolar a página
  lib/leads.ts           # ponto de integração do formulário de contato com um backend futuro
public/images/           # logo e foto oficiais da candidata (PNG + WebP)
```

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Conteúdo

Todo o texto do site (biografia, história pessoal, linha do tempo da Ala de Queimados de Cascavel e pautas)
vem exclusivamente do documento oficial fornecido pela campanha. Informações jurídicas/partidárias (CNPJ,
partido, número de registro) não foram fornecidas e não estão no rodapé — o componente `Footer` já está
preparado para recebê-las quando disponíveis.
