# App‑Like V2 Starter

Starter HTML/CSS/JS para uma experiência web moderna e "app-like":
- Tokens de design (cores, tipografia, espaçamento, sombras, motion)
- Tema claro/escuro com persistência (localStorage) e `prefers-color-scheme`
- Navegação mobile (bottom nav) e desktop (header fixo)
- Componentes base: botões, inputs, badges, switch, cards, skeleton
- Dialog/bottom sheet acessível (elemento `<dialog>`) com transição
- Formulário com validação em tempo real e ARIA
- Responsividade mobile-first com breakpoints
- Acessibilidade: foco visível, landmarks, labels, aria-live

## Estrutura
```
app-like-v2/
  index.html
  styles.css
  app.js
  assets/
```

## Como executar
- Opção 1 (simples): abra `index.html` no navegador (clique duplo ou arraste).
- Opção 2 (servidor local):
  - Com Node.js instalado, rode:
    ```bash
    npx serve -s .
    ```
  - Ou usando Python 3:
    ```bash
    python3 -m http.server 5173
    ```
  - Acesse `http://localhost:5173` (ou a porta indicada).

## Customização rápida
- Ajuste tokens em `styles.css` (seção "Design Tokens").
- Ícones: use o sprite inline em `index.html` (symbols `#icon-*`).
- Componentes: estilos base em `styles.css` (botões, inputs, cards, tabs/switch, etc.).
- Tema: o botão "Tema" alterna entre claro/escuro e persiste a escolha.

## Acessibilidade
- Landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`)
- Foco visível (`:focus-visible`), teclado funciona em todos os controles
- Erros anunciados com `aria-live` no formulário

## Licença
Uso livre para projetos e estudos.