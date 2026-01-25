<img width="1345" height="599" alt="Captura de tela 2026-01-25 183444" src="https://github.com/user-attachments/assets/f120b54c-3363-48d2-bd41-52230009ca3f" />

# ☕ Full Stack Coffee API

Aplicação **full stack** construída com **Next.js + Tailwind CSS** consumindo uma **API Strapi** em produção. O projeto exibe dados dinâmicos (cafés/tecnologias) vindos de um CMS headless, com foco em boas práticas de frontend, integração de API e deploy.

🔗 **Demo em produção:** [https://full-stack-api-je17.vercel.app/](https://full-stack-api-je17.vercel.app/)

---

## 🧠 Visão geral

Este projeto foi desenvolvido como parte de um estudo prático de **frontend moderno integrado a backend real**, passando por:

* consumo de API externa
* tipagem com TypeScript
* build e deploy em produção
* resolução de erros reais de configuração (Next, Tailwind, Vercel)

---

## 🛠️ Stack utilizada

### Frontend

* **Next.js 14** (App Router)
* **React 19**
* **TypeScript**
* **Tailwind CSS**

### Backend / CMS

* **Strapi (Headless CMS)**
* API REST com `populate=*`

### Deploy

* **Vercel** (frontend)
* **Heroku** (Strapi API)

---

## ✨ Funcionalidades

* Renderização de dados vindos do Strapi
* Ordenação dos itens por ID
* Tratamento de imagem opcional (fallback quando não existe)
* Layout responsivo
* Build estático otimizado

---

## 📁 Estrutura do projeto

```bash
web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── types/
│   └── strapi.ts
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ⚙️ Rodando o projeto localmente

### Pré-requisitos

* Node.js 18+
* NPM ou Yarn

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Build de produção

```bash
npm run build
npm start
```

---

## 🌐 Integração com a API

A aplicação consome dados da seguinte rota:

```txt
GET https://radiant-gorge-89176-9387036e772d.herokuapp.com/api/coffee-apis?populate=*
```

Os dados são tratados e tipados no frontend para garantir segurança e previsibilidade.

---

## 📌 Aprendizados principais

* Configuração correta de **Next.js + Tailwind em produção**
* Diferença entre ambiente dev e build
* Integração real com CMS headless
* Leitura e resolução de erros de build
* Deploy profissional com Vercel

---

## 🚀 Próximos passos

* Loading e Error states
* SEO dinâmico
* Paginação ou filtros
* Área admin ou dashboard
* Autenticação

---

## 👨‍💻 Autor

Desenvolvido por **Pedro Dias Mendes Vianna** 🚀

Se quiser trocar ideia ou ver mais projetos, este repositório faz parte do meu aprendizado contínuo em **Full Stack Development**.

